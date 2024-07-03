import GoMicroserviceSection from "@/app/docs/apis/sections/go";
import MainServiceSection from "@/app/docs/apis/sections/main";

export default function Page() {
  return (
    <main className={"p-4 space-y-4"}>
      <MainServiceSection />
      <GoMicroserviceSection />
    </main>
  );
}