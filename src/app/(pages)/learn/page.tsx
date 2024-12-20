import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className={"hero h-full"}>
        <div className={"hero-content"}>
          <div className={"max-w-lg text-center"}>
            <img
              className={"mx-auto mb-8 size-[100px] lg:size-[150px]"}
              src={"https://learn.nyptech.club/wizard.png"}
              alt={"Logo"}
            />
            <div className={"mb-4 text-4xl font-bold"}>Live. Laugh. Learn.</div>
            <div>
              Learn something new every day. It&apos;s good for your brain.
            </div>
            <Link className={"btn btn-primary mt-6"} href={"https://learn.nyptech.club"}>
              Start learning now!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}