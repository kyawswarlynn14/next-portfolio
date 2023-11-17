"use client";
import Heading from '../../utils/Heading';
import Portfolio from '../../components/Portfolio';

export default function Page() {
  return (
    <>
      <Heading 
        title="Kyaw Swar Lynn - Portfolio" 
        description="Welcome to my portfolio website. Explore my work and experience." 
        keywords="Web Developer, Software Developer, Web Development, Flutter, Next Js, Node Js"
      />

      <Portfolio />
    </>
  );
}
