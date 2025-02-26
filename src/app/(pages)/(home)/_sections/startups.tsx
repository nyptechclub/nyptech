import startups from "@/content/data/startups.json";
import Link from "next/link";

export default function StartupsSection(props: { className?: string }) {
  return (
    <section className={props.className}>
      <div className={"mb-16 text-center"}>
        <h2 className={"text-4xl font-bold"}>Our Home-Developed Startups</h2>
        <p className={"mt-4 text-lg"}>Find out what your seniors and members of this club has founded and built!</p>
      </div>
      <div className={"container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {startups.map((startup, index) => (
          <div key={index} className={"card bg-base-300"}>
            <figure>
              <img src={startup.imageUrl} alt={"Image"} />
            </figure>
            <div className={"card-body"}>
              <h3 className={"card-title text-2xl"}>{startup.name}</h3>
              <p>{startup.description}</p>
              <div className={"card-actions mt-4"}>
                <Link className={"btn btn-sm btn-primary"} href={startup.url}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}