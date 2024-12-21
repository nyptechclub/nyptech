import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CalloutSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <div className={"mb-4 text-6xl font-bold"}>So what are you waiting for?</div>
          <div className={"mb-8 text-lg"}>
            Join us and be part of a community that will shape the next generation of technopreneurs.
          </div>
          <Link className={"group btn btn-primary"} href={"/recruitment/form"}>
            Join Us Now
            <ArrowRightIcon className={`size-4 transition group-hover:translate-x-1`} />
          </Link>
        </div>
      </div>
    </section>
  );
}