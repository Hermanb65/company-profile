// src/app/components/BlogCard.tsx
import React from "react";
import Link from "next/link";

export default function BlogCard({
  title,
  excerpt,
  author,
  date,
  slug,
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO string
  slug: string;
}) {
  const formatted = new Date(date).toLocaleDateString();
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{excerpt}</p>
      </div>
      <div className="bg-gray-100 px-4 py-2 flex justify-between text-xs text-gray-500">
        <span>{author}</span>
        <span>{formatted}</span>
      </div>
      <Link
        href={`/blog/${slug}`}
        className="block text-center py-2 text-blue-600 hover:underline"
      >
        Read more
      </Link>
    </div>
  );
}
