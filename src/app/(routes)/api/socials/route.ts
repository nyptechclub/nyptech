import data from "@/content/data/socials.json";

export async function GET() {
  return Response.json(data);
}