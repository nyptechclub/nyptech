import clsx from "clsx";
import Link from "next/link";

export default function FeedbackSection(props: { className?: string }) {
  return (
    <section className={clsx("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>Do you have anything for us?</h1>
          <p className={"text-gray-600 dark:text-gray-400"}>Don&apos;t just be an bystander and get involved!</p>
          <Link className={"mt-6 btn btn-primary"} href={"https://nyptech-go.vercel.app/feedback"}>
            Send feedback now!
          </Link>
        </div>
      </div>
    </section>
  );
}