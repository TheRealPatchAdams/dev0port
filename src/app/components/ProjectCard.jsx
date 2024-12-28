import Link from "next/link";

export default function ProjectCard({ title, description, link }) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm hover:shadow-xl p-6 transition-shadow duration-300"
      data-aos="zoom-in"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      {/* Handle external and internal links differently */}
      {link.startsWith("http") ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-bold hover:underline"
        >
          Learn More
        </a>
      ) : (
        <Link href={link}>
          <a className="text-blue-500 font-bold hover:underline">Learn More</a>
        </Link>
      )}
    </div>
  );
}
