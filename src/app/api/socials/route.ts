import data from "@/data/socials.json";

/**
 * @swagger
 * /api/socials:
 *   get:
 *     description: Gets socials
 *     responses:
 *       200:
 *         description: Returns something
 */
export async function GET() {
  return Response.json(data);
}