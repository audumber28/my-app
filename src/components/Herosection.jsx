import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Herosection = () => {

  return (
    
    <section className='h-[200vh] ' id="home">
      
           
      <div className=" flex gap-20 justify-evenly items-center min-h-screen overflow-hidden">

  <div className="p-0 ">
  <div className='flex pb-10 gap-4'>
  
      <a href="https://www.linkedin.com/in/audumber-shirodkar-a007072b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" rel="noopener noreferrer"><Image className='hover:zoom-out'src="/linkedin.svg" alt="linkedin" width={30} height={30}></Image></a>
      <a href="https://www.instagram.com/audumber28?igsh=M3hhcXJ2dHhmNzIz"  target="_blank" rel="noopener noreferrer"><Image className='hover:zoom-out'src="/instagram.svg" alt="instagram" width={30} height={30}></Image></a>
      <a href="https://x.com/audumber19643?t=F8WTNZpRIJyoO2aTDNQmyA&s=09"  target="_blank" rel="noopener noreferrer"> <Image className='hover:zoom-out'src="/twitter.svg" alt="twitter" width={30} height={30}></Image></a>

  
      
        
       
        
      </div>
    <div className="hover:zoom-out font-popins text-5xl">
     I'm a Full Stack
    </div>
    <div className="p-0 ">
    <div className="hover:zoom-out text-orange-700 font-popins  text-7xl font-extrabold">
      Web
    </div>
    <div className=" hover:zoom-out font-popins text-7xl font-extrabold ">
      Developer
    </div>
    <div className='pt-3 font-serif font-lightbold text-lg'>
      audumbershirodkar28@gmail.com
    </div>
  </div>
   
  </div>  

  
  <div className="p-0">
    <Image className="hover:animate-slide-right absolute top-custom-1 left-custom-left " src="/pattern.png" alt="pattern" width={450} height={450}></Image>

 <Image className="relative z-10 top-2 hover:zoom-out rounded-full" rounded-full src="/profile.jpeg" alt="profile_photo" width={350} height={350}></Image>
  </div>

 
  
</div>
<div className='font-playfair text-bold text-xl mx-32 mb-2'>

Hi, I'm Audumber Shirodkar, a dedicated Full Stack Web Developer currently pursuing my studies at Goa College of Engineering. My journey in the world of technology began with a fascination for how websites function and the power they have to connect people and ideas.
</div>
<div className='font-playfair text-bold text-xl mx-30 mb-2'>

<div className='font-playfair text-bold text-xl mx-32 mb-2'>As a full stack developer, I thrive on the challenge of building dynamic and responsive web applications that deliver exceptional user experiences. My skills span across both front-end and back-end technologies, allowing me to bring ideas to life from concept to deployment. I enjoy diving deep into the intricacies of code, whether it's crafting sleek user interfaces or developing robust server-side functionality.</div>

<div className='font-playfair text-bold text-xl mx-32 mb-2'>I believe that great web development is not just about writing code—it's about understanding user needs and creating solutions that make their lives easier. I’m constantly learning and evolving, staying updated with the latest trends and technologies in the field.</div>

<div className='font-playfair text-bold text-xl mx-32 mb-2'>In this portfolio, you’ll find a collection of my projects that showcase my skills and creativity. Each project reflects my passion for innovation and my commitment to delivering quality work. I’m excited to share my journey with you and look forward to connecting with like-minded individuals who share a love for technology and problem-solving.</div>

<div className='font-playfair text-bold text-xl mx-32 mb-20'>Let’s collaborate and create something amazing together!</div>
</div>
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
    </section>
  )
}

export default Herosection