import { tursoClient } from '@/app/utils/tursoClient';
import Link from 'next/link';

type Props = {
 params:{
    id: number
 }
}
export interface Framework {
    name: string;
    language: string;
    url: string;
    stars: number;
    id: number;
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
  async function getData(id: number) {
    try {
      const res = await tursoClient().execute({ sql:'select * from frameworks where id= ?;', args:[id]});
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
export default async function UpvotePage  ({params}: Props) {
    await upvote(params.id);
    const { frameworks } = await getData(params.id);
    return ( 
        <div className="flex container">
        {frameworks.map((framework) => (
                <ul key={framework.id} className="menu bg-base-200 w-56 rounded-box">
                <li>You Have Upvoted For </li>
                  <li>{framework.name}</li>
                  <li>{framework.language}</li>
                  <li>Votes: {framework.stars}</li>
                  <Link href="/docs/todo" className='btn btn-link'>Back</Link>
                  <td className="whitespace-nowrap text-center px-4 py-2">
                    <a
                      href={framework.url}
                      target="_blank"
                      className="group rounded-lg border border-transparent px-2 py-1"
                    >
                      Visit 🔗
                    </a>
                  </td>
                </ul>
              ))}
        </div>
    );
}