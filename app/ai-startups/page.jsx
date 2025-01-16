"use client";
import Section  from "../../components/Section";
import React from 'react'
import {BentoGrid, BentoGridItem } from "../../components/BentoGrid"
import StartUpNews from "../../components/StartUpNews"
import { businessItems } from "../../components/constants";

const StartUps = () => {
  return (
    <Section>
      <h2 className="text-n-1 text-center mb-12 text-gray-800 dark:text-white h1 mb-6 " >
        AI BUSINESS
      </h2>
        <BentoGrid className="w-full py-20 px-10">
          {businessItems.map((item, i) => (
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
        <StartUpNews/>
      </div>
      {/* <GridGlobe/> fix its configuration of three/fiber and dependencies issues compatibility*/} 
    </Section>
  )
}

export default StartUps;