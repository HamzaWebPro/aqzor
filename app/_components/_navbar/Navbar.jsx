"use client";
import React, { useEffect, useState } from "react";
import Container from "../_container/Container";
import logo from "../../images/aqzor-logo.png";
import Image from "next/image";

const Navbar = () => {
  let [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    let oldScroll = 0;
    window.addEventListener("scroll", () => {
      window.pageYOffset > oldScroll ? setNavScroll(true) : setNavScroll(false);
      oldScroll = window.pageYOffset;
    });
  }, []);
  return (
    <div
      className={`${
        navScroll && "!top-[-300px] duration-300 bg-white"
      } glass-container duration-300 bg-white shadow-lg fixed top-0 left-0 w-full    z-[9999999]`}
    >
      <Container>
        <div className=" h-[60px] md:h-[80px] flex justify-center items-center  ">
          <div>
            <Image
              src={logo}
              className="w-[100px] md:w-[100px] lg:w-[150px] !h-auto"
              alt="aqzor"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
