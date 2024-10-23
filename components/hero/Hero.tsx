import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../ui/typewriter-effect";
import Image from "next/image";
import ArrowIcon from "../../public/arrow-right-down-line.svg";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { FlipWords } from "../ui/flip-words";
import "./Hero.css";

export default function Component() {
  const words = ["developer", "Engineer", "Student"];
  return (
    <div id="main" className="">
      <div id="hero" className="">
        <div id="container">
          <div id="image" className=" pb-5 absolute  "></div>
          <div id="name" className="z-10">
            <h3 className="text-[48px] font-Montserrat  leading-[100%] text-[#DEDEDE] mb-[-20px] ml-1">
              Hello, I am
            </h3>
            <h1 className="font-Montserrat text-[150px]  leading-[100%] font-extrabold z-50 text-white tracking-[-0.1em] ">
              JAISON DSOUZA
            </h1>
          </div>
        </div>
        <div id="flip">
          {" "}
          <FlipWords
            words={words}
            className="text-6xl font-nixie text-[#DEDEDE]"
          ></FlipWords>
        </div>
        {/* <div
          id="description"
          className="text-[#DEDEDE] pt-7 font-nixie  text-3xl text-center"
        >
          <p>
            A Computer Science Engineering student and Full Stack Developer
            focused on building efficient and scalable backend systems.
          </p>
        </div> */}
      </div>
      <div id="cta" className=" pl-5 pt-7 ">
        <h3 className="text-[#DEDEDE] flex " id="work">
          Curious About My Work?
        </h3>
        <div className=" flex">
          <Image src={ArrowIcon} alt="arrow" width="20" height="20" />
          <h3 className="pt-1 text-white">scroll down</h3>
        </div>
      </div>
    </div>
  );
}
