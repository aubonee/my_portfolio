import React from 'react';

const AboutMe = () => {
    return (
        <div className='mx-auto hero w-full'>
            <div className="flex hero-content justify-center ">
                <div className='w-1/2'>
                    <h1 className='text-4xl font-semibold'>Frontend Web Developer</h1>
                    <p>
                    I'm a passionate web developer on a mission to turn coffee into code and ideas into interactive experiences. Currently navigating the final year of my CSE studies at the International Islamic University Chittagong, I'm fueled by a love for learning. As a frontend developer, I'm diving deep into the realms of JavaScript and React, crafting user interfaces that blend creativity with functionality.On the backend, I use Express.js and MongoDB to build strong and scalable systems. Still figuring out the ropes of JS and React, but loving every step of the learning journey. Excited to see where the coding adventures take me next!
                    </p>

                </div>
                <div className='w-1/2 border-2 pl-20'>
                    <h1 className='text-4xl font-semibold '>Personal Information</h1>
                    <div>
                        <p className='text-xl'> <span className='font-semibold'>Name:</span> Tahsin Tarannum Chowdhury</p>
                        <p> <span>Email:</span> chytahsin.2210@gmail.com</p>
                        <p> <span>Address: Nandakanon, Chattogram</span></p>
                        <p> <span></span></p>
                        <button className='btn' type=""> Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;