import data from "@/content/data/assets.json";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return redirect("/");
  }
  const asset = data.find((asset) => asset.id === id);
  redirect(asset?.url || "/");
}