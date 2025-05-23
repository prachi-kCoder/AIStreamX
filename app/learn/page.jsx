"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Tagline from "../../components/Tagline";
import Header from "../../components/Header";
import { roadmap } from "../../components/constants";
import { check2, grid, loading1 } from "../../public/assets";
import { Gradient } from "../../public/design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <Header />
    <div className="container md:pb-10">
      <Heading tag="Learn Today To Stay Ahead" title="Upskill Yourself" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <Image
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                    priority
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <Image
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <Image
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                      priority
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                  <div className="flex justify-center mt-6">
                    <Link href={`/course/${item.id}`}>
                      <Button>Dive Deep</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/learn">Let's start</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
