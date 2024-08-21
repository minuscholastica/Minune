'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setIsLightMode(storedTheme === 'light');
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen bg-light dark:bg-dark text-light dark:text-dark`}>
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/Minu2.jpeg" 
              alt="Minu" 
              width={50} 
              height={50} 
              className="rounded-full"
            />
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Minune</h1>
            <Link href="/about" className="text-sm mt-1 hover:text-gray-500">About me</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="https://www.linkedin.com/in/minu-choi-2aa642211" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="text-light dark:text-dark" />
            </Link>
            <Link href="https://twitter.com/minune29" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} className="text-light dark:text-dark" />
            </Link>
            <Link href="https://github.com/minuscholastica" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="text-light dark:text-dark" />
            </Link>
            <button onClick={toggleTheme} aria-label="Toggle light mode" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {isLightMode ? <BsMoonFill size={20} className="text-dark-navy" /> : <BsSunFill size={20} className="text-yellow-100" />}
            </button>
          </div>
        </header>
        <main className="mt-8">{children}</main>
        <footer className="py-4 mt-8 text-center text-gray-500 flex flex-col items-center">
          <Image 
            src="/favicon.png" 
            alt="Favicon" 
            width={80} 
            height={80} 
            className="rounded mb-2"
          />
          <p>© {new Date().getFullYear()} Minune</p>
        </footer>
      </div>
    </div>
  )
}

export default ClientLayout;