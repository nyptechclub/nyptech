import projects from "@/content/data/projects.json";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"flex flex-col gap-2 p-4"}>
      {projects.map((project) => (
        <div key={project.name} className={"card h-[180px] bg-base-300 sm:card-side"}>
          <figure>
            <img className={"size-[180px]"} src={project.imageUrl} alt={project.name} />
          </figure>
          <div className={"card-body"}>
            <div className={"card-title"}>{project.name}</div>
            <div className={"flex-1"}>{project.description}</div>
            <div className={"flex gap-2"}>
              <Link className={"btn btn-primary btn-sm"} href={project.url}>
                Visit
              </Link>
              <Link className={"btn btn-outline btn-sm"} href={`https://activities.nyptech.club/room/${project.name}`}>
                Feedback
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}