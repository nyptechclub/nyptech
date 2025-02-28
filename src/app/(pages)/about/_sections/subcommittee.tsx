"use client";

import ProfileCard from "@/app/(pages)/about/_components/profile-card";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubcommitteeSection(props: { data: any[]; year: string }) {
  const pathname = usePathname();
  return (
    <>
      <section className={"hero h-[80%]"}>
        <div className={"hero-content"}>
          <div className={"max-w-2xl text-center"}>
            <div className={"mb-4 text-4xl font-bold"}>Meet the subcommittee</div>
            <div>
              Our subcommittee is made up of a diverse group of individuals who are dedicated to supporting the
              committee and the club as a whole. They are also passionate about technology and innovation.
            </div>
            <ul className={"menu mt-4 rounded-box bg-base-300 menu-horizontal"}>
              <li>
                <Link className={clsx(props.year === "2024" && "active")} href={`${pathname}?year=2024`}>
                  2024
                </Link>
              </li>
              <li>
                <Link className={clsx(props.year === "2025" && "active")} href={`${pathname}?year=2025`}>
                  2025
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={"py-6"}>
        <div className={"mx-auto grid max-w-[90%] lg:max-w-[80%] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"}>
          {props.data.map((item, index) => (
            <ProfileCard
              key={index}
              data={{
                name: item.name,
                role: item.role,
                imageSrc: item.imageSrc,
                descriptionSrc: item.descriptionSrc,
                url: item.url,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}