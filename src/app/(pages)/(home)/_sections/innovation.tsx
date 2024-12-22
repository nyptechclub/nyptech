"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function InnovationSection({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("hero opacity-0 transition-opacity duration-1000 overflow-x-auto", { "opacity-100": isVisible }, className)}
    >
      <div className="gap-8 max-lg:flex-col">
        <div className="items-center space-y-4">
          <div className={"mb-10 text-6xl text-center font-bold"}>Faster Iteration, More Innovation</div>
          <div className="flex items-center gap-10 sm:flex-col md:flex-row">
            <div className="card items-center">
              <div className="avatar">
                <div className="mask mask-squircle w-80">
                  <img src="/assets/blog/workshop.jpeg" />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">Workshops</h2>
                <p>
                  We have a list of upcoming workshops catered just for you to learn more about what it takes to start a
                  SAAS
                </p>
              </div>
            </div>
            <div className="card items-center">
              <div className="avatar">
                <div className="mask mask-triangle w-80">
                  <img src="/assets/blog/hackathon.jpeg" />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">Join The Community</h2>
                <p>
                  Join a group of like minded people to brainstorm, develop and maintain code, get a chance to work with
                  real-world clients.
                </p>
              </div>
            </div>
            <div className="card items-center">
              <div className="avatar">
                <div className="mask w-80 rounded-full">
                  <img src="/assets/blog/group.jpg" />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">Access capital</h2>
                <p>
                  We aim to provide you with grands and funding opportunities as well as advise on how to better pursue
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}