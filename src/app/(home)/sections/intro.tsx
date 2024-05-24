export default function IntroSection(props: { className?: string }) {
  return (
    <section className={`grid place-items-center ${props.className}`}>
      <div className={"text-center"}>
        <img className={"mx-auto size-[250px] max-md:size-[150px]"} src={"/assets/logo.png"} alt={"Logo"} />
        <h1 className={"mt-12 text-6xl font-bold max-lg:text-3xl"}>To Infinity And Beyond</h1>
        <p className={"mx-auto mt-12 max-w-[50%] text-xl text-gray-500 max-lg:max-w-[90%] max-lg:text-md"}>
          Our mission is to develop an entrepreneurial mindset across the SIT student body through engagements and
          real-world problem solving with the application of technology.
        </p>
      </div>
    </section>
  );
}