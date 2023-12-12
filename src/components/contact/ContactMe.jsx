import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bkqeskg', 'template_q27r159', form.current, 'lfBV0ogI4aslzcoKx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id='contactme'>
            <div className="hero min-h-screen bg-[#1f1e1f]">
  <div className="hero-content w-full flex-col items-center justify-center">
    <div className="text-center ">

      <h1 className="text-5xl text-white font-bold">Contact Me</h1>
      <p className="py-6 text-white">Please fill out the form below to discuss any work opportunities.</p>
    </div>
    <div className=" w-full md:w-5/6 lg:w-9/12 ">
      <form className=" " ref={form} onSubmit={sendEmail}>
        <div className="form-control">
        
          <input type="email" placeholder="Your Email" name="from_email"  className="input py-3 text-white bg-[#282729] rounded-sm w-full" required />
        </div>
        <div className="form-control my-5">
          
          <input type="text" placeholder="Your Name" name="from_name" className="py-3 input text-white  bg-[#282729] rounded-sm w-full" required />
          
        </div>
        <div  className="form-control my-5">
                   
                    <textarea className="textarea w-full bg-[#282729] text-white pt-3 pb-10 rounded-sm" placeholder="Message" name="message"></textarea>
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