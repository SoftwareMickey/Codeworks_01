import AnimationVideo from "../LandingPage/AnimatedVideo";
import vidaa from './assets/mobile.png';
import check from './assets/check.png';
import webvidaa from './assets/website.png';
import systemvidaa from './assets/systems.png';

import { useLocation, useNavigate } from 'react-router';
import back from './../../../public/previous.png'
import { useEffect, useState } from "react";
import CustomFooter from "../reusable/CustomFooter";
// import codevidaa from '../LandingPage/animations/code2.mp4';

export default function Services(){
    const navigator = useNavigate();

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicFooter, setDynamicFooter] = useState(false);

    useEffect(() => {
        if(location.pathname == '/services'){
            setHideBackButton(true);
            setDynamicFooter(true);
        }
    }, [])

    // * Got to a specific page
    function goToContactPage(){
        navigator("/contacts#contacts-section")
    }

    function BackHandler(){
        navigator(-1);
    }

    return <section id="services" className="my-8">
        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div className="flex sm:flex-col pt-4">
            <div className="mx-14 mt-10 sm:w-full sm:mx-4">
                <p className="text-2xl font-barlow font-bold mb-6">App Development</p>
                <p className="text-[14px] font-barlow">Dive into the future with cutting-edge app solutions that put your business on the map. From sleek, intuitive designs to robust functionalities, our custom apps are tailored to meet your unique needs and exceed expectations.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-blue-700">User-Centric Designs</p>
                        </div>
                        <p className="text-[14px] font-barlow">Our apps are crafted with your users in mind, offering seamless navigation and exceptional user experiences.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-green-500">Cross-Platform Compatibility</p>
                        </div>
                        <p className="text-[14px] font-barlow">Whether it&apos;s iOS, Android, or both, our apps perform flawlessly across all devices.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-purple-600">Secure and Scalable</p>
                        </div>
                        <p className="text-[14px] font-barlow">Built with the highest security standards, our apps grow with your business.
                        </p>
                    </div>
                </div>

                <div className="mt-14">
                    <p className="text-[14px] font-barlow">Ready to elevate your business? Get started with our custom app solutions today!</p>
                    <button className="text-[14px] bg-[midnightblue] text-white px-4 py-1 rounded-full font-barlow mt-4" onClick={goToContactPage}>Get In Touch</button>
                </div>
            </div>

            <div className="w-[50%]">
                <img src={vidaa} alt="pic" className='h-[85vh]'/>
            </div>
        </div>

        <div className="flex mt-20 sm:mt-96 sm:flex sm:flex-col justify-evenly">
            <div className="mr-8 sm:hidden">
                <img src={webvidaa} alt="pic" className='h-[85vh]'/>
            </div>
            <div className="w-[50%] ml-14 mt-10 sm:w-full sm:mx-4 sm:mt-20 sm:ml-1">
                <p className="text-2xl font-barlow font-bold mb-6">Web Development</p>
                <p className="text-[14px]">Transform your online presence with websites that not only look stunning but also perform seamlessly. Our web development services bring your vision to life with interactive, responsive, and visually appealing designs.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-blue-700">Responsive Designs</p>
                        </div>
                        <p className="text-[14px] font-barlow">Our websites adapt perfectly to any screen size, ensuring a flawless user experience on any device.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-green-500">SEO Optimized</p>
                        </div>
                        <p className="text-[14px] font-barlow">We build websites that rank high on search engines, driving traffic and boosting your online visibility.
                        </p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-purple-600">Custom Solutions</p>
                        </div>
                        <p className="text-[14px] font-barlow">From e-commerce to portfolio sites, we tailor our solutions to meet your specific needs.
                        </p>
                    </div>
                </div>

                <div className="mt-14">
                    <p className="text-[14px] font-barlow">Let’s create a website that wows! Contact us today to start your web development journey.</p>
                    <button className="text-[14px] bg-[midnightblue] text-white px-4 py-1 rounded-full font-barlow mt-4" onClick={goToContactPage}>Get In Touch</button>
                </div>
            </div>
            <div className="w-[50%] mr-8 sm:mr-0 md:hidden sm:visible sm:w-full">
                <AnimationVideo vidaa={webvidaa}/>
            </div>
        </div>

        <div className="flex mt-20 sm:mt-96 sm:flex sm:flex-col justify-evenly mb-8">
            <div className="ml-8 mt-10 sm:w-full sm:ml-1 sm:mx-2 mr-8">
                <p className="text-2xl font-barlow font-bold mb-6">Management System Development</p>
                <p className="text-[14px]">Revolutionize the way you manage your business with our advanced management systems. From CRM to ERP, our solutions streamline operations, enhance productivity, and drive growth.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-blue-700">Integrated Solutions</p>
                        </div>
                        <p className="text-[14px] font-barlow">Seamlessly connect all your business processes with our integrated management systems.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-green-500">Real-Time Analytics</p>
                        </div>
                        <p className="text-[14px] font-barlow">Make informed decisions with real-time data and insightful analytics at your fingertips.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-barlow mb-1 text-[14px] text-purple-600">Custom Workflows</p>
                        </div>
                        <p className="text-[14px] font-barlow">Tailored to your business needs, our systems enhance efficiency and reduce operational costs.
                        </p>
                    </div>
                </div>

                <div className="mt-14 my-6">
                    <p className="text-[14px] font-barlow">Transform your business operations with our powerful management systems. Get in touch today!</p>
                    <button className="text-[14px] bg-[midnightblue] text-white px-4 py-1 rounded-full font-barlow mt-4" onClick={goToContactPage}>Get In Touch</button>
                </div>
            </div>

            <div className="w-[50%] sm:w-full">
                <img src={systemvidaa} alt="pic" className='h-[85vh]'/>
            </div>
        </div>

        {dynamicFooter && <CustomFooter/>}
    </section>
}