import TimelineItem from "@/app/_components/list-activity";
import ProjectCard from "@/app/_components/list-exco";
import Socials from "@/app/_components/list-socials";
import Link from "next/link";
import socials from "@/app/Json/socials.json"; 
import activitiesData from "@/app/Json/activities.json";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import heroData from '@/app/Json/hero.json';
const Components = () => {
  
    return ( 
        <div className="flex container flex-col text-xl card">
            Components
            <div className="card-body">
            <Link href="#activity" id="activity" className="flex container flex-col py-5 hover:bg-base-300">
                Activity
            </Link>
                <ul className="timeline timeline-vertical lg:timeline-horizontal">
        {activitiesData.map((activity, index) => (
          <TimelineItem
            key={index}
            month={activity.month}
            event={activity.event}
            isFirstItem={index === 0}
            isLastItem={false}
          />
        ))}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">?</div>
        </li>
      </ul>
            <Link href="#exco" id="exco" className="flex container flex-col hover:bg-base-300 py-5">
                Exco</Link>
                <div className="self-center">
                <ProjectCard
                projectName="Card Header"
                description="This is a card description"
                imageSrc="/placeholder.svg"
                subheading="Components"
                link="https://www.google.com"
                />
                </div>
            <Link href="#socials" id="socials" className="flex container flex-col hover:bg-base-300 py-5">
                Socials
            </Link>
                <div className="mt-2 flex gap-1 self-center">
        {socials.map((social, index) => (
          <Socials key={index} social={social}/>
        ))}
      </div>
            <Link href="#hero" id="hero" className="flex flex-col container hover:bg-base-300 py-5">
                Hero
            </Link>
                <Carousel className="w-60 max-w-xs justify-center self-center text-center">
            <CarouselContent>
              {heroData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
            </div>
        </div>
     );
}
 
export default Components;