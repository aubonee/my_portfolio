import React from 'react';
import SectionTitle2 from '../shared/sectionTitle/SectionTitle2';
import socialimg from '../../assets/images/social.png'
import cosimg from '../../assets/images/2.png'
import employee from '../../assets/images/employeeM.png'


const Projects = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center py-20'>
         <div className="w-full">   <SectionTitle2 heading="My Projects" subHeading="A Showcase of My Recent Done Web Development Projects"></SectionTitle2></div>
            <div className="container w-3/5 grid grid-cols-1 gap-5">
             
                <div className='flex justify-around bg-base-100 shadow-xl p-0'>
                <div className="card lg:card-side lg:h-[255px]">
                  <div className='w-1/2 flex items-center'> <figure className='w-full'><img src={employee} className=' w-full' alt="Album"/></figure></div>
  
  <div className=" w-1/2 p-5 text-center">
    <h2 className="text-xl font-semibold text-center">Employee Management System</h2>
    <p className='text-md mt-2 '>It is built with React, Tailwind CSS, Express.js, and MongoDB, it simplifies tasks for both employees and HR. Employees can log tasks easily, and HR has a command center for verification, profiles, and salary processing. Admin control allows promotions and strategic decisions.</p>
    <div className="flex justify-center py-3 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md"><a href="https://messy-person.surge.sh" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md"><a href="https://github.com/aubonee/webPulse_Innovation_client_side" target="_blank" rel="noopener noreferrer">Code</a></button>
    </div>
  </div>
</div>
                </div>

                <div className='flex-justify-around bg-base-100 shadow-xl'>
                <div className="card lg:card-side lg:h-[255px] ">
 <div className='w-1/2 flex items-center'> <figure className='w-full'><img src={socialimg} className='w-full' alt="Album"/></figure></div> 
  <div className=" w-1/2 p-5 text-center ">
    <h2 className="text-xl font-semibold text-center">Social event planner</h2>
    <p className='text-md mt-2 '>
    Built with React.js and styled using Tailwind, this website is a sleek and responsive platform. The authentication system, including social login, ensures a secure and seamless user experience. Explore detailed package information, insightful blogs, and more—all in one place.</p>
<div className="flex justify-center py-3 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md"><a href="https://social-event-planner-922a2.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md"><a href="https://github.com/aubonee/Social_Event_management" target="_blank" rel="noopener noreferrer">Code</a></button>
    </div>
  </div>
</div>
                </div>

                <div className='flex-justify-around bg-base-100 shadow-xl'>
                <div className="card lg:card-side lg:h-[255px]">
  <div className='w-1/2 flex items-center'>
  <figure className='w-full'><img src={cosimg} className=' w-full' alt="Album"/></figure>
  </div>
  <div className="w-1/2 p-5 text-center">
    <h2 className="text-xl font-semibold text-center">Cosmetics Shop Site</h2>
    <p className='text-md mt-2 '>This is a Cosmetics Shop website. This React-based platform, enhanced with Tailwind CSS, is your one-stop destination for discovering a curated collection of cosmetics from various brands.</p>
    <div className="flex justify-center py-3 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md"><a href="https://comsetics-shop.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md"><a href="https://github.com/aubonee/Cosmetics_Brand_Shop" target="_blank" rel="noopener noreferrer">Code</a></button>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Projects;