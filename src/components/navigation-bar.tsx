"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { BookTextIcon, CalendarDaysIcon, GraduationCapIcon, HomeIcon, KeyRoundIcon, MenuIcon, Rss } from "lucide-react";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const links = [
  {
    name: "Events",
    url: "/events",
    icon: CalendarDaysIcon,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: Rss,
  },
  {
    name: "Learn",
    url: "/learn",
    icon: GraduationCapIcon,
  },
  {
    name: "About",
    url: "/about",
    icon: BookTextIcon,
  },
];

export default function NavigationBar(props: { className?: string }) {
  return (
    <nav className={twJoin("navbar shadow-xl bg-base-300", props.className)}>
      <div className={"navbar-start"}>
        <div className={"dropdown md:hidden"}>
          <button className={"btn btn-ghost"} type={"button"}>
            <MenuIcon />
          </button>
          <ul className={"dropdown-content menu z-50 bg-base-200 rounded-lg shadow-lg"}>
            <li>
              <Link className={"menu-item"} href={"/"}>
                <HomeIcon />
                <span>Home</span>
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.url}>
                <Link className={"menu-item"} href={link.url}>
                  <link.icon />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className={"btn btn-ghost max-md:hidden"} href={"/"}>
          <HomeIcon />
        </Link>
      </div>
      <div className={"navbar-center"}>
        <div className={"md:hidden"}>
          <span className={"font-bold"}>TES Club</span>
        </div>
        <div className={"max-md:hidden"}>
          {links.map((link) => (
            <Link key={link.url} className={"btn btn-ghost"} href={link.url}>
              <link.icon />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={"navbar-end"}>
        <SignedIn>
          <div className={"mr-2 flex items-center"}>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <Link className={"btn btn-ghost"} href={"/auth"}>
            <KeyRoundIcon />
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}