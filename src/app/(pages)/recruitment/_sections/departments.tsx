import DepartmentCard from "@/app/(pages)/recruitment/_components/department-card";

const departments = [
  {
    name: "Operations Department",
    summary:
      "This department is responsible for the day-to-day operations of the club. This includes managing our front-facing website, backend services, and more.",
    imageSrc: "/assets/recruitment/operations.jpeg",
    descriptionSrc: "/assets/recruitment/operations.md",
  },
  {
    name: "Marketing Department",
    summary:
      "This department is responsible for promoting the club's activities and events. This includes publicity outreach, public relations, and video production.",
    imageSrc: "/assets/recruitment/marketing.jpeg",
    descriptionSrc: "/assets/recruitment/marketing.md",
  },
  {
    name: "Events Department",
    summary:
      "This department is responsible for planning and executing events such as Alumni and Entrepreneur Discussions, Fireside Talks, and Startup Incubators.",
    imageSrc: "/assets/recruitment/events.jpeg",
    descriptionSrc: "/assets/recruitment/events.md",
  },
];

export default function DepartmentsSection() {
  return (
    <section className={"hero min-h-full max-md:mt-24"}>
      <div className={"hero-content"}>
        <div className={"flex gap-8 max-lg:flex-col"}>
          {departments.map((department) => (
            <DepartmentCard
              key={department.name}
              data={{
                title: department.name,
                summary: department.summary,
                imageSrc: department.imageSrc,
                descriptionSrc: department.descriptionSrc,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}