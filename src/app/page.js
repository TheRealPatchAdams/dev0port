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
      <section className="h-screen bg-gradient-to-r from-red-900 to-orange-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold mb-4">Hi, I'm Mark</h1>
        <p className="text-lg mb-8 max-w-md text-center">
        </p>
        <ShinyButton />
      </section>

   {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-50">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div
        className="bg-white rounded-lg shadow-sm hover:shadow-xl p-6 transition-shadow duration-300 ease-in-out"
        data-aos="zoom-in"
      >
        <h3 className="text-2xl font-bold mb-4">Project One Slice</h3>
        <p className="text-gray-600 mb-4">React + Node.js</p>
        <a
          href="#"
          className="text-blue-500 font-bold hover:underline"
        >
          Learn More
        </a>
      </div>
      <div
        className="bg-white rounded-lg shadow-sm hover:shadow-xl p-6 transition-shadow duration-300 ease-in-out"
        data-aos="zoom-in"
      >
        <h3 className="text-2xl font-bold mb-4">Harold</h3>
        <p className="text-gray-600 mb-2">
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


      {/* Social Media Section */}
      <section id="contact" className="py-20 bg-grey-700 text-center">
        <div className="container mx-auto">
      
          <div className="flex justify-center space-x-3">
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
