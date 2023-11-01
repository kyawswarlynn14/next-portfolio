import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { CgWebsite } from "react-icons/cg";
import { portfolioData } from "@/config/data";

const ProjectCard = ({index, name, description, image, source_code_link, demo_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-5 rounded-2xl w-full shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700'
      >
        <div className='relative w-full h-[250px]'>
          <Image
            width={500}
            height={500}
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex gap-4 justify-end m-3'>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer bg-slate-700'
            >
              <CgWebsite />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer bg-slate-700'
            >
              <Image 
                width={100}
                height={100}
                src='/images/github.png'
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          <p className=' text-[#00FF00] text-[14px]'># {description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};


function Portfolio() {
  return (
    <div id="portfolio" className="pageMainDiv">
      <h3 className="subTitle">
        {/* {data?.title} */}Portfolio
      </h3>

      <p className="text-md py-2 leading-8 text-justify">
        {/* {data?.description} */}
        I have successfully built various projects using <span className="text-[#00FF00]">React Js, Next Js, Node Js, Express Js and Flutter</span>. Proficient in React.js and Next.js, I also possess strong backend skills in Node.js and Express.js. I specialize in database management using Sequelize, with expertise in MySQL and PostgreSQL. My portfolio showcases dynamic, user-friendly web interfaces and fast, engaging experiences, seamlessly integrating frontend and backend technologies.
      </p>

      <div className='my-8 grid grid-cols-1 md:grid-cols-2 gap-8' >
        {portfolioData.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} name={project.title} description={project.content} image={project.img_url} source_code_link={project.code_link} demo_link={project.demo_link} />
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-4">
        {portfolios?.map((data, index) => (
          <PortfolioCard key={index} src={data.img_url} codeLink={data.code_link} demoLink={data.demo_link} title={data.title} content={data.content} />
        ))}
      </div> */}

    </div>
  );
}

export default Portfolio;
