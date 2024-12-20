import GradualSpacing from "@/components/ui/gradual-spacing";
import { RainbowButton } from "@/components/ui/rainbow-button";
import RetroGrid from "@/components/ui/retro-grid";

export default function Page() {
  return (
    <main>
      <section className={"hero h-full"}>
        <div className={"hero-content"}>
          <RetroGrid />
          <div className={"text-center"}>
            <div className={"mb-8 text-6xl font-bold"}>
              <GradualSpacing text={"Are you ready to change the future?"} />
            </div>
            <RainbowButton>Register Now</RainbowButton>
          </div>
        </div>
      </section>
    </main>
  );
}