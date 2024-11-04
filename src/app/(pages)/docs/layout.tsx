import { CodeXmlIcon, ComponentIcon, LayoutDashboardIcon, PresentationIcon } from "lucide-react";
import Link from "next/link";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={"grid overflow-auto max-lg:grid-rows-[auto_1fr] lg:grid-cols-[20%,1fr]"}>
      <div className={"bg-base-300 shadow-lg"}>
        <ul className={"menu max-lg:menu-horizontal"}>
          <li>
            <Link href={"/docs"}>
              <LayoutDashboardIcon />
              <span>Hello</span>
            </Link>
          </li>
          <li>
            <Link href={"/docs/templates"}>
              <CodeXmlIcon />
              <span>Templates</span>
            </Link>
          </li>
          <li>
            <Link href={"/docs/projects"}>
              <PresentationIcon />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href={"/docs/other"}>
              <ComponentIcon />
              <span>Other</span>
            </Link>
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
}