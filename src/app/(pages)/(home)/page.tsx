import ContactSection from "@/app/(pages)/(home)/_sections/contact";
import FeedbackSection from "@/app/(pages)/(home)/_sections/feedback";
import InnovationSection from "@/app/(pages)/(home)/_sections/innovation";
import IntroSection from "@/app/(pages)/(home)/_sections/intro";

export default function Page() {
  return (
    <main>
      <IntroSection />
      <InnovationSection className={"mt-80 min-h-full"} />
      {/* <JoinSection /> */}
      {/* <EventsSection /> */}
      <ContactSection />
      <FeedbackSection />
    </main>
  );
}