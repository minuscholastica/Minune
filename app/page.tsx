import { getSortedPostsData } from './lib/posts'
import PostList from '../components/PostList'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <PostList posts={posts} />
    </div>
  )
}

// This function gets called at build time
export function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}