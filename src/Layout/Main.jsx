import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import sticyimg from '../assests/sticyimg.jpg';

const Main = () => {
    return (
        <div className=''>
            <div className='comunity hidden md:block'>
                <img src={sticyimg} alt="" />
            </div>
            <div className='z-10 relative top-0'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;