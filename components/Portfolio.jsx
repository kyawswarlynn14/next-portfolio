import React from "react";
import { portfolioData } from "@/config/portfolio";
import PortfolioCard from "./PortfolioCard";
import Image from "next/image";

function Portfolio() {
  return (
    <div id="portfolio" className="w-full px-2 md:px-0 mx-auto text-lg pt-12">
      <h3 className="dark:text-[#00FF00] text-2xl md:text-3xl pt-4 pb-1 font-mono font-semibold text-center">
        Portofolio
      </h3>

      <p className="text-md py-2 leading-8 text-center md:text-justify text-[#fdeed4]">
        I have successfully built various projects using{" "}
        <span className="dark:text-teal-500">React.js and Next.js</span> , including
        a captivating shopping web app and visually appealing personal websites.
        These projects showcase my expertise in creating dynamic, user-friendly
        interfaces and leveraging the power of these frameworks to deliver fast
        and engaging web experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {portfolioData?.map((data, index) => (
          <PortfolioCard key={index} src={data.src} codeLink={data.codeLink} demoLink={data.demoLink} />
        ))}
      </div>

      <div className=" mt-10">
        <h3 className="text-center text-xl text-[#00FF00] font-semibold">Certifications</h3>

        <p className="text-center text-[#fdeed4] py-4">
            I have earned the Front End Development Libraries Certificate from{" "}
            <a
              className="text-[#00FF00] hover:underline"
              href="https://www.freecodecamp.org/certification/kyawswarlynn14/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
            >
              freeCodeCamp
            </a>. You can verify my certification{" "}
            <a
              className="text-[#00FF00] hover:underline"
              href="https://www.freecodecamp.org/certification/kyawswarlynn14/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>. This certification demonstrates my dedication to mastering front-end development skills.
        </p>

        <div className="w-full md:w-[70%] lg:[50%] mx-auto">
          <Image
            className=""
            width={100}
            height={100}
            layout="responsive"
            src='/images/fcc-frontend-certificate.png'
            alt="portfolio images"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
