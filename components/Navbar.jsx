import React from "react";
import NavMobile from "./NavMobile";
import {AiFillHome} from 'react-icons/ai'
import {FaCertificate, FaLaptopCode} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
import { RiAdminFill, RiContactsFill } from "react-icons/ri";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({token }) {
  const pathname = usePathname();

  return (
    <nav className={` md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-[0.2] sticky top-0 z-20 rounded-b-xl border-b-2 border-white py-1  px-2 md:px-0 flex-col`}>
      <div className="md:w-[95%] lg:w-[80%] mx-auto flex justify-between items-center">
        <Link href={'/'} className=" font-bold tracking-wider font-mono">DevelopedByKSL</Link>
            
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
              href="/"
              className={`webNavButton ${pathname === '/' && 'dark:text-[#00FF00] text-[#001F3F]'}`}
            >
              <AiFillHome /> HOME
            </a>

            <a
              href="/services"
              className={`webNavButton ${pathname === '/services' && 'dark:text-[#00FF00] text-[#001F3F]'}`}
            >
              <FaLaptopCode /> SERVICES
            </a>

            <a
              href="/portfolio"
              className={`webNavButton ${pathname === '/portfolio' && 'dark:text-[#00FF00] text-[#001F3F]'}`}
            >
              <BsPersonWorkspace /> PORTFOLIO
            </a>

            <a
              href="/certificates"
              className={`webNavButton hidden lg:flex ${pathname === '/certificates' && 'dark:text-[#00FF00] text-[#001F3F]'}`}
            >
              <FaCertificate /> CERTIFICATES
            </a>

            <a
              href="/contact"
              className={`webNavButton ${pathname === '/contact' && 'dark:text-[#00FF00] text-[#001F3F]'}`}
            >
              <RiContactsFill /> CONTACT
            </a>
          </nav>
          
          <ThemeSwitcher />

          <NavMobile />
        </div>
      </div>
    </nav>

  );
}
