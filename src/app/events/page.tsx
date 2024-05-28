import EventPanel from "@/app/events/components/event-panel";

export default function Page() {
  return (
    <main className={"h-full grid grid-cols-4 grid-rows-3 max-lg:grid-rows-4"}>
      <EventPanel
        className={"col-span-2 row-span-2 max-lg:col-span-4 max-lg:row-span-2"}
        backgroundSrc={"/assets/blog/nyplink-committee.jpg"}
        title={"NYP Link"}
        href={"/blog/nyp-link"}
      />
      <EventPanel className={"col-span-2"} backgroundSrc={"/assets/placeholder.svg"} title={"Coming Soon"} href={"#"} />
      <EventPanel
        className={"max-lg:col-span-2"}
        backgroundSrc={"/assets/placeholder.svg"}
        title={"Coming Soon"}
        href={"#"}
      />
      <EventPanel backgroundSrc={"/assets/placeholder.svg"} title={"Coming Soon"} href={"#"} />
      <EventPanel
        className={"lg:col-span-2"}
        backgroundSrc={"/assets/placeholder.svg"}
        title={"Coming Soon"}
        href={"#"}
      />
      <EventPanel backgroundSrc={"/assets/placeholder.svg"} title={"Coming Soon"} href={"#"} />
      <EventPanel backgroundSrc={"/assets/placeholder.svg"} title={"Coming Soon"} href={"#"} />
    </main>
  );
}