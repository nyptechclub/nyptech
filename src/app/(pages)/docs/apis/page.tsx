import GoMicroserviceSection from "@/app/(pages)/docs/apis/_sections/go";
import MainServiceSection from "@/app/(pages)/docs/apis/_sections/main";

export default function Page() {
  return (
    <main className={"p-4 space-y-8"}>
      <MainServiceSection />
      <GoMicroserviceSection />
    </main>
  );
}