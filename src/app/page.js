"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ShinyButton from "./components/ShinyButton";

export default function HomePage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-red-900 to-orange-900 text-white flex flex-col items-center justify-center">
        <h1
          className="text-6xl font-extrabold mb-4 select-none focus:outline-none"
          tabIndex={-1} // Prevent focus
          contentEditable={false} // Ensure it's not editable
        >
          "Oh, hi Mark!"
        </h1>
        <ShinyButton />
      </section>
    </div>
  );
}
