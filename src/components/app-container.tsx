"use client";

import NavigationBar from "@/components/navigation-bar";
import { Context } from "@/context";
import { useEffect, useState } from "react";

export default function AppContainer(props: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = useState<boolean>();

  useEffect(() => {
    let useDarkTheme = darkTheme;

    if (useDarkTheme === undefined) {
      useDarkTheme = localStorage.getItem("darkTheme") === "true";
      setDarkTheme(useDarkTheme);
    }

    document
      .querySelector("html")
      ?.setAttribute("data-theme", useDarkTheme ? "dark" : "light");

    localStorage.setItem("darkTheme", useDarkTheme.toString());
  }, [darkTheme]);

  return (
    <Context.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      <div className={"h-dvh grid grid-rows-[auto,1fr]"}>
        <NavigationBar />
        <div className={"overflow-y-auto"}>{props.children}</div>
      </div>
    </Context.Provider>
  );
}