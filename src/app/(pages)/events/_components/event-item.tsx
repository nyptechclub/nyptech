import { unbounded } from "@/fonts";
import { Event } from "@/lib/api/events";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

export default function EventItem(props: { data: Event }) {
  return (
    <Link className={"group relative min-h-full snap-center overflow-hidden"} href={props.data.url}>
      <img
        className={"absolute size-full object-cover opacity-25 transition group-hover:scale-105"}
        src={props.data.publicityUrl}
        alt={"Background"}
      />
      <div className={"absolute grid size-full place-items-center"}>
        <div className={"text-center"}>
          <div className={cn("text-4xl font-bold text-white sm:text-6xl", unbounded.className)}>{props.data.title}</div>
          {props.data.date && <div className={"mt-4"}>{formatDate(props.data.date)}</div>}
        </div>
      </div>
    </Link>
  );
}