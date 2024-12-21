import { unbounded } from "@/fonts";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <div className={cn("mb-12 text-6xl font-bold", unbounded.className)}>Are you ready to change the future?</div>
          <Link className={"group btn btn-primary"} href={"/recruitment/form"}>
            Make A Difference Now
            <ArrowRightIcon className={`size-4 transition group-hover:translate-x-1`} />
          </Link>
        </div>
      </div>
    </section>
  );
}