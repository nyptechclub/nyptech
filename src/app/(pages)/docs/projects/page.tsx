import projects from "@/content/data/projects.json";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      {projects.map((project) => (
        <div key={project.name} className={"h-[180px] card sm:card-side bg-base-300"}>
          <figure>
            <img className={"size-[180px]"} src={project.imageUrl} alt={project.name} />
          </figure>
          <div className={"card-body"}>
            <div className={"card-title"}>{project.name}</div>
            <div className={"flex-1"}>{project.description}</div>
            <div className={"flex gap-2"}>
              <Link className={"btn btn-sm btn-primary"} href={project.url}>
                Visit
              </Link>
              <Link
                className={"btn btn-sm btn-outline"}
                href={`https://nyptech-activities.vercel.app/room/${project.name}`}
              >
                Feedback
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}