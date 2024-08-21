import { getSortedPostsData } from './lib/posts'
import PostList from '../components/PostList'

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="mt-8">
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