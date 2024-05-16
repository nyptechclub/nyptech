import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-row "
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0 md:space-x-2 hover:bg-base-200 p-5">
              <p className="tracking-tight text-xl">
                {post.metadata.title}
              </p>
              <p className="w-[100px] tabular-nums text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className='badge badge-accent mt-4'>
                {post.metadata.tag}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
