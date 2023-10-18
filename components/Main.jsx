"use client";

import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { getItemsByName, getSocials } from "../config/services";
import Image from "next/image";
import ComputersCanvas from "./canvas/Computers";

export default function Main() {
  const [data, setData] = useState([]);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getItemsByName("kyaw swar lynn").then(data => {
      setData(data);
    })

    getSocials().then(data => {
      setAccounts(data);
    })
  },[])
  
  return (
    <div id="home" className="pt-4 text-center md:w-[80%] mx-auto">
      {data.length <= 0 ? (
        <p className="text-xl text-white font-semibold">Loading...</p>
      ) : (
        <>
        <div className="mx-auto rounded-full w-40 h-40 relative overflow-hidden mb-4">
          <Image width={500} height={500} property="priority" src={data?.img_url} alt="ksl"/>
        </div>

        <h2 className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl">
          {data?.title}
        </h2>

        <h3 className="text-lg md:text-2xl py-5 tracking-wider font-semibold">
          {data?.position}
        </h3>

        <p className="tracking-wider leading-8 text-[#fdeed4] max-w-5xl mx-auto md:text-xl">
          {data?.description}
        </p>
        </>
      )}

      <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between mt-4 ">
        {accounts?.map(acc => {
          let iconComponent;

          if (acc.name == "Github") {
            iconComponent = <AiFillGithub cursor="pointer" />;
          } else if (acc.name == "Facebook") {
            iconComponent = <AiFillFacebook cursor="pointer" />;
          } else if (acc.name == "Linkedin") {
            iconComponent = <AiFillLinkedin cursor="pointer" />;
          } else {
            iconComponent = <FaTelegram cursor="pointer" />;
          }

          return (
            <a key={acc._id} className="iconStyle" href={acc.link} target="_blank" rel="noreferrer"
            >
              {iconComponent}
            </a>
          );
        })}
      </div>

      <div className="h-[250px] md:h-[350px] lg:h-[400px] xl:h-[420px] w-auto mx-auto">
        <ComputersCanvas />
      </div>
    </div>
  );
}
