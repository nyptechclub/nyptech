import data from "@/data/projects.json";

/**
 * @swagger
 * /api/projects:
 *   get:
 *     description: Gets projects
 *     responses:
 *       200:
 *         description: Returns something
 */
export async function GET() {
  return Response.json(data);
}