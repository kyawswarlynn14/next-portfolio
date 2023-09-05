import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const PortfolioCard = ({ src, codeLink, demoLink, demoText }) => {
    console.log(src)
    return (
      <div className="md:min-h-[270px] lg:min-h-[300px] xl:min-h-[340px] dark:border border-white shadow-2xl dark:shadow-none rounded-xl flex flex-col justify-between gap-2 hover:scale-105 duration-500">
        <div className="relative">
          <Link href={demoLink} target="_blank">
            <Image
              className="rounded-t-xl object-cover cursor-pointer"
              width={100}
              height={100}
              layout="responsive"
              src={src}
              alt="portfolio images"
            />
          </Link>

          <Link href={codeLink} target="_blank">
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-1 right-1"
            >
              Code <FaGithubSquare className="text-lg ml-2" />
            </Button>
          </Link>
        </div>

        <div className="flex my-2 justify-between gap-2 m-2">
          <p className="text-[#fdeed4] dark:text-teal-500">{demoText}</p>

          <Link href={demoLink} target="_blank">
            <Button size="sm">
              View <BsBoxArrowInUpRight className="text-lg ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default PortfolioCard;