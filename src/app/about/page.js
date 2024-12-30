"use client";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg leading-7 text-gray-700">
        I'm [Your Name], a passionate Web Developer with experience in React, Django, and other technologies. I enjoy
        crafting clean, efficient, and user-friendly applications. When I'm not coding, I love [your hobbies/interests].
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Frontend: React, TailwindCSS, Next.js</li>
        <li>Backend: Django, Node.js, REST APIs</li>
        <li>Tools: Git, Docker, Figma</li>
      </ul>
    </div>
  );
}
