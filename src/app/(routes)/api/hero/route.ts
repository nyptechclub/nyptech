import data from "@/content/data/hero.json";

export async function GET() {
  return Response.json(data);
}