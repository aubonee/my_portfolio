import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import './Aboutme.css'
import SectionTitle from '../shared/sectionTitle/SectionTitle';

const AboutMe = () => {
    return (
        <div className=' banner mx-auto  w-full text-white' >
            <div className="hero min-h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/mDFp8xS/2.png)'}}>
  
  <div className='bg-opacity-40'>
               
              <SectionTitle heading="About Me" subHeading="A Glimpse into My Creative Journey"></SectionTitle>
                <div className="flex flex-col lg:flex-row hero-content justify-between text-center lg:text-left">
                <div className='w-1/2 md:w-11/12 lg:w-11/12'>
                    <h1 className='text-3xl mb-5 pb-5 font-semibold'>Frontend Web Developer</h1>
                    <p>
                    I'm a passionate web developer on a mission to turn coffee into code and ideas into interactive experiences. Currently navigating the final year of my CSE studies at the International Islamic University Chittagong, I'm fueled by a love for learning. As a frontend developer, I'm diving deep into the realms of JavaScript and React, crafting user interfaces that blend creativity with functionality.On the backend, I use Express.js and MongoDB to build strong and scalable systems. Still figuring out the ropes of JS and React, but loving every step of the learning journey. Excited to see where the coding adventures take me next!
                    </p>

                </div>
                <div className='w-1/2 md:w-11/12 lg:w-11/12 ml-20 pb-10 flex flex-col items-center lg:items-end '>
                    <h1 className='text-4xl  py-5 font-semibold '>Personal Information</h1>
                    <div className='pb-5'>
                        <p className='text-xl py-2'> <span className='font-semibold'>Name:</span> Tahsin Tarannum Chowdhury</p>
                        <p className='text-xl py-2'> <span className='font-semibold'>Email:</span> chytahsin.2210@gmail.com</p>
                        <p className='text-xl py-2'> <span className='font-semibold'>Address: Nandakanon, Chattogram</span></p>
                        <p> <span></span></p>
                        <button className='btn my-3' type=""> Download CV <span><FaDownload /></span></button>
                    </div>
                </div>
            </div>
            </div>
</div>
            
          
        </div>
    );
};

export default AboutMe;