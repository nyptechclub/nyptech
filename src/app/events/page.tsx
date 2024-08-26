import EventCard from "@/app/events/components/event-card";
import { getEvents } from "@/lib/api/events";

export default async function Page() {
  const events = (await getEvents()).sort((a, b) => +a.date - +b.date);
  return (
    <main className={"p-4 flex"}>
      {events.map((event) => (
        <EventCard key={event.id} data={event} />
      ))}
    </main>
  );
}