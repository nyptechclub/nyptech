import data from "@/data/socials.json";

export async function GET() {
  return Response.json(data);
}