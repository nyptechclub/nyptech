"use client";

import { slugify } from "@/utils";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function ProfileCard(props: {
  name: string;
  role: string;
  description: string;
  src: string;
  href: string;
}) {
  const modalId = slugify(`modal-${slugify(props.name)}`);
  return (
    <>
      <button
        className={"card bg-base-100 shadow-lg cursor-pointer transition hover:bg-base-200"}
        type={"button"}
        onClick={() => document.getElementById(slugify(`modal-${slugify(props.name)}`))?.showModal()}
      >
        <figure>
          <img className={"aspect-square object-cover"} src={props.src} alt={"Profile"} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.role}</p>
        </div>
      </button>
      <dialog id={modalId} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type={"submit"}>
              ✕
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.name}</div>
          <div className={"mt-2 badge badge-primary"}>{props.role}</div>
          <div className={"my-4"}>{props.description || "Nothing to see here."}</div>
          <div>
            <Link className={"btn btn-sm btn-info"} href={props.href}>
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}