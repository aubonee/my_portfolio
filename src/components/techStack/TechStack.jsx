import React from 'react';
import nodejs from '../../assets/images/nodejs1.png'
import js from '../../assets/images/js.png'
import html from '../../assets/images/download (1).png'
import css from '../../assets/images/css.svg'
import react from '../../assets/images/react2.png'
import tailwind from '../../assets/images/tailwind.webp'



const TechStack = () => {
    return (
        <div className='mt-5 hidden lg:flex items-center justify-start'>
        <div>
            <h1 className=' py-2 pr-3  text-2xl border-blue-400 border-r-2 '>Tech Stack</h1>
        </div>
        <div className='flex items-center'>
            <div className='w-[50px] mx-2' ><img src={html} alt="" /></div>
            <div className='w-[50px] mx-2'><img src={css} alt="" /></div>
            <div className='w-[50px] mx-2'><img src={js} alt="" /></div>
            
            <div className='w-[50px] mx-2'><img src={tailwind} alt="" /></div>
            <div className='w-[50px] mx-2'><img src={react} alt="" /></div>
            <div className='w-[50px] mx-2'><img src={nodejs} alt="" /></div>

        </div>
        </div>
    );
};

export default TechStack;