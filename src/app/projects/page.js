"use client";

import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project One Slice */}
          <div
            className="bg-white rounded-lg shadow-sm hover:shadow-xl p-6 transition-shadow duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-4">Project One Slice</h3>
            <p className="text-gray-600 mb-4">React + Node.js</p>
            <Link href="/oneslice" className="text-blue-500 font-bold hover:underline">
              Learn More
            </Link>
          </div>

          {/* Harold Project */}
          <div
            className="bg-white rounded-lg shadow-sm hover:shadow-xl p-6 transition-shadow duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-4">Harold</h3>
            <p className="text-gray-600 mb-4">
              A machine learning app built with Python and Flask.
            </p>
            <Link href="/harold" className="text-blue-500 font-bold hover:underline">
              Learn More
            </Link>
          </div>

          {/* PATCH22 Project */}
          <div
            className="bg-white rounded-lg shadow-sm hover:shadow-xl p-6 transition-shadow duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-4">PATCH22</h3>
            <p className="text-gray-600 mb-4">
              A responsive front-end design for e-commerce.
            </p>
            <a
              href="https://www.patch22.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
