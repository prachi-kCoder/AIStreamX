import React from "react";
import Section from "./Section";
import { socials } from "./constants";

const Footer = () => {
  return (
    <Section crosses className="flex justify-center !px-0 !py-10">
      <div className="container flex flex-col items-center text-center">
        {/* Social Icons */}
        <ul className="flex gap-5 mb-3">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12  rounded-full transition-transform hover:scale-110 hover:bg-gray-600"
              >
                <img src={item.iconUrl} width={24} height={24} alt={item.title} />
              </a>
            </li>
          ))}
        </ul>

        {/* Footer Text */}
        <div className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg">
          <p>&copy; {new Date().getFullYear()} NEXUS AI. All rights reserved.</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
