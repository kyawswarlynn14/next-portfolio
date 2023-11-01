"use client";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import Cookies from "js-cookie";

import {
  getCertificates,
  getItemsByName,
  getPortfolios,
  getServices,
  getSocials,
} from "@/config/services";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Tools from "@/components/Tools";
import Portfolio from "@/components/Portfolio";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/canvas/Stars";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [show, setShow] = useState(false);

  // const [mainData, setMainData] = useState(null);
  // const [accounts, setAccounts] = useState([]);
  // const [serviceData, setServiceData] = useState(null);
  // const [services, setServices] = useState([]);
  // const [portfolioData, setPortfolioData] = useState(null);
  // const [portfolios, setPortfolios] = useState([]);
  // const [certificateData, setCertificateData] = useState(null);
  // const [blogData, setBlogData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async() => {
  //     await getItemsByName("kyaw swar lynn").then((data) => {
  //       setMainData(data);
  //     }); 

  //     await getSocials().then((data) => {
  //       setAccounts(data);
  //     });

  //     await getItemsByName("services").then((data) => {
  //       setServiceData(data);
  //     });

  //     await getServices().then((data) => {
  //       setServices(data);
  //     });
      
  //     await getItemsByName("portfolio").then((data) => {
  //       setPortfolioData(data);
  //     });
  
  //     await getPortfolios().then((data) => {
  //       setPortfolios(data);
  //     });

  //     getCertificates().then((data) => {
  //       setCertificateData(data);
  //     });

  //     getItemsByName("blog").then((data) => {
  //       setBlogData(data);
  //     });
  //   }

  //   fetchData();
  // }, []);

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
    <div className={`${darkMode ? "dark bg-gray-800 " : "bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] "} m-0 text-white `}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} token={Cookies.get("token")} />

      <div className="w-[95%] md:w-[80%] mx-auto">
        <Main />
        <Service />

        <Tools />

        <Portfolio />

        <div className="relative z-0">
          <Certificate />
          <Contact />
          <StarsCanvas />
          <Blog />
        </div>
      </div>
      <Footer />

      {show && (
        <button className="fixed bottom-10 right-10  p-3 rounded dark:bg-[#ff69b0]  bg-[#1f3150] bg-opacity-90 shadow" onClick={handleScrollTop}>
          <IoArrowUp className="text-xl text-white" />
        </button>
      )}
    </div>
  );
}
