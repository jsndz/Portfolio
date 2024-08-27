"use client";

import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import HeroX from "@/components/HeroX";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroX></HeroX>
      <BackgroundBeams className="-z-40 bg-gray-900" />
    </>
  );
}

export default App;
