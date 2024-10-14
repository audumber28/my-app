"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Contact = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-white bg-black bg-opacity-50">
        {/* Profile Section */}
        <div className="mb-8 flex flex-col items-center">
          <Image
            className="rounded-full border-2 border-red-500"
            src="/profile.jpeg" // Ensure this path is correct
            width={75}
            height={75}
            alt="Audumber Shirodkar"
          />
          <h1 className="font-lobster text-2xl mt-4">CONTACT AUDUMBER</h1>
        </div>

        {/* Contact Form */}
        <form action="https://api.web3forms.com/submit" method="POST" className="w-full max-w-lg">
          <input type="hidden" name="access_key" value="ff4a516b-e69b-4d6f-8171-30790737e59d" />
          
          <div className="space-y-4">
            <input
              className="hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 border-2 border-red-700 p-3 rounded-md w-full"
              type="text"
              name="name"
              required
              placeholder='Your Name'
            />
            <input
              className="hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 border-2 border-red-700 p-3 rounded-md w-full"
              type="email"
              name="email"
              required
              placeholder='Your Email'
            />
            <textarea
              className="hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 border-2 border-red-700 p-3 rounded-md w-full"
              name="message"
              required
              placeholder='Your Message'
            ></textarea>
            
            <div className="flex items-center">
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
              <button className="bg-red-600 text-white p-2 rounded-md" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>

        <button
          onClick={handleBackClick}
          className="text-red-700 border border-red-700 my-4 px-4 py-2 rounded-md"
        >
          Back
        </button>

        {/* Contact Information */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-extrabold">Contact Information</h2>
          <div className="mt-4">
            <img src='gmail.svg' width={100} height={100} alt="Email" className="mx-auto mb-2" />
            <p className="hover:border-red-700 hover:shadow-[0_0_15px_#b91c1c] transition-all duration-300 text-lg">
              audumbershirodkar@28gmail.com
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-lg">Phone: [Your Contact Number]</p>
            <p className="text-lg">Address: [Your Address]</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="relative -bottom-20 mt-8 text-center">
          <h2 className="font-popins text-2xl font-extrabold">
            <span>Contact </span>
            <span className="text-red-700">Us</span>
          </h2>
          <p className="mt-2">
            We’d love to hear from you! Whether you have questions, feedback, or collaboration ideas, feel free to get in touch. Your thoughts are important, and we're here to help.
          </p>
        </div>

        <footer className="mt-8 text-center">
          <p>© 2024 Audumber Shirodkar. All Rights Reserved.</p>
          <p>Connect with me on <a href="https://github.com/audumber28" className="text-red-700">GitHub</a></p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
