import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import heroData from '@/app/Json/hero.json';

const hero = () => {
  return (
    <section className="h-90 w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 align-middle items-center justify-center flex flex-wrap flex-col">
            <img src="/favicon.ico" alt="club logo"/>

            <h1 className="py-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
              To Infinity And Beyond
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our mission is to develop an entrepreneurial mindset across the SIT student body through engagements and real-world problem solving with the application of technology.
            </p>

          </div>
          <Carousel className="w-60 max-w-xs">
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
    </section>
  );
}

export default hero;