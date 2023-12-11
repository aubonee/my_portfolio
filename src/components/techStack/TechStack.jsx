import React from 'react';
import html from '../../assets/images/nodejs.png'
import css from '../../assets/images/css.svg'
import react from '../../assets/images/react2.png'
import tailwind from '../../assets/images/tailwind.webp'



const TechStack = () => {
    return (
        <div>
        <div>
            <h1>Tech Stack</h1>
        </div>
        <div className='flex items-center'>
            <div className='w-[80px]'><img src={html} alt="" /></div>
            <div className='w-[80px]'><img src={css} alt="" /></div>
            <div className='w-[80px]'><img src={react} alt="" /></div>
            <div className='w-[80px]'><img src={tailwind} alt="" /></div>

        </div>
        </div>
    );
};

export default TechStack;