import React from "react";
import Container from "../_container/Container";
import together from "../../images/together.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative py-[50px] md:py-[60px] lg:py-[90px] bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      {/* Background Shapes - more visible */}
      <div className="absolute top-10 left-0 w-[250px] h-[250px] bg-pink-200 rounded-full blur-2xl opacity-60 "></div>
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-pink-200  rounded-full blur-2xl opacity-60 "></div>
      <div className="absolute -top-16 right-20 w-[200px] h-[200px]  bg-blue-200  rounded-full blur-2xl opacity-60 "></div>
      <div className="absolute bottom-32 left-20 w-[220px] h-[220px] bg-blue-200  rounded-full blur-2xl opacity-50 "></div>

      <Container>
        {/* Heading + Subheading */}
        <div className="text-center relative z-20 mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            More Than Just a Bottle
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            AQZOR bottles are designed to inspire a healthier, stylish lifestyle
            — crafted with precision, elegance, and sustainability in mind.
          </p>
        </div>

        {/* Content */}
        <div className="flex  relative z-20 flex-col lg:flex-row items-center gap-12">
          {/* Left Side Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <Image
              src={together}
              alt="AQZOR Bottle"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl object-contain"
            />
            {/* Extra Shape Behind Image */}
            <div className="absolute -bottom-6 -left-6 w-[140px] h-[140px] bg-pink-200 rounded-full blur-2xl opacity-70 -z-10"></div>
          </div>

          {/* Right Side Text */}
          <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed">
            <p className="mb-4">
              At <span className="font-semibold">AQZOR</span>, we believe a
              bottle is more than just a container — it’s a statement of
              lifestyle. Our bottles are engineered to keep your drinks at the
              perfect temperature, whether you’re on a Canadian mountain trail
              or in the heart of Toronto.
            </p>
            <p className="mb-4">
              Each AQZOR bottle is crafted with{" "}
              <span className="font-semibold">premium stainless steel</span>,
              sustainable materials, and a design-first approach that blends
              minimalism with durability.
            </p>
            <p>
              From everyday hydration to adventure-ready toughness, AQZOR is{" "}
              <span className="italic">Canada’s trusted companion</span> for a
              healthier, more stylish tomorrow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
