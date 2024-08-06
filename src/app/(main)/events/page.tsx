import EventSlide from "@/app/(main)/events/components/event-slide";
import events from "@/content/data/events.json";

export default function Page() {
  return (
    <main className={"flex flex-col snap-y snap-mandatory"}>
      {events.map((event, index) => (
        <EventSlide key={index} backgroundSrc={event.src} title={event.name} date={event.date} href={event.url} />
      ))}
    </main>
  );
}