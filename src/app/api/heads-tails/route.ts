/**
 * @swagger
 * /api/heads-tails:
 *   get:
 *     description: Heads or tails?
 *     responses:
 *       200:
 *         description: Returns something
 */
export async function GET() {
  const coinFlip = Math.random() < 0.5 ? "heads" : "tails";
  return Response.json({ result: coinFlip });
}