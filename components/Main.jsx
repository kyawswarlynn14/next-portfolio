import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import ksl from "../assets/ksl.jpg";
import Image from "next/image";

export default function Main() {
  
  return (
    <div id="home" className="pt-4 text-center md:w-[80%] mx-auto">
      <h2 className="tracking-wider font-serif text-3xl dark:text-[#00FF00] text-white font-bold md:text-4xl m-0">
        Kyaw Swar Lynn
      </h2>

      <h3 className="text-xl py-5 tracking-wider">
        Developer and Designer!
      </h3>

      <p className="hidden md:block tracking-wider leading-8 text-[#fdeed4] max-w-5xl mx-auto md:text-xl">
        Freelancer providing services for programming and design content needs.{" "}
        <br />
        Join me down below and let&apos;s get cracking!
      </p>

      <p className=" block md:hidden tracking-wider leading-8 text-[#fdeed4]">
        Freelancer providing <br /> services for programming and <br /> design content needs.{" "}
        <br />
        Join me down below and <br /> let&apos;s get cracking!
      </p>

      <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between my-4 ">
        <a
          className="text-[#fdeed4] hover:text-white"
          href="https://github.com/kyawswarlynn14"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub cursor="pointer" />
        </a>

        <a
          className="text-[#fdeed4] hover:text-white"
          href="https://web.facebook.com/profile.php?id=100027180840462"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook cursor="pointer" />
        </a>

        <a
          className="text-[#fdeed4] hover:text-white"
          href="https://linkedin.com/in/kyaw-swar-lynn-78ab79260/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin cursor="pointer" />
        </a>

        <a
          className="text-[#fdeed4] hover:text-white"
          href="https://t.me/kyawswarlynn14"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram cursor="pointer" />
        </a>
      </div>

      <div className="mx-auto rounded-full w-64 h-64 relative overflow-hidden mt-4 md:h-80 md:w-80">
        <Image src={ksl} alt="ksl"/>
      </div>
    </div>
  );
}
