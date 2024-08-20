// import AnimationVideo from './AnimatedVideo';
import face from './assets/facebook.png';
import insta from './assets/instagram.png';
import linked from './assets/linkedin.png';
import twitter from './assets/twitter.png';

import app from './assets/apps.png';
import web from './assets/web.png';
import manage from './assets/system.png';
import code from './assets/sms.png';
import msg from './assets/sms.png';
import send from '../assets/gmail.png';
import whats from './assets/whatsapp.png';

import vector from './assets/vector.png';

import { FaBars } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import './../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-state';
import MobileNavigation from '../../navigation/Nav';
import Services from '../Services/Services';
import ContactsPage from '../Contacts';
import AboutPage from '../About/About';
import CustomFooter from '../reusable/CustomFooter';
import VideoPlayer from './animes/AnimeVideo';

export default function LandingPage(){
    const dispatch = useDispatch();
    const isModalShown = useSelector(state => state.modalState.isModalOpen);

    function showModalHandler(){
        dispatch(modalActions.openModalHandler());
    }

    const navigator = useNavigate();

    // * Got to a specific page
    function goToContactPage(){
        navigator("/contacts#contacts-section")
    }

    return <section id='landing'>
        <MobileNavigation/>

        <div className='sm:visible md:hidden my-4 flex mx-4 justify-between'>
            <FaBars className='mt-1' onClick={showModalHandler}/>
            <NavLink to='contacts' className='font-barlow'>Contacts</NavLink>
        </div>

        <div className='flex ml-14 mr-10 sm:flex-col sm:mx-2'>
            <div className='w-[60%] sm:w-full'>
                    <div className="mt-6 mx-4">
                        <p className="text-[56px] font-bold font-barlow sm:text-center">Your Vision <br/>Our Code</p>
                        {/* <p className="text-[56px] font-bold font-barlow sm:text-center">Our Code</p> */}
                        <p className="mt-4 font-barlow sm:text-center sm:mt-10 text-[20px]">Cutting-edge Solutions for Apps, <br/>Websites, Management Systems, USSD Applications & Bulk SMS</p>
                    </div>

                    <div className="mt-8 mx-4 sm:flex sm:items-center sm:justify-center">
                        <button className="bg-[midnightblue] px-4 py-1 text-white text-[18px] font-barlow rounded-full" onClick={goToContactPage}>Get In Touch</button>
                    </div>

                    <div className="mt-4 mx-4 font-barlow text-[18px] sm:text-center">
                        <p>At CodeWorks Solutions, we transform your ideas <br/>into reality with innovative app development, stunning websites, and efficient management systems.</p>
                    </div>

                    
                    <div className='flex text-[14px] font-barlow w-[100%] overflow-auto mt-10'>
                                <div className='flex my-1'>
                                    <div className='bg-blue-800 flex justify-center items-center px-2 mx-2 rounded'>
                                        <img src={app} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    </div>
                                    <p className='flex justify-center items-center'>App development </p>
                                </div>

                                <div className='flex my-1'>
                                    <div className='bg-green-500 flex justify-center items-center px-2 mx-2 rounded'>
                                        <img src={web} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    </div>
                                    <p className='flex justify-center items-center'>Web development </p>
                                </div>

                                <div className='flex my-1'>
                                    <div className='bg-blue-600 flex justify-center items-center px-2 mx-2 rounded'>
                                        <img src={manage} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    </div>
                                    <p className='flex justify-center items-center'>Management systems</p>
                                </div>
                                <div className='flex my-1'>
                                    <div className='bg-blue-400 flex justify-center items-center px-2 mx-2 rounded'>
                                        <img src={code} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    </div>
                                    <p className='flex justify-center items-center'>USSD applications</p>
                                </div>

                                <div className='flex my-1'>
                                    <div className='bg-purple-500 flex justify-center items-center px-2 mx-2 rounded'>
                                        <img src={msg} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    </div>
                                    <p className='flex justify-center items-center'>Bulk sms</p>
                                </div>                            
                    </div>

                    {!isModalShown && <div className='md:hidden md:fixed md:bottom-4 sm:hidden mx-4 flex w-full z-10 sm:flex-col sm:bg-white sm:bottom-0 sm:py-2'>
                        <div className='flex hover:cursor-pointer'>
                            <img src={whats} alt='pic' className='h-4 mr-2'/>
                            <Link className='text-[12px] font-semibold font-barlow' to='https://wa.me/+254780825021'>+254780825021</Link>
                        </div>
                        
                        <div className='flex sm:mb-6 ml-6 mr-8'>
                            <p className='font-lily text-[12px]'>Social Media Links</p>
                            <img src={twitter} alt='pic' className='h-[14px] mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={face} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={insta} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={linked} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                        </div>

                        <div className='flex mb-[-2px] hover:cursor-pointer'>
                            <img src={send} alt='pic' className='h-3 mt-[2px] mr-2'/>
                            <a href="mailto:analystmuli@gmail.com" className='text-[12px] font-semibold font-barlow'>Shoot us an email</a>
                        </div>
                    </div>}
            </div>
            {!isModalShown && <div className='w-[40%] sm:w-full sm:my-6 sm:hidden'>
                <img src={vector} alt='pic' className='h-[85vh]'/>
                <VideoPlayer/>
                <div className='absolute bottom-2 right-[5%] bg-white shadow-custom-medium py-4 px-8 rounded'>
                    <Link to = '' className='flex mb-4'>
                        <img src={whats} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm underline'>+254 748 481418</p>
                    </Link>
                    <Link to = '' className='flex mb-4'>
                        <img src={insta} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm'>Codeworks</p>
                    </Link>
                    <Link to = '' className='flex mb-4'>
                        <img src={face} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm'>Codeworks</p>
                    </Link>
                    <Link to = '' className='flex mb-4'>
                        <img src={linked} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm'>Codeworks</p>
                    </Link>
                </div>
                {/* <VideoPlayer/> */}
            </div>}
        </div>

        {!isModalShown && <AboutPage/>}
        {!isModalShown && <Services/>}
        {!isModalShown && <ContactsPage/>}


        {!isModalShown && <CustomFooter/>}
        
    </section>
}