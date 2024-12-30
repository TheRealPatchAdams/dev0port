"use client";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-oldeEnglish font-bold mb-8 text-center">
        Contact Me
      </h1>

      {/* Contact Details */}
      <ul className="list-disc list-inside text-gray-700 space-y-4">
        <li>
          Email:{" "}
          <a
            href="mailto:hello@markbasaldua.com"
            className="text-blue-500 hover:underline"
          >
            hello@markbasaldua.com
          </a>
        </li>
      </ul>
    </div>
  );
}
