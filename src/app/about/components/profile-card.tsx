"use client";

import Link from "next/link";

export default function ProfileCard(props: {
  name: string;
  role: string;
  description: string;
  src: string;
  href: string;
}) {
  return (
    <Link className={"card bg-base-100 shadow-lg cursor-pointer transition hover:bg-base-200"} href={props.href}>
      <figure>
        <img className={"aspect-square object-cover"} src={props.src} alt={"Profile"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.role}</p>
      </div>
    </Link>
  );
}