"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Blog from "@/components/Blog";
import {IoArrowUp} from "react-icons/io5"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`${darkMode ? "dark bg-gray-800" : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]"} text-white m-0`}>

        <div className={`${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]"} sticky top-0 z-20 rounded-xl border-b-2 border-white`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className=' w-[95%] md:w-[80%] mx-auto'>
            <Main />

            <Service />

            <Portfolio />

            <Blog />
        </div>

        <Footer />

        {show && <button className='fixed bottom-10 right-10  p-3 rounded dark:bg-[#ff69b0]  bg-[#1f3150] bg-opacity-90 shadow' onClick={handleScrollTop}><IoArrowUp className='text-xl text-white'/></button>}
    </div>
  )
}
