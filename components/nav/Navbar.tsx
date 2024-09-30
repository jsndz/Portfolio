import React from "react";
import "./nav.css";
import "remixicon/fonts/remixicon.css";
import { FloatingDock } from "../ui/floating-dock";
import Image from "next/image";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: <i className="ri-home-line"></i>,
      href: "#",
    },

    {
      title: "Products",
      icon: <i className="ri-mail-fill "></i>,
      href: "#",
    },
  ];
  return (
    <div>
      {/* <FloatingDock items={links} desktopClassName="dark "></FloatingDock> */}
      <Image
        src="/JSN.png"
        alt="logo"
        width="162"
        height="119"
        className="pl-10 pt-5"
      ></Image>
    </div>
  );
};

export default Navbar;
