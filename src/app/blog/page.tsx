import PostCard from "@/app/blog/components/post-card";
import { getPosts } from "@/lib/blog";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const filters = [
  {
    name: "All",
    category: undefined,
  },
  {
    name: "Events",
    category: "events",
  },
  {
    name: "Club",
    category: "club",
  },
  {
    name: "Tech",
    category: "tech",
  },
];

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const category = searchParams?.category as string | undefined;
  const filter = filters.find((filter) => filter.category === category) ?? filters[0];
  const posts = getPosts().filter((post) => !filter.category || post.metadata.category === filter.category);
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[70%] max-lg:w-[90%] space-y-2"}>
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <Link
              key={filter.category}
              className={twJoin("btn btn-sm", filter.category === category && "btn-primary")}
              href={filter.category ? { query: { category: filter.category } } : "/blog"}
            >
              {filter.name}
            </Link>
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {posts.map((post) => (
            <PostCard key={post.metadata.slug} post={post.metadata} />
          ))}
        </div>
      </div>
    </main>
  );
}