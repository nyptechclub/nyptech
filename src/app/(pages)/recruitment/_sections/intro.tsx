import { unbounded } from "@/fonts";
import { cn } from "@/lib/utils";
import { ArrowBigDownIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className={"hero relative min-h-full"}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <div className={cn("mb-12 text-6xl font-bold max-md:text-4xl", unbounded.className)}>
            Are you ready to change the future?
          </div>
          <Link className={"group btn btn-primary"} href={"/recruitment/form"}>
            Make A Difference Now
            <ArrowRightIcon className={`size-4 transition group-hover:translate-x-1`} />
          </Link>
        </div>
      </div>
      <div className={"absolute bottom-8 left-1/2 -translate-x-1/2 transform text-center"}>
        <div className={"mb-3 font-medium"}>Scroll down to find out more!</div>
        <div className={"flex justify-center"}>
          <ArrowBigDownIcon className={"size-6 animate-bounce"} />
        </div>
      </div>
    </section>
  );
}