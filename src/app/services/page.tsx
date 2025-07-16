/// src/app/services/page.tsx
import React from "react";
import Hero from "../components/Hero";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
  return (
    <main className="space-y-8">
      {/* Hero */}
      <Hero
        title="Lifting & Transport Equipment"
        backgroundUrl="/images/heavy-lift-banner.webp"
      />

      {/* Page Header (in place of breadcrumbs) */}
      <PageHeader
        title="Our Services"
        subtitle="PT TANGGUH HEAVY LIFT & TRANSPORT offers top-tier solutions across Indonesia."
      />

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-6 text-lg text-gray-700 px-4">
        PT TANGGUH HEAVY LIFT & TRANSPORT offers top-tier lifting and transport
        solutions across Indonesia—from modular skids to over-dimensional cargo.
      </section>

      {/* Services Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 pb-12">
        <ServiceCard
          iconUrl="/icons/crane.svg"
          title="Heavy Lift Equipment"
          description="Cranes, gantries, and jacks capable of lifting up to 1,000 tons safely."
        />
        <ServiceCard
          iconUrl="/icons/flatbed.svg"
          title="Transport Solutions"
          description="Specialized trailers for over-dimensional cargo, including route planning and escorts."
        />
        <ServiceCard
          iconUrl="/icons/skid.svg"
          title="Modular Skids"
          description="Design and fabrication of modular skids for rapid field installation."
        />
      </section>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white text-center py-8">
        <h2 className="text-2xl font-bold">Ready to move heavy cargo?</h2>
        <a
          href="/contact"
          className="mt-4 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
