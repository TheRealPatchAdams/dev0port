"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import ShinyButton from "../components/ShinyButton";

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
      <section className="h-screen bg-gradient-to-r from-red-900 to-purple-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold mb-4">Hi, I'm Mark</h1>
        <p className="text-lg mb-8 max-w-md text-center">
          welcome to my human experience.
        </p>
        <ShinyButton />
      </section>

      {/* About Section */}
      <section
        ref={ref}
        id="about"
        className={`py-20 bg-gray-100 text-center transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="flex justify-center space-x-8 mt-8">
          <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            HTML
          </div>
          <div className="w-40 h-40 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            CSS
          </div>
          <div className="w-40 h-40 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            JavaScript
          </div>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-10">
          I’m a developer specializing in modern web technologies, focusing on
          building interactive and user-friendly applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-shadow duration-300"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-4">Project One</h3>
              <p className="text-gray-600 mb-4">React + Node.js</p>
              <a
                href="#"
                className="text-blue-500 font-bold hover:underline"
              >
                Learn More
              </a>
            </div>
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-shadow duration-300"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-4">Harold</h3>
              <p className="text-gray-600 mb-4">
                A machine learning app built with Python and Flask.
              </p>
              <a
                href="#"
                className="text-blue-500 font-bold hover:underline"
              >
                Learn More
              </a>
            </div>
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-shadow duration-300"
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

      {/* Social Media Section */}
      <section id="contact" className="py-20 bg-grey-700 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
          <p className="mb-6 text-lg text-gray-700">
            Feel free to reach out through any of my social media platforms!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/markbasaldua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/markbasaldua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
            </a>
            <a
              href="https://www.facebook.com/highforest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
