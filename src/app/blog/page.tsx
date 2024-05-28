import { getPosts } from "@/app/blog/utils";
import LucideIconWrapper from "@/components/lucide-icon-wrapper";
import { formatDate } from "@/utils";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <main className={"min-h-full my-6 space-y-4"}>
      <div className={"mx-auto w-[70%] max-lg:w-[90%] space-y-4"}>
        {posts.map((post, index) => (
          <article
            key={index}
            className={"p-4 w-full bg-base-200 rounded-lg shadow-lg cursor-pointer transition hover:bg-base-300"}
          >
            <Link href={`/blog/${post.id}`}>
              <h1 className={"text-xl font-bold"}>{post.metadata.title}</h1>
              <p className={"mt-1 mb-3"}>{post.metadata.summary}</p>
              <div className={"flex gap-4"}>
                <span className={"flex gap-1 items-center"}>
                  <LucideIconWrapper icon={"CircleUserRound"} size={20} />
                  <span className={"text-sm"}>{post.metadata.author}</span>
                </span>
                <span className={"flex gap-1 items-center"}>
                  <LucideIconWrapper icon={"CalendarDays"} size={20} />
                  <span className={"text-sm"}>{formatDate(post.metadata.date)}</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}