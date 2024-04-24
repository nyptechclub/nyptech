import * as React from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export function Annoucements() {
  return (
    <section className="text-xl font-bold container">
    Annoucements:
    <Carousel className="text-base font-normal m-10">
      <CarouselContent>
          <CarouselItem>
              <Card className="m-5 p-5">
                <CardTitle className="px-5">Welcome to a new semester!</CardTitle>
                <CardContent className="flex p-6 w-full"> We want to start this off with a good start, join us for the NYP-Link event to get to know us better!
                </CardContent>
                <CardFooter><Link href="https://nyptech-go.vercel.app/nyp-link" className="btn">NYP-Link</Link></CardFooter>
              </Card>
          </CarouselItem>
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}
