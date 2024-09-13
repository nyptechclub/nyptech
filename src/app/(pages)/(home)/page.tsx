import ContactSection from "@/app/(pages)/(home)/sections/contact";
import EventsSection from "@/app/(pages)/(home)/sections/events";
import FeedbackSection from "@/app/(pages)/(home)/sections/feedback";
import InnovationSection from "@/app/(pages)/(home)/sections/innovation";
import IntroSection from "@/app/(pages)/(home)/sections/intro";
import JoinSection from "@/app/(pages)/(home)/sections/join";

export default function Page() {
  return (
    <main>
      <div className={"h-full container mx-auto"}>
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