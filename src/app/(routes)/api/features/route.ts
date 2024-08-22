import { getFeature, getFeatures, setFeature } from "@/lib/database";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const event = await getFeature(id);
      if (!event) {
        return NextResponse.json({ error: "Event not found!" }, { status: 404 });
      } else {
        return NextResponse.json(event, { status: 200 });
      }
    }

    const features = await getFeatures();
    return NextResponse.json(features, { status: 200 });
  } catch {
    return NextResponse.json({ error: "An unknown error had occurred!" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const featureData = req.body as unknown as Prisma.FeatureCreateInput;
    const feature = await setFeature(featureData);
    return NextResponse.json(feature, { status: 201 });
  } catch {
    return NextResponse.json({ error: "An unknown error had occurred!" }, { status: 500 });
  }
}