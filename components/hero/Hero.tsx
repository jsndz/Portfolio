import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../ui/typewriter-effect";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { FlipWords } from "../ui/flip-words";
import "./Hero.css";
export default function Component() {
  const words = ["developer", "Engineer", "Student", "human"];
  return (
    <div id="main">
      <h3 className="text-6xl font-Montserrat text-Indigo">Hello, I am</h3>
      <h1 id="name" className="font-Montserrat text-Lavender">
        JAISON DSOUZA
      </h1>
      <div id="flip">
        <FlipWords
          words={words}
          className="text-6xl font-nixie text-Indigo"
        ></FlipWords>
      </div>
      <h3 className="text-Indigo" id="work">
        Curious About My Work?
      </h3>

      <div></div>
    </div>
  );
}
