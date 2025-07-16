// src/app/about/page.tsx
import React from "react";
import Hero from "../components/Hero";
import PageHeader from "../components/PageHeader";
import TeamMemberCard from "../components/TeamMemberCard";

export default function AboutPage() {
  // Sample team members
  const team = [
    {
      name: "Herman Bachtiar",
      role: "CEO & Founder",
      photoUrl: "/images/team-herman.jpg",
      bio: "With 20 years in heavy transport, Alice built Tangguh from the ground up.",
    },
    {
      name: "Ahmad Farhan",
      role: "CTO",
      photoUrl: "/images/team-farhan.jpg",
      bio: "Budi leads our logistics tech, optimizing routes and safety systems.",
    },
    // add more members as needed
  ];

  return (
    <main className="space-y-16">
      {/* Hero Banner */}
      <Hero title="About Us" backgroundUrl="/images/about-banner.webp" />

      {/* Company History */}
      <section className="max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="text-3xl font-bold">Our History</h2>
        <p className="text-gray-700">
          Established in 2005, PT Tangguh started with a single crane and a
          vision to serve Indonesia’s growing infrastructure needs. Over the
          years we’ve expanded to a full fleet, delivered thousands of projects,
          and built a reputation for reliability.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <PageHeader
          title="Meet the Team"
          subtitle="Our experts drive every successful lift and transport"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamMemberCard
              key={m.name}
              name={m.name}
              role={m.role}
              photoUrl={m.photoUrl}
              bio={m.bio}
            />
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-6 text-center">
          <h2 className="text-3xl font-bold">Our Culture</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">Safety First</h3>
              <p className="mt-2 text-gray-600">
                We never compromise on safety—for our team, our clients, or the
                environment.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="mt-2 text-gray-600">
                Honest communication and fair practices are at the heart of
                everything we do.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We leverage the latest technology and process improvements to
                serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
