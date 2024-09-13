export async function GET(request: Request) {
  const url = new URL(request.url);
  const number1 = Number.parseInt(url.searchParams.get("number1") || "0", 10);
  const number2 = Number.parseInt(url.searchParams.get("number2") || "0", 10);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    return new Response(JSON.stringify({ error: "Invalid numbers" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }

  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return new Response(JSON.stringify({ randomNumber }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}