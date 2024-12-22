"use client";

import { spaceMono } from "@/fonts";
import { ErrorRouteProps } from "@/types";
import Link from "next/link";

export default function ErrorPage(props: ErrorRouteProps) {
  return (
    <main className={"container mx-auto grid place-items-center"}>
      <div className={"card max-w-2xl bg-base-300"}>
        <div className={"card-body items-center"}>
          <div className={"card-title"}>Oops! An error had occurred.</div>
          <div className={"text-center"}>
            <p className={"line-clamp-2"}>{props.error.message}</p>
          </div>
          {props.error.stack && (
            <div className={"collapse collapse-arrow mt-2 bg-base-200"}>
              <input type={"checkbox"} />
              <div className={"collapse-title text-xl font-medium"}>Stack Trace</div>
              <div className={"collapse-content overflow-auto"}>
                <p className={spaceMono.className}>{props.error.stack}</p>
              </div>
            </div>
          )}
          <div className={"mt-2 flex gap-2"}>
            <Link className={"btn btn-outline btn-sm"} href={"/"}>
              Go Home
            </Link>
            <button className={"btn btn-primary btn-sm"} onClick={props.reset}>
              Reset Page
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}