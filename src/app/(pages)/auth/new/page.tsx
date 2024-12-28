import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className={"grid place-items-center"}>
      <SignUp routing={"hash"} />
    </main>
  );
}