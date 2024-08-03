import send from './assets/gmail.png';
import twitter from './assets/twitter.png';
import phone from './assets/call.png';
import loc from './assets/location.png';
import './../index.css';

import { useLocation, useNavigate } from 'react-router';
import back from './../../public/previous.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ContactsPage(){

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);

    if(location == ''){
        setHideBackButton(true);
    }

    const navigator = useNavigate();

    function BackHandler(){
        navigator(-1);
    }


    // todo: State management for client message to hq
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [services, setServices] = useState();
    const [message, setMessage] = useState();

    return <section id='contacts'>
        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div>
            <p className="text-center pt-20 font-bold text-[40px] font-poppins sm:text-[20px]">We have got an entire team dedicated <br/>to supporting you and your business</p>
            <p className="text-center mt-4 font-cambo text-[14px]">Got any questions about product or scalling on our platform? We are here to help.</p>
            <p className="text-center font-cambo text-[14px]">Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>
        </div>

        {/* <div className="flex items-center justify-center my-8">
            <button className="bg-black font-cambo text-[14px] text-white px-4 py-1 rounded-full">Get In Touch</button>
        </div> */}

        <div className='flex justify-center sm:flex-col' id="contacts-section">
            <div className='mr-48 sm:mr-2 sm:mx-4'>
                <form>
                    <div className='flex flex-col mr-8'>
                            <label className='font-cambo text-[12px] font-bold'>Full Name</label>
                            <input
                                placeholder='Full name'
                                className='border border-slate-300 rounded px-2 font-cambo text-[12px] py-1 my-2'
                            />
                    </div>

                    <div className='flex flex-col mr-8'>
                            <label className='font-cambo text-[12px] font-bold'>Email</label>
                            <input
                                placeholder='Johndoe@gmail.com'
                                className='border border-slate-300 rounded px-2 font-cambo text-[12px] py-1 my-2'
                            />
                    </div>

                    <div className='flex flex-col mr-8'>
                            <label className='font-cambo text-[12px] font-bold'>Phone Number</label>
                            <input
                                placeholder='+254786949756'
                                className='border border-slate-300 rounded px-2 font-cambo text-[12px] py-1 my-2'
                            />
                    </div>

                    <div>
                        <p className='font-bold text-[14px] font-cambo'>Services</p>
                        <div className='flex'>
                            <div className='mr-8'>
                                <div className='flex my-2'>
                                    <input
                                        type='checkbox'
                                        className='mr-2'
                                    />
                                    <p className='font-cambo text-[12px]'>App Development</p>
                                </div>

                                <div className='flex my-2'>
                                    <input
                                        type='checkbox'
                                        className='mr-2'
                                    />
                                    <p className='font-cambo text-[12px]'>Web Development</p>
                                </div>

                                <div className='flex my-2'>
                                    <input
                                        type='checkbox'
                                        className='mr-2'
                                    />
                                    <p className='font-cambo text-[12px]'>Management System</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex my-2'>
                                    <input
                                        type='checkbox'
                                        className='mr-2'
                                    />
                                    <p className='font-cambo text-[12px]'>Bulky SMS</p>
                                </div>

                                <div className='flex my-2'>
                                    <input
                                        type='checkbox'
                                        className='mr-2'
                                    />
                                    <p className='font-cambo text-[12px]'>USSD Codes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mr-8'>
                            <label className='font-cambo text-[12px] font-bold'>Message</label>
                            <textarea
                                rows={4}
                                placeholder='Leave us a message...'
                                className='border border-slate-300 rounded px-2 font-cambo text-[12px] py-1 my-2'
                            />
                    </div>


                    <div>
                        <button className='text-[14px] bg-[midnightblue] text-white rounded font-cambo px-4 py-1 my-4 w-full'>Send Message</button>
                    </div>
                </form>
            </div>

            <div className='sm:mx-4'>
                <p className='font-bold font-cambo'>Call Us</p>
                {/* <p className='font-cambo text-[14px]'>Call Our Team Mon - Fri from 8am to 5pm</p> */}
                <div className='flex mb-8 hover:cursor-pointer'>
                    <img src={phone} alt='pic' className='h-3 mt-[2px] mr-2'/>
                    {/* <Link className='text-[12px] font-semibold font-cambo' to="#" onClick={() => { window.location.href = 'tel:+1234567890'}}>+254780825021</Link> */}
                    <a href="tel:+254713248097" className='text-[12px] font-semibold font-cambo' >+254713248097</a>
                </div>


                <p className='font-bold font-cambo'>Chat with us</p>
                {/* <p className='text-[14px] font-cambo'>Ask your questions to our friendly team</p> */}
                <div className='flex mb-[-10] hover:cursor-pointer'>
                    <img src={send} alt='pic' className='h-3 mt-[2px] mr-2'/>
                    <a href="mailto:analystmuli@gmail.com" className='text-[12px] font-semibold font-cambo'>Shoot us an email</a>
                </div>

                <div className='flex my-2 hover:cursor-pointer'>
                    <img src={twitter} alt='pic' className='h-3 mt-[2px] mr-2'/>
                    <p className='text-[12px] font-semibold font-cambo'>Message us on X</p>
                </div>

                <Link className='text-[12px] font-semibold font-cambo' to='https://wa.me/+254780825021'>Chat with us</Link>
                
                <div className='mt-20'>
                    <p className='font-cambo font-bold'>Visit Us</p>
                    <p className='text-[14px] font-cambo'>Chat with us in person at our Thika HQ</p>
                    <div className='flex my-2 hover:cursor-pointer'>
                        <img src={loc} alt='pic' className='h-3 mt-[2px] mr-2'/>
                        <p className='text-[12px] font-semibold font-cambo'>CodeWorks Solution Floor, Juja Road</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
}