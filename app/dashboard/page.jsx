"use client"
import React from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import BackgroundCircles  from "../../public/design/Hero";
import BottomLine  from "../../public/design/Hero";
import  Gradient  from "../../public/design/Hero";

const heroIcons = [
  "../../HomeIcon.svg", // Path to HomeIcon.svg
  "../../FileIcon.svg", // Path to another icon (add more as needed)
  "../../PlusIcon.svg", // Example of another icon
  "../../SearchIcon.svg", // Add other icons here
];

import { ScrollParallax} from "react-just-parallax";
import { useRef } from "react";

// import robot from "../../public/assets";
import {heroBackground} from "../../public/assets";
export default function Dashboard() {
  const parallaxRef = useRef(null);
  console.log("Dashborad on client or server ?");
  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-purple-700">MyDashboard</div>

          {/* Navbar */}
          <nav className="space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition-colors"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-700 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Button */}
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition">
            Get Updates
          </button>
        </div>
      </header>

      {/* Main Content */}
      <Section
       className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero">
          <div className="container relative" ref={parallaxRef} >
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
                DEEP DIVE IN AI WORLD 
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within Brainwave. Upgrade your productivity
              with Brainwave, the open AI chat app.
            </p>
            <Button href="/latest" white>
              Get started
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img
                      src="/assets/robot.png"
                      className="w-full h-auto max-h-[300px] mx-auto object-contain scale-[1.2] translate-y-[5%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[15%]"
                      alt="AI"
                    />
                  </div>
                  </div>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={`icon-${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
              
              <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
              </div>
            </div>
        </Section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} MyDashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
