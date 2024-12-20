import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content"}>
        <div className={"flex flex-col items-center justify-center gap-8 text-center"}>
          <div className={"text-6xl font-bold"}>Are you ready to change the future?</div>
          <Link className={"group btn btn-primary"} href={"/recruitment/form"}>
            Register Now
            <ArrowRightIcon className={`size-4 transition group-hover:translate-x-1`} />
          </Link>
        </div>
      </div>
    </section>
  );
}