import ContactSection from "@/app/(pages)/(home)/_sections/contact";
import FeedbackSection from "@/app/(pages)/(home)/_sections/feedback";
import InnovationSection from "@/app/(pages)/(home)/_sections/innovation";
import IntroSection from "@/app/(pages)/(home)/_sections/intro";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Page() {
  return (
    <>
      <FlickeringGrid className={"absolute z-0 size-full"} />
      <main>
        <IntroSection />
        <InnovationSection className={"mt-80 min-h-full"} />
        {/* <JoinSection /> */}
        {/* <EventsSection /> */}
        <ContactSection />
        <FeedbackSection />
      </main>
    </>
  );
}