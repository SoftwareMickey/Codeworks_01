import { useLocation, useNavigate } from 'react-router';
import '../../index.css'
import back from './../../../public/previous.png';
import { useEffect, useState } from 'react';
import CustomFooter from '../reusable/CustomFooter';

import app from '../LandingPage/assets/apps.png';
import web from '../LandingPage/assets/web.png';
import manage from '../LandingPage/assets/system.png';
import code from '../LandingPage/assets/sms.png';

export default function AboutPage(){

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicWidth, setDynamicWidth] = useState('pt-40');
    const [dynamicFooter, setDynamicFooter] = useState(false);

    useEffect(() => {
        if(location.pathname == '/about'){
            setHideBackButton(true);
            setDynamicWidth('pt-16');
            setDynamicFooter(true);
        }
    }, [])

    const navigator = useNavigate();

    function BackHandler(){
        navigator(-1);
    }
    return <section className=''>

        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div id="about-section" className='bg-slate-200 pb-10'>
            {/* <p className="mx-14 mt-10 font-bold">Who are We</p> */}
            <p className={`text-center w-[60%] mx-auto ${dynamicWidth} font-poppins font-bold text-[40px] sm:w-full sm:text-[18px]`}>We are a trailblazing software company, dedicated to transforming your ideas into digital masterpieces.</p>
        </div>

        <div>
            <p className="font-barlow text-center w-[60%] mt-8 mx-auto sm:w-full sm:text-center">At CodeWorks, our mission is to push the boundaries of what&apos;s possible. We thrive on creativity, fuelled by passion, and driven by a relentless pursuit of perfection.</p>
            {/* <p className="font-cambo text-center w-[60%] mt-1 mx-auto">Our goal? To empower businesses, streamline operations, and elevate user experiences through top-tier software solutions.</p> */}
        </div>

        <p className="text-center mt-16 font-bold text-2xl font-poppins sm:text-center">What We Do</p>
        <div className="mt-4 mx-6 flex items-center justify-center sm:flex-col sm:mx-2 sm:bg-[midnightblue] sm:text-white sm:rounded w-[60%] flex-wrap mx-auto">
            <div className='sm:shadow-custom-medium py-8 rounded md:w-[30%]'>
                <div className='flex justify-center items-center'>
                    <div className='bg-blue-800 p-2 rounded mb-6'>
                        <img src={app} alt='pic' className='h-6'/>
                    </div>
                </div>
                <p className="text-center ml-4 font-bold mb-2 sm:text-center">App Development</p>
                <p className="font-barlow text-[14px] my-1 text-center mx-4 sm:text-center">Custom mobile and web applications that are as powerful as they are beautiful.</p>
                <p className="font-barlow text-[14px] my-1 text-start mx-4 sm:text-center md:hidden">At Codeworks, app development isn’t just a service; it’s a craft. We specialize in creating mobile and web applications that aren’t just functional—they’re downright addictive. Our apps are built with a deep understanding of user behavior, ensuring they not only meet your needs but also exceed your expectations. Whether it’s a sleek mobile app that users can’t put down or a powerful web application that drives your business, we bring your ideas to life with precision and flair.</p>
            </div>

            <div className='sm:my-4 sm:shadow-custom-medium py-8 rounded md:w-[30%]'>
                <div className='flex justify-center items-center'>
                    <div className='bg-green-500 p-2 rounded mb-4'>
                        <img src={web} alt='pic' className='h-6'/>
                    </div>
                </div>
                <p className="text-center font-bold mb-2 sm:text-center mt-[-4px]">Web Development</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Responsive, visually stunning websites that captivate and convert.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">In the digital age, your website is your storefront, and at Codeworks we make sure it’s nothing short of spectacular. We create websites that are more than just visually stunning—they’re powerhouses of functionality and performance. Our designs are responsive, intuitive, and built to captivate your audience from the moment they land on your page. Whether you need a sleek corporate site or an interactive e-commerce platform, we fuse creativity with technology to build websites that leave a lasting impression.</p>
            </div>

            <div className="mx-4 sm:mx-0 sm:px-2 sm:mb-4 sm:shadow-custom-medium py-8 rounded md:w-[30%]">
                <div className='flex justify-center items-center'>
                    <div className='bg-blue-600 p-2 rounded mb-4'>
                        <img src={manage} alt='pic' className='h-6'/>
                    </div>
                </div>
                <p className="text-center font-bold mb-2 sm:text-center">Management Systems</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Robust, scalable solutions that simplify and streamline your business operations.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">Say goodbye to chaos and hello to efficiency with Codeworks’s cutting-edge management systems. We understand that running a business is like conducting an orchestra—everything needs to work in harmony. That’s why we build robust, scalable management systems that streamline your operations and give you complete control. Whether it’s inventory management, customer relations, or human resources, our systems are designed to automate processes, reduce errors, and enhance productivity.</p>
            </div>

            <div className='sm:mb-4 sm:shadow-custom-medium py-8 rounded md:w-[30%]'>
                <div className='flex justify-center items-center'>
                    <div className='bg-purple-500 p-2 rounded mb-4'>
                        <img src={code} alt='pic' className='h-6'/>
                    </div>
                </div>
                <p className="text-center font-bold mb-2 sm:text-center">Bulk SMS Services</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Efficient and reliable bulk SMS services to help you reach your audience instantly and effectively.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">In a world where communication is key, Codework’s bulk SMS services are your secret weapon. We provide a fast, reliable, and cost-effective way to reach your audience instantly. Whether you’re sending promotional messages, alerts, or reminders, our bulk SMS services ensure your message is delivered straight to your customers’ hands. With a high open rate and instant delivery, SMS is a powerful tool that can drive engagement and boost your business.</p>
            </div>

            <div className='sm:shadow-custom-medium py-8 rounded md:w-[30%] md:mx-10'>
                <div className='flex justify-center items-center'>
                    <div className='bg-blue-400 p-2 rounded mb-4'>
                        <img src={code} alt='pic' className='h-6'/>
                    </div>
                </div>
                <p className="text-center font-bold mb-2 sm:text-center">USSD Applications Services</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Seamless USSD solutions for interactive and convenient customer engagement.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">Take your customer engagement to the next level with Codework’s USSD application services. USSD applications are a powerful tool for providing interactive, real-time services to your customers without the need for internet connectivity. Whether it’s checking account balances, accessing services, or participating in surveys, our USSD solutions make it easy for your customers to interact with your brand, anytime, anywhere.</p>
            </div>
        </div>

        <div>

        <p className="text-center mt-20 font-bold text-2xl font-poppins">Why Choose Us?</p>
        <div className="mt-10 mb-6 mx-6 flex sm:flex-col sm:mx-1 sm:bg-[midnightblue] sm:text-white sm:rounded">
            <div className="mx-6 sm:my-2 sm:mx-1 shadow-custom-medium py-8 rounded px-2 hover:bg-[midnightblue] hover:text-white hover:cursor-pointer">
                <p className="text-center font-bold sm:text-center">Unmatched Expertise</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Our team comprises industry veterans and tech wizards who live and breathe technology.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">When it comes to turning vision into reality, Codeworks is the secret ingredient you’ve been searching for. Our team is a powerhouse of talent, each member a seasoned expert in their domain, bringing years of experience and a keen eye for innovation. We’re not just coders—we’re problem-solvers, innovators, and architects of digital transformation. Every project we undertake is infused with cutting-edge knowledge and a relentless pursuit of perfection. We thrive in the trenches of complex challenges, where others might hesitate; we dive in headfirst, equipped with the skills and insights to deliver nothing short of excellence.</p>
            </div>

            <div className="mx-6 sm:my-4 sm:mx-1 shadow-custom-medium py-8 rounded px-2 hover:bg-[midnightblue] hover:text-white hover:cursor-pointer">
                <p className="text-center font-bold sm:text-center">Client-Centric Approach</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Your satisfaction is our top priority.We listen, we innovate, and we deliver.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">At Codeworks, you’re more than just a client—you’re a collaborator, a partner, and the heart of our creative process. We believe that every project is a unique journey, and we walk that path with you, every step of the way. Our client-centric approach is not just about meeting your needs; it’s about exceeding them. We take the time to understand your vision, your goals, and your challenges, ensuring that every decision we make is aligned with your business objectives. Your success is our success, and we’re not satisfied until we’ve delivered results that leave you speechless.</p>
            </div>

            <div  className="mx-4 sm:my-4 sm:mx-1 shadow-custom-medium py-8 rounded px-2 hover:bg-[midnightblue] hover:text-white hover:cursor-pointer">
                <p className="text-center font-bold sm:text-center">Cutting-Edge Technology</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">We leverage the latest tools and technologies to ensure your project is nothing short of spectacular.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">In the fast-paced world of technology, staying ahead means being on the cutting edge—and that’s where we thrive.Codeworks is not just keeping up with the latest technological trends; we’re driving them forward. We leverage the most advanced tools, frameworks, and platforms to ensure your project isn’t just up-to-date but future-proof. Whether it’s harnessing the power of AI, integrating seamless APIs, or building responsive designs that captivate across devices, we use the best of what’s available to create solutions that are not only efficient but also awe-inspiring.</p>
            </div>

            <div  className="mx-4 shadow-custom-medium py-8 rounded px-2 sm:my-4 sm:mx-1 hover:bg-[midnightblue] hover:text-white hover:cursor-pointer">
                <p className="text-center font-bold sm:text-center">Proven Track Record</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center">Our portfolio speaks volumes about our capabilities. We’ve helped countless businesses achieve digital success.</p>
                <p className="font-barlow text-[14px] my-1 text-center sm:text-center md:hidden">Success leaves clues, and Codeworks has a trail of them. Our proven track record is a testament to our ability to deliver on our promises, time and time again. From startups looking to make their mark to established enterprises seeking digital transformation, we’ve helped businesses of all sizes achieve their goals. Each project we take on is an opportunity to demonstrate our commitment to excellence, and our portfolio is a reflection of the trust and satisfaction of our clients. We don’t just meet expectations; we blow them out of the water, consistently delivering results that speak for themselves.</p>
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

        <div className='flex bg-slate-200'>
            <div className="mt-10 flex flex-col mb-6 ml-10">
                <p className="font-bold text-xl my-2 font-barlow">Join Us on This Journey</p>
                <p className="text-start w-[70%] font-barlow text-[14px] sm:text-center sm:w-[90%] sm:mt-2">At CodeWorks, we don’t just build software; we create experiences that inspire, engage, and transform. Join us on this exciting journey and let’s build something amazing together. Ready to take the leap? Contact us today and let&apos;s turn your vision into reality!</p>
            </div>
            <div className='flex justify-center items-center mr-10 w-[15%]'>
                <button className='bg-[midnightblue] px-4 py-1 rounded font-barlow text-white'>Get In Touch</button>
            </div>
        </div>

        {dynamicFooter && <CustomFooter/>}
    </section>
}