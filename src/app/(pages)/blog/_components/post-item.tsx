import { PostMetadata } from "@/lib/blog";
import { formatDateString } from "@/lib/utils";
import { CalendarDaysIcon, CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";

export default function PostItem(props: { post: PostMetadata }) {
  return (
    <article className={"w-full cursor-pointer rounded-lg bg-base-200 p-4 shadow-lg transition hover:bg-base-300"}>
      <Link href={`/blog/${props.post.slug}`}>
        <div className={"text-xl font-bold"}>{props.post.title}</div>
        <div className={"mb-3 mt-1"}>{props.post.summary}</div>
        <div className={"flex gap-4"}>
          <span className={"flex items-center gap-1"}>
            <CircleUserRoundIcon />
            <span className={"text-sm"}>{props.post.author}</span>
          </span>
          <span className={"flex items-center gap-1"}>
            <CalendarDaysIcon />
            <span className={"text-sm"}>{formatDateString(props.post.date)}</span>
          </span>
        </div>
      </Link>
    </article>
  );
}