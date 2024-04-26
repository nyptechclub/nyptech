import { BlogPosts } from '@/app/blog/components/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className='container flex flex-col'>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Grow with us</h1>
      <div className='flex flex-row p-5 gap-3'>
      <Link href="/blog/category/club" className='btn'>Club</Link>
      <Link href="/blog/category/tech" className='btn'>tech</Link>
      <Link href="/blog/category/events" className='btn'>events</Link>
      </div>
      <BlogPosts />
    </section>
  )
}
