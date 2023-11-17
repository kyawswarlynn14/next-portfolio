"use client";
import Heading from '../../utils/Heading';
import Certificate from "../../components/Certificate";
import StarsCanvas from "../../components/canvas/Stars";

export default function Page() {
  return (
    <>
      <Heading 
        title="Kyaw Swar Lynn - Certificates" 
        description="Welcome to my portfolio website. Explore my work and experience." 
        keywords="Web Developer, Software Developer, Web Development, Flutter, Next Js, Node Js"
      />

      <div className="relative z-0">
        <Certificate />
        <StarsCanvas />
      </div>
    </>
  );
}
