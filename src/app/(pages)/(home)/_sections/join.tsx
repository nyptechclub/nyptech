import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function JoinSection(props: { className?: string }) {
  return (
    <section className={cn("hero overflow-x-auto", props.className)}>
      <div className={"hero-content flex flex-col"}>
        <VelocityScroll
          text="We need founders"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
        <div className={"text-center"}>
          <div className={"mb-4 text-4xl font-bold"}>What are you waiting for?</div>
          <div>Join us now and be part of our community!</div>
          <Link className={"btn btn-primary mt-6"} href={"https://go.nyptech.club/interest"}>
            Join us now!
          </Link>
        </div>
      </div>
    </section>
  );
}