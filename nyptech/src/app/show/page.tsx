import projectsData from '@/app/Json/projects.json';
import ProjectCard from '../_components/list-exco';
const Showcase = () => {
    return ( 
        <section className="text-center flex container flex-col">
            <div className="text-2xl font-bold">
                Showcase:
            </div>
            <div className="text-xl">
                Here is a list of our members work
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
        </section>
     );
}
 
export default Showcase;