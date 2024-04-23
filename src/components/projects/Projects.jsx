import React from 'react';
import SectionTitle2 from '../shared/sectionTitle/SectionTitle2';
import socialimg from '../../assets/images/social.png'
import cosimg from '../../assets/images/2.png'
import employee from '../../assets/images/webpulse .jpg'
import ExpoElite from '../../assets/images/ExpoElite.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  // const ProjectInfo=[
  //   {
  //        name: "Social event planner",
  //        Description: "",
  //        Live Demo:""
  //       },
  //   {

  //   }
  // ]
    return (
        <div id='projects' className='flex flex-col w-full justify-center items-center py-20'>
         <div className="w-full " data-aos="fade-right">   <SectionTitle2 heading="My Projects" subHeading="A Showcase of My Recent Done Web Development Projects"></SectionTitle2></div>
            <div className="container w-4/5 grid grid-cols-1 gap-5">
             
            <div data-aos="zoom-out-left" className='flex-justify-around bg-base-100 shadow-xl'>
                <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px]">
  <div className='w-full lg:w-1/2 flex items-center'>
  <figure className='w-full h-full'><img src={ExpoElite} className='h-full w-full' alt="Album"/></figure>
  </div>
  <div className="w-full lg:w-1/2 p-5 text-center">
    <h2 className="text-xl font-semibold text-center">ExpoElite - Property Selling & Exhibition Platform</h2>
    <p className='text-md mt-2 '> This is a Next Js and Mongoose based project. This is a team project I am  part of. Here implemented role-Based Access Control for user, seller and admin, property management and real time map feature. Besides search functionality, notification, book-appointment, membership, chatting, payment gateway etc. features are also added. </p>
    <div className="flex justify-center py-5 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://expo-elite-dev.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/nerualninjas/ExpoElite" target="_blank" rel="noopener noreferrer">Client Side Code</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/nerualninjas/ExpoElite-server" target="_blank" rel="noopener noreferrer">Server Side Code</a></button>
    </div>
  </div>
</div>
                </div>

                <div className='flex justify-around bg-base-100 shadow-xl p-0'>
                <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px]">
                  <div className='w-full lg:w-1/2 flex items-center'> <figure className='h-full w-full'><img src={employee} className='h-full w-full' alt="Album"/></figure></div>
  
  <div data-aos="zoom-out-right" className=" w-full lg:w-1/2 p-5 text-center">
    <h2 className="text-xl font-semibold text-center">Webpulse Innovation - Employee Management System</h2>
    <p className='text-md mt-2 '>It is built with React, Tailwind CSS, Express.js, and MongoDB, it simplifies tasks for both employees and HR. Employees can log tasks easily, and HR has a command center for verification, profiles, and salary processing. Admin control allows promotions and strategic decisions.</p>
    <div className="flex justify-center py-5 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://stalwart-chimera-e2bcfc.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/webPulse_Innovation_client_side" target="_blank" rel="noopener noreferrer">Client Side Code</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/webPulse_Innovation_server_side" target="_blank" rel="noopener noreferrer">Server Side Code</a></button>
    </div>
  </div>
</div>
                </div>

                <div data-aos="zoom-out-left" className='flex-justify-around bg-base-100 shadow-xl'>
                <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px]">
  <div className='w-full lg:w-1/2 flex items-center'>
  <figure className='w-full h-full'><img src={cosimg} className='h-full w-full' alt="Album"/></figure>
  </div>
  <div className="w-full lg:w-1/2 p-5 text-center">
    <h2 className="text-xl font-semibold text-center">GlamAura - Cosmetics Shop Site</h2>
    <p className='text-md mt-2 '>This is a Cosmetics Shop website.Here admin can manage product and user can add to cart. This React-based platform, enhanced with Tailwind CSS, is your one-stop destination for discovering a curated collection of cosmetics from various brands.</p>
    <div className="flex justify-center py-3 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://comsetics-shop.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/Cosmetics_Brand_Shop" target="_blank" rel="noopener noreferrer">Code</a></button>
    </div>
  </div>
</div>
                </div>

                <div data-aos="zoom-out-left" className='flex-justify-around bg-base-100 shadow-xl'>
                <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px] ">
 <div className=' w-full lg:w-1/2 flex items-center'> <figure className='h-full w-full'><img src={socialimg} className='h-full w-full' alt="Album"/></figure></div> 
  <div className=" w-full lg:w-1/2 p-5 text-center ">
    <h2 className="text-xl font-semibold text-center">Social event planner</h2>
    <p className='text-md mt-2 '>
    Built with React.js and styled using Tailwind, this website is a sleek and responsive platform. The authentication system, including social login, ensures a secure and seamless user experience. Explore detailed package information, insightful blogs, and more—all in one place.</p>
<div className="flex justify-center py-3 text-white font-semibold items-center">
      <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://social-event-planner-922a2.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
      <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/Social_Event_management" target="_blank" rel="noopener noreferrer">Code</a></button>
    </div>
  </div>
</div>
                </div>

                

            </div>
        </div>
    );
};

export default Projects;