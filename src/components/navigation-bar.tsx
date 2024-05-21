import {
  BookText,
  CalendarDays,
  GraduationCap,
  Home,
  KeySquare,
  Rss,
} from "lucide-react";
import Link from "next/link";

export default function NavigationBar(props: {
  className?: string;
}) {
  return (
    <nav className={`navbar bg-base-300 ${props.className}`}>
      <div className={"navbar-start"}>
        <Link className={"btn btn-ghost"} href={"/"}>
          <Home />
        </Link>
      </div>
      <div className={"navbar-center"}>
        <Link className={"btn btn-ghost"} href={"/events"}>
          <CalendarDays />
          Events
        </Link>
        <Link className={"btn btn-ghost"} href={"/blog"}>
          <Rss />
          Blog
        </Link>
        <Link className={"btn btn-ghost"} href={"https://nyptech-learn.vercel.app"}>
          <GraduationCap />
          Learn
        </Link>
        <Link className={"btn btn-ghost"} href={"/docs"}>
          <BookText />
          Documentation
        </Link>
      </div>
      <div className={"navbar-end"}>
        <Link className={"btn btn-ghost"} href={"/login"}>
          <KeySquare />
        </Link>
      </div>
    </nav>
  );
}