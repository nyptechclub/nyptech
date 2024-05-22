import { CodeXml, Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"h-full grid grid-cols-2"}>
      <aside className={"max-w-[40%] bg-base-200"}>
        <ul className={"menu"}>
          <li>
            <Link href={"#"}>
              <Home />
              Introduction
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <CodeXml />
              Installation
            </Link>
          </li>
        </ul>
      </aside>
      <article>
        <div>
        <h1>Hello, world!</h1>
        </div>
      </article>
    </main>
  );
}