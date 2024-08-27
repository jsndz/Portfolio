import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { FlipWords } from "./ui/flip-words";

export default function Component() {
  const words = ["developer", "Engineer", "Student", "human"];
  return (
    <div className="min-h-screen  text-white p-8 m-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h1 className="text-4xl font-nixie">Hello, I am</h1>
            <h1 className="text-5xl font-chelsea">Jaison Dsouza</h1>
            <h1 className="text-5xl font-nixie">
              I am a{" "}
              <FlipWords className="text-white" words={words}></FlipWords>
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            <Card className="bg-gray-800 border-gray-700 w-full">
              <CardHeader>
                <CardTitle className="text-xl">About Me</CardTitle>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-700 w-full">
              <CardHeader>
                <CardTitle className="text-xl">Projects</CardTitle>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-700 w-full">
              <CardHeader>
                <CardTitle className="text-xl">Experience</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
