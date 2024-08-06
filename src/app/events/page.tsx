import EventSlide from "@/app/events/components/event-slide";
import events from "@/data/events.json";

export default function Page() {
  return (
    <main className={"flex flex-col snap-y snap-mandatory"}>
      {events.map((event, index) => (
        <EventSlide
          key={index}
          backgroundSrc={event.src}
          title={event.name}
          date={event.date}
          href={event.url}
        />
      ))}
    </main>
  );
}