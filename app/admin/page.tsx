// app/admin/page.tsx
import { getSortedPostsData } from '../lib/posts'
import AdminClient from './AdminClient'

export default function AdminPage() {
  const posts = getSortedPostsData()

  return <AdminClient posts={posts} />
}