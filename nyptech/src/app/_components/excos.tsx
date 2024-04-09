import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ProjectCard from './list-exco';
import excosData from './excos.json';

const Excos = () => {
  return (
    <Accordion type="single" collapsible className="w-full py-12 md:py-16 xl:py-20">
      <AccordionItem value="item-1" className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
        <AccordionTrigger className="space-y-3 flex-wrap">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
          <p className="text-left max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Meet the dedicated leaders of our club.
          </p>
          <img
          alt="Team"
          className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
          height="300"
          src="/Club Information.png"
          width="600"
        />
        </AccordionTrigger>
        <AccordionContent className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {excosData.map((exco, index) => (
        <ProjectCard
          key={index}
          projectName={exco.name}
          description={exco.description}
          imageSrc={exco.imageSrc}
          subheading={exco.subheading}
        />
      ))}

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Excos;