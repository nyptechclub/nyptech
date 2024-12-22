import CalloutSection from "@/app/(pages)/recruitment/_sections/callout";
import DepartmentsSection from "@/app/(pages)/recruitment/_sections/departments";
import IntroSection from "@/app/(pages)/recruitment/_sections/intro";
import OpportunitiesSection from "@/app/(pages)/recruitment/_sections/opportunities";
import PeopleSection from "@/app/(pages)/recruitment/_sections/people";
import WhoSection from "@/app/(pages)/recruitment/_sections/who";
import RetroGrid from "@/components/ui/retro-grid";

export default function Page() {
  return (
    <>
      <RetroGrid />
      <main>
        <IntroSection />
        <WhoSection />
        <DepartmentsSection />
        <PeopleSection />
        <OpportunitiesSection />
        <CalloutSection />
      </main>
    </>
  );
}