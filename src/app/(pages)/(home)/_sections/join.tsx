import clsx from "clsx";
import Link from "next/link";

export default function JoinSection(props: { className?: string }) {
  return (
    <section className={clsx("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>What are you waiting for?</h1>
          <p className={"text-gray-600 dark:text-gray-400"}>Join us now and be part of our community!</p>
          <Link className={"mt-6 btn btn-primary"} href={"https://nyptech-go.vercel.app/interest"}>
            Join us now!
          </Link>
        </div>
      </div>
    </section>
  );
}