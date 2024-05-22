import { getPosts } from "@/app/blog/utils";
import { formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <main className={"h-full"}>
      <div className={"mx-auto mt-6 w-[70%] flex gap-2"}>
        <Link className={"btn btn-accent"} href={"#"}>
          All
        </Link>
        <Link className={"btn btn-primary"} href={"#"}>
          Club
        </Link>
        <Link className={"btn btn-primary"} href={"#"}>
          Tech
        </Link>
        <Link className={"btn btn-primary"} href={"#"}>
          Events
        </Link>
      </div>
      <div className={"mx-auto mt-4 w-[70%] flex flex-col gap-4 items-center"}>
        {posts.map((post, index) => (
          <article
            key={index}
            className={"p-4 w-full bg-base-200 rounded-lg shadow-lg cursor-pointer transition hover:bg-base-300"}
          >
            <Link href={`/blog/${post.id}`}>
              <h1 className={"text-xl font-bold"}>{post.metadata.title}</h1>
              <p className={"my-2"}>{post.metadata.summary}</p>
              <p className={"flex gap-1 items-center"}>
                <Calendar />
                <span className={"text-sm"}>{formatDate(post.metadata.date)}</span>
              </p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}