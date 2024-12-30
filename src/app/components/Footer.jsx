"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-950 text-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/markbasaldua/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-500 hover:scale-110 hover:underline transition duration-300"

          >
            <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/markbasaldua/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-500 hover:scale-110 hover:underline transition duration-300"

          >
            <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
          </a>
          <a
            href="https://www.facebook.com/highforest"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-500 hover:scale-110 hover:underline transition duration-300"

          >
            <FontAwesomeIcon icon={faFacebook} className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
