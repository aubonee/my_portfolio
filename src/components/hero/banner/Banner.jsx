import React from 'react';
import './Banner.css'
import { GrContact } from "react-icons/gr";
import { FaDownload } from "react-icons/fa6";
// import img from '../../../assets/myPhoto_removebg2.png'
import photo from '../../../assets/images/photo.png'
import TechStack from '../../techStack/TechStack';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    return (
        <div id='home' className="hero  min-h-[70vh]">
  <div className="hero-content w-full flex-col lg:justify-between lg:flex-row">
   <div className="w-11/12 lg:w-1/2 flex justify-center items-end ">
    <div className=' border-2 border-yellow-500 bg-blur-lg w-600px rounded-tl-[320px] rounded-tr-[500px] rounded-br-[200px] rounded-bl-[400px]'> <img src={photo} className="grayscale-[20%] relative -mb-5 " /> </div>

    {/* <div className=' border-2 border-yellow-500 bg-blur-lg  rounded-tl-[220px] rounded-tr-[220px] '> <img src={photo} className="grayscale-[20%] relative -mb-4 z-10" /> </div> */}
    
   
   </div> 
    <div data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="1500" className=" w-11/12 lg:w-1/2 items-start">
       <p className="text-xl font-serif ">Hi, I am </p>
       <h1 className="text-4xl font-class ">Tahsin Tarannum Chowdhury</h1>
      <h1 className="text-xl  pb-6 pt-2 "> A MERN Stack Developer</h1>
      {/* <p className="pb-6 pt-2 ">Skilled in JS and React for frontend and Express.js with MongoDB for backend. Let's connect, collaborate, & code together.</p> */}
      
      <div className='flex flex-col md:flex-row gap-5'>
    <div> <button ><a  className="btn text-black border-none bg-yellow-500 hover:bg-yellow-400  " href='#contactme'  rel="noopener noreferrer">Contact Me<GrContact /></a></button></div> 
     <div><button ><a  className="btn text-black border-none bg-yellow-500 hover:bg-yellow-400 " href="https://drive.google.com/file/d/1jENxQ3A1SRI4Xd8qOcUaj_L2Kz05__H9/view?usp=sharing" target="_blank"  rel="noopener noreferrer">Get Resume<FaDownload /></a></button></div> 
      </div>
   <div><TechStack></TechStack></div>
    </div>
  </div>
</div>
    );
};

export default Banner;