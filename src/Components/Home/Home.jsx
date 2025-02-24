import React from 'react';
import Cardarea from './Cardarea';
import About from './About';
import OurVision from './OurVision';
import Services from './Services';
import Qasection from './Qasection';
import Contact from './Contact';
import FloatingButtons from './FloatingButtons';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <div id="home"><Cardarea /></div>
            <div id="about"><About /></div>
            <OurVision />
            <div id="services"><Services /></div>
            {/* <Blog/> */}
            <Qasection />
            <div id="contact"><Contact /></div>
            <FloatingButtons />
        </div>
    );
};

export default Home;
