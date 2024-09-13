import EventSlide from "@/app/(pages)/events/components/event-slide";
import { getEvents } from "@/lib/api/events";

export const revalidate = 0;

export default async function Page() {
  const events = (await getEvents()).sort((a, b) => +a.date - +b.date);
  return (
    <main className={"flex flex-col snap-y snap-mandatory"}>
      {events.map((event) => (
        <EventSlide key={event.id} data={event} />
      ))}
    </main>
  );
}