import React from 'react';
import './Banner.css'
import { FaDownload } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content w-full flex-col lg:justify-between lg:flex-row-reverse">
   <div className="w-11/12 lg:w-1/2 flex justify-center  items-end ">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
   </div> 
    <div className=" w-11/12 lg:w-1/2 ">
      <h1 className="text-6xl font-class ">Frontend React Developer</h1>
      <p className="py-6 font-class">I am a junior frontend developer , skilled in JS and React for frontend and Express.js with MongoDB for backend. Let's connect, collaborate, & code together.</p>
      <button className="btn bg-black text-white">Download CV <span><FaDownload /></span></button>
    </div>
  </div>
</div>
    );
};

export default Banner;