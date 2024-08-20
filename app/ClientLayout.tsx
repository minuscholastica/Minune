'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check if there's a stored preference
    const storedTheme = localStorage.getItem('theme');
    setIsLightMode(storedTheme === 'light');
  }, []);

  useEffect(() => {
    // Update body class and localStorage when isLightMode changes
    if (isLightMode) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${isLightMode ? 'light' : 'dark'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hover:text-gray-500">Home</Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/minu-choi-2aa642211" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com/minune29" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://github.com/minuscholastica" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </Link>
              <button onClick={toggleTheme} aria-label="Toggle light mode">
                {isLightMode ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Image 
                src="/Minu2.jpeg" 
                alt="Minu" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <Link href="/about" className="text-lg hover:text-gray-500">About me</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
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