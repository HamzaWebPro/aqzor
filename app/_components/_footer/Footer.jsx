
import React from "react";
import Container from "../_container/Container";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import byteliberty from "../../images/byteliberty.png";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#222] text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-pink-500/20 rounded-full blur-2xl" />
      <div className="absolute bottom-[-70px] right-[-70px] w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-[120px] h-[120px] bg-yellow-500/20 rounded-full blur-2xl hidden md:block" />

      <div className="py-[50px] md:py-[60px] lg:py-[90px] relative z-10">
        <Container>
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About AQZOR</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                AQZOR provides premium water bottles designed for health,
                lifestyle, and everyday use. Durable, stylish, and eco-friendly.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-white transition">
                  <a href="https://aqzor.vercel.app/">Go to Top</a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition cursor-pointer">
                  <FaFacebookF size={18} />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 transition cursor-pointer">
                  <FaInstagram size={18} />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition cursor-pointer">
                  <FaWhatsapp size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t flex gap-5 border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© {new Date().getFullYear()} AQZOR. All rights reserved.</p>
            <p className="flex gap-x-1">
              Website Created by{" "}
              <a
                target="blank"
                href="https://www.byteliberty.com/"
                className="text-pink-500 font-semibold flex items-center gap-x-1"
              >
                <Image
                  src={byteliberty}
                  width={20}
                  height={20}
                  alt="byteliberty"
                />{" "}
                Byteliberty
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
