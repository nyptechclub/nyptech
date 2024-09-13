import data from "@/content/data/mission.json";

export async function GET() {
  return Response.json(data);
}