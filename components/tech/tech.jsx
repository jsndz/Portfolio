import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import InfScroll from "../inf/infScroll";

const Tech = () => {
  const lang = [
    {
      src: "/assets/lang/JS.svg",
    },
    {
      src: "/assets/lang/C.svg",
    },
    {
      src: "/assets/lang/C++.svg",
    },
    {
      src: "/assets/lang/CSS.svg",
    },
    {
      src: "/assets/lang/HTML.svg",
    },
    {
      src: "/assets/lang/Java.svg",
    },
    {
      src: "/assets/lang/Python.svg",
    },
    {
      src: "/assets/lang/Solidity.svg",
    },
    {
      src: "/assets/lang/TS.svg",
    },
  ];
  const lib = [
    {
      src: "/assets/lib/Apollo.svg",
    },
    {
      src: "/assets/lib/Axios.svg",
    },
    {
      src: "/assets/lib/ExpressJs.svg",
    },
    {
      src: "/assets/lib/Mongoosejs.svg",
    },
    {
      src: "/assets/lib/React.svg",
    },
    {
      src: "/assets/lib/Redux.svg",
    },
    {
      src: "/assets/lib/SequelizeJs.svg",
    },
    {
      src: "/assets/lib/SocketIo.svg",
    },
    {
      src: "/assets/lib/Tailwind.svg",
    },
  ];
  const softwareLogos = [
    {
      src: "/assets/sft/MongoDB.svg",
    },
    {
      src: "/assets/sft/Mysql.svg",
    },
    {
      src: "/assets/sft/Pgsql.svg",
    },
    {
      src: "/assets/sft/Redis.svg",
    },

    {
      src: "/assets/sft/VercelW.svg",
    },
    {
      src: "/assets/sft/Vite.svg",
    },
  ];

  return (
    <div id="tech">
      <div id="filter">
        <h1 className="text-white text-[150px] font-extrabold">My Toolbox</h1>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={lang}
          direction="left"
          speed="slow"
        ></InfiniteMovingCards>
        <InfiniteMovingCards
          items={lib}
          direction="right"
          speed="slow"
        ></InfiniteMovingCards>
        <InfiniteMovingCards
          items={softwareLogos}
          direction="left"
          speed="slow"
        ></InfiniteMovingCards>
      </div>
    </div>
  );
};

export default Tech;
