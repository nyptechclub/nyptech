import RetroGrid from "@/components/ui/retro-grid";
import Image from "next/image";
import Link from "next/link";

const departments = [
  {
    name: "Operations Department",
    description:
      "This department is responsible for the day-to-day operations of the club. This includes managing the front-facing website, backend services, and more.",
    src: "/assets/recruitment/operations.jpeg",
  },
  {
    name: "Marketing Department",
    description:
      "This department is responsible for promoting the school club's activities and events. This includes advertising, public relations, and market research.",
    src: "/assets/recruitment/marketing.jpeg",
  },
  {
    name: "Events Department",
    description:
      "This department is responsible for planning and executing events such as conferences, workshops, and social gatherings.",
    src: "/assets/recruitment/events.jpeg",
  },
];

export default function Page() {
  return (
    <main>
      <RetroGrid />
      <section className={"hero min-h-full"}>
        <div className={"hero-content"}>
          <div className={"flex flex-col items-center justify-center gap-8 text-center"}>
            <div className={"text-6xl font-bold"}>Are you ready to change the future?</div>
            <Link className={"btn btn-primary"} href={"/recruitment/form"}>
              Join Us Now!
            </Link>
          </div>
        </div>
      </section>
      <section className={"hero min-h-full"}>
        <div className={"hero-content"}>
          <div className={"flex gap-8 max-sm:flex-col"}>
            {departments.map((department) => (
              <div key={department.name} className={"card flex-1 bg-base-300"}>
                <figure className={"relative h-[250px]"}>
                  <Image className={"object-cover"} src={department.src} alt={"Preview"} fill />
                </figure>
                <div className={"card-body"}>
                  <div className={"card-title"}>{department.name}</div>
                  <div>{department.description}</div>
                  <div className={"card-actions mt-4 justify-end"}>
                    <button className={"btn btn-primary btn-sm"}>Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}