// src/app/components/TeamMemberCard.tsx
import React from "react";

export default function TeamMemberCard({
  name,
  role,
  photoUrl,
  bio,
}: {
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
}) {
  return (
    <div className="p-6 border rounded-lg text-center">
      <img
        src={photoUrl}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="mt-2 text-gray-700 text-sm">{bio}</p>
    </div>
  );
}
