"use client";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white fixed w-full z-20 shadow-lg">
      <nav className="container mx-auto flex justify-center space-x-8 p-4 text-lg font-semibold">
        {/* Navigation Links */}
       
        <a
          href="#projects"
          className="hover:text-blue-400 transition duration-200"
        >
          projects
        </a>
        <a
          href="#contact"
          className="hover:text-blue-400 transition duration-200"
        >
          contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
