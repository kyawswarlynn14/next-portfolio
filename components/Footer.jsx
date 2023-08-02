import React from "react";
import { AiFillPhone, AiFillMail, AiOutlineCopyrightCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import ksl from '../assets/ksl.jpg'
import Image from "next/image";

function Footer() {
  return (
    <div className={`text-white w-full border-t-2 border-white py-4 rounded-tl-3xl`}>
      <div className="md:w-[80%] mx-auto px-2 md:px-0 flex flex-col md:flex-row justify-between gap-4">
        <div className="md:w-[30%] text-center">
          <Image src={ksl} alt="ksl img" className="w-12 h-12 rounded-full mb-3 mx-auto"/>
          <h3>Kyaw Swar Lynn</h3>
          <p><AiOutlineCopyrightCircle className="inline-flex" /> 2023 ksl</p>
        </div>

        <div className=" md:w-[40%] text-center">
          <h3 className="text-center text-lg mb-2">Contact Me</h3>

          <p>
            <GoLocation className="inline-flex mr-2" /> 63(B), Between 20x21, Mandalay
          </p>
          <p>
            <AiFillPhone className="inline-flex mr-2" /> +959266654144, +959767600246
          </p>

          <p>
            <AiFillMail className="inline-flex mr-2" /> kyawswarlynn14@gmail.com
          </p>
        </div>

        <div className="md:w-[30%] w-[80%] mx-auto text-center">
          <h4 className="text-lg mb-2">Navigations</h4>
          <div className="w-56 mx-auto flex justify-between gap-4 ">
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
