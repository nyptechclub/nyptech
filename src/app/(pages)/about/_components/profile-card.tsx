"use client";

import { getAssetText, slugify } from "@/lib/utils";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfileCard(props: {
  data: {
    name: string;
    role: string;
    description: string;
    imageSrc: string;
    descriptionSrc?: string;
    url: string;
  };
}) {
  const [description, setDescription] = useState<string>(props.data.description);

  const dialogId = slugify(`modal-${slugify(props.data.name)}`);

  function showDialog() {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    dialog.showModal();
  }

  useEffect(() => {
    if (!props.data.descriptionSrc) return;
    getAssetText(props.data.descriptionSrc).then(setDescription);
  }, [props.data.descriptionSrc]);

  return (
    <>
      <button className={"card cursor-pointer bg-base-300 shadow-lg transition hover:bg-base-200"} onClick={showDialog}>
        <figure>
          <img className={"aspect-square object-cover"} src={props.data.imageSrc} alt={"Profile"} />
        </figure>
        <div className={"card-body"}>
          <div className={"card-title"}>{props.data.name}</div>
          <div className={"badge badge-primary badge-lg"}>{props.data.role}</div>
        </div>
      </button>
      <dialog id={dialogId} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className={"btn btn-circle btn-ghost btn-sm absolute right-4 top-4"} type={"submit"}>
              <XIcon />
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.data.name}</div>
          <div className={"badge badge-primary mt-2"}>{props.data.role}</div>
          <div className={"my-4"}>{description || "Nothing to read here."}</div>
          <div>
            {props.data.url && (
              <Link className={"btn btn-info btn-sm"} href={props.data.url}>
                <Image src={"/assets/icons/linkedin.svg"} alt={"Icon"} width={16} height={16} />
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}