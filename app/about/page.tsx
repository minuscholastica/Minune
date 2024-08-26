import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function getAboutContent() {
  const filePath = path.join(process.cwd(), 'app', 'about', 'about.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...data,
  };
}

export default async function About() {
  const { contentHtml } = await getAboutContent();

  return (
    <div className="mt-8">
      <div className="space-y-4">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      
      <div className="mt-8 flex justify-center space-x-4">
        <Link href="https://www.linkedin.com/in/minu-choi-2aa642211" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://twitter.com/minune29" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://github.com/minuscholastica" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </Link>
      </div>
    </div>
  );
}