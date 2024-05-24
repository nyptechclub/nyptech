import Link from "next/link";

export default function EventPanel(props: {
  className?: string;
  backgroundSrc: string;
  eventHref: string;
}) {
  return (
    <Link
      className={`relative group border border-base-300 cursor-pointer overflow-hidden ${props.className}`}
      href={props.eventHref}
    >
      <img
        className={"absolute size-full object-cover transition group-hover:blur-sm"}
        src={props.backgroundSrc}
        alt={"Background"}
      />
      <div className={"absolute z-10 size-full"}>{/* TODO */}</div>
    </Link>
  );
}