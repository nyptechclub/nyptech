import ProjectCard from './list-exco';
import projectsData from '@/app/Json/excos.json';

const Excos = () => {
  return (
    <div className="w-full container items-center py-8 md:py-16 xl:py-20">
      <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-3 flex-wrap">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
          <p className="text-left max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Meet the dedicated leaders of our club.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-4">
        {projectsData.map((projects, index) => (
        <ProjectCard
          key={index}
          projectName={projects.name}
          description={projects.description}
          imageSrc={projects.imageSrc}
          subheading={projects.subheading}
          link={projects.link}
        />
      ))}

        </div>
      </div>
    </div>
  );
}

export default Excos;