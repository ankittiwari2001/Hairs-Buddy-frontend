import React from 'react'
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { images } from "../constants";

const Footer = () => {
  return (
    <section className='bg-dark-hard'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
      <div className="col-span-5 md:col-span-4 lg:col-span-2 md:ml-20 ">
          <h3 className="text-dark-light font-bold md:text-lg">Products</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Hair oil/serum</a>
            </li>
            <li>
              <a href="/">Shampoo</a>
            </li>
            <li>
              <a href="/">Essential oils</a>
            </li>
            <li>
              <a href="/">Hair Sprays</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 md:ml-20 ">
          <h3 className="text-dark-light font-bold md:text-lg">Explore</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2 md:ml-20 ">
          <h3 className="text-dark-light font-bold md:text-lg">Connect</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Feedback</a>
            </li>
          </ul>
        </div>
      {/* Social Icons */}
      <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.BrandName}
            alt="logo"
            className="  mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
          Revive Your Roots, Unleash Your Hair’s Potential
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2023. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
