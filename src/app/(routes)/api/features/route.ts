import { getFeatures } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const features = await getFeatures();
    return NextResponse.json(features, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An unknown error had occurred!" }, { status: 500 });
  }
}