import React from "react";
import "./nav.css";
import "remixicon/fonts/remixicon.css";
import { FloatingDock } from "../ui/floating-dock";
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
    <div id="dock">
      <FloatingDock items={links} desktopClassName="dark "></FloatingDock>
    </div>
  );
};

export default Navbar;
