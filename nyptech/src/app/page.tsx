import Activities from "@/app/_components/activities";
import Contact from "@/app/_components/contact-us";
import Excos from "@/app/_components/excos";
import Goals from "@/app/_components/goals";
import Hero from "@/app/_components/hero";
import Join from "@/app/_components/join-club";
import SignUp from "@/app/_components/sign-up";
import Socials from "@/app/_components/socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Goals/>
      <Activities/>
      <Excos/>
      <Socials/>
      <SignUp/>
      <Join/>
      <Contact/>
    </main>
  );
}