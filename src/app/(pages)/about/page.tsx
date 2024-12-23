import CommitteeSection from "@/app/(pages)/about/_sections/committee";
import IntroSection from "@/app/(pages)/about/_sections/intro";
import PromotionSection from "@/app/(pages)/about/_sections/promotion";
import SubcommitteeSection from "@/app/(pages)/about/_sections/subcommittee";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export default function Page() {
  return (
    <>
      <AnimatedGridPattern className={"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 bg-gray-900"} />
      <main>
        <IntroSection />
        <PromotionSection />
        <CommitteeSection />
        <SubcommitteeSection />
      </main>
    </>
  );
}