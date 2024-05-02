import { tursoClient } from '@/app/utils/tursoClient';
export const runtime = 'edge';
export const revalidate = 0;
export interface Framework {
  name: string;
  language: string;
  url: string;
  stars: number;
  id: number;
}

async function getData() {
  try {
    const res = await tursoClient().execute('select * from frameworks;');
    let frameworks = res.rows as unknown as Framework[];
    // Sort the frameworks by stars in ascending order
    frameworks = frameworks.sort((a, b) => b.stars - a.stars);
    return {
      frameworks,
    };
  } catch (error) {
    console.error(error);
    return {
      frameworks: []
    };
  }
}
async function upvote(id: number) {
  try {
    const res = await tursoClient().execute({ sql: 'UPDATE frameworks SET stars = stars + 1 WHERE id = ?;', args:[id]});
    return {
      frameworks: res.rows as unknown as Framework[],
    };
  } catch (error) {
    console.error(error);
    return {
      frameworks: []
    }
  }
}
export default async function Home(page: any) {
  const { frameworks } = await getData();
  return (
      <div className="mb-32 flex flex-col text-center lg:mb-0 lg:text-left container">
        <div className="mt-20 overflow-x-auto rounded-lg border border-gray-200 w-[80vw] max-w-2xl">
        <h1 id="home">To Do List, Dev Team</h1>
          <div>Vote for something to appear at the top of the list.
            </div>
          <table className="w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Votes</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {frameworks.map((framework) => (
                <tr key={framework.id}>
                  <td>{framework.name}</td>
                  <td>{framework.language}</td>
                  <td>{framework.stars}</td>
                  <a href={`/docs/todo/${framework.id}`}className="btn btn-outline">Upvote</a>
                  <td className="whitespace-nowrap text-center px-4 py-2">
                    <a
                      href={framework.url}
                      target="_blank"
                      className="group rounded-lg border border-transparent px-2 py-1"
                    >
                      Visit 🔗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
