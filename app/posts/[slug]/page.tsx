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

      {/* Author section with top and bottom dividers */}
      <div className="mt-12 py-8 border-t border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Image 
                src="/Minu2.jpeg"  // Make sure this path is correct
                alt="Author"
                width={60}
                height={60}
                className="rounded-full cursor-pointer"
              />
            </Link>
            <div>
              <h3 className="font-bold">Minu Choi</h3>
              <p className="text-gray-500 text-sm">{postData.date}</p>
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
    </div>
  );
}