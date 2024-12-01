"use client";

import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  BookOpenIcon,
  BookTextIcon,
  CalendarDaysIcon,
  GraduationCapIcon,
  HomeIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  MenuIcon,
  RssIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  {
    name: "Events",
    url: "/events",
    icon: CalendarDaysIcon,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: RssIcon,
  },
  {
    name: "Learn",
    url: "/learn",
    icon: GraduationCapIcon,
  },
  {
    name: "Docs",
    url: "/docs",
    icon: BookOpenIcon,
  },
  {
    name: "About",
    url: "/about",
    icon: BookTextIcon,
  },
];

export default function NavigationBar(props: { className?: string }) {
  const router = useRouter();
  return (
    <nav className={cn("navbar bg-base-300 shadow-xl", props.className)}>
      <div className={"navbar-start"}>
        <div className={"dropdown md:hidden"}>
          <button className={"btn btn-ghost"} type={"button"}>
            <MenuIcon />
          </button>
          <ul className={"menu dropdown-content z-50 rounded-lg bg-base-200 shadow-lg"}>
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
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label={"Manage services"}
                  labelIcon={<LayoutDashboardIcon size={16} />}
                  onClick={() => router.push("https://nyptech-admin.vercel.app")}
                />
              </UserButton.MenuItems>
            </UserButton>
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