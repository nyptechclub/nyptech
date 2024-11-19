'use client'

import BoxReveal from '@/components/ui/box-reveal'
import NumberTicker from '@/components/ui/number-ticker'
import { ArrowRight, Coins, Lightbulb, Rocket, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function IncubatorHero({ className = "" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className={`py-12 md:py-24 lg:py-32 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
        Launch Your Startup <span className="text-[#5046e6]">Dreams</span>
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Our incubator program empowers entrepreneurs to turn innovative ideas into successful businesses through mentorship, resources, and a vibrant startup ecosystem.
        </h2>
      </BoxReveal>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>

              <Link href="/apply">
                <button className="btn btn-primary inline-flex items-center justify-center" 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  Apply Now
                  <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
                </button>
              </Link>
              <Link href="/programs">
                <button className='btn'>Learn More</button>
              </Link>
              </BoxReveal>

            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 ">
                <Rocket className="h-4 w-4" />
                <NumberTicker value={5} className='text-secondary'/><span>+ Startups Launched</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <NumberTicker value={20} className='text-secondary'/><span>+ Mentors</span>
              </div>
              <div className="flex items-center space-x-1">
                <Coins className="h-4 w-4" />
                <NumberTicker value={30} className='text-secondary'/><span>k+ Funding</span>
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="mask mask-hexagon w-full">
              <Image
                src="/assets/blog/nyplink-committee.jpg"
                alt="Incubator Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}