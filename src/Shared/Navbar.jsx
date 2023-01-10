import React from 'react';
import logo from '../assests/logo.png';
import { FaBars, FaCartArrowDown } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import './Navbar.css';

const Navbar = () => {
    const [show, setShow] = React.useState(false);

    const handle_click = () => {
        setShow(!show);
    }

    return (
        <div className='bg-pink-800'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='md:flex md:justify-between py-5 items-center uppercase font-semibold'>
                    <div className='flex items-center justify-between'>
                        <div className='md:hidden p-2 mr-2'>
                            <span className='text-slate-400 text-2xl' onClick={handle_click}><FaBars /></span>
                        </div>
                        <img className='logo pl-4 md:p-0 w-64' src={logo} alt="" />
                        <div className='text-3xl text-white md:hidden pr-3'><FaCartArrowDown /></div>
                    </div>
                    <div className='hidden md:block text-sm'>
                        <ul className='flex text-bold items-center'>
                            <li className='text-white py-2 px-4 cursor-pointer hover:opacity-50'>Home</li>
                            <li className='text-white py-2 px-4 cursor-pointer hover:opacity-50'>About</li>
                            <li className='text-white py-2 px-4 cursor-pointer hover:opacity-50'>Courses</li>
                            <li className='text-white py-2 px-4 cursor-pointer hover:opacity-50'>Agency</li>
                            <li className='text-white py-2 px-4 cursor-pointer hover:opacity-50'>Sucsess storys</li>
                            <button className='hover:opacity-70 button text-black yellow normal-case font-normal'>Login</button>
                            <li><div className='text-3xl text-white pl-3'><FaCartArrowDown /></div></li>
                            {/* {component} */}
                        </ul>
                    </div>
                    <div className={`${show ? 'active' : undefined} absolute z-10 bg-white navbar md:hidden w-[140px] border rounded-sm mt-8`}>
                        <ul className='z-0'>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'>Home</li>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'>About</li>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'>Courses</li>
                            <li className='border-b border-slate-300 text-black py-2 px-4 cursor-pointer hover:bg-slate-200'>Agency</li>
                            <li className='text-black py-2 px-4 cursor-pointer hover:bg-slate-200'>Sucsess storys</li>
                            <button className='button text-black yellow w-full'>Login</button>
                        </ul>
                    </div>
                </div>
            </div>
            <marquee className='text-white width-full'>
                *দরিদ্র ও মেধাবী শিক্ষার্থীদের দেয়া হবে ১ লক্ষ টাকা পর্যন্ত স্কলারশীপ এবং টপ ৩ জন শিক্ষার্থী পাবেন ল্যাপটপ, পরের ৩ জন পাবেন স্মার্টফোন । বর্তমান ক্যাম্পেইনে যারা ভর্তি হচ্ছে তারাই এই সুযোগটি নিতে পারবে। তাই দেরি না করে দ্রুত ভর্তি কনফার্ম করে এই সুযোগ কাজে লাগাতে পারবেন আপনিও
            </marquee>
        </div >
    );
};

export default Navbar;