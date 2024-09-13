import data from "@/content/data/projects.json";

export async function GET() {
  return Response.json(data);
}