import projects from "@/content/data/projects.json";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"p-4 flex flex-col gap-2"}>
      {projects.map((project) => (
        <Link
          key={project.name}
          className={"card sm:card-side bg-base-100 shadow-lg transition hover:bg-base-200"}
          href={project.link}
        >
          <figure>
            <img className={"sm:size-[120px]"} src={project.imageSrc} alt={project.name} />
          </figure>
          <div className={"card-body"}>
            <h1 className={"card-title"}>{project.name}</h1>
          <Link href={`https://nyptech-learn.vercel.app/room/${project.name}`}></Link>
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}