// pages/index.js
import Join from "./_components/join-club";
import Activities from "./_components/activities";
import Excos from "./_components/excos";
import Hero from "@/app/_components/hero";
import Goals from "@/app/_components/goals";
import Socials from "./_components/socials";
import SignUp from "./_components/sign-up";
import Contact from "./_components/contact-us";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Goals/>
      <Join/>
      <Activities/>
      <Excos/>
      <Socials/>
      <SignUp/>
      <Contact/>
    </main>
  );
}
