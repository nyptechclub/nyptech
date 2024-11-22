import ContactSection from "@/app/(pages)/(home)/_sections/contact";
import EventsSection from "@/app/(pages)/(home)/_sections/events";
import FeedbackSection from "@/app/(pages)/(home)/_sections/feedback";
import InnovationSection from "@/app/(pages)/(home)/_sections/innovation";
import IntroSection from "@/app/(pages)/(home)/_sections/intro";
import JoinSection from "@/app/(pages)/(home)/_sections/join";

export default function Page() {
  return (
    <main>
      <IntroSection className={"min-h-full"} />
      <InnovationSection className={"mt-80 min-h-full"} />
      <JoinSection className={"min-h-full"} />
      <EventsSection className={"min-h-full"} />
      <ContactSection className={"min-h-full lg:min-h-[50%]"} />
      <FeedbackSection className={"min-h-full lg:min-h-[50%]"} />
    </main>
  );
}