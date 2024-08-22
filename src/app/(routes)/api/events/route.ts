import { getEvent, getEvents, setEvent } from "@/lib/database";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const event = await getEvent(id);
      if (!event) {
        return NextResponse.json({ error: "Event not found!" }, { status: 404 });
      } else {
        return NextResponse.json(event, { status: 200 });
      }
    }

    const events = await getEvents();
    return NextResponse.json(events, { status: 200 });
  } catch {
    return NextResponse.json({ error: "An unknown error had occurred!" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const eventData = req.body as unknown as Prisma.eventCreateInput;
    const event = await setEvent(eventData);
    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json({ error: "An unknown error had occurred!" }, { status: 500 });
  }
}