"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsLightMode(storedTheme !== "dark");
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-6 flex justify-between items-center">
          {/* Header content remains the same */}
        </header>
        <main className="mt-8">{children}</main>
        <footer className="py-4 mt-8 text-center text-gray-500 dark:text-gray-400 flex flex-col items-center">
          <Image
            src="/favicon.png"
            alt="Favicon"
            width={80}
            height={80}
            className="rounded mb-2"
          />
          <div className="flex items-center space-x-2">
            <p>© {new Date().getFullYear()} Minune</p>
            <span className="text-gray-400">|</span>
            <Link href="/admin" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Admin
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ClientLayout;