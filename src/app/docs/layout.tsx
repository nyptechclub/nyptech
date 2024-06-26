import { HomeIcon, CodeXmlIcon, WaypointsIcon, ComponentIcon } from "lucide-react";
import Link from "next/link";

export default function Layout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <main className={"h-full grid lg:grid-cols-[20%_1fr] max-lg:grid-rows-[auto_1fr]"}>
      <aside className={"shadow-lg bg-base-300"}>
        <ul className={"menu max-lg:menu-horizontal"}>
          <li>
            <Link href={"/docs"}>
              <HomeIcon />
              <span>Introduction</span>
            </Link>
          </li>
          <li>
            <Link href={"/docs/installation"}>
              <CodeXmlIcon />
              <span>Installation</span>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <ComponentIcon />
              <span>Components</span>
            </Link>
            {/* <ul>
              <li>
                <Link href={"/docs/components/timeline"}>Timeline</Link>
              </li>
              <li>
                <Link href={"/docs/components/socials"}>Socials</Link>
              </li>
              <li>
                <Link href={"/docs/components/project-card"}>Project Card</Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link href={"/docs/apis"}>
              <WaypointsIcon />
              <span>APIs</span>
            </Link>
          </li>
        </ul>
      </aside>
      <article>{props.children}</article>
    </main>
  );
}