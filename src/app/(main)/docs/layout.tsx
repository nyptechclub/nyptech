import { CodeXmlIcon, ComponentIcon, HomeIcon, PresentationIcon, WaypointsIcon } from "lucide-react";
import Link from "next/link";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={"grid lg:grid-cols-[20%_1fr] max-lg:grid-rows-[auto_1fr] overflow-auto"}>
      <div className={"shadow-lg bg-base-300"}>
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
            <Link href={"/docs/components"}>
              <ComponentIcon />
              <span>Components</span>
            </Link>
          </li>
          <li>
            <Link href={"/docs/apis"}>
              <WaypointsIcon />
              <span>APIs</span>
            </Link>
          </li>
          <li>
            <Link href={"/docs/projects"}>
              <PresentationIcon />
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
}