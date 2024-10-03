"use client";

import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import Tech from "@/components/tech/tech";
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
        <div id="technology">
          <Tech></Tech>
        </div>
      </div>
    </>
  );
}

export default App;
