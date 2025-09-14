"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../_container/Container";
import { X } from "lucide-react";
import pinkbottle from "../../images/pink-bottle.png";
import bluebottle from "../../images/blue-bottle.jpeg";
import Image from "next/image";

// Demo Product Data
const products = [
  {
    id: 1,
    name: "AQZOR Blue Thermo Bottle",
    quantity: "500ml",
    price: "$19.99",
    description:
      "A premium insulated thermo bottle that keeps your drink hot or cold for up to 12 hours. Built with sleek matte stainless steel for durability and style.",
    image: bluebottle,
    details: [
      "Keeps drinks hot/cold for 12 hours",
      "Premium stainless steel material",
      "Leak-proof lid with lock system",
      "Sleek matte finish design",
    ],
  },
  {
    id: 2,
    name: "AQZOR Pink Straw Bottle",
    quantity: "600ml",
    price: "$15.99",
    description:
      "A lightweight, BPA-free bottle with an integrated straw. Designed for portability and daily hydration with a trendy transparent pink finish.",
    image: pinkbottle,
    details: [
      "Integrated straw for easy sipping",
      "BPA-free transparent body",
      "Portable and lightweight design",
      "Trendy modern pink finish",
    ],
  },
  {
    id: 3,
    name: "AQZOR Blue Thermo Bottle",
    quantity: "500ml",
    price: "$19.99",
    description:
      "A premium insulated thermo bottle that keeps your drink hot or cold for up to 12 hours. Built with sleek matte stainless steel for durability and style.",
    image: bluebottle,
    details: [
      "Keeps drinks hot/cold for 12 hours",
      "Premium stainless steel material",
      "Leak-proof lid with lock system",
      "Sleek matte finish design",
    ],
  },
  {
    id: 4,
    name: "AQZOR Pink Straw Bottle",
    quantity: "600ml",
    price: "$15.99",
    description:
      "A lightweight, BPA-free bottle with an integrated straw. Designed for portability and daily hydration with a trendy transparent pink finish.",
    image: pinkbottle,
    details: [
      "Integrated straw for easy sipping",
      "BPA-free transparent body",
      "Portable and lightweight design",
      "Trendy modern pink finish",
    ],
  },
];

const ProductSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="py-[50px] md:py-[60px] lg:py-[90px] bg-white">
      <Container>
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Premium Bottles
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Stay hydrated with style – explore our collection of quality AQZOR
            bottles
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custom-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-[#fcfcfc] rounded-2xl shadow-lg flex flex-col items-center p-5 transition hover:shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain mb-4 rounded-md"
                  width={280}
                  height={380}
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{product.quantity}</p>
                <p className="text-base font-bold text-gray-700 mb-3">
                  {product.price}
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 bg-[#bfbfbf] text-white rounded-lg hover:bg-gray-600 transition"
                >
                  View Details
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-[#00000052] flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-lg w-full relative shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  <X size={24} />
                </button>

                <div className="flex justify-center">
                  {/* Product Image */}
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="object-contain mb-4 rounded-md"
                    width={280}
                    height={380}
                  />
                </div>

                {/* Product Info */}
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-500 mb-1">{selectedProduct.quantity}</p>
                <p className="text-lg font-semibold text-gray-700 mb-3">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-600 mb-4">
                  {selectedProduct.description}
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {selectedProduct.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Swiper Custom Styles */}
      <style jsx global>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: #bfbfbf !important;
        }
        .custom-swiper .swiper-pagination-bullet {
          background: #bfbfbf !important;
          opacity: 0.7;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background: #bfbfbf !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ProductSlider;
