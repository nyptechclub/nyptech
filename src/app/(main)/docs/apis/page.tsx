import GoMicroserviceSection from "@/app/(main)/docs/apis/sections/go";
import MainServiceSection from "@/app/(main)/docs/apis/sections/main";

export default function Page() {
  return (
    <main className={"p-4 space-y-8"}>
      <MainServiceSection />
      <GoMicroserviceSection />
    </main>
  );
}