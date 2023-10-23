import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";
import ComputersCanvas from "./canvas/Computers";
import ksl from '../public/images/ksl.jpg'

export default function Main({data, accounts}) {
  
  return (
    <div id="home" className=" text-center md:w-[80%] mx-auto">
      {data === null ? (
        <>
          <div className="mx-auto rounded-full w-40 h-40 relative overflow-hidden my-2">
            <Image width={500} height={500} property="priority" src={ksl} alt="ksl"/>
          </div>

          <h2 className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl">
            Kyaw Swar Lynn
          </h2>

          <h3 className="text-lg md:text-2xl py-3 tracking-wider font-semibold">
            Software Developer!
          </h3>

          <p className="tracking-wider leading-8 text-[#fdeed4] max-w-5xl mx-auto md:text-xl">
            Freelancer providing services for Web Applications and Mobile Applications. Join me down below and let's start working!
          </p>

          <div className="w-64 md:w-80 mx-auto text-5xl flex justify-between mt-4 ">
            <a href="https://github.com/kyawswarlynn14" className="iconStyle" target="_blank" rel="noreferrer">
              <AiFillGithub cursor="pointer" />
            </a>

            <a href="https://web.facebook.com/kyawswarlynn07" className="iconStyle" target="_blank" rel="noreferrer">
              <AiFillFacebook cursor="pointer" />
            </a>

            <a href="https://www.linkedin.com/in/kyaw-swar-lynn-78ab79260/" className="iconStyle" target="_blank" rel="noreferrer">
              <AiFillLinkedin cursor="pointer" />
            </a>

            <a href="	https://t.me/kyawswarlynn14" className="iconStyle" target="_blank" rel="noreferrer">
              <FaTelegram cursor="pointer" />
            </a>
          </div>
        </>
      ) : (
      <>
        <div className="mx-auto rounded-full w-40 h-40 relative overflow-hidden my-2">
          <Image width={500} height={500} property="priority" src={data?.img_url} alt="ksl"/>
        </div>

        <h2 className="tracking-wider font-serif text-2xl dark:text-[#00FF00] font-bold md:text-4xl">
          {data?.title}
        </h2>

        <h3 className="text-lg md:text-2xl py-3 tracking-wider font-semibold">
          {data?.position}
        </h3>

        <p className="tracking-wider leading-8 text-[#fdeed4] max-w-5xl mx-auto md:text-xl">
          {data?.description}
        </p>

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
      </>
      )}

      <div className="h-[220px] md:h-[350px] lg:h-[400px] xl:h-[420px] w-auto mx-auto">
        <ComputersCanvas />
      </div>
    </div>
  );
}
