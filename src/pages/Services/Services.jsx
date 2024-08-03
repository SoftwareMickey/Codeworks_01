import AnimationVideo from "../LandingPage/AnimatedVideo";
import vidaa from './assets/app.mp4';
import check from './assets/check.png';
import webvidaa from './assets/website.mp4';
import systemvidaa from './assets/system.mp4';

import { useLocation, useNavigate } from 'react-router';
import back from './../../../public/previous.png'
import { useState } from "react";
// import codevidaa from '../LandingPage/animations/code2.mp4';

export default function Services(){
    const navigator = useNavigate();

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);

    if(location == ''){
        setHideBackButton(true);
    }

    // * Got to a specific page
    function goToContactPage(){
        navigator("/contacts#contacts-section")
    }

    function BackHandler(){
        navigator(-1);
    }

    return <section id="services">
        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div className="flex sm:flex-col pt-4">
            <div className="w-[50%] mx-14 mt-10 sm:w-full sm:mx-4">
                <p className="text-2xl font-cambo font-bold mb-6">App Development</p>
                <p className="text-[14px]">Dive into the future with cutting-edge app solutions that put your business on the map. From sleek, intuitive designs to robust functionalities, our custom apps are tailored to meet your unique needs and exceed expectations.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">User-Centric Designs</p>
                        </div>
                        <p className="text-[14px] font-cambo">Our apps are crafted with your users in mind, offering seamless navigation and exceptional user experiences.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Cross-Platform Compatibility</p>
                        </div>
                        <p className="text-[14px] font-cambo">Whether it&apos;s iOS, Android, or both, our apps perform flawlessly across all devices.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Secure and Scalable</p>
                        </div>
                        <p className="text-[14px] font-cambo">Built with the highest security standards, our apps grow with your business.
                        </p>
                    </div>
                </div>

                <div className="mt-14">
                    <p className="text-[14px] font-cambo">Ready to elevate your business? Get started with our custom app solutions today!</p>
                    <button className="text-[14px] bg-[midnightblue] text-white px-4 py-1 rounded-full font-cambo mt-4" onClick={goToContactPage}>Get In Touch</button>
                </div>
            </div>

            <div className="">
                <AnimationVideo vidaa={vidaa}/>
            </div>
        </div>

        <div className="flex mt-20">
            <div className="w-[50%] mr-8 sm:hidden">
                <AnimationVideo vidaa={webvidaa}/>
            </div>
            <div className="w-[50%] ml-14 mt-10 sm:w-full sm:mx-4">
                <p className="text-2xl font-cambo font-bold mb-6">Web Development</p>
                <p className="text-[14px]">Transform your online presence with websites that not only look stunning but also perform seamlessly. Our web development services bring your vision to life with interactive, responsive, and visually appealing designs.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Responsive Designs</p>
                        </div>
                        <p className="text-[14px] font-cambo">Our websites adapt perfectly to any screen size, ensuring a flawless user experience on any device.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">SEO Optimized</p>
                        </div>
                        <p className="text-[14px] font-cambo">We build websites that rank high on search engines, driving traffic and boosting your online visibility.
                        </p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Custom Solutions</p>
                        </div>
                        <p className="text-[14px] font-cambo">From e-commerce to portfolio sites, we tailor our solutions to meet your specific needs.
                        </p>
                    </div>
                </div>

                <div className="mt-14">
                    <p className="text-[14px] font-cambo">Let’s create a website that wows! Contact us today to start your web development journey.</p>
                    <button className="text-[14px] bg-[midnightblue] text-white px-4 py-1 rounded-full font-cambo mt-4" onClick={goToContactPage}>Get In Touch</button>
                </div>
            </div>
        </div>

        <div className="flex mt-20">
            <div className="w-[50%] ml-8 mt-10 sm:w-full">
                <p className="text-2xl font-cambo font-bold mb-6">Management System Development</p>
                <p className="text-[14px]">Revolutionize the way you manage your business with our advanced management systems. From CRM to ERP, our solutions streamline operations, enhance productivity, and drive growth.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Integrated Solutions</p>
                        </div>
                        <p className="text-[14px] font-cambo">Seamlessly connect all your business processes with our integrated management systems.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Real-Time Analytics</p>
                        </div>
                        <p className="text-[14px] font-cambo">Make informed decisions with real-time data and insightful analytics at your fingertips.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Custom Workflows</p>
                        </div>
                        <p className="text-[14px] font-cambo">Tailored to your business needs, our systems enhance efficiency and reduce operational costs.
                        </p>
                    </div>
                </div>

                <div className="mt-14 my-6">
                    <p className="text-[14px] font-cambo">Transform your business operations with our powerful management systems. Get in touch today!</p>
                    <button className="text-[14px] bg-[midnightblue] text-white px-4 py-1 rounded-full font-cambo mt-4" onClick={goToContactPage}>Get In Touch</button>
                </div>
            </div>

            <div className="w-[50%] sm:hidden">
                <AnimationVideo vidaa={systemvidaa}/>
            </div>
        </div>

        {/* <div className="flex mt-20">
            <div className="w-[50%] mr-8">
                <AnimationVideo vidaa={codevidaa}/>
            </div>
            <div className="w-[50%] ml-14 mt-10">
                <p className="text-2xl font-cambo font-bold mb-6">USSD Codes & BarCodes</p>
                <p className="text-[14px]">Engage with your audience through interactive USSD codes. Ideal for surveys, customer feedback, and real-time interactions, our USSD services provide a direct and reliable communication channel.</p>

                <div className="mt-8">
                    <p className="font-lily">Highlights</p>
                    <div className="flex flex-col mt-4">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">nstant Access</p>
                        </div>
                        <p className="text-[14px] font-cambo">Provide instant access to information and services through easy-to-use USSD codes.</p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Two-Way Communication</p>
                        </div>
                        <p className="text-[14px] font-cambo">Engage with your audience in real-time, collecting feedback and delivering responses instantly.
                        </p>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex">
                            <img src={check} alt="pic" className="h-3 mt-1 mr-2"/>
                            <p className="font-bold font-cambo mb-1 text-[14px]">Cost-Effective</p>
                        </div>
                        <p className="text-[14px] font-cambo">Our USSD solutions are affordable, ensuring high engagement without breaking the bank.
                        </p>
                    </div>
                </div>

                <div className="mt-14">
                    <p className="text-[14px] font-cambo">Connect with your audience like never before. Explore our USSD code services today!</p>
                    <button className="text-[14px] bg-black text-white px-4 py-1 rounded-full font-cambo mt-4">Get In Touch</button>
                </div>
            </div>
        </div> */}
    </section>
}