import CommitteeSection from "@/app/(pages)/about/_sections/committee";
import IntroSection from "@/app/(pages)/about/_sections/intro";
import PromotionSection from "@/app/(pages)/about/_sections/promotion";
import SubcommitteeSection from "@/app/(pages)/about/_sections/subcommittee";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import committee2024 from "@/content/data/2024/committee.json";
import subcommittee2024 from "@/content/data/2024/subcommittee.json";
import committee2025 from "@/content/data/2025/committee.json";
import subcommittee2025 from "@/content/data/2025/subcommittee.json";
import { RouteProps } from "@/types";

export default async function Page(props: RouteProps) {
  const { year } = (await props.searchParams) as { year: string | null };

  let committee;
  let subcommittee;

  if (year === "2024") {
    committee = committee2024;
    subcommittee = subcommittee2024;
  } else {
    committee = committee2025;
    subcommittee = subcommittee2025;
  }

  return (
    <>
      <AnimatedGridPattern className={"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 bg-gray-900"} />
      <main>
        <IntroSection />
        <PromotionSection />
        <CommitteeSection data={committee} year={year || "2025"} />
        <SubcommitteeSection data={subcommittee} year={year || "2025"} />
      </main>
    </>
  );
}