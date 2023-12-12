import React from 'react';
import './Banner.css'
import { FaDownload } from "react-icons/fa6";
import img from '../../../assets/images/photo.png'
import TechStack from '../../techStack/TechStack';
import resume from '../../../assets/images/CV_Tahsin Tarannum Chowdhury(VBD_CM).pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    return (
        <div id='home' className="hero  min-h-[70vh]">
  <div className="hero-content w-full flex-col lg:justify-between lg:flex-row">
   <div className="w-11/12 lg:w-1/2 flex justify-center items-end ">
    <img src={img} className=" relative -mb-4" />
   </div> 
    <div data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="1500" className=" w-11/12 lg:w-1/2 items-start">
      <h1 className="text-6xl font-class ">Frontend React Developer</h1>
      <p className="py-6 font-class">I am a junior frontend developer , skilled in JS and React for frontend and Express.js with MongoDB for backend. Let's connect, collaborate, & code together.</p>
      <button > <a  className="btn bg-black text-white"href={resume} download="Resume" rel="noopener noreferrer">Download CV <FaDownload /></a></button>
   <div><TechStack></TechStack></div>
    </div>
  </div>
</div>
    );
};

export default Banner;