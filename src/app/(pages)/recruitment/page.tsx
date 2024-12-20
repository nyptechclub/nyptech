import DepartmentsSection from "@/app/(pages)/recruitment/_sections/departments";
import IntroSection from "@/app/(pages)/recruitment/_sections/intro";
import RetroGrid from "@/components/ui/retro-grid";

export default function Page() {
  return (
    <main>
      <RetroGrid />
      <IntroSection />
      <DepartmentsSection />
    </main>
  );
}