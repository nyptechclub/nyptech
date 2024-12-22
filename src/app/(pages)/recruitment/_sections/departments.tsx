import Image from "next/image";
import Link from "next/link";

const departments = [
  {
    name: "Operations Department",
    description:
      "This department is responsible for the day-to-day operations of the club. This includes managing our front-facing website, backend services, and more.",
    src: "/assets/recruitment/operations.jpeg",
    href: "#",
  },
  {
    name: "Marketing Department",
    description:
      "This department is responsible for promoting the club's activities and events. This includes publicity outreach, public relations, and video production.",
    src: "/assets/recruitment/marketing.jpeg",
    href: "#",
  },
  {
    name: "Events Department",
    description:
      "This department is responsible for planning and executing events such as Alumni and Entrepreneur Discussions, Fireside Talks, and Startup Incubators.",
    src: "/assets/recruitment/events.jpeg",
    href: "#",
  },
];

export default function DepartmentsSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content"}>
        <div className={"flex gap-8 max-lg:flex-col max-md:mt-24"}>
          {departments.map((department) => (
            <div key={department.name} className={"card flex-1 bg-base-300"}>
              <figure className={"relative h-[250px]"}>
                <Image className={"object-cover"} src={department.src} alt={"Preview"} fill />
              </figure>
              <div className={"card-body"}>
                <div className={"card-title"}>{department.name}</div>
                <div>{department.description}</div>
                <div className={"card-actions mt-4 justify-end"}>
                  <Link className={"btn btn-primary btn-sm"} href={department.href}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}