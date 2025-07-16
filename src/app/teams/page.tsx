// src/app/teams/page.tsx
import React from "react";
import Hero from "../components/Hero";
import PageHeader from "../components/PageHeader";
import TeamMemberCard from "../components/TeamMemberCard";

// Sample team data
const teamMembers = [
  {
    name: "Herman Bachtiar",
    role: "CEO & Founder",
    photoUrl: "/images/team-alice.jpg",
    bio: "With 20 years in heavy transport, Alice built Tangguh from the ground up.",
  },
  {
    name: "Ahmad Farhan",
    role: "CTO",
    photoUrl: "/images/team-budi.jpg",
    bio: "Budi leads our logistics tech, optimizing routes and safety systems.",
  },
  {
    name: "Rudi Chandra",
    role: "Operations Manager",
    photoUrl: "/images/team-chandra.jpg",
    bio: "Chandra ensures every lift and transport runs smoothly on-site.",
  },
  // Add more members or fetch dynamically
];

export default function TeamsPage() {
  return (
    <main className="space-y-12">
      {/* Hero */}
      <Hero title="Our Team" backgroundUrl="/images/about-banner.webp" />

      {/* Header */}
      <PageHeader
        title="Meet the Team"
        subtitle="The experts behind every successful project"
      />

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((m) => (
          <TeamMemberCard
            key={m.name}
            name={m.name}
            role={m.role}
            photoUrl={m.photoUrl}
            bio={m.bio}
          />
        ))}
      </section>
    </main>
  );
}
