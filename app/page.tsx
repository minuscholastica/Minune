// app/page.tsx
import { getSortedPostsData } from './lib/posts'
import PostList from '../components/PostList'

export default function Home() {
  const allPosts = getSortedPostsData()
  const completedPosts = allPosts.filter(post => post.completed)

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <PostList posts={completedPosts} />
    </div>
  )
}

// This function gets called at build time
export function generateStaticParams() {
  const allPosts = getSortedPostsData()
  const completedPosts = allPosts.filter(post => post.completed)
  return completedPosts.map((post) => ({
    slug: post.id,
  }))
}