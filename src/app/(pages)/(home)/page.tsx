import ContactSection from "@/app/(pages)/(home)/_sections/contact";
import EventsSection from "@/app/(pages)/(home)/_sections/events";
import FeedbackSection from "@/app/(pages)/(home)/_sections/feedback";
import InnovationSection from "@/app/(pages)/(home)/_sections/innovation";
import IntroSection from "@/app/(pages)/(home)/_sections/intro";
import JoinSection from "@/app/(pages)/(home)/_sections/join";

export default function Page() {
  return (
    <main>
      <div className={"container mx-auto h-full"}>
        <IntroSection className={"h-full"} />
        <InnovationSection className={"h-full lg:h-[70%]"} />
        <JoinSection className={"h-full lg:h-[50%]"} />
        <EventsSection className={"h-full"} />
        <ContactSection className={"h-full lg:h-[50%]"} />
        <FeedbackSection className={"h-full lg:h-[50%]"} />
      </div>
    </main>
  );
}