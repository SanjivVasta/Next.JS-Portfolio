"use client";
import React, { useState, useRef, useEffect, useTransition } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <h1 className="text-xl font-semibold text-white">Strengths and languages I'm experienced in</h1>
        <li className="text-[#ADB7BE]">Java</li>
        <li className="text-[#ADB7BE]">Python</li>
        <li className="text-[#ADB7BE]">JavaScript</li>
        <li className="text-[#ADB7BE]">React</li>
        <li className="text-[#ADB7BE]">SQL</li>
        <li className="text-[#ADB7BE]">PHP</li>
        <li className="text-[#ADB7BE]">Adobe Creative</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full -start-3 ring-0 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-white dark:text-purple-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white">Computer Science BSc Hons - First (81%)</h3>
          <h4 className="font-semibold mb-2 text-[#ADB7BE]">Liverpool John Moores University</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020 - July 2023</time>
          <ul className="list-disc pl-5">
            <li className="text-[#ADB7BE]">Final Year Project (83%)</li>
            <li className="text-[#ADB7BE]">Parallel Algorithms (90%)</li>
            <li className="text-[#ADB7BE]">Computer Systems (81%)</li>
            <li className="text-[#ADB7BE]">Internet and Web Development (73%)</li>
            <li className="text-[#ADB7BE]">Computer Science Applications - Hope (96%)</li>
            <li className="text-[#ADB7BE] mb-4">Virtualised Computing Architecture Cloud (78%)</li>
          </ul>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full -start-3 ring-0 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-white dark:text-purple-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white">A-Levels</h3>
          <h4 className="font-semibold mb-2 text-[#ADB7BE]">Runshaw College</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2018 - July 2020</time>
          <ul className="list-disc pl-5">
            <li className="text-[#ADB7BE]">Computer Science</li>
            <li className="text-[#ADB7BE]">Economics</li>
            <li className="text-[#ADB7BE]">Mathematics</li>
          </ul>
        </li>
      </ol>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full -start-3 ring-0 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-white dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white">Reiss Clothing Sales Associate</h3>
          <h4 className="font-semibold mb-2 text-[#ADB7BE]">Selfridges</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full -start-3 ring-0 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-white dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white">Gucci Watches & Jewellery Sales Associate</h3>
          <h4 className="font-semibold mb-2 text-[#ADB7BE]">Selfridges</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022-2023</time>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full -start-3 ring-0 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-white dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-100 dark:text-white">Jewellery Sales Associate</h3>
          <h4 className="font-semibold mb-2 text-[#ADB7BE]">Pandora</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019-2020</time>
        </li>
      </ol>
    )
  },
  {
    title: "Interests",
    id: "interests",
    content: (
      <ul className="list-disc pl-2">
        <h2 className="font-semibold text-white">Fitness and Strength Training</h2>
        <h1 className="text-[#ADB7BE] mb-2">
          I believe leading a healthy and active lifestyle is crucial. Using the gym 
          to discipline myself and progressively improve is something I have enjoy as it means 
          I am able to set myself goals and see physical improvements in myself.
        </h1>
        <h2 className="font-semibold text-white">Photography</h2>
        <h1 className="text-[#ADB7BE] mb-2">
          I refine my Adobe Photoshop skills, enhancing images and crafting graphics. 
          These abilities are valuable in web development, where I create custom banners. 
          In my free time, I create digital graphics on my iPad, recognizing their 
          importance in frontend development.
        </h1>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="relative text-white">
      <div className="md:grid md:grid-cols-2 gap-4 items-top py-4 px-2 xl:gap-16 sm:py-16 xl:px-2">
        {/* Parent container for both images */}
        <div className="relative top-4 md:top-20">
          {/* Original image */}
          <Image src="/images/AboutImageBase2.png" width={1000} height={1000} className="w-full h-full md:w-auto md:h-auto" />
          {/* Overlapping image */}
          <div className="absolute inset-0 flex -top-36 md:-top-20 lg:top-0 xl:-top-40">
            <div
              ref={ref}
              className={`relative w-full h-full transition-transform duration-700 ${
                inView ? 'scale-110' : 'scale-50'
              }`}
            >
              <Image src="/images/AboutImageVector.png" width={1000} height={1000} className="w-full h-auto md:w-auto md:h-auto" />
            </div>
          </div>
        </div>
        <div className="mt-36 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            As a Computer Science graduate, I have a deep interest in future technology, particularly 
            in light of the rapid advancements in AI and machine learning. This interest was significantly 
            amplified following my dissertation project, where I extensively utilized machine learning 
            algorithms and Convolutional Neural Networks (CNNs). I excel as a problem solver, seamlessly 
            merging creativity with analytical skills to devise innovative solutions. Whether it's 
            perfecting my code or my bench press form, you'll always find me aiming for peak performance 
            in both the digital and physical worlds.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("interests")}
              active={tab === "interests"}
            >
              {" "}
              Interests{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;