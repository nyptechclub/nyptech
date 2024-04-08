import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Excos = () => {
    return ( 
<Accordion type="single" collapsible className="w-full py-12 md:py-16 xl:py-20">
        <AccordionItem value="item-1" className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
          <AccordionTrigger className="space-y-3 flex-wrap">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
            <p className="text-left max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We've launched several innovative projects, from mobile apps to sustainable products. Our members are not
              just dreamers; they are doers.
            </p>
          </AccordionTrigger>
          <AccordionContent className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {/* EZEKKIOUS */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">EZEKKIOUS</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Rohan */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">ROHAN</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Wei heng */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">WEI HENG</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* JET */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">JET</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Sarah */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">SARAH</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Zi Qiang */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">ZI QIANG</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Jeren */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">JEREN</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Sven */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">SVEN</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>
            {/* Joshua */}
            <div className="flex flex-col space-y-2">
              <img
                alt="Project"
                className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">JOSHUA</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Description of the project goes here. This will describe what the project is about and what the team
                  has achieved.
                </p>
              </div>
            </div>

          </AccordionContent>
        </AccordionItem>
      </Accordion>
     );
}
 
export default Excos;