import { services } from "@/config/data";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <div id="services" className="pageMainDiv pt-0">
      <div className=" mb-8 md:text-lg">
        <h3 className="subTitle mb-4">
          {/* {data?.title} */}Services I offer
        </h3>

        <p className=" text-md leading-8 text-justify">
          {/* {data?.description} */}I specialize in creating dynamic and responsive websites using the latest web technologies such as React.js, Next.js, Angular, and Node.js. With my expertise in JavaScript, HTML, and CSS, I craft engaging and user-friendly interfaces. I offer from a wide range of services, including brand design, programming and teaching.
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
