import fs from "node:fs";
import path from "node:path";

type Metadata = {
  title: string;
  date: string;
  summary: string;
  author: string;
  category: string;
  image?: string;
};

type Post = {
  id: string;
  metadata: Metadata;
  content: string;
};

const postsDir = path.join(process.cwd(), "src", "content", "blog");

export function getPost(slug: string) {
  const posts = getPosts();
  return posts.find((post) => post.id === slug);
}

export function getPosts() {
  const fileNames = fs.readdirSync(postsDir).filter((fileName) => fileName.endsWith(".mdx"));
  const posts = fileNames
    .map((fileName) => {
      const name = fileName.replace(/\.mdx$/, "");
      const nameParts = name.split("_");
      const postDate = nameParts[0];
      const postSlug = nameParts[1];
      const fileContent = fs.readFileSync(path.join(postsDir, fileName), "utf8");
      const { metadata: postMetadata, content: postContent } = parseMetadata(fileContent);
      postMetadata.date = postDate;
      return {
        id: postSlug,
        metadata: postMetadata,
        content: postContent,
      } as Post;
    })
    .sort((a, b) => b.metadata.date.localeCompare(a.metadata.date));
  return posts;
}

function parseMetadata(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const frontmatterMatch = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = frontmatterMatch![1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const metadata: Partial<Metadata> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...values] = line.split(": ");
    let value = values.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });
  return { metadata: metadata as Metadata, content };
}