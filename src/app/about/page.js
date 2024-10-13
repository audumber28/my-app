"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const about = () => {
    const router = useRouter(); 
    
    const handleBackClick = () => {
        router.push('/');
    
      };
      
  return (
    <div className="flex-col space-y-20 ">
     <div className="flex justify-around">
  <div className="w-6/12 border-2 border-transparent p-12 rounded-2xl hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300">
    <div className=" font-serif space-y-4">
      <div className="flex font-popins font-bold gap-1 text-2xl">
        ABOUT <div className="text-red-700">ME</div>
      </div>
      <div >
      I’m Audumber Shirodkar, a dedicated Computer Engineering student at Goa College of Engineering (GEC) with a passion for full-stack web development. My journey in technology is driven by a desire to build innovative and efficient solutions that improve user experiences. With proficiency in React, Next.js, CSS, HTML, Node.js, Bootstrap, C, and C++, I enjoy working across the entire web development stack, from creating sleek and responsive front-end interfaces to building robust back-end architectures.

As a second-year engineering student, I constantly explore new technologies and frameworks, pushing the boundaries of my knowledge while actively contributing to open-source projects. I am excited to continue growing my skills and making impactful contributions in the world of web development.
      </div>
      <button
      onClick={handleBackClick}
      className="text-red-700 border border-red-700 my-4 px-4 py-2rounded-md "
    >
      Back
    </button>
      
    </div>
    
  </div>
  <div className="mt-16">
    <Image
      className="rounded-full object-cover hover:scale-110 transition-transform duration-300"
      src="/profile2.jpg"
      width={275}
      height={275}
      alt="Profile Image"
    />
    
  </div>
</div>

       <div>
       <div className='flex gap-2 ml-40 font-popins font-bold mb-10 text-4xl'>
<div>My</div> <div className='text-red-700'>Toolbox</div>
</div>
<div className='ml-40 gap-4 flex'>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/c only.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/c PP.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/python.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/html.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/css-3.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/javascript.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/nj.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/nodejs-icon.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/react.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/tailwind.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/github-icon-2.svg" alt='c-1' width={80} height={80}></Image>
<Image className='glow text-red-700 text-4xl fas fa-star icon-container hover:zoom-out' src="/git.svg" alt='c-1' width={80} height={80}></Image>


</div>
       </div>
     
    </div>
    
  )
}

export default about