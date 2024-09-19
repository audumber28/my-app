"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [navbar, setNavbar] = useState(false);

  const handleThemeToggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header>
      <div className="flex justify-between items-center shadow-lg p-4">
        <div className="font-serif text-red-500 pl-2 text-2xl">
          Audumber Shirodkar
        </div>

        {/* Menu toggle button for small screens */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
          </button>
        </div>

        {/* Navigation links */}
        <div className={`flex gap-4 ml-8 pr-2 ${navbar ? 'flex-col' : 'hidden'} md:flex`}>
          <Link
            className={`block lg:inline ${currentTheme === "dark" ? "text-white" : "text-neutral-900"} hover:text-blue-500 p-2 `}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`block lg:inline ${currentTheme === "dark" ? "text-white" : "text-neutral-900"} hover:text-blue-500 p-2 `}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`block lg:inline ${currentTheme === "dark" ? "text-white" : "text-neutral-900"} hover:text-blue-500 p-2 `}
            href="/projects"
          >
            Projects
          </Link>
          <button
            className="bg-slate-100 p-2 rounded-xl"
            onClick={handleThemeToggle}
          >
            {currentTheme === "dark" ? (
              <RiSunLine size={15} color="black" />
            ) : (
              <RiMoonFill size={15} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
