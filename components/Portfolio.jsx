import React from "react";
import web1 from "../assets/web1.jpg";
import web2 from "../assets/web2.jpg";
import web3 from "../assets/web3.jpg";
import web4 from "../assets/web4.jpg";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";
import web8 from "../assets/web8.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Portfolio() {
  const ImageCard = ({ src, codeLink, demoLink }) => {
    return (
      <div className="basis-1/3 flex-1 relative">
        <Link href={demoLink} target="_blank">
          <Image
            className="rounded-lg object-cover mb-4 border border-white cursor-pointer"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={src}
            alt={src}
          />
        </Link>

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

      <p className="text-md py-2 leading-8 text-center md:text-justify text-[#fdeed4]">
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
          demoLink="https://kyawswarlynn14.github.io/palaungminthar"
        />

        <ImageCard
          src={web2}
          codeLink="https://github.com/kyawswarlynn14/palaungminthar"
          demoLink="https://kyawswarlynn14.github.io/palaungminthar"
        />

        <ImageCard src={web3} codeLink="https://github.com/kyawswarlynn14/" demoLink="" />

        <ImageCard src={web4} codeLink="https://github.com/kyawswarlynn14/" demoLink="" />

        <ImageCard src={web5} codeLink="https://github.com/kyawswarlynn14/ecommerce-store" demoLink="https://palaungminthar.vercel.app" />

        <ImageCard src={web6} codeLink="https://github.com/kyawswarlynn14/ecommerce-admin" demoLink="" />

        <ImageCard src={web7} codeLink="https://github.com/kyawswarlynn14/ksl-blog" demoLink="https://kyawswarlynn-blog.vercel.app" />

        <ImageCard src={web8} codeLink="https://github.com/kyawswarlynn14/ksl-blog" demoLink="https://kyawswarlynn-blog.vercel.app" />
      </div>
    </div>
  );
}

export default Portfolio;
