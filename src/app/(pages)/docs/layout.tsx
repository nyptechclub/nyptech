import { CodeXmlIcon, ComponentIcon, HomeIcon, PresentationIcon } from "lucide-react";
import Link from "next/link";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={"grid lg:grid-cols-[20%,1fr] max-lg:grid-rows-[auto_1fr] overflow-auto"}>
      <div className={"shadow-lg bg-base-300"}>
        <ul className={"menu max-lg:menu-horizontal"}>
          <li>
            <Link href={"/docs"}>
              <HomeIcon />
              <span>Introduction</span>
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