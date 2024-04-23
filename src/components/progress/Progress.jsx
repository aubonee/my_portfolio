import React from 'react';
import SectionTitle from '../shared/sectionTitle/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Progress = () => {
    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" id='skills' className='bg-[#1f1e1f] text-white flex flex-col w-full py-10'>
           <div data-aos="fade-up"><SectionTitle heading={"My Skills"}></SectionTitle></div> 
            <div className="mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mb-10">
            <div>
                <h3 className='mx-10'>HTML</h3>
            <progress className="progress bg-[#A9B0B8]  progress-warning w-96 my-4 mx-10 h-[14px]" value="85" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>CSS</h3>
            <progress className="progress bg-[#A9B0B8]  progress-success w-96 my-4 mx-10 h-[14px]" value="85" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>Tailwind</h3>
            <progress className="progress bg-[#A9B0B8]  progress-info w-96 my-4 mx-10 h-[14px]" value="85" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>Bootstrap</h3>
            <progress className="progress bg-[#A9B0B8] progress-secondary w-96 my-4 mx-10 h-[14px]" value="80" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>Javascript</h3>
                <progress className="progress progress-info bg-[#A9B0B8] w-96 my-4 mx-10 h-[14px]" value="65" max="100"></progress>    
            </div>
            <div>
                <h3 className='mx-10'>React</h3>
                <progress className="progress progress-error bg-[#A9B0B8] w-96 my-4 mx-10 h-[14px]" value="65" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>GitHub</h3>
                <progress className="progress  progress-accent bg-[#A9B0B8] w-96 my-4 mx-10 h-[14px]" value="70" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>MongoDB</h3>
                <progress className="progress progress-success bg-[#A9B0B8] shadow-lg  w-96 my-4 mx-10 h-[14px]" value="50" max="100"></progress>
            </div>

           
            <div>
                <h3 className='mx-10'>MySQL</h3>
                <progress className="progress  progress-accent bg-[#A9B0B8] w-96 my-4 mx-10 h-[14px]" value="70" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>FireBase</h3>
                <progress className="progress progress-info bg-[#A9B0B8] w-96 my-4 mx-10 h-[14px]" value="55" max="100"></progress>    
            </div>
            <div>
                <h3 className='mx-10'>Json Web Token</h3>
                <progress className="progress progress-error bg-[#A9B0B8] w-96 my-4 mx-10 h-[14px]" value="40" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>Postman</h3>
                <progress className="progress progress-success bg-[#A9B0B8] shadow-lg  w-96 my-4 mx-10 h-[14px]" value="50" max="100"></progress>
            </div>
            </div>





        </div>
    );
};

export default Progress;