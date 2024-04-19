import * as socials from "@/app/Json/socials.json";

export async function GET(req: Request) {
  const body = await req.text();
  const jsonResponse = JSON.stringify(socials);

  return new Response(jsonResponse, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
