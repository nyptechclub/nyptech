import { twJoin } from "tailwind-merge";

export default function InnovationSection(props: { className?: string }) {
  return (
    <section className={twJoin("hero", props.className)}>
      <div className={"hero-content max-lg:flex-col gap-8"}>
        <video className={"rounded-lg shadow-lg"} autoPlay muted loop>
          <source src={"/assets/innovation.mp4"} />
        </video>
        <div>
          <h1 className={"mb-4 text-4xl font-bold"}>
            Faster iteration.
            <br />
            More innovation.
          </h1>
          <p className={"text-gray-600"}>
            We aim to bring you the best opportunity to learn grow and prosper within the tech landscape. We hope to
            bring out the innovators within you!
          </p>
        </div>
      </div>
    </section>
  );
}