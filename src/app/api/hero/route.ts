import data from "@/data/hero.json";

export async function GET() {
  return Response.json(data);
}