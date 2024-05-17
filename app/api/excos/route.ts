import * as activities from "@/app/Json/excos.json";

export async function GET(req: Request) {
  const body = await req.text();
  const jsonResponse = JSON.stringify(activities);

  return new Response(jsonResponse, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
