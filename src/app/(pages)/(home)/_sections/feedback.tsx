import Link from "next/link";

export default function FeedbackSection() {
  return (
    <section className={"hero min-h-full lg:min-h-[80%]"}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <div className={"mb-4 text-6xl font-bold"}>Do you have anything for us?</div>
          <div className={"mb-8 text-lg"}>Don&apos;t just be an bystander and get involved!</div>
          <Link className={"btn btn-primary"} href={"/contact"}>
            Send us a message!
          </Link>
        </div>
      </div>
    </section>
  );
}