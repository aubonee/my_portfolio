import React from 'react';

import { IoSchoolSharp } from "react-icons/io5";
import SectionTitle2 from '../shared/sectionTitle/SectionTitle2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000" id='education' className='mb-10'>
            <SectionTitle2 heading="Education" subHeading="My Educational Journey from School to University"></SectionTitle2>  
            
            <div className='flex justify-center items-center'>
            <ul className="flex flex-col md:timeline md:timeline-vertical">
  <li>
    <div className="timeline-start timeline-box md:w-[300px] lg:w-[500px] bg-[#1f1e1f] text-white py-10 px-5">
    <div>
        <p> 2019-2023(ongoing)</p>
        <h1 className="font-semibold text-2xl">B.Sc. in Computer Science and Engineering</h1>
        <p className='my-2'> <span className='text-bold'>Institute:</span>International Islamic University Chittagong</p>
      
    </div>

    </div>
    <div className=" hidden md:flex md:timeline-middle bg-black w-[40px] h-[40px] rounded-full p-3">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
      <IoSchoolSharp className='text-white' />
    </div>
    <hr/>
  </li>
  
  <li>
    <hr/>
    <div className=" hidden md:flex md:timeline-middle bg-black w-[40px] h-[40px] rounded-full p-3">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
      <IoSchoolSharp className='text-white' />
    </div>
    <div className="timeline-end timeline-box md:w-[300px] lg:w-[500px] bg-[#1f1e1f] text-white py-10 px-2">
    <div>
        <p> 2018</p>
        <h1 className="font-semibold text-2xl">H.S.C</h1>
        <p className='my-2'> <span className='text-bold'>Institute :</span>Girls's College ,Chattogram</p>
      
    </div>
    
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box md:w-[300px] lg:w-[500px] bg-[#1f1e1f] text-white py-10 px-2">
    <div>
        <p> 2016</p>
        <h1 className="font-semibold text-2xl">S.S.C</h1>
        <p className='my-2'> <span className='text-bold'>Institute :</span>Krishna Kumari City Corporation Girls' High School, Chattogram</p>
      
    </div>
    


    </div>
   
    <div className=" hidden md:flex md:timeline-middle bg-black w-[40px] h-[40px] rounded-full p-3">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg> */}
      <IoSchoolSharp className='text-white' />
    </div>
  </li>
</ul>
            </div>
                
         </div>
            
    );
};

export default Education;