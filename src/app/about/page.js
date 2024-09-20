"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const about = () => {
    const router = useRouter(); 

    const handleBackClick = () => {
        router.push('/');
    
      };
      
  return (
    <div>
        <button
      onClick={handleBackClick}
      className="text-red-700 border border-red-700 px-4 py-2 rounded"
    >
      Back
    </button>
<div>About Me</div>
    </div>
    
  )
}

export default about