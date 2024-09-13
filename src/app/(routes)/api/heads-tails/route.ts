export async function GET() {
  const coinFlip = Math.random() < 0.5 ? "heads" : "tails";
  return Response.json({ result: coinFlip });
}