// src/components/PageHeader.tsx
import React from "react";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="bg-gray-50 py-6 px-4 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">{subtitle}</p>
      )}
    </header>
  );
}
