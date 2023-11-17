"use client";
import Heading from '../../utils/Heading';
import Contact from "../../components/Contact";
import StarsCanvas from "../../components/canvas/Stars";

export default function Page() {
  return (
    <>
      <Heading 
        title="Kyaw Swar Lynn - Contact Me" 
        description="Welcome to my portfolio website. Explore my work and experience." 
        keywords="Web Developer, Software Developer, Web Development, Flutter, Next Js, Node Js"
      />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
