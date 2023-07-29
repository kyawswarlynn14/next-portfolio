"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? "dark bg-gray-800" : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]"} text-white m-0`}>

        <div className={`${darkMode ? "bg-gray-800" : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]"} sticky top-0 z-20 rounded-xl border-b-2 border-white`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className=' w-[95%] md:w-[80%] mx-auto'>
            <Main />

            <Service />

            <Portfolio />
        </div>

        <Footer />
    </div>
  )
}
