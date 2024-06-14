import React, { useEffect } from 'react';
import SectionTitle2 from '../shared/sectionTitle/SectionTitle2';
import socialimg from '../../assets/images/social.png'
import cosimg from '../../assets/images/glamAura.png'
import employee from '../../assets/images/webpulse .jpg'
import ExpoElite from '../../assets/images/ExpoElite.png'
import hotel from '../../assets/images/nomadnest.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: '1000' });
  }, []);

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


        {/* -------------------------project 1-------------------------- */}
        <div data-aos="zoom-in-up" className='flex-justify-around bg-base-100 shadow-xl'>
          <div className="card lg:card-side lg:max-h-[320px] lg:min-h-[255px]">
            <div className='w-full lg:w-1/2 flex items-center'>
              <figure className='w-full h-full'><img src={ExpoElite} className='h-full w-full' alt="Album" /></figure>
            </div>

            <div className="w-full lg:w-1/2 p-5 text-center py-5">
              <h2 className="text-xl font-bold text-center drop-shadow-md">ExpoElite - Property Selling & Exhibition Platform</h2>
              {/* <p className='text-md mt-2 '> This is a Next Js and Mongoose based project. This is a team project I am  part of. Here implemented role-Based Access Control for user, seller and admin, property management and real time map feature. Besides search functionality, notification, book-appointment, membership, chatting, payment gateway etc. features are also added. </p> */}
            
            <div className='text-md  text-left my-1 '> <li>Implemented role-Based Access Control for user, seller, admin and added real time Map feature.</li>
            <li>Sellers can add property, manage property and users can buy or rent property with payment gateway.</li>
            <li>Search functionality, notification, book-appointment, membership chatting etc. features are also added.</li>
            <li>Technology: figma, HTML, Tailwind, ReactJS, NextJs, NodeJs, ExpressJS, Mongoose, MongoDB, Firebase</li></div>  <div className="flex justify-center py-5 text-white font-semibold items-center">
                <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://expo-elite-dev.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/nerualninjas/ExpoElite" target="_blank" rel="noopener noreferrer">Client Side Code</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/nerualninjas/ExpoElite-server" target="_blank" rel="noopener noreferrer">Server Side Code</a></button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around bg-base-100 shadow-xl p-0'>
          <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px]">
            <div className='w-full lg:w-1/2 flex items-center'> <figure className='h-full w-full'><img src={employee} className='h-full w-full' alt="Album" /></figure></div>
            {/* -------------------------project 2-------------------------- */}
            <div data-aos="zoom-out-up" className=" w-full lg:w-1/2 p-5 text-center">
              <h2 className="text-xl font-bold text-center drop-shadow-md">Webpulse Innovation - Employee Management System</h2>
              <div className='text-md  text-left mb-1 '>
                <li>It is an employee management system where Firebase authentication was added.  </li>
                <li>Implemented role-based access for Employees, HR and Admin[email: tawsif@gmail.com, password: Abcd$12]. </li>
                <li>Implemented payment gateway to facilitate financial transactions by stripe. </li>
                <li>Technology: HTML, Tailwind, Daisy Ui,  ReactJS, NodeJS, ExpressJS, MongoDB, Firebase, JWT. </li>
              </div>
              <div className="flex justify-center py-5 text-white font-semibold items-center">
                <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://stalwart-chimera-e2bcfc.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/webPulse_Innovation_client_side" target="_blank" rel="noopener noreferrer">Client Side Code</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/webPulse_Innovation_server_side" target="_blank" rel="noopener noreferrer">Server Side Code</a></button>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------project 3-------------------------- */}
        <div className='flex-justify-around bg-base-100 shadow-xl' data-aos="zoom-in-up">
          <div className="card lg:card-side lg:max-h-[320px] lg:min-h-[255px]">
            <div className='w-full lg:w-1/2 flex items-center'>
              <figure className='w-full h-full'><img src={cosimg} className='h-full w-full' alt="Album" /></figure>
            </div>
            <div className="w-full lg:w-1/2 p-5 text-center">
              <h2 className="text-xl font-bold text-center drop-shadow-md">GlamAura - Cosmetics Shop Site</h2>
              {/* <p className='text-md mt-2 '>This is a Cosmetics Shop website.Here admin can add, update and delete product and user can add to cart or delete from cart. This React-based platform, enhanced with Tailwind CSS, is your one-stop destination for discovering a curated collection of cosmetics from various brands.</p> */}
            <div className='text-left mb-1 text-md'>
              <li>It’s a cosmetics shop site where Firebase authentication, scroll animation, and dark-light mode features are added.</li>
              <li>Implemented role based access for admin and user.  users can add to cart products, view details, delete from cart.</li>
              <li>Implemented add, edit  and delete product feature for admin[email: admin@gmail.com, password: Abcd$12].</li>
              <li>Technology: HTML, Tailwind CSS, Daisy Ui, ReactJS, NodeJS, ExpressJS, MongoDB, Firebase.</li>
            </div>
            
              <div className="flex justify-center py-3 text-white font-semibold items-center">
                <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://comsetics-shop.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/Cosmetics_Brand_Shop" target="_blank" rel="noopener noreferrer">Client Side Code</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/cosmetics_brand_shop_server" target="_blank" rel="noopener noreferrer">Server Side Code</a></button>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------project 4-------------------------- */}

        <div data-aos="zoom-in-up" className='aos-init aos-animate flex-justify-around bg-base-100 shadow-xl'>
          <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px]">
            <div className='w-full lg:w-1/2 flex items-center'>
              <figure className='w-full h-full'><img src={hotel} className='h-full w-full' alt="Album" /></figure>
            </div>
            <div className="w-full lg:w-1/2 p-5 text-center">
              <h2 className="text-xl font-bold text-center drop-shadow-md">NomadNest - Hotel Booking System</h2>


              <div className='text-left mb-1 text-md'>
                <li>A hotel booking system where users can see rooms and Book rooms, and can delete or edit booking.</li>
                <li>Implemented Firebase authentication system added for Authentication.</li>
                <li>Users name and Profile photo shown in navbar available for logged in users. </li>
                <li>Technology: HTML, CSS, Tailwind CSS, JS, ReactJS, Firebase, NodeJS, ExpressJS, MongoDB.</li>
              </div>
              <div className="flex justify-center py-3 text-white font-semibold items-center">
                <button className=" mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://prismatic-granita-cd91ef.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/Hotel_Booking_system" target="_blank" rel="noopener noreferrer">Client Side Code</a></button>
                <button className="mx-2 btn-sm bg-black shadow-md rounded-md hover:bg-yellow-500"><a href="https://github.com/aubonee/hotel-booking_project_server_side" target="_blank" rel="noopener noreferrer">Server Side Code</a></button>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------project 5-------------------------- */}
        <div data-aos="zoom-in-up" className='flex-justify-around bg-base-100 shadow-xl'>
          <div className="card lg:card-side lg:max-h-[300px] lg:min-h-[255px] ">
            <div className=' w-full lg:w-1/2 flex items-center'> <figure className='h-full w-full'><img src={socialimg} className='h-full w-full' alt="Album" /></figure></div>
            <div className=" w-full lg:w-1/2 p-5 text-center ">
              <h2 className="text-xl font-bold text-center drop-shadow-md">Social event planner</h2>
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