import CalloutSection from "@/app/(pages)/recruitment/_sections/callout";
import DepartmentsSection from "@/app/(pages)/recruitment/_sections/departments";
import IntroSection from "@/app/(pages)/recruitment/_sections/intro";
import OpportunitiesSection from "@/app/(pages)/recruitment/_sections/opportunities";
import PeopleSection from "@/app/(pages)/recruitment/_sections/people";
import RetroGrid from "@/components/ui/retro-grid";

export default function Page() {
  return (
    <main>
      <RetroGrid />
      <IntroSection />
      <DepartmentsSection />
      <PeopleSection />
      <OpportunitiesSection />
      <CalloutSection />
    </main>
  );
}