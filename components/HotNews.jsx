"use client";

import React from "react";
import { companies, testimonials } from "./constants";
import Tagline from "./Tagline";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
const HotNews= () => {
  return (
    <section id="testimonials" className="py-14">
      <h1 className="heading">
        <Tagline>  In the Fast-Paced AI Revolution, Staying Updated is the Ultimate Edge! </Tagline>
        <span className="h3 text-purple"> AI Moves Fast — Stay Ahead! </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-6 ">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          
        </div>

      </div>
    </section>
  );
};

export default HotNews;
