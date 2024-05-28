import Link from "next/link";

export default function EventPanel(props: {
  className?: string;
  backgroundSrc: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      className={`relative group border border-base-300 cursor-pointer overflow-hidden ${props.className}`}
      href={props.href}
    >
      <img
        className={"absolute size-full object-cover transition group-hover:blur-sm group-hover:brightness-75"}
        src={props.backgroundSrc}
        alt={"Background"}
      />
      <div className={"absolute z-10 hidden size-full group-hover:grid transition place-items-center text-white"}>
        <h1 className={"text-4xl font-bold"}>{props.title}</h1>
      </div>
    </Link>
  );
}