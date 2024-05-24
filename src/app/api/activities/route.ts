import data from "@/data/activities.json";

export async function GET() {
  return Response.json(data);
}