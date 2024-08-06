import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className={"h-full hero"}>
        <div className={"hero-content"}>
          <div className={"max-w-lg text-center"}>
            <img
              className={"mb-8 mx-auto size-[100px] lg:size-[150px]"}
              src={"https://nyptech-learn.vercel.app/wizard.png"}
              alt={"Logo"}
            />
            <h1 className={"mb-4 text-4xl font-bold"}>Live. Laugh. Learn.</h1>
            <p className={"text-gray-600 dark:text-gray-400"}>
              Learn something new every day. It&apos;s good for your brain.
            </p>
            <Link
              className={"mt-6 btn btn-primary"}
              href={"https://nyptech-learn.vercel.app"}
            >
              Start learning now!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}