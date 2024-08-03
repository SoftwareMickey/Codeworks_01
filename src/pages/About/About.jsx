import { useLocation, useNavigate } from 'react-router';
import '../../index.css'
import back from './../../../public/previous.png';
import { useState } from 'react';

export default function AboutPage(){

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);

    if(location == ''){
        console.log(`Location is: ${location}`);
        setHideBackButton(true);
    }

    const navigator = useNavigate();

    function BackHandler(){
        navigator(-1);
    }
    return <section id="about">

        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div>
            {/* <p className="mx-14 mt-10 font-bold">Who are We</p> */}
            <p className="text-center w-[60%] mx-auto pt-28 font-poppins font-bold text-[40px] sm:w-full sm:text-[18px]">We are a trailblazing software company, dedicated to transforming your ideas into digital masterpieces.</p>
        </div>

        <div>
            <p className="font-cambo text-start w-[60%] mt-8 mx-auto sm:w-full">At CodeWorks, our mission is to push the boundaries of what&apos;s possible. We thrive on creativity, fuelled by passion, and driven by a relentless pursuit of perfection.</p>
            {/* <p className="font-cambo text-center w-[60%] mt-1 mx-auto">Our goal? To empower businesses, streamline operations, and elevate user experiences through top-tier software solutions.</p> */}
        </div>

        <p className="text-center mt-16 font-bold text-2xl font-poppins">What We Do</p>
        <div className="mt-4 mx-6 flex items-center justify-center sm:flex-col sm:mx-2">
            <div>
                <p className="text-start ml-4 font-bold mb-2">App Development</p>
                <p className="font-cambo text-[14px] my-1 text-start mx-4">Custom mobile and web applications that are as powerful as they are beautiful.</p>
            </div>

            <div>
                <p className="text-start font-bold mb-2">Web Development</p>
                <p className="font-cambo text-[14px] my-1 text-start">Responsive, visually stunning websites that captivate and convert.</p>
            </div>

            <div className="mx-4">
                <p className="text-start font-bold mb-2">Management Systems</p>
                <p className="font-cambo text-[14px] my-1 text-start">Robust, scalable solutions that simplify and streamline your business operations.</p>
            </div>

            <div>
                <p className="text-start font-bold mb-2">Bulk SMS Services</p>
                <p className="font-cambo text-[14px] my-1 text-start">Efficient and reliable bulk SMS services to help you reach your audience instantly and effectively.</p>
            </div>

            <div>
                <p className="text-start font-bold mb-2">USSD Applications Services</p>
                <p className="font-cambo text-[14px] my-1 text-start">Seamless USSD solutions for interactive and convenient customer engagement.</p>
            </div>
        </div>

        <div>

        <p className="text-center mt-20 font-bold text-2xl font-poppins">Why Choose Us?</p>
        <div className="mt-6 mx-6 flex sm:flex-col">
            <div className="mx-6">
                <p className="text-start font-bold">Unmatched Expertise</p>
                <p className="font-cambo text-[14px] my-1 text-start">Our team comprises industry veterans and tech wizards who live and breathe technology.</p>
            </div>

            <div className="mx-6">
                <p className="text-start font-bold">Client-Centric Approach</p>
                <p className="font-cambo text-[14px] my-1 text-start">Your satisfaction is our top priority.We listen, we innovate, and we deliver.</p>
            </div>

            <div  className="mx-4">
                <p className="text-start font-bold">Cutting-Edge Technology</p>
                <p className="font-cambo text-[14px] my-1 text-start">We leverage the latest tools and technologies to ensure your project is nothing short of spectacular.</p>
            </div>

            <div  className="mx-4">
                <p className="text-start font-bold">Proven Track Record</p>
                <p className="font-cambo text-[14px] my-1 text-start">Our portfolio speaks volumes about our capabilities. We’ve helped countless businesses achieve digital success.</p>
            </div>
        </div>

        {/* <div className="mt-10 mx-6">
            <p className="font-bold font-cambo">Our Values</p>
            <p className="font-cambo text-[14px] my-1">Innovation: We are constantly pushing the envelope to deliver cutting-edge solutions.</p>
            <p className="font-cambo text-[14px] my-1">Integrity: We believe in honesty, transparency, and building lasting relationships.</p>
            <p className="font-cambo text-[14px] my-1">Excellence: We strive for nothing less than perfection in everything we do.</p>
            <p className="font-cambo text-[14px] my-1">Passion: We are passionate about technology and driven by a love for what we do.</p>
        </div> */}
        </div>

        <div className="mt-10 flex items-center justify-center flex-col mb-6">
            <p className="font-bold text-xl my-2 font-cambo">Join Us on This Journey</p>
            <p className="text-start w-[70%] font-cambo text-[14px]">At CodeWorks, we don’t just build software; we create experiences that inspire, engage, and transform. Join us on this exciting journey and let’s build something amazing together. Ready to take the leap? Contact us today and let&apos;s turn your vision into reality!</p>
        </div>
    </section>
}