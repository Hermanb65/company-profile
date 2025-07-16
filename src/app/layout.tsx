/// src/app/layout.tsx
"use client";

import React, { ReactNode } from "react";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      
        <body suppressHydrationWarning className="flex flex-col min-h-screen text-lg">
              <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
