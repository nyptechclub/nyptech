import { z } from "zod";

const apiUrl = "https://api.nyptech.club/v1";

export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  organizer: z.string(),
  date: z.coerce.date(),
  url: z.string(),
  publicityUrl: z.string(),
});

export type Event = z.infer<typeof eventSchema>;

export function getEvent(id: string) {
  return fetch(`${apiUrl}/events?id=${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => eventSchema.parse(data) as Event)
    .catch((err) => {
      console.error(err);
      return undefined;
    });
}

export function getEvents() {
  return fetch(`${apiUrl}/events`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data.map((event: Event) => eventSchema.parse(event)) as Event[])
    .catch((err) => {
      console.error(err);
      return [] as Event[];
    });
}