import projects from "@/content/data/projects.json";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      {projects.map((project) => (
        <div key={project.name} className={"card sm:card-side bg-base-100 shadow-lg transition hover:bg-base-200"}>
          <figure>
            <img className={"sm:size-[120px]"} src={project.imageSrc} alt={project.name} />
          </figure>
          <div className={"card-body"}>
            <div className={"card-title"}>{project.name}</div>
            <div className="flex gap-2">
              <Link href={project.link} className="btn">
                Visit
              </Link>
              <Link href={`https://nyptech-learn.vercel.app/room/${project.name}`} className="btn">
                Feedback
              </Link>
            </div>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
}