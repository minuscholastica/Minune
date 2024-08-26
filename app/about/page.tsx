import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { markdownToHtml } from '../lib/markdown';
import dynamic from 'next/dynamic';

const ContentRenderer = dynamic(() => import('../../components/ContentRenderer'), { ssr: false });

interface AboutContent {
  contentHtml: string;
  title?: string;
}

async function getAboutContent(): Promise<AboutContent> {
  const filePath = path.join(process.cwd(), 'app', 'about', 'about.md');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await markdownToHtml(content);

  return {
    contentHtml: processedContent,
    title: data.title,
  };
}

export default async function About() {
  const { contentHtml, title } = await getAboutContent();

  return (
    <div className="mt-8">
      {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}
      
      <div className="space-y-4">
        <ContentRenderer content={contentHtml} />
      </div>
      
      {/* Author section with top and bottom dividers */}
      <div className="mt-12 py-8 border-t border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/Minu2.jpeg"
                alt="Minu Choi"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
            </Link>
            <div>
              <h3 className="font-bold">Minu Choi</h3>
              <p className="text-sm text-gray-500">Feb 9th 1999</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/minu-choi-2aa642211" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-600 hover:text-blue-600" />
            </Link>
            <Link href="https://twitter.com/minune29" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-600 hover:text-blue-400" />
            </Link>
            <Link href="https://github.com/minuscholastica" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-600 hover:text-gray-900" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}