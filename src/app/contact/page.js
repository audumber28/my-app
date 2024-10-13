"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Contact = () => {
    const router = useRouter(); 

    const handleBackClick = () => {
        router.push('/');
    
      };
      
  return (
    <div>
<div  className='flex justify-evenly '>

<div>

  
    <div className='absolute'> 
      <div className="mb-5 flex font-lobster text-bold text-xl ">
        <img  className="rounded-full"src="profile.jpeg" width={75} height={75} ></img>
        
        <div className="font-playfair mt-5 ml-3"><div>CONTACT AUDUMBER
        </div> 
          </div>
      </div>
      
           <form action="https://api.web3forms.com/submit" method="POST">

<input type="hidden" name="access_key" value="ff4a516b-e69b-4d6f-8171-30790737e59d" />

<div className="space-y-4">

<div>

<input className=" hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 border-2 border-red-700 p-3 rounded-lgborder-2 rounded-md" type="text" name="name" required placeholder='Your Name'/>
</div>
<div>

<input className=" hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 border-2 border-red-700 p-3 rounded-lg"type="email" name="email" required placeholder='Your Email'/>
</div>
<div>

<textarea className=" hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 border-2 border-red-700 p-3 rounded-lg"name="message" required placeholder='Your Message'></textarea>
</div>
<div className="flex">
<input className="border-2 rounded-md"type="checkbox" name="botcheck"  style={{ display: 'none' }} />
<button className="bg-red-600 p-2 rounded-md" type="submit">submit</button></div>
</div>


</form>
    <button
      onClick={handleBackClick}
      className="text-red-700 border border-red-700 my-4 px-4 py-2rounded-md "
    >
      Back
    </button></div>
</div>

<div className="mt-40">

  <div className="font-playfair space-y-4">
    <img src='gmail.svg' width={250} height={250}></img>
    <div>audumbershirodkar@28gmail.com</div>
  
  </div>
  </div>
</div>

<div className=" flex justify-center mt-72" >
  <div>

© 2024 Audumber Shirodkar. All Rights Reserved.
Connect with me on [GitHub-audumber@28]
  </div>
</div>
    </div>
    
  )
}

export default Contact