import React from 'react';
import Blog from './Blog/Blog';
import Courses from './Courses/Courses';
import Header from './Header/Header';
import SuccessStorys from './SuccessStory/SuccessStorys';

const Home = () => {
    return (
        <div>
            <Header />
            <Courses />
            <SuccessStorys />
            <Blog/>
        </div>
    );
};

export default Home;