import fs from "node:fs";
import path from "node:path";

type Metadata = {
  title: string;
  date: string;
  summary: string;
  category: string;
  image?: string;
};

type Post = {
  id: string;
  metadata: Metadata;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "src", "app", "blog", "posts");

export function getPost(slug: string) {
  const posts = getPosts();
  return posts.find((post) => post.id === slug);
}

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith(".mdx"));
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
    const { metadata, content } = parseMetadata(fileContent);
    return {
      id,
      metadata,
      content,
    } as Post;
  });
  return posts.sort((a, b) => b.metadata.date.localeCompare(a.metadata.date));
}

function parseMetadata(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  // biome-ignore lint/complexity/noForEach: <explanation>
  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}