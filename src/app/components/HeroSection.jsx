"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-12 lg:mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I&#39;m{" "}</span><br />
            <TypeAnimation
              sequence={[
                'Sanjiv Vasta',
                1000,
                'A Full Stack Developer',
                1000,
                'A Software Engineer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Experienced in a range of programming languages, dedicated to crafting exceptional
            digital experiences. With many years expertise, I specialize in creating user-friendly
            interfaces and responsive designs as well as back-end development with past projects in
            machine learning and autonomous vehicles. Explore my portfolio to see my work, and let&#39;s connect
            to discuss how I can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto"
            >
              <button className="px-6 py-3 w-full sm:w-auto rounded-full mb-4 sm:mb-0 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 hover:scale-105 duration-200 text-white">
                Hire Me
              </button>
            </ScrollLink>
            <a
              href="/path/to/your/CV.pdf"
              download
              className="px-0.5 py-0.5 w-full sm:w-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-105 duration-200 text-white"
            >
              <span className="block bg-[#151515] rounded-full px-5 py-2">Download CV</span>
            </a>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-full bg-[#151515] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
          >
            <Image
              src="/images/Animoji2.png"
              alt="profile pic"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:hover:w-[400px] lg:hover:h-[400px] duration-200"
              width={390}
              height={390}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;