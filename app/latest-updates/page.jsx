"use client";
import Section  from "../../components/Section";
import HotNews from "../../components/HotNews";
import React from 'react'
import {BentoGrid, BentoGridItem } from "../../components/BentoGrid"
import { gridItems } from "../../components/constants";

const LatestUpdates = () => {
  return (
    <Section>
      <h2 className="text-n-1 text-center mb-10 text-gray-800 dark:text-white h1 mb-6 dark:text-white text-black leading-snug tracking-wide " >
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
      <div className="px-11">
        <HotNews/>
      </div>
      {/* <GridGlobe/> fix its configuration of three/fiber and dependencies issues compatibility*/} 
    </Section>
  )
}

export default LatestUpdates;