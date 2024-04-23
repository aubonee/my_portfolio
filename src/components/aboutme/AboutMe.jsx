import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import './Aboutme.css'
import SectionTitle from '../shared/sectionTitle/SectionTitle';
import resume from '../../assets/images/Resume.pdf'
import AOS from 'aos';
import AboutAni from '../../assets/AboutMe2.json'
// import AboutAni from '../../assets/images/about3.gif'
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import SectionTitle2 from '../shared/sectionTitle/SectionTitle2';

const AboutMe = () => {
    return (
        <div  id='aboutme' className=' banner bg-gray-900 mx-auto  w-full ' >
            <div className="hero min-h-[60vh]  text-white" >
  
  <div data-aos="fade-down"  data-aos-easing="linear" className=''>
               
            <div  className=''><SectionTitle2 heading="About Me" subHeading="A Glimpse into My Creative Journey"></SectionTitle2></div>  
                <div  className=" flex flex-col lg:flex-row hero-content justify-between text-center lg:text-left">
                
 
                <div className='w-1/3 md:w-11/12 lg:w-11/12 '>
                <p className='text-lg py-2'> <span className='font-semibold'>Name:</span> Tahsin Tarannum Chowdhury</p>
                        <p className='text-lg py-2'> <span className='font-semibold'>Email:</span> chytahsin.2210@gmail.com</p>
                        <p className='text-lg py-2'> <span className='font-semibold'>Address: Nandakanon, Chattogram</span></p>
                       
                    <p>
                    I'm a MERN Stack developer on a mission to turn coffee into code and ideas into interactive experiences. I have completed  my B.Sc in CSE at the International Islamic University Chittagong, I'm fueled by a love for learning. As a developer, I'm diving deep into the realms of JavaScript and React, crafting user interfaces that blend creativity with functionality.On the backend, I use Express.js and MongoDB to build strong and scalable systems. Still figuring out the ropes of JS and React, but loving every step of the learning journey. Excited to see where the coding adventures take me next!
                    </p>
                    
                    <div >
                       
                       
                        <button className='my-3'> <a  className="btn shadow-lg text-black border-none bg-yellow-500 hover:bg-yellow-400 " href="https://drive.google.com/file/d/1jENxQ3A1SRI4Xd8qOcUaj_L2Kz05__H9/view?usp=sharing" target="_blank" download="Resume" rel="noopener noreferrer">Resume <FaDownload /></a></button>

                </div>
                </div>
                
                <div className='relative w-2/3 md:w-11/12 h-[60vh] lg:w-11/12  flex flex-col items-center lg:items-end '>
                <Lottie animationData={AboutAni} loop={true} className='absolute bottom-10'/>
                {/* <img src={AboutAni} alt="loading..." className='h-[60vh] w-full object-fill'/> */}
                    </div>
                </div>
            </div>
            </div>
            </div>

    );
};

export default AboutMe;