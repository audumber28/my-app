"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter(); 
    
    const handleBackClick = () => {
        router.push('/');
    };
      
    return (
        <div className="flex flex-col items-center space-y-20 p-6">
            <div className="mt-16">
                <Image
                    className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
                    src="/profile2.jpg"
                    width={275}
                    height={275}
                    alt="Profile Image"
                />
            </div>
            {/* About Section */}
            <div className="flex flex-col items-center justify-center w-full border-2 border-transparent p-12 rounded-2xl hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300">
                <div className="font-serif space-y-4 text-center">
                    <h2 className="font-popins font-bold text-3xl">
                        ABOUT <span className="text-red-700">ME</span>
                    </h2>
                    <p>
                        I’m Audumber Shirodkar, a dedicated Computer Engineering student at Goa College of Engineering (GEC) with a passion for full-stack web development. My journey in technology is driven by a desire to build innovative and efficient solutions that improve user experiences. With proficiency in React, Next.js, CSS, HTML, Node.js, Bootstrap, C, and C++, I enjoy working across the entire web development stack, from creating sleek and responsive front-end interfaces to building robust back-end architectures.
                    </p>
                    <p>
                        As a second-year engineering student, I constantly explore new technologies and frameworks, pushing the boundaries of my knowledge while actively contributing to open-source projects. I am excited to continue growing my skills and making impactful contributions in the world of web development.
                    </p>
                    <button
                        onClick={handleBackClick}
                        className="text-red-700 border border-red-700 my-4 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-300"
                    >
                        Back
                    </button>
                </div>
            </div>
            
            {/* Profile Image Section */}
          
            
            {/* Toolbox Section */}
            <div className="text-center">
                <h2 className='flex gap-2 justify-center font-popins font-bold mb-10 text-4xl'>
                    <span>My</span> <span className='text-red-700'>Toolbox</span>
                </h2>
                <div className='flex flex-wrap justify-center gap-4'>
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/c only.svg" alt='C Language' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/c PP.svg" alt='C++' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/python.svg" alt='Python' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/html.svg" alt='HTML' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/css-3.svg" alt='CSS' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/javascript.svg" alt='JavaScript' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/nj.svg" alt='Node.js' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/nodejs-icon.svg" alt='Node.js' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/react.svg" alt='React' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/tailwind.svg" alt='Tailwind CSS' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/github-icon-2.svg" alt='GitHub' width={80} height={80} />
                    <Image className='glow text-red-700 icon-container hover:scale-110 transition-transform duration-300' src="/git.svg" alt='Git' width={80} height={80} />
                </div>
            </div>
        </div>
    )
}

export default About;
