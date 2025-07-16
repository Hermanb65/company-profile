// src/app/create-blog/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type FormData = {
  title: string;
  content: string;
  tags?: string;
};

export default function CreateBlogPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace("/"); // or "/login" if you have one
      }
    });
  }, [router]);

  const onSubmit = async (values: FormData) => {
    setLoading(true);
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData?.session?.user;
    if (!user) return;

    // Generate a simple slug
    const slug = values.title
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-");

    const { error } = await supabase.from("posts").insert({
      title: values.title,
      slug,
      content: values.content,
      author_id: user.id,
      // if you added a `tags` column, you could split on commas:
      // tags: values.tags?.split(",").map(t => t.trim())
    });

    setLoading(false);

    if (error) {
      alert("Error creating post: " + error.message);
    } else {
      router.push("/blog");
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            placeholder="Your post title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">Title is required.</p>
          )}
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium mb-1">Content (Markdown)</label>
          <textarea
            {...register("content", { required: true })}
            rows={8}
            className="w-full px-3 py-2 border rounded font-mono focus:outline-none focus:ring"
            placeholder="Write your post in Markdown…"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">Content is required.</p>
          )}
        </div>

        {/* Optional Tags */}
        <div>
          <label className="block font-medium mb-1">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            {...register("tags")}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            placeholder="e.g. shipping, heavy-lift, case-study"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Publishing…" : "Publish Post"}
        </button>
      </form>
    </main>
  );
}
