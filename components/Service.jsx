import React, { useReducer } from "react";
import webDevelopment from "../assets/web-development.webp";
import webDesign from "../assets/web-design.jpg";
import appDevelopment from "../assets/app-development.png";
import Image from "next/image";
import { Button } from "./ui/button";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_READ_MORE":
      return {
        ...state,
        [action.serviceName]: !state[action.serviceName],
      };
    default:
      return state;
  }
}

function Service() {
  const initialState = {
    webDevReadMore: false,
    webDesReadMore: false,
    appDevReadMore: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const services = [
    {
      image: webDevelopment,
      title: "Web Development",
      description:
        "As a web developer, I specialize in creating dynamic and interactive websites that are tailored to meet your unique business needs. I utilize the latest web technologies and frameworks to build responsive, user-friendly websites that engage your audience. From the initial concept and design to the implementation and deployment, I ensure a seamless development process. Whether you need an e-commerce platform, a content management system, or a custom web application, I can deliver a solution that not only looks great but also functions flawlessly across different browsers and devices.",
      serviceName: "webDevReadMore",
    },
    {
      image: appDevelopment,
      title: "Mobile App Development",
      description:
        "In today's mobile-driven world, having a strong mobile presence is essential for any business. As a mobile app developer, I specialize in creating cutting-edge applications that run seamlessly on iOS and Android platforms. From concept to launch, I work closely with you to understand your app requirements and develop a customized solution that aligns with your business goals. With expertise in both native and hybrid app development, I can create feature-rich, intuitive mobile applications that deliver an exceptional user experience. Whether you need a consumer-facing app or an enterprise solution, I can turn your ideas into reality and help you reach your target audience effectively.",
      serviceName: "appDevReadMore",
    },
    {
      image: webDesign,
      title: "Web Design",
      description:
        "With a keen eye for aesthetics and a deep understanding of user experience, I offer professional web design services that captivate visitors and leave a lasting impression. I believe that a well-designed website is a powerful tool for attracting and retaining customers. Through a combination of creativity and technical expertise, I create visually stunning layouts, intuitive navigation, and compelling graphics that reflect your brand identity. By focusing on usability and accessibility, I ensure that your website is engaging, easy to navigate, and optimized for conversions.",
      serviceName: "webDesReadMore",
    },
  ];

  const toggleReadMore = (serviceName) => {
    dispatch({ type: "TOGGLE_READ_MORE", serviceName });
  };

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

        <p className="text-base py-2 leading-8 text-[#fdeed4] text-start">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-between gap-4">
        {services.map((service) => (
          <div
            className=" w-[20rem] h-fit mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl dark:border border-white relative"
            key={service.title}
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-48 absolute top-0 rounded-t-xl"
            />

            <h3 className="text-lg font-medium py-2 mt-48 ">{service.title}</h3>
            <p
              className={`${
                state[service.serviceName] ? "h-auto " : "h-32 overflow-hidden"
              } text-[#fdeed4] text-base text-center px-2`}
            >
              {service.description}
            </p>

            <Button
              className=" my-2"
              onClick={() => toggleReadMore(service.serviceName)}
            >
              {state[service.serviceName] ? (
                <span>Read Less</span>
              ) : (
                <span>Read More</span>
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
