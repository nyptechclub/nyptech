import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection(props: { className?: string }) {
  return (
    <section className={`px-6 grid place-items-center ${props.className}`}>
      <div className={"text-center"}>
        <h1 className={"text-5xl font-bold max-lg:text-3xl"}>Get to know us better!</h1>
        <p className={"mt-4 text-xl text-gray-500 max-lg:text-md"}>View our latest updates!</p>
        <p className={"mt-6 flex gap-2 justify-center"}>
          <Link className={"btn btn-primary"} href={"#"}>
            <Linkedin />
          </Link>
          <Link className={"btn btn-primary"} href={"#"}>
            <Instagram />
          </Link>
          <Link className={"btn btn-primary"} href={"#"}>
            <Github />
          </Link>
        </p>
      </div>
    </section>
  );
}