import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const PortfolioCard = ({ src, codeLink, demoLink }) => {
    console.log(src)
    return (
      <div className="relative hover:-translate-y-2 ease-in-out duration-500">
        <Link href={demoLink} target="_blank">
          <Image
            className="rounded-lg object-cover border border-white cursor-pointer"
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
            view code
          </Button>
        </Link>
      </div>
    );
};

export default PortfolioCard;