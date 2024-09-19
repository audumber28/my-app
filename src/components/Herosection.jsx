import React from 'react'
import Image from 'next/image'
const Herosection = () => {

  return (
    
    <section id="home">
      
      <div className="flex justify-around items-center min-h-screen overflow-hidden">
  
  <div>
    <div className="font-playfair italic text-6xl font-bold">
      Audumber
    </div>
    <div className="font-playfair italic text-5xl font-bold">
      Shirodkar
    </div>
  </div>  

  
  <div>
 <Image src="/profile.jpeg" alt="profile_photo" width={450} height={450}></Image>
  </div>

 
  <div>
    <div className="font-playfair italic text-6xl font-bold">
      Web
    </div>
    <div className="font-playfair italic text-5xl font-bold">
      Developer
    </div>
  </div>
</div>
    </section>
  )
}

export default Herosection