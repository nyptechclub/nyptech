export default function IntroSection(props: { className?: string }) {
  return (
    <section className={`grid place-items-center ${props.className}`}>
      <div className={"text-center"}>
        <img
          className={"mx-auto size-[250px]"}
          src={"https://nyptech.vercel.app/favicon.ico"}
          alt={"Logo"}
        />
        <h1 className={"mt-12 text-6xl font-bold"}>To Infinity And Beyond</h1>
        <p className={"mx-auto mt-12 max-w-[50%] text-xl text-gray-500"}>
          Our mission is to develop an entrepreneurial mindset across the SIT
          student body through engagements and real-world problem solving with
          the application of technology.
        </p>
      </div>
    </section>
  );
}