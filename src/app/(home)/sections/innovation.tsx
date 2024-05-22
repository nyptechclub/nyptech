export default function InnovationSection(props: { className?: string }) {
  return (
    <section
      className={`px-12 grid place-items-center lg:px-24 lg:grid-cols-2 lg:gap-12  max-lg:grid-rows-2 ${props.className}`}
    >
      <div>
        <video autoPlay muted loop>
          <source src={"/assets/innovation.mp4"} />
        </video>
      </div>
      <div>
        <h1 className={"text-5xl font-bold max-lg:text-3xl"}>
          Faster iteration.
          <br />
          More innovation.
        </h1>
        <p className={"pt-4 text-xl text-gray-500 max-lg:text-md"}>
          We aim to bring you the best opportunity to learn grow and prosper within the tech landscape. We hope to bring
          out the innovators within you!
        </p>
      </div>
    </section>
  );
}