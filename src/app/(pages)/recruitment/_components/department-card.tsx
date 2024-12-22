"use client";

import { getAssetText, slugify } from "@/lib/utils";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function DepartmentCard(props: {
  data: {
    title: string;
    summary: string;
    imageSrc: string;
    descriptionSrc: string;
  };
}) {
  const [description, setDescription] = useState<string>();

  const dialogId = slugify(`modal-${slugify(props.data.title)}`);

  function showDialog() {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    dialog.showModal();
  }

  useEffect(() => {
    getAssetText(props.data.descriptionSrc).then(setDescription);
  }, [props.data.descriptionSrc]);

  return (
    <>
      <div className={"card flex-1 bg-base-300"}>
        <figure className={"relative h-[250px]"}>
          <Image className={"object-cover"} src={props.data.imageSrc} alt={"Preview"} fill />
        </figure>
        <div className={"card-body"}>
          <div className={"card-title"}>{props.data.title}</div>
          <div>{props.data.summary}</div>
          <div className={"card-actions mt-4 justify-end"}>
            <button className={"btn btn-primary btn-sm"} onClick={showDialog}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <dialog id={dialogId} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className={"btn btn-circle btn-ghost btn-sm absolute right-4 top-4"} type={"submit"}>
              <XIcon />
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.data.title}</div>
          <div>
            <Markdown className={"prose"}>{description}</Markdown>
          </div>
        </div>
      </dialog>
    </>
  );
}