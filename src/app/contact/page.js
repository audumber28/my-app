"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Contact = () => {
    const router = useRouter(); 

    const handleBackClick = () => {
        router.push('/');
    
      };
      
  return (
    <div className='flex gap-40 '>

  
    <div className='absolute'>      <form action="https://api.web3forms.com/submit" method="POST">

{/* Replace with your Access Key */}
<input type="hidden" name="access_key" value="ff4a516b-e69b-4d6f-8171-30790737e59d" />

{/* Form Inputs. Each input must have a name="" attribute */}
<input type="text" name="name" required placeholder='Your Name'/>
<input type="email" name="email" required placeholder='Your Email'/>
<textarea name="message" required placeholder='Your Message'></textarea>

{/* Honeypot Spam Protection */}
<input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
 <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html" /> 

<button type="submit">Submit <img src='/arrow.svg'></img></button>

</form>
    <button
      onClick={handleBackClick}
      className="text-red-700 border border-red-700 px-4 py-2 rounded"
    >
      Back
    </button></div>

    <div><img  className='relative top-60 left-custom-left2' src='gmail.svg' width={300} height={300}></img>
    </div>
    </div>
    
  )
}

export default Contact