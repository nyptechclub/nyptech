import { Event } from "@/lib/api/events";
import Link from "next/link";

export default function EventCard(props: { data: Event }) {
  return (
    <Link className={"w-96 h-fit card transition bg-base-300 hover:bg-base-200"} href={props.data.url}>
      <figure className={"flex-1"}>
        <img src={props.data.publicityUrl} alt={"Publicity"} />
      </figure>
      <div className={"card-body"}>
        <h2 className={"card-title"}>{props.data.title}</h2>
        <div className={"badge badge-primary"}>{props.data.organizer}</div>
        <p>{props.data.description}</p>
        <div className={"badge badge-outline"}>{props.data.date.toISOString().split("T")[0]}</div>
      </div>
    </Link>
  );
}