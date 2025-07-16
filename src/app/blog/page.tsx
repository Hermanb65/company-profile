// src/app/blog/page.tsx
import React from "react";
import { supabase } from "../../lib/supabaseClient";
import BlogCard from "../components/BlogCard";

type Post = {
  id: string;
  title: string;
  content: string;
  author_id: string;
  inserted_at: string;
  slug: string;
};

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from<Post>("posts")
    .select("id, title, content, author_id, inserted_at, slug")
    .order("inserted_at", { ascending: false });

  if (error) {
    return (
      <p className="p-4 text-red-600">Error loading posts: {error.message}</p>
    );
  }

  const excerpt = (c: string) => (c.length > 100 ? c.slice(0, 100) + "…" : c);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts && posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard
              key={p.id}
              title={p.title}
              excerpt={excerpt(p.content)}
              author={p.author_id}
              date={p.inserted_at}
              slug={p.slug}
            />
          ))}
        </div>
      ) : (
        <p>No posts yet.</p>
      )}
    </main>
  );
}
