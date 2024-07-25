import data from "@/data/activities.json";

/**
 * @swagger
 * /api/activities:
 *   get:
 *     description: Gets activities
 *     responses:
 *       200:
 *         description: Returns something
 */
export async function GET() {
  return Response.json(data);
}