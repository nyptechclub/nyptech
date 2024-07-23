import EventPanel from "@/app/events/components/event-panel";
import events from "@/data/events.json";
import { twJoin } from "tailwind-merge";

export default function Page() {
  return (
    <main className={"h-full grid grid-cols-4 grid-rows-3 max-lg:grid-rows-4"}>
      {events.map((event, index) => (
        <EventPanel
          // biome-ignore lint/suspicious/noArrayIndexKey:
          key={index}
          className={twJoin(
            index === 0 && "col-span-2 row-span-2 max-lg:col-span-4 max-lg:row-span-2",
            index === 1 && "col-span-2",
            index === 2 && "max-lg:col-span-2",
            index === 3 && "",
            index === 4 && "lg:col-span-2",
            index === 5 && "",
            index === 6 && "",
          )}
          backgroundSrc={event.src}
          title={event.name}
          date={event.date}
          href={event.url}
        />
      ))}
    </main>
  );
}