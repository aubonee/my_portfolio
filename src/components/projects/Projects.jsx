import React from 'react';
import SectionTitle2 from '../shared/sectionTitle/SectionTitle2';
import socialimg from '../../assets/images/social.png'
import cosimg from '../../assets/images/2.png'
import employee from '../../assets/images/employeeM.png'


const Projects = () => {
    return (
        <div>
            <SectionTitle2 heading="My Projects" subHeading="A Showcase of My Recent Done Web Development Projects"></SectionTitle2>
            <div className="container w-3/4">
                <div>
                <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={employee} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Employee Management System
     
    </h2>
    <p>It is built with React, Tailwind CSS, Express.js, and MongoDB, it simplifies tasks for both employees and HR. Employees can log tasks easily, and HR has a command center for verification, profiles, and salary processing. Admin control allows promotions and strategic decisions.</p>
    <div className="card-actions justify-start">
    <button className="btn btn-primary">Listen</button>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
                </div>
                <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className='w-1/3'><img src={employee} className=' w-full' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Employee Management System</h2>
    <p>It is built with React, Tailwind CSS, Express.js, and MongoDB, it simplifies tasks for both employees and HR. Employees can log tasks easily, and HR has a command center for verification, profiles, and salary processing. Admin control allows promotions and strategic decisions.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
                </div>

                <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
 <div></div> <figure className='w-[400px]'><img src={socialimg} className='w-[400px]' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>About
This is a Cosmetics Shop website. Here someone can register or log in and experience a user-friendly interface with React and Tailwind CSS. This is your one-stop destination for discovering a curated collection of cosmetics from various brands.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
                </div>

                <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className='w-[400px]'><img src={cosimg} className=' w-full' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>t is an Employee Management System built with React, Tailwind CSS, Express.js, and MongoDB, it simplifies tasks for both employees and HR. Employees can log tasks easily, and HR has a command center for verification, profiles, and salary processing. Admin control allows promotions and strategic decisions. It's a user-friendly solution.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Listen</button>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Projects;