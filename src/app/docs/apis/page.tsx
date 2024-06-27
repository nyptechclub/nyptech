import GoMicroserviceSection from "@/app/docs/apis/sections/go-microservice";
import MainSection from "@/app/docs/apis/sections/main";

export default function Page() {
  return (
    <main className={"p-4 space-y-4"}>
      <MainSection />
      <GoMicroserviceSection />
    </main>
  );
}