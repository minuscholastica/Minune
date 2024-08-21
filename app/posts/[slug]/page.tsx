import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PostData } from '../../lib/posts';  // Updated import path

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
      <p className="text-gray-400 text-sm mb-8">{postData.date}</p>
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
    </div>
  );
}