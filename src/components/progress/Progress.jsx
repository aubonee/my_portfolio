import React from 'react';
import SectionTitle from '../shared/sectionTitle/SectionTitle';

const Progress = () => {
    return (
        <div className='bg-[#1f1e1f] text-white flex flex-col w-full py-10'>
            <SectionTitle heading={"My Skills"}></SectionTitle>
            <div className="mx-auto w-5/6 grid grid-cols-3 mb-10">
            <div>
                <h3 className='mx-10'>HTML</h3>
            <progress className="progress bg-[#2c2b2d]  progress-primary w-96 my-4 mx-10 h-[14px]" value="85" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>HTML</h3>
            <progress className="progress bg-[#2c2b2d]  progress-success w-96 my-4 mx-10 h-[14px]" value="85" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>HTML</h3>
                <progress className="progress progress-info bg-[#2c2b2d] w-96 my-4 mx-10 h-[14px]" value="85" max="100"></progress>    
            </div>
            <div>
                <h3 className='mx-10'>HTML</h3>
                <progress className="progress progress-error bg-[#2c2b2d] w-96 my-4 mx-10 h-[14px]" value="70" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>HTML</h3>
                <progress className="progress  progress-accent bg-[#2c2b2d] w-96 my-4 mx-10 h-[14px]" value="40" max="100"></progress>
            </div>
            <div>
                <h3 className='mx-10'>HTML</h3>
                <progress className="progress progress-secondary bg-[#2c2b2d] shadow-lg  w-96 my-4 mx-10 h-[14px]" value="50" max="100"></progress>
            </div>
            </div>





        </div>
    );
};

export default Progress;