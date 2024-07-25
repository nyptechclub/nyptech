import SwaggerClient from "@/components/swagger-client";
import { getApiDocs } from "@/swagger";

export default async function Page() {
  const spec = await getApiDocs();
  return (
    <main className={"px-4"}>
      <SwaggerClient spec={spec} />
    </main>
  );
}