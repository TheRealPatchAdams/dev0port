"use client";

export default function ResumePage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      <p className="text-lg text-gray-700 mb-4">
        View my experience, education, and certifications below. You can also download my resume as a PDF.
      </p>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-blue-500 rounded text-white hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
      <h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Web Developer at XYZ Company (2020-Present)</li>
        <li>Intern at ABC Tech (2018-2020)</li>
      </ul>
    </div>
  );
}
