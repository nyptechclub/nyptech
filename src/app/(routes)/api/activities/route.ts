import data from "@/content/data/activities.json";

export async function GET() {
  return Response.json(data);
}