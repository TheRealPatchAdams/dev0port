import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const projects = [
    {
      title: "Harold",
      description: "A machine learning app built with Python and Flask.",
      link: "#",
    },
    {
      title: "PATCH22",
      description: "A responsive front-end design for e-commerce.",
      link: "https://www.patch22.net",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="container mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      
      {/* Social Media Section */}
      <section
        id="contact"
        className="py-20 bg-grey-700 text-center"
      >
        <div className="container mx-auto">
          <div className="flex justify-center space-x-3">
            <a
              href="https://www.instagram.com/markbasaaldua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
