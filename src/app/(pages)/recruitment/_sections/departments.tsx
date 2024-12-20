import Image from "next/image";

const departments = [
  {
    name: "Operations Department",
    description:
      "This department is responsible for the day-to-day operations of the club. This includes managing our front-facing website, backend services, and more.",
    src: "/assets/recruitment/operations.jpeg",
  },
  {
    name: "Marketing Department",
    description:
      "This department is responsible for promoting the school club's activities and events. This includes publcity outreach, public relations, and video production.",
    src: "/assets/recruitment/marketing.jpeg",
  },
  {
    name: "Events Department",
    description:
      "This department is responsible for planning and executing events such as Alumni and Entrepeneur Discussions, Fireside Talks, and Startup Incubators.",
    src: "/assets/recruitment/events.jpeg",
  },
];

export default function DepartmentsSection() {
  return (
    <section className={"hero min-h-full"}>
      <div className={"hero-content"}>
        <div className={"flex gap-8 max-lg:flex-col"}>
          {departments.map((department) => (
            <div key={department.name} className={"card flex-1 bg-base-300"}>
              <figure className={"relative h-[250px]"}>
                <Image className={"object-cover"} src={department.src} alt={"Preview"} fill />
              </figure>
              <div className={"card-body"}>
                <div className={"card-title"}>{department.name}</div>
                <div>{department.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}