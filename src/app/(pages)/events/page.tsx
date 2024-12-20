import EventItem from "@/app/(pages)/events/_components/event-item";
import { getEvents } from "@/lib/api/events";

export const revalidate = 0;

export default async function Page() {
  const events = (await getEvents()).sort((a, b) => +a.date - +b.date);
  return (
    <main className={"flex snap-y snap-mandatory flex-col"}>
      {events.map((event) => (
        <EventItem key={event.id} data={event} />
      ))}
    </main>
  );
}