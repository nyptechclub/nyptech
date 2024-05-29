import Link from "next/link";
import { twJoin } from "tailwind-merge";

export default function EventPanel(props: {
  className?: string;
  backgroundSrc: string;
  title: string;
  date?: string;
  href: string;
}) {
  return (
    <Link className={twJoin("relative group cursor-pointer overflow-hidden", props.className)} href={props.href}>
      <img
        className={"absolute size-full object-cover transition group-hover:blur-sm group-hover:brightness-75"}
        src={props.backgroundSrc}
        alt={"Background"}
      />
      <div className={"absolute z-10 hidden size-full group-hover:grid transition place-items-center text-white"}>
        <div className={"text-center"}>
          <h1 className={"text-lg lg:text-4xl font-bold"}>{props.title}</h1>
          {props.date && <p className={"text-sm"}>{props.date}</p>}
        </div>
      </div>
    </Link>
  );
}