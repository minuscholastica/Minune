import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../../lib/markdownToHtml';
import Callout from '../../components/Callout';

export default async function Post({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), 'app/_posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <div 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
        className="prose prose-lg max-w-none"
      />
    </div>
  );
}