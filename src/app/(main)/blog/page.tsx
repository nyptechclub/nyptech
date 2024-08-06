import { getPosts } from "@/app/(main)/blog/utils";
import { formatDate } from "@/utils";
import { CalendarDaysIcon, CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const filters = [
  {
    name: "All",
    category: undefined,
  },
  {
    name: "Club",
    category: "club",
  },
  {
    name: "Events",
    category: "events",
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
            <article
              key={post.id}
              className={"p-4 w-full bg-base-200 rounded-lg shadow-lg cursor-pointer transition hover:bg-base-300"}
            >
              <Link href={`/blog/${post.id}`}>
                <h1 className={"text-xl font-bold"}>{post.metadata.title}</h1>
                <p className={"mt-1 mb-3 text-gray-600 dark:text-gray-400"}>{post.metadata.summary}</p>
                <div className={"flex gap-4"}>
                  <span className={"flex gap-1 items-center"}>
                    <CircleUserRoundIcon />
                    <span className={"text-sm"}>{post.metadata.author}</span>
                  </span>
                  <span className={"flex gap-1 items-center"}>
                    <CalendarDaysIcon />
                    <span className={"text-sm"}>{formatDate(post.metadata.date)}</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}