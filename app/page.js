"use client";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import Service from "../components/Service";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import StarsCanvas from "../components/canvas/Stars";
import Blog from "../components/Blog";
import Main from "../components/Main";
import Heading from "../utils/Heading";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Heading 
        title="Kyaw Swar Lynn - Developer" 
        description="Welcome to my portfolio website. Explore my work and experience." 
        keywords="Web Developer, Software Developer, Web Development, Flutter, Next Js, Node Js"
      />

      <Main />
      
      <Service />

      <Tools />

      <Portfolio />

      <div className="relative z-0">
        <Certificate />
        <div className="pt-4">
          <Contact />
        </div>
        <StarsCanvas />
        <Blog />
      </div>

      {show && (
        <button className="fixed bottom-10 right-10  p-3 rounded dark:bg-[#ff69b0]  bg-[#1f3150] bg-opacity-90 shadow" onClick={handleScrollTop}>
          <IoArrowUp className="text-xl text-white" />
        </button>
      )}
    </>
  );
}
