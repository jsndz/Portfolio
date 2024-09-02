"use client";

import Navbar from "@/components/nav/Navbar";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import HeroX from "@/components/hero/Hero";

function App() {
  return (
    <>
      <HeroX></HeroX>
      <BackgroundBeams className="-z-40 bg-Navy" />
    </>
  );
}

export default App;
