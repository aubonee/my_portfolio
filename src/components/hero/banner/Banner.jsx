import React from 'react';
import './Banner.css'
import { FaDownload } from "react-icons/fa6";
import img from '../../../assets/images/my_photo.png'
import TechStack from '../../techStack/TechStack';
const Banner = () => {
    return (
        <div className="hero border-b min-h-[70vh]">
  <div className="hero-content w-full flex-col lg:justify-between lg:flex-row-reverse">
   <div className="w-11/12 lg:w-1/2 flex justify-center  items-end ">
    <img src={img} className=" relative -mb-4" />
   </div> 
    <div className=" w-11/12 lg:w-1/2 items-start">
      <h1 className="text-6xl font-class ">Frontend React Developer</h1>
      <p className="py-6 font-class">I am a junior frontend developer , skilled in JS and React for frontend and Express.js with MongoDB for backend. Let's connect, collaborate, & code together.</p>
      <button className="btn bg-black text-white">Download CV <span><FaDownload /></span></button>
   <div><TechStack></TechStack></div>
    </div>
  </div>
</div>
    );
};

export default Banner;