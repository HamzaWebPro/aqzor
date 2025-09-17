"use client";
import React, { useEffect, useState } from "react";
import Container from "../_container/Container";
import logo from "../../images/aqzor-logo.png";
import Image from "next/image";
import { X, Menu, Facebook, Instagram, MessageCircle } from "lucide-react";

// JSON data for nav links
const navItems = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "Products", href: "#products" },
  { id: 3, title: "About", href: "#about" },
  { id: 4, title: "FAQ", href: "#faq" },
  { id: 5, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
let [navScroll, setNavScroll] = useState(false);
  const handleClose = () => setMobileOpen(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80; // adjust this based on your navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false); // if you want to close mobile menu after click
  };

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
    navScroll ? "!top-[-300px] bg-white" : "top-0"
  } glass-container duration-300 bg-white shadow-lg fixed left-0 w-full z-[9999999]`}
>
      <Container>
        <div className="h-[60px] md:h-[80px] flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              className="w-[100px] md:w-[100px] lg:w-[150px] !h-auto"
              alt="aqzor"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="cursor-pointer hover:text-pink-600 transition"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu
              className="w-7 h-7 text-gray-800 cursor-pointer"
              onClick={() => setMobileOpen(true)}
            />
          </div>
        </div>
      </Container>

      {/* Mobile Bottom Drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-[#222] text-white shadow-2xl rounded-t-2xl transform transition-transform duration-300 z-[99999999] ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
          <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-pink-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-[-70px] right-[-70px] w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-[120px] h-[120px] bg-yellow-500/20 rounded-full blur-2xl hidden md:block" />
        {/* Header with Close */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <X
            className="w-7 h-7 text-white cursor-pointer"
            onClick={handleClose}
          />
        </div>

        {/* Nav Items */}
        <div className="flex flex-col space-y-6 p-6 text-lg font-medium text-white">
          {navItems.map((item) => (
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="cursor-pointer hover:text-pink-600 transition"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 p-6 border-t">
          <Facebook className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer transition" />
          <Instagram className="w-6 h-6 text-white hover:text-pink-500 cursor-pointer transition" />
          <MessageCircle className="w-6 h-6 text-white hover:text-green-500 cursor-pointer transition" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
