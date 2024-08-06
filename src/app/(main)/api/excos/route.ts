import data from "@/content/data/excos.json";

/**
 * @swagger
 * /api/excos:
 *   get:
 *     description: Gets excos
 *     responses:
 *       200:
 *         description: Returns something
 */
export async function GET() {
  return Response.json(data);
}