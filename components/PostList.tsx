// components/PostList.tsx
import Link from 'next/link'
import { PostData } from '../app/lib/posts'

type PostListProps = {
  posts: PostData[];
  showAll?: boolean;
}

export default function PostList({ posts, showAll = false }: PostListProps) {
  const displayPosts = showAll ? posts : posts.filter(post => post.completed)

  return (
    <ul className="space-y-4">
      {displayPosts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded transition duration-150 ease-in-out">
            <h2 className="text-xl font-bold">{post.title}</h2>
            {post.subtitle && (
              <p className="text-gray-500 mt-1">{post.subtitle}</p>
            )}
            <p className="text-gray-400 text-sm mt-2">{post.date}</p>
            {!post.completed && (
              <p className="text-yellow-500 text-sm mt-1">(Draft)</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}