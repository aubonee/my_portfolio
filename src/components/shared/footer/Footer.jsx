import React from 'react';
import '../navbar/Nav.css'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
           <footer className=" grid grid-cols-1 md:grid-cols-2 gap-16  footer p-10 bg-base-300 text-base-content">
  <nav className='flex flex-col justify-center'>
  <a className=" logo-font text-[#95262a] font-semibold text-3xl">TahsinAubonee<span className='font-bold text-4xl'>.</span></a>
    <p className='mr-20  w-[200px] text-left'>
    I am a junior frontend developer , skilled in JS and React for frontend and Express.js with MongoDB for backend. Let's connect, collaborate, & code
    </p>
  </nav> 
  <nav className='text-center'>
  <header className=" text-center footer-title">Quick Links</header> 
    <a href='#home'>Home</a>
      <a href='#aboutme'>About</a>
      <a href='#education'>Education</a>
      <a href='#projects'>Projects</a>
      <a href='#skills'>Skills</a>
      
      <a href='#contactme'>Contact me</a>
  </nav> 
  <nav className='text-center'>
    <header className="footer-title"> info & Social</header> 
    <p className='text-xl py-2'> <span className='font-semibold'>Email:</span> chytahsin.2210@gmail.com</p>
                        <p className='text-xl py-2'> <span className='font-semibold'>Address: Nandakanon, Chattogram</span></p>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/aubonee" target="_blank" rel="noopener noreferrer" ><FaGithub  className='bg-gray-700 text-white p-2 mx-2 w-[40px] h-[40px] rounded-full' /> </a>
      <a href="https://www.linkedin.com/in/tahsinaubonee-07aa39217/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='bg-gray-700 text-white p-2 mx-2 w-[40px] h-[40px] rounded-full' /></a>
      <a href="https://www.facebook.com/tahsin.aubonee/" target="_blank" rel="noopener noreferrer"> <FaFacebookF className='bg-gray-700 text-white p-2 mx-2 w-[40px] h-[40px] rounded-full' /> </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;