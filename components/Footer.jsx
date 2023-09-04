import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineCopyrightCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import ksl from '../public/images/ksl.jpg'
import Image from "next/image";

function Footer() {
  return (
    <div className={`text-white w-full border-t-2 border-white py-4 rounded-tl-3xl`}>
      <div className="w-full md:w-[80%] md:mx-auto px-2 flex flex-col items-center lg:flex-row lg:justify-between gap-6">
        <div className="text-center">
          <Image src={ksl} alt="ksl img" className="w-12 h-12 rounded-full mb-3 mx-auto"/>
          <h3 className="text-lg font-semibold">Kyaw Swar Lynn</h3>
          <p><AiOutlineCopyrightCircle className="inline-flex" /> 2023 ksl</p>
        </div>

        <div className="lg:ml-16 text-start">
          <h3 className="text-lg mb-2 font-semibold text-center tracking-wider">Contact Me</h3>

          <p className="text-sm md:text-base">
            <AiFillPhone className="inline-flex mr-2" /> +959266654144, +959767600246
          </p>

          <p className="text-sm md:text-base">
            <AiFillMail className="inline-flex mr-2" /> kyawswarlynn14@gmail.com
          </p>
        </div>

        <div className="text-start">
          <h4 className="text-lg mb-2 font-semibold text-center tracking-wider">Navigations</h4>
          <div className="flex gap-4 ">
            <a href="#home" className=" text-gray-100 hover:underline underline-offset-2">Home</a>
            <span>|</span>
            <a href="#service" className=" text-gray-100 hover:underline underline-offset-2">Service</a>

            <span>|</span>

            <a href="#portfolio" className=" text-gray-100 hover:underline underline-offset-2">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
