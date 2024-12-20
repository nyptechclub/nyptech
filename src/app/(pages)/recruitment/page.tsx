import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className={"hero h-full"}>
        <div className={"hero-content"}>
          <div className={"flex flex-col items-center justify-center gap-4"}>
            <div className={"text-6xl font-bold"}>Are you ready to change the future?</div>
            <Link className={"btn btn-primary"} href={"/recruitment/form"}>
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}