"use client";

import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Projects from "@/components/projects/projects";
import HeroX from "@/components/hero/Hero";

function App() {
  return (
    <>
      <div id="app">
        <div id="intro">
          <Navbar></Navbar>
          <HeroX></HeroX>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
      </div>
    </>
  );
}

export default App;
