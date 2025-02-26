import ContactSection from "@/app/(pages)/(home)/_sections/contact";
import FeedbackSection from "@/app/(pages)/(home)/_sections/feedback";
import InnovationSection from "@/app/(pages)/(home)/_sections/innovation";
import IntroSection from "@/app/(pages)/(home)/_sections/intro";
import StartupsSection from "@/app/(pages)/(home)/_sections/startups";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Page() {
  return (
    <>
      <FlickeringGrid className={"absolute z-0 size-full"} />
      <main>
        <IntroSection />
        <StartupsSection className={"mt-40"} />
        <InnovationSection className={"mt-40 min-h-full"} />
        <ContactSection />
        <FeedbackSection />
      </main>
    </>
  );
}