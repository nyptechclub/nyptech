import Activities from "@/app/_components/activities";
import Contact from "@/app/_components/contact-us";
import Excos from "@/app/_components/excos";
import Goals from "@/app/_components/goals";
import Hero from "@/app/_components/hero";
import Join from "@/app/_components/join-club";
import SignUp from "@/app/_components/sign-up";
import {Annoucements} from "@/app/_components/annoucements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 md:p-12 sm:p-5">
      <Hero />
      <hr id="goals"></hr>
      <Goals/>
      <hr id="join"></hr>
      <Join/>
      <hr id="activitities"></hr>
      <Activities/>
      <Annoucements/>
      <hr id="excos"></hr>
      <Excos/>
      <hr id="signup"></hr>
      <SignUp/>
      <hr id="form"></hr>
      <Contact/>
    </main>
  );
}