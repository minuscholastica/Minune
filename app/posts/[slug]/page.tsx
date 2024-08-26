import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from '../../lib/markdown'
import { getRelatedPosts, PostData } from '../../lib/posts'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const ContentRenderer = dynamic(() => import('../../../components/ContentRenderer'), { ssr: false })

export default async function Post({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), 'app/_posts', `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await markdownToHtml(content)
  const relatedPosts = getRelatedPosts(params.slug)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <ContentRenderer content={processedContent} />

      {/* Author section with top and bottom dividers */}
      <div className="mt-12 py-8 border-t border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Image 
                src="/Minu2.jpeg"
                alt="Author"
                width={60}
                height={60}
                className="rounded-full cursor-pointer"
              />
            </Link>
            <div>
              <h3 className="font-bold">Minu Choi</h3>
              <p className="text-gray-500 text-sm">{data.date}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/minu-choi-2aa642211" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-600 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com/minune29" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-600 hover:text-blue-400" />
            </a>
            <a href="https://github.com/minuscholastica" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-600 hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post: PostData) => (
              <Link href={`/posts/${post.id}`} key={post.id} className="block hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg overflow-hidden transition duration-300">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  {post.subtitle && (
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{post.subtitle}</p>
                  )}
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}