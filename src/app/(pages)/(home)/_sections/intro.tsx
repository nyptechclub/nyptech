import clsx from "clsx";

export default function IntroSection(props: { className?: string }) {
  return (
    <section className={clsx("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"text-center lg:max-w-[60%]"}>
          <img className={"mx-auto mb-8 size-[150px] lg:size-[200px]"} src={"/assets/logo.png"} alt={"Logo"} />
          <h1 className={"mb-4 text-4xl font-bold lg:text-6xl"}>To Infinity And Beyond</h1>
          <p className={"text-gray-600 dark:text-gray-400"}>
            Our mission is to develop an entrepreneurial mindset across the SIT student body through engagements and
            real-world problem solving with the application of technology.
          </p>
        </div>
      </div>
    </section>
  );
}