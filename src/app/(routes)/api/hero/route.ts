import data from "@/content/data/hero.json";

/**
 * @swagger
 * /api/hero:
 *   get:
 *     description: Gets hero
 *     responses:
 *       200:
 *         description: Returns something
 */
export async function GET() {
  return Response.json(data);
}