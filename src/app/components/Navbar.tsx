// src/app/components/Navbar.tsx
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            Tangguh Heavy Lift
          </h1>
        </Link>
        <ul className="flex flex-wrap gap-6 text-base font-medium list-none m-0 p-0">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:underline">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
