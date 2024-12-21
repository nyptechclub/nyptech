import BoxReveal from "@/components/ui/box-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import { ArrowRightIcon, CoinsIcon, RocketIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content max-md:flex-col-reverse max-md:gap-12"}>
        <div className={"min-w-[300px] max-md:text-center"}>
          <BoxReveal>
            <div className={"text-6xl max-md:text-4xl font-bold"}>
              Launch Your Startup <span className="text-[#5046e6]">Dream</span>
            </div>
          </BoxReveal>
          <BoxReveal>
            <div className={"mt-4 text-lg max-md:text-md"}>
              Our incubator program empowers entrepreneurs to turn innovative ideas into successful businesses through
              mentorship, resources, and a vibrant startup ecosystem.
            </div>
          </BoxReveal>
          <div className={"mt-8 flex max-md:justify-center gap-4"}>
            <BoxReveal>
              <Link className={"group btn btn-primary"} href={"/recruitment"}>
                Join Us Now
                <ArrowRightIcon className={`size-4 transition group-hover:translate-x-1`} />
              </Link>
            </BoxReveal>
            <BoxReveal>
              <Link className={"btn btn-outline"} href={"/about"}>
                Learn More
              </Link>
            </BoxReveal>
          </div>
          <div className={"mt-8 flex items-center max-md:flex-col gap-4 text-sm"}>
            <div className={"flex items-center gap-1"}>
              <RocketIcon className={"size-4"} />
              <NumberTicker className={"text-secondary"} value={5} />
              <span>+ Startups Launched</span>
            </div>
            <div className={"flex items-center gap-1"}>
              <UsersIcon className={"size-4"} />
              <NumberTicker className={"text-secondary"} value={20} />
              <span>+ Mentors</span>
            </div>
            <div className={"flex items-center gap-1"}>
              <CoinsIcon className={"size-4"} />
              <NumberTicker className={"text-secondary"} value={30} />
              <span>k+ Funding</span>
            </div>
          </div>
        </div>
        <div className={"mask mask-hexagon size-full max-md:mt-8"}>
          <img src={"/assets/blog/nyplink-committee.jpg"} alt={"Incubator Illustration"} />
        </div>
      </div>
    </section>
  );
}