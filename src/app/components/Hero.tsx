// src/components/Hero.tsx
import React from "react";

type HeroProps = {
  title: string;
  backgroundUrl: string;
};

export default function Hero({ title, backgroundUrl }: HeroProps) {
  return (
    <div
      className="h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "/public/images/heavy-lift-banner.webp " }}
    >
      <h1 className="text-4xl text-white font-bold drop-shadow">{title}</h1>
    </div>
  );
}
