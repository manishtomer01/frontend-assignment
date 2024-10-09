"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-700">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="my-6">
              <Image
                height={100}
                width={150}
                alt=""
                src={"/images/logo2.svg"}
              />
            </div>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Support center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                System status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Languages
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-purple-500 p-2 rounded-full text-white hover:bg-purple-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-400 p-2 rounded-full text-white hover:bg-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full text-white hover:from-pink-600 hover:to-purple-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
