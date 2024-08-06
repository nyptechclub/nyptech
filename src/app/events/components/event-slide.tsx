import Link from "next/link";

export default function EventSlide(props: {
  className?: string;
  backgroundSrc: string;
  title: string;
  date?: string;
  href: string;
}) {
  return (
    <Link className={"group relative min-h-full snap-center overflow-hidden"} href={props.href}>
      <img
        className={
          "absolute size-full object-cover opacity-25 transition group-hover:scale-105"
        }
        src={props.backgroundSrc}
        alt={"Background"}
      />
      <div className={"absolute size-full grid place-items-center"}>
        <div className={"text-center"}>
          <h1 className={"text-4xl sm:text-6xl font-bold"}>{props.title}</h1>
          {props.date && <p>{props.date}</p>}
        </div>
      </div>
    </Link>
  );
}