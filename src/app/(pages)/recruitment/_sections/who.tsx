import Image from "next/image";

export default function WhoSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content"}>
        <div className={"text-center flex flex-col items-center"}>
          <div className={"mb-8 relative size-32"}>
            <Image src={"/assets/logo.png"} alt={"Logo"} fill />
          </div>
          <div className={"mb-4 text-6xl font-bold max-md:text-4xl"}>Who are we?</div>
          <div className={"max-md:text-md mb-8 text-lg"}>
            We are a club with the goal of developing an entrepreneurial mindset across the SIT student body with the
            application of technology, fostering innovation, collaboration, and future-ready skills to drive impactful
            solutions in a rapidly evolving world.
          </div>
        </div>
      </div>
    </section>
  );
}