// src/app/page.tsx
import Link from "next/link";
import React from "react";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";

export default function HomePage() {
  // Preview data for services
  const servicesPreview = [
    {
      iconUrl: "/icons/crane.svg",
      title: "Heavy Lift Equipment",
      description:
        "Cranes, gantries, and jacks capable of lifting up to 1,000 tons safely.",
      href: "/services",
    },
    {
      iconUrl: "/icons/flatbed.svg",
      title: "Transport Solutions",
      description:
        "Specialized trailers for over-dimensional cargo, including route planning.",
      href: "/services",
    },
    {
      iconUrl: "/icons/skid.svg",
      title: "Modular Skids",
      description:
        "Design and fabrication of modular skids for rapid field installation.",
      href: "/services",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Operations Manager, PT ABC",
      quote:
        "Tangguh Heavy Lift & Transport handled our oversized modules flawlessly—on time and under budget.",
      avatarUrl: "/images/testimonial-jane.jpg",
    },
    {
      name: "John Smith",
      role: "Project Lead, XYZ Corp",
      quote:
        "Their transport team planned the entire route and escort—zero downtime for us.",
      avatarUrl: "/images/testimonial-john.jpg",
    },
  ];

  return (
    <main className="space-y-16">
      {/* Hero */}
      <Hero
        title="PT TANGGUH HEAVY LIFT & TRANSPORT"
        backgroundUrl="/images/home-banner.webp"
      />

      {/* Company Overview */}
      <section className="max-w-3xl mx-auto text-center space-y-4 px-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="text-gray-700">
          We provide best-in-class lifting and transport solutions across
          Indonesia, ensuring safety, efficiency, and on-schedule delivery for
          even your most challenging loads.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Learn More About Us
        </Link>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Core Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {servicesPreview.map((svc) => (
   <Link key={svc.title} href={svc.href}>
    <ServiceCard
       iconUrl={svc.iconUrl}
       title={svc.title}
       description={svc.description}
     />
   </Link>
 ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="space-y-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              quote={t.quote}
              avatarUrl={t.avatarUrl}
            />
          ))}
        </div>
      </section>

      {/* Blog CTA */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-2xl font-bold">Insights & News from Our Team</h2>
        <p className="mt-2">
          Explore case studies, industry updates, and company news.
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100"
        >
          Read Our Blog
        </Link>
      </section>
    </main>
  );
}
