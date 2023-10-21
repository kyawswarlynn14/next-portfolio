import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import NavMobile from "./NavMobile";
import {AiFillHome} from 'react-icons/ai'
import {FaLaptopCode, FaBlog} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
import { RiAdminFill, RiContactsFill } from "react-icons/ri";

export default function Navbar({ darkMode, setDarkMode, token }) {

  return (
    <nav className={`${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8]'} md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.2] sticky top-0 z-20 rounded-b-xl border-b-2 border-white py-1  px-2 md:px-0 flex-col`}>
      <div className="md:w-[95%] lg:w-[80%] mx-auto flex justify-between items-center">
        <h3 onClick={() => setPopUp(!popUp)} className=" font-bold tracking-wider font-mono">DevelopedByKSL</h3>
            
        <div className="flex gap-2">
          <nav className="md:flex gap-2 mt-1 font-semibold hidden items-center">
            {token && 
            <a
              href="/admin/home"
              className="webNavButton"
            >
              <RiAdminFill /> ADMIN
            </a>
            }

            <a
              href="#home"
              className="webNavButton"
            >
              <AiFillHome /> HOME
            </a>

            <a
              href="#services"
              className="webNavButton"
            >
              <FaLaptopCode /> SERVICES
            </a>

            <a
              href="#portfolio"
              className="webNavButton"
            >
              <BsPersonWorkspace /> PORTFOLIO
            </a>

            <a
              href="#blog"
              className="webNavButton"
            >
              <FaBlog /> BLOG
            </a>

            <a
              href="#contactme"
              className="webNavButton"
            >
              <RiContactsFill /> CONTACT
            </a>
          </nav>

          <div className=" h-10 w-10 flex items-center mt-1">
            {darkMode ? (
              <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
            ) : (
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-xl" />
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
