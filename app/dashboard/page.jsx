"use client"
import React from "react";
import Section from "../../components/Section";
import Benefits from "../../components/Benefits";
import Button from "../../components/Button";
import  {Gradient,BottomLine,BackgroundCircles}  from "../../public/design/Hero";
import Innovations from "../../components/Innovations";
import dynamic from 'next/dynamic';
// import {Globe} from "../../components/GridGlobe";
// const GridGlobe = dynamic(() => import('../../components/GridGlobe'), { ssr: false });
import GridDemo  from "../../components/GridGlobe";

const heroIcons = [
  "../../HomeIcon.svg", // Path to HomeIcon.svg
  "../../FileIcon.svg", // Path to another icon (add more as needed)
  "../../PlusIcon.svg", // Example of another icon
  "../../SearchIcon.svg", // Add other icons here
];

import { Parallax } from "react-scroll-parallax";
import { useRef } from "react";

// import robot from "../../public/assets";
import {heroBackground} from "../../public/assets";
import Header from "../../components/Header";
export default function Dashboard() {
  const parallaxRef = useRef(null);

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <Header />      

      {/* Add space after the Header */}
      

      {/* Main Content */}
      <Section
          className="pt-[10rem] -mt-[4rem]"
          crosses
          crossesOffset="lg:translate-y-[1.8rem] lg:translate-x-[0.5rem]"
          customPaddings
          id="hero"
        >
          <div className="container relative" ref={parallaxRef}>
            {/* Text Section */}
            <div className="relative z-1 max-w-[58rem] mx-auto text-center mb-[3rem] md:mb-16 lg:mb-[5rem]">
              <h1 className="h1 mb-6 text-n-1">
                DEEP DIVE IN AI WORLD
              </h1>
              <p className="body-1 max-w-2xl mx-auto mb-6 text-n-2 lg:mb-8">
                Unleash the power of AI within Brainwave. Upgrade your productivity
                with Brainwave, the open AI chat app.
              </p>
              <Button href="/latest" white>
                Get started
              </Button>
            </div>

            {/* Centered Content */}
            <div className="relative max-w-[22rem] mx-auto md:max-w-4xl lg:mb-20">
              <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div className="h-[1.2rem] bg-n-10 rounded-t-[0.8rem]" />
                  <div className="aspect-[33/40] rounded-b-[0.8rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  {/* <GridDemo/> */}
                    {/* <img
                      src="/assets/robot.png"
                      className="w-full h-auto max-h-[280px] mx-auto object-contain scale-[1.1] translate-y-[6%] md:scale-[1] md:-translate-y-[8%] lg:-translate-y-[10%]"
                      alt="AI"
                    /> */}
                  </div>
                  {/* <Parallax speed={8}>
                    <ul className="absolute -left-[4rem] bottom-[6rem] px-2 py-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-4" key={index}>
                          <img src={icon} width={28} height={50} alt={`icon-${index}`} />
                        </li>
                      ))}
                    </ul>
                  </Parallax> */}
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <BackgroundCircles parallaxRef={parallaxRef}/>
            <Gradient />
          </div>
          <BottomLine/>
        </Section>
        <Benefits/>
        <Innovations/>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} MyDashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  
  );
}

