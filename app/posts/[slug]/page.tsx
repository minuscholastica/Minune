import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PostData } from '../../lib/posts';
import Image from 'next/image';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export default function Post({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), 'app/_posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const postData = data as PostData;

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
      {postData.subtitle && (
        <p className="text-xl text-gray-500 mb-4">{postData.subtitle}</p>
      )}
      
      {/* Divider */}
      <hr className="my-8 border-t border-gray-300 dark:border-gray-700" />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
            em: ({node, ...props}) => <em className="italic" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Author section */}
      <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/Minu2.jpeg"  // Make sure this path is correct
            alt="Author"
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold">Minu Choi</h3>
            <p className="text-gray-500 text-sm">{postData.date}</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com/minune29" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="text-gray-600 hover:text-blue-400" />
          </a>
          <a href="https://github.com/minuscholastica" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-600 hover:text-gray-900" />
          </a>
        </div>
      </div>
    </div>
  );
}