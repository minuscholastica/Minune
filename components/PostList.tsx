import Link from 'next/link'

type Post = {
  id: string;
  title: string;
  date: string;
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="block hover:bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-white-600">{post.date}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}