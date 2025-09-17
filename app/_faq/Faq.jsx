"use client";
import React, { useState } from "react";
import Container from "../_components/_container/Container";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What makes AQZOR bottles unique?",
    answer:
      "AQZOR bottles combine premium stainless steel, stylish Canadian design, and advanced insulation technology to keep your drinks at the perfect temperature all day.",
  },
  {
    question: "Are AQZOR bottles eco-friendly?",
    answer:
      "Yes! Our bottles are crafted with sustainable materials, reducing plastic waste while giving you a long-lasting hydration companion.",
  },
  {
    question: "How long do AQZOR bottles keep drinks hot or cold?",
    answer:
      "Our double-wall insulation keeps beverages cold for up to 24 hours and hot for up to 12 hours, perfect for any lifestyle.",
  },
  {
    question: "Can I use AQZOR bottles for carbonated drinks?",
    answer:
      "Absolutely! AQZOR bottles are designed to handle carbonated beverages without leaking or losing freshness.",
  },
  {
    question: "Are the bottles safe to wash in a dishwasher?",
    answer:
      "We recommend hand-washing to maintain the bottle’s premium finish and insulation performance.",
  },
  {
    question: "Where are AQZOR bottles available in Canada?",
    answer:
      "You can find AQZOR bottles online across Canada and in select lifestyle and outdoor retail stores.",
  },
  {
    question: "Do AQZOR bottles come with a warranty?",
    answer:
      "Yes, each AQZOR bottle comes with a 1-year warranty against manufacturing defects to ensure your satisfaction.",
  },
];

const Faq = () => {
  // First one open by default
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-[50px] md:py-[60px] lg:py-[90px] bg-gradient-to-r overflow-hidden"
    >
      {/* Background Shapes */}

      <Container>
        {/* Heading + Subheading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Everything you need to know about AQZOR bottles — answered for your
            convenience.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl border border-gray-200 transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:text-gray-900"
              >
                {faq.question}
                <FaChevronDown
                  className={`ml-2 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-2  text-gray-600 transition-all duration-500 overflow-hidden ${
                  activeIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
