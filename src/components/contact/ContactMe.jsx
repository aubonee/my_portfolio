import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactMe = () => {
    return (
        <div id='contactme'>
            <div className="hero min-h-screen bg-[#1f1e1f]">
  <div className="hero-content w-full flex-col items-center justify-center">
    <div className="text-center ">

      <h1 className="text-5xl text-white font-bold">Contact Me</h1>
      <p className="py-6 text-white">Please fill out the form below to discuss any work opportunities.</p>
    </div>
    <div className=" w-full md:w-5/6 lg:w-9/12 ">
      <form className=" ">
        <div className="form-control">
        
          <input type="email" placeholder="Your Email" className="input py-3 text-white bg-[#282729] rounded-sm w-full" required />
        </div>
        <div className="form-control my-5">
          
          <input type="text" placeholder="Your Name" className="py-3 input bg-[#282729] rounded-sm w-full" required />
          
        </div>
        <div>
                   
                    <textarea className="textarea w-full bg-[#282729] pt-3 pb-10 rounded-sm" placeholder="Message"></textarea>
         </div>
        <div className="form-control flex flex-col justify-center items-center  mt-6">
          <button className="btn bg-white text-black w-[200px]">Submit</button>
        </div>
      </form>

    </div>
    <div className='flex my-10' >
    <FaFacebookF className='bg-blue-500 text-white p-2 mx-2 w-[45px] h-[45px] rounded-full' /> 
    <FaLinkedinIn className='bg-blue-700 text-white p-2 mx-2 w-[45px] h-[45px] rounded-sm' /> 
    <FaGithub  className='bg-gray-700 text-white p-2 mx-2 w-[45px] h-[45px] rounded-full' /> 
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactMe;