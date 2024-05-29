import { twJoin } from "tailwind-merge";

export default function IntroSection(props: { className?: string }) {
  return (
    <section className={twJoin("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"lg:max-w-[60%] text-center"}>
          <img className={"mb-8 mx-auto size-[150px] lg:size-[200px]"} src={"/assets/logo.png"} alt={"Logo"} />
          <h1 className={"mb-4 text-4xl lg:text-6xl font-bold"}>To Infinity And Beyond</h1>
          <p className={"text-gray-600 dark:text-gray-400"}>
            Our mission is to develop an entrepreneurial mindset across the SIT student body through engagements and
            real-world problem solving with the application of technology.
          </p>
        </div>
      </div>
    </section>
  );
}