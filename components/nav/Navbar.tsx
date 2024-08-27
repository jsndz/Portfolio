import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="relative px-4 py-4 flex justify-between items-center ">
          <div className="max-w-xs max-h-xs overflow-hidden">
            <Image
              src="/JSN.png"
              width={150}
              height={150}
              alt="JSN logo"
            ></Image>
          </div>{" "}
          <div>
            <span className="text-white z-10">Contact me</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
