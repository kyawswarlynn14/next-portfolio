import { services } from "@/config/data";
import ServiceCard from "./ServiceCard";

function Service() {

  return (
    <div id="services" className="w-full px-2 md:px-0 mx-auto pt-16">
      <div className=" mb-4 md:text-lg">
        <h3 className="dark:text-[#00FF00] text-2xl md:text-3xl md:mb-4 py-1 font-mono font-semibold text-center">
          Services I offer
        </h3>

        <p className=" text-md leading-8 text-[#fdeed4] text-center md:text-justify">
          I specialize in creating dynamic and responsive websites using the
          latest web technologies such as{" "}
          <span className="dark:text-teal-500">
            React.js, Next.js, Angular, and Node.js
          </span>
          . With my expertise in{" "}
          <span className="dark:text-teal-500">JavaScript, HTML, and CSS</span>,
          I craft engaging and user-friendly interfaces.
        </p>

        <p className="text-base py-2 leading-8 text-[#fdeed4] text-center md:text-start">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-between gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Service;
