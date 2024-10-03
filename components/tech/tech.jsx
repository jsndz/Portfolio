import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Tech = () => {
  const testimonials = [
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote: "C",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div id="tech">
      <div id="filter">
        <h1 className="text-white text-[150px] font-extrabold">My Toolbox</h1>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
};

export default Tech;
