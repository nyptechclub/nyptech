import data from "@/content/data/excos.json";

export async function GET() {
  return Response.json(data);
}