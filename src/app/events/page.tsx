import EventPanel from "@/app/events/components/event-panel";

export default function Page() {
  return (
    <main className={"h-full grid grid-cols-4 grid-rows-3 max-lg:grid-rows-4"}>
      <EventPanel
        className={"col-span-2 row-span-2 max-lg:col-span-4 max-lg:row-span-2"}
        backgroundSrc={"/assets/blog/nyplink-committee.jpg"}
        eventHref={"/blog/nyp-link"}
      />
      <EventPanel className={"col-span-2"} backgroundSrc={"/assets/nyp.jpg"} eventHref={"#"} />
      <EventPanel className={"max-lg:col-span-2"} backgroundSrc={"/assets/nyp.jpg"} eventHref={"#"} />
      <EventPanel backgroundSrc={"/assets/nyp.jpg"} eventHref={"#"} />
      <EventPanel className={"lg:col-span-2"} backgroundSrc={"/assets/nyp.jpg"} eventHref={"#"} />
      <EventPanel backgroundSrc={"/assets/nyp.jpg"} eventHref={"#"} />
      <EventPanel backgroundSrc={"/assets/bee.jpg"} eventHref={"#"} />
    </main>
  );
}