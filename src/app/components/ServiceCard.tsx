// src/app/components/ServiceCard.tsx
import React from "react";

export default function ServiceCard({
  iconUrl,
  title,
  description,
}: {
  iconUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex space-x-4 p-4 border rounded-lg hover:shadow-lg transition">
      <img src={iconUrl} alt={title} className="w-12 h-12 object-contain" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
