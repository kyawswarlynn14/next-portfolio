import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import BlogImage from '../assets/blog-background.jpg'
import Link from "next/link";

function Blog() {

  return (
    <div id="blog" className="w-full px-2 md:px-0 mx-auto text-lg pt-8">
      <h3 className="dark:text-[#00FF00] text-2xl md:text-3xl pt-4 pb-1 font-mono font-semibold text-center">
        Blog
      </h3>

      <div className="h-96 w-auto rounded-xl relative   my-4">
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <Image src={BlogImage} className="h-full w-full overflow-hidden bg-cover rounded-xl" />

        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-4 md:gap-y-8 absolute top-0 px-4 md:px-8">
            <h3 className="text-xl font-semibold tracking-wider">Embracing Creativity</h3>

            <p className="text-lg md:text-xl py-2 leading-6 md:leading-8 text-white font-mono ">
            Welcome to my portfolio blog page, where I&apos;ll be sharing my creative journey as an developer and designer. Here, I&apos;ll delve into the diverse world of visual expression, exploring various mediums, techniques, and inspirations that have shaped my work over the years.
            </p>

            <Link href="https://kyawswarlynn-blog.vercel.app/">
              <Button size='lg'>
                  Go to Blog
              </Button>
            </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Blog;
