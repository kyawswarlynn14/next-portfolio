import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import NavMobile from "./NavMobile";

export default function Navbar({ darkMode, setDarkMode }) {


  return (
    <nav className="md:w-[80%] mx-auto md:text-lg py-1  px-2 md:px-0 flex-col">
      <div className="flex justify-between items-center">
        <h3 onClick={() => setPopUp(!popUp)} className=" font-bold tracking-wider font-mono">DevelopedByKSL</h3>
            
        <div className="flex gap-4">
          <nav className="md:flex gap-8 mt-1 font-semibold hidden items-center">
            <a
              href="/"
              className="font-mono hover:bg-[#ffffff4d] p-2 px-4 rounded-lg"
            >
              HOME
            </a>

            <a
              href="#services"
              className="font-mono hover:bg-[#ffffff4d] p-2 px-4 rounded-lg"
            >
              SERVICES
            </a>

            <a
              href="#portfolio"
              className="font-mono hover:bg-[#ffffff4d] p-2 px-4 rounded-lg"
            >
              PORTFOLIO
            </a>
          </nav>

          <div className=" h-10 w-10 flex items-center mt-1">
            {darkMode ? (
              <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-3xl" />
            ) : (
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
            )}
          </div>

          <div className=" pt-2">
            <NavMobile />
          </div>
          
        </div>
      </div>
    </nav>

  );
}
