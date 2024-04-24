import { BlogPosts } from '@/app/blog/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className='container'>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Grow with us</h1>
      <BlogPosts />
    </section>
  )
}
