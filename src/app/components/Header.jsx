// src/app/components/Header.jsx
"use client";

import { useAuth } from "../../context/AuthContext"; // Ensure path is correct
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faEnvelope, faFileAlt, faTools, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { isAuthenticated, userAuthority } = useAuth(); // Access auth context
  const pathname = usePathname(); // Get the current route

  if (!isAuthenticated) {
    return null; // Optionally show a login prompt
  }

  return (
    <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white py-6 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-center space-x-10 px-4">
        {/* Home Icon */}
        <Link href="/" className="relative group flex flex-col items-center">
          <FontAwesomeIcon icon={faHome} size="lg" className={`transition duration-300 ${pathname === "/" ? "text-lime-400 scale-125" : "text-gray-400 hover:text-lime-400"}`} />
          <span className={`absolute top-6 left-1/2 transform -translate-x-1/2 text-xs transition-opacity duration-300 ${pathname === "/" ? "opacity-100 text-lime-400" : "opacity-0"}`}>
            HOME
          </span>
        </Link>

        {/* Add other links based on userAuthority */}
        {userAuthority === 'admin' && (
          <Link href="/admin-dashboard" className="relative group flex flex-col items-center">
            <FontAwesomeIcon icon={faTools} size="lg" className={`transition duration-300 ${pathname.startsWith("/admin-dashboard") ? "text-lime-400 scale-125" : "text-gray-400 hover:text-lime-400"}`} />
            <span className={`absolute top-6 left-1/2 transform -translate-x-1/2 text-xs transition-opacity duration-300 ${pathname.startsWith("/admin-dashboard") ? "opacity-100 text-lime-400" : "opacity-0"}`}>
              ADMIN DASHBOARD
            </span>
          </Link>
        )}

        {/* Add other icons here */}
      </nav>
    </header>
  );
};

export default Header;
