import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navItems =<>
    <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Education</a></li>
      <li><a>Projects</a></li>
      <li><a>Skills</a></li>
      
      <li><a href='#contactme'>Contact me</a></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="">
            
            <div className="drawer drawer-start">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
 
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {navItems}
    </ul>
  </div>
</div>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
        <div className="drawer-content ">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  </div> 
        </div>
      </div>
    );
};

export default Nav;