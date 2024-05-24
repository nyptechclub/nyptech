import data from "@/data/excos.json";

export async function GET() {
  return Response.json(data);
}