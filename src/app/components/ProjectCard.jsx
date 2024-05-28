import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({imgURL, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{ background: `url(${imgURL})`, backgroundSize: "cover"}}
        >
            <div className="overlay flex items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link href={gitUrl}>
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-12 -translate-y-1/2 cursor-pointer hover:text-white" />
                </Link>
                <Link href={previewUrl}>
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform translate-x-5 -translate-y-1/2 cursor-pointer hover:text-white" />
                </Link>
            </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#181818] py-2 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
