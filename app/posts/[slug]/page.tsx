import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from '../../lib/markdown'
import dynamic from 'next/dynamic'

const ContentRenderer = dynamic(() => import('../../../components/ContentRenderer'), { ssr: false })

export default async function Post({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), 'app/_posts', `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await markdownToHtml(content)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <ContentRenderer content={processedContent} />
    </div>
  )
}