import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/Minu2.jpeg"
          alt="Minu"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
      </div>
      
      <div className="space-y-4">
        <p>
          These days, I work on using AI to transform how we handle data, which ultimately makes using AI easier. On the side, I enjoy crafting narratives that makes complex tech accessible.
        </p>
        
        <p>
          Originally from South Korea, I relocated to Singapore to study Intellectual History and Computational Physics at Yale-NUS College. Since then, I've tackled a few exciting projects - here are some:
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Woochi:</strong> AI-powered regulatory compliance solutions leveraging successful ISO compliance experience.</li>
          <li><strong>PreternaturalAI:</strong> Conceptual documentation on text embedding and RAG pipelines for AI newcomers.</li>
          <li><strong>Nervotec:</strong> Product management and ISO 13485, FDA, and HSA compliance at AI-driven digital health startup.</li>
          <li><strong>HubSpot:</strong> Strategic CRM consulting for startups, scaling sales operations and customer retention.</li>
          <li><strong>Digital Numismatics Research:</strong> Image detection algorithm optimization for Roman coin classification.</li>
        </ul>
        
        <p>
          I'm always on the lookout to explore exciting problems, solutions, and, of course, effective ways to capture such insights. Drop me a message if any of this resonates with you!
        </p>
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