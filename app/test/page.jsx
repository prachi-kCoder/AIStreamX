"use client" ;
import React from "react";
import { ScrollParallax } from "react-just-parallax";
// Define your icons paths (relative to the public directory)
const heroIcons = [
  "../../HomeIcon.svg", // Path to HomeIcon.svg
  "../../FileIcon.svg", // Path to another icon (add more as needed)
  "../../SearchIcon.svg", // Example of another icon
  "../../PlusIcon.svg", // Add other icons here
];

const Hero = () => {
  return (
    <>
      <p>Prachi</p>
      <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
        {heroIcons.map((icon, index) => (
          <li className="p-5" key={index}>
            <img src={icon} width={100} height={200} alt={`icon-${index}`} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hero;
