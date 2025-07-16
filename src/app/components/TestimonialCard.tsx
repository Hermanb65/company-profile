// src/app/components/TestimonialCard.tsx
import React from "react";

export default function TestimonialCard({
  name,
  role,
  quote,
  avatarUrl,
}: {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}) {
  return (
    <div className="p-6 border rounded-lg flex space-x-4">
      <img
        src={avatarUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="italic text-gray-800">“{quote}”</p>
        <p className="mt-2 font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
