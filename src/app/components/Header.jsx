"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-center space-x-10 px-4">
        {/* Home Icon */}
        <Link href="/" className="relative group flex flex-col items-center">
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            className={`transition duration-300 ${
              pathname === "/" ? "text-blue-400 scale-125" : "hover:text-blue-400"
            }`}
          />
          {pathname === "/" && (
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-white-400 opacity-100 transition-opacity duration-300">
              HOME
            </span>
          )}
        </Link>

        {/* Projects Icon */}
        <Link href="/projects" className="relative group flex flex-col items-center">
          <FontAwesomeIcon
            icon={faProjectDiagram}
            size="lg"
            className={`transition duration-300 ${
              pathname === "/projects" ? "text-blue-400 scale-125" : "hover:text-blue-400"
            }`}
          />
          {pathname === "/projects" && (
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-white-400 opacity-100 transition-opacity duration-300">
              PROJECTS
            </span>
          )}
        </Link>



        

        {/* Contact Icon */}
        <Link href="/contact" className="relative group flex flex-col items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className={`transition duration-300 ${
              pathname === "/contact" ? "text-blue-400 scale-125" : "hover:text-blue-400"
            }`}
          />
          {pathname === "/contact" && (
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-white-400 opacity-100 transition-opacity duration-300">
              CONTACT
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
