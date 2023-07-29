import React from "react";
import web1 from "../assets/web1.jpg";
import web2 from "../assets/web2.jpg";
import web3 from "../assets/web3.jpg";
import web4 from "../assets/web4.jpg";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Portfolio() {
  const ImageCard = ({ src, codeLink }) => {
    return (
      <div className="basis-1/3 flex-1 relative">
        <Image
          className="rounded-lg object-cover mb-4 border border-white"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={src}
          alt={src}
        />

        <Link href={codeLink} target="_blank">
          <Button
            variant="destructive"
            className="absolute top-1 right-1"
          >
            view code
          </Button>
        </Link>

        
      </div>
    );
  };

  return (
    <div id="portfolio" className="w-full px-2 md:px-0 mx-auto text-lg pt-12">
      <h3 className="dark:text-[#00FF00] text-2xl md:text-3xl pt-4 pb-1 font-mono font-semibold text-center">
        Portofolio
      </h3>

      <p className="text-md py-2 leading-8 text-justify text-[#fdeed4]">
        I have successfully built various projects using{" "}
        <span className="dark:text-teal-500">React.js and Next.js</span> , including
        a captivating shopping web app and visually appealing personal websites.
        These projects showcase my expertise in creating dynamic, user-friendly
        interfaces and leveraging the power of these frameworks to deliver fast
        and engaging web experiences.
      </p>

      <div className="flex flex-col gap-6 py-10 md:flex-row md:flex-wrap">
        <ImageCard
          src={web1}
          codeLink="https://github.com/kyawswarlynn14/palaungminthar"
        />

        <ImageCard
          src={web2}
          codeLink="https://github.com/kyawswarlynn14/palaungminthar"
        />

        <ImageCard src={web3} codeLink="https://github.com/kyawswarlynn14/" />

        <ImageCard src={web4} codeLink="https://github.com/kyawswarlynn14/" />

        <ImageCard src={web5} codeLink="https://github.com/kyawswarlynn14/ecommerce-store" />

        <ImageCard src={web6} codeLink="https://github.com/kyawswarlynn14/ecommerce-admin" />
      </div>
    </div>
  );
}

export default Portfolio;
