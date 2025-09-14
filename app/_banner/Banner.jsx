import Image from "next/image";
import React from "react";
import banner from "../images/aqzor-main-banner.png";

const Banner = () => {
  return (
    <section id="home">
      <div className="h-[60px] md:h-[80px] w-full"></div>
      <div>
        <Image src={banner} className="w-full !h-auto" alt="aqzor" />
      </div>
    </section>
  );
};

export default Banner;
