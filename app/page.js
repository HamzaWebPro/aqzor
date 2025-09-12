import React from "react";
import Container from "./_components/_container/Container";
import Navbar from "./_components/_navbar/Navbar";
import Banner from "./_banner/Banner";
import ProductSlider from "./_components/_product-slider/ProductSlider";
import About from "./_components/_about/About";
import Footer from "./_components/_footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductSlider />
      <About />
      <Footer/>
    </>
  );
};

export default page;
