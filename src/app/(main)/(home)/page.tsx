import ContactSection from "@/app/(main)/(home)/sections/contact";
import EventsSection from "@/app/(main)/(home)/sections/events";
import FeedbackSection from "@/app/(main)/(home)/sections/feedback";
import InnovationSection from "@/app/(main)/(home)/sections/innovation";
import IntroSection from "@/app/(main)/(home)/sections/intro";
import JoinSection from "@/app/(main)/(home)/sections/join";

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