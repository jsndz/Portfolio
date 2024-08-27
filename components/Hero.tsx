"use client";

import "../app/globals.css";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useEffect, useState } from "react";

function Hero() {
  const words = [
    {
      text: "Hello, I am",
      className: "text-white text-xl ",
    },
    {
      text: "Jaison Dsouza.",
      className: "text-white",
    },
  ];
  const [showTextRevealCard, setShowTextRevealCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTextRevealCard(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className=" h-screen flex items-center justify-center">
        <div className="text-white flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col  sm:flex-row items-center mb-6 sm:mb-4">
            <TypewriterEffectSmooth
              words={words}
              className="font-chelsea text-4xl sm:text-5xl lg:text-6xl text-center"
            />
          </div>
          {showTextRevealCard && (
            <TextRevealCard
              className="font-nixie text-base  sm:text-lg md:text-xl lg:text-2xl"
              text="What is my profession?"
              revealText="developer | engineer"
            ></TextRevealCard>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
