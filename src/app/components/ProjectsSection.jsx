"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id:1,
        title: "GoPiGo Autonomous Navigation",
        description: "RaspberryPi self driving robot using AI",
        image: "/images/projects/Project1.png",
        tag: ["All","Python"],
        gitUrl: "https://github.com/SanjivVasta/GoPiGo3-Autonomous-Navigation",
        previewUrl: "https://onedrive.live.com/?cid=3FBF4FC87C9634B9&id=3FBF4FC87C9634B9%21180&parId=3FBF4FC87C9634B9%21178&o=OneUp"
    },
    {
        id:2,
        title: "Project 2",
        description: "project 2 description",
        image: "/images/projects/programming.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id:3,
        title: "Project 3",
        description: "project 3 description",
        image: "/images/projects/programming.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
    }
    
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
 
  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
        My Projects
    </h2>
    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        Step into my projects section, where I proudly present my independent endeavors. 
        Spanning diverse technologies and languages, my portfolio showcases a range of projects. 
        Explore each one with a link for deeper insights into my work.
          </p>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
         onClick={handleTagChange} 
         name="All" 
         isSelected={tag === "All"}
        />
        <ProjectTag
         onClick={handleTagChange} 
         name="Python" 
         isSelected={tag === "Python"}
        />
    </div>
    <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
        <motion.li
         key={index}
         variants={cardVariants}
         initial="initial" 
         animate={isInView ? "animate" : "initial"}
         transition={{duration: 0.3, delay: index * 0.4 }}
         >
        <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgURL={project.image} 
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
    </ul>
    </section>
  );
}

export default ProjectsSection
