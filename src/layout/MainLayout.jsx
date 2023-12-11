import React from 'react';

import Nav from './components/shared/navbar/Nav'
import Footer from './components/shared/footer/Footer'
import Banner from './components/hero/banner/Banner'
import AboutMe from './components/aboutme/AboutMe'
import TechStack from './components/techStack/TechStack'
import ContactMe from './components/contact/ContactMe'
const MainLayout = () => {
    return (
        <div>
             <Nav></Nav>
    <Banner></Banner>
    <TechStack></TechStack>
    <AboutMe></AboutMe>
    <ContactMe></ContactMe>
    <Footer></Footer>
        </div>
    );
};

export default MainLayout;