import Link from "next/link"
import { formatDate, getBlogPosts } from "@/app/blog/utils"
interface props{
  params:{
    category: string
  }
}
export default function Blog({ params: {category} }: props) {
  let allBlogs = getBlogPosts()
  const clubBlogs = allBlogs.filter(post => post.metadata.tag === `${category}`)

  return (
    <div className='flex container flex-col'>
      Category: {category}
      {clubBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-row"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0 md:space-x-2 hover:bg-base-300 p-5">
              <p className="text-primary tracking-tight text-xl">
                {post.metadata.title}
              </p>
              <p className="text-primary w-[100px] tabular-nums text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className='badge badge-accent'>
                {post.metadata.tag}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
