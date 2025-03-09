"use client";
import Section  from "../../components/Section";
import Header  from "../../components/Header";
import HotNews from "../../components/HotNews";
import React from 'react'
import {BentoGrid, BentoGridItem } from "../../components/BentoGrid"
import { gridItems } from "../../components/constants";
import Button from "../../components/Button";

const LatestUpdates = () => {
  return (
    <Section className="overflow-hidden">
      <Header/>
      <h2 className="text-n-1 text-center text-gray-800 dark:text-white h1 mt-3.5 mb-0.5 dark:text-white text-black leading-snug tracking-wide " >
        Latest Updates
      </h2>
        <BentoGrid className="w-full py-20 px-11">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
      </BentoGrid>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
              <Button href="/news">Need More!</Button>
            </div>
      <div className="px-11">
        <HotNews/>
      </div>
      {/* <GridGlobe/> fix its configuration of three/fiber and dependencies issues compatibility*/} 
    </Section>
  )
}

export default LatestUpdates;