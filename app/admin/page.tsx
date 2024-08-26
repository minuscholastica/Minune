// app/admin/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { getSortedPostsData, PostData } from '../../lib/posts'
import PostList from '../../components/PostList'

const ADMIN_PASSCODE = '1357' // Replace with your chosen passcode

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    setPosts(getSortedPostsData())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAdmin(passcode === ADMIN_PASSCODE)
  }

  if (!isAdmin) {
    return (
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter admin passcode"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Admin: All Posts</h1>
      <PostList posts={posts} showAll={true} />
    </div>
  )
}