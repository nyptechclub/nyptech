"use client";

import { useState } from "react";

export default function ProfileCard(props: {
  name: string;
  role: string;
  description: string;
  src: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button className={"card bg-base-100 shadow-lg cursor-pointer"} type={"button"} onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <>
          <div className="card-body">
            <p>{props.description}</p>
          </div>
        </>
      ) : (
        <>
          <figure>
            <img src={props.src} alt={"Profile"} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <p>{props.role}</p>
          </div>
        </>
      )}
    </button>
  );
}