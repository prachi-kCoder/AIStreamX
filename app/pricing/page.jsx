"use client"; // Ensure this component is treated as a client component

import Section from "../../components/Section";
import Header from "../../components/Header";
import { smallSphere, stars } from "../../public/assets";
import Heading from "../../components/Heading";
import PricingList from "../../components/PricingList";
import { LeftLine, RightLine } from "../../public/design/Pricing";
import Image from "next/image"; // Import Next.js Image component

const Pricing = () => {
  return (
   
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
       <Header />
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1 mt-8"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with AI-STREAMX"
          title="BOOST YOUR PRODUCTIVITY WITH AI"
        />

        <div className="relative">
          <PricingList />
          {/* <RightLine /> */}
          {/* <LeftLine /> */}
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;