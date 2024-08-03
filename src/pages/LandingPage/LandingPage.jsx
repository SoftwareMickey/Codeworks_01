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
// import AnimationVideo from './AnimatedVideo';
// import vidaa from './animations/animation3.mp4'

import { FaBars } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import './../../index.css';
import VideoPlayer from './animes/AnimeVideo';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-state';
import MobileNavigation from '../../navigation/Nav';
import Services from '../Services/Services';
import ContactsPage from '../Contacts';
import AboutPage from '../About/About';

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
            <NavLink to='contacts' className='font-lily'>Contacts</NavLink>
        </div>
        <div className='flex mx-10 sm:flex-col sm:mx-2'>
            <div className='w-[50%] sm:w-full'>
                    <div className="mt-20 mx-4">
                        <p className="text-[40px] font-bold font-gupter sm:text-center">Your Vision. Our Code</p>
                        <p className="mt-2 font-cambo sm:text-center sm:mt-10">Cutting-edge Solutions for Apps, Websites, Management Systems, USSD Applications & Bulk SMS</p>
                    </div>

                    <div className="mt-10 mx-4 sm:flex sm:items-center sm:justify-center">
                        <button className="bg-[midnightblue] px-4 py-1 text-white text-[18px] font-cambo rounded-full" onClick={goToContactPage}>Get In Touch</button>
                    </div>

                    <div className="mt-8 mx-4 font-cambo text-[14px] sm:text-center">
                        <p>At CodeWorks Solutions, we transform your ideas into reality with innovative app development, stunning websites, and efficient management systems.</p>
                    </div>

                    <div className='flex mx-4 mt-8 flex-col sm:flex sm:items-center sm:justify-center'>
                        <p className='font-lily'>Services</p>
                        <div className='flex text-[14px] font-cambo'>
                            <div>
                                <div className='flex my-1'>
                                    <img src={app} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    <p>App Development </p>
                                </div>

                                <div className='flex my-1'>
                                    <img src={web} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    <p>Web Development </p>
                                </div>

                                <div className='flex my-1'>
                                    <img src={manage} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    <p>Management Systems</p>
                                </div>
                            </div>
                            <div className='mx-6'>
                                <div className='flex my-1'>
                                    <img src={code} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    <p>USSD Applications</p>
                                </div>

                                <div className='flex my-1'>
                                    <img src={msg} className='h-4 mr-1 mt-[2px]' alt='pic'/>
                                    <p>Bulk SMS</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    {!isModalShown && <div className='md:fixed md:bottom-4 sm:hidden mx-4 flex w-full z-10 sm:flex-col sm:bg-white sm:bottom-0 sm:py-2'>
                        <div className='flex hover:cursor-pointer'>
                            <img src={whats} alt='pic' className='h-4 mr-2'/>
                            <Link className='text-[12px] font-semibold font-cambo' to='https://wa.me/+254780825021'>+254780825021</Link>
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
                            <a href="mailto:analystmuli@gmail.com" className='text-[12px] font-semibold font-cambo'>Shoot us an email</a>
                        </div>
                    </div>}
            </div>
            {!isModalShown && <div className='w-[50%] sm:w-full sm:my-6 sm:hidden'>
                <VideoPlayer/>
            </div>}
        </div>

        
        <div className='md:hidden fixed bottom-0 px-4 flex justify-between w-full z-100 sm:flex-col sm:bg-white sm:bottom-0 sm:py-2'>
                        <div className='flex sm:mb-6'>
                            <p className='font-lily text-[12px]'>Social Media Links</p>
                            <img src={twitter} alt='pic' className='h-[14px] mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={face} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={insta} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={linked} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                        </div>
                        <div className='mr-20 text-[14px] flex font-gupter'>
                            <p className='hover:cursor-pointer'>Privacy Policy</p>
                            <p className='mx-2'>|</p>
                            <p className='hover:cursor-pointer'>Terms Of Service</p>
                        </div>
        </div>

        <AboutPage/>
        <Services/>
        <ContactsPage/>
        
    </section>
}