"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Projects = () => {
    const router = useRouter(); 

    const handleBackClick = () => {
        router.push('/');
    }

    return (
        <div className="flex flex-col items-center">
          <div>
            Welcome to my Projects page! Here, you'll find a curated selection of the projects I've developed, showcasing my skills in full-stack web development and my passion for creating innovative solutions. Each project reflects my dedication to quality and my ability to tackle real-world challenges. I believe that sharing knowledge is as important as acquiring it, so I've made the source code for each project available on my GitHub profile. Feel free to explore the repositories, check out the code, and see the thought processes behind my work. To stay updated on my latest projects and contributions, you can also follow me on GitHub. Here's a glimpse of my GitHub profile:
          </div>
            <div className="mb-4">
               
            </div>
          
            <button
                onClick={handleBackClick}
                className="text-red-700 border border-red-700 px-4 py-2 rounded mb-4"
            >
                Back
            </button>
            <div>
            <div><div className='text-red-700 font-popins text-2xl font-extrabold'>MY</div><div className=' font-popins text-2xl font-extrabold'>GITHUB</div></div>
           
           <div><Image 
                   src="/githubprofile.png" 
                   alt="Description" 
                  
                  width={600}
                  height={400} 
                  
               />
               <div className='text-red-700 font-popins text-2xl font-extrabold'>MY</div><div className=' font-popins text-2xl font-extrabold'>PROJECTS</div>
               
               <Image src="/netflix.png" 
                   alt="Description" 
                  
                  width={600}
                  height={400} >

               </Image>
               
               </div>

            </div>
            
        </div>
    )
}

export default Projects;
