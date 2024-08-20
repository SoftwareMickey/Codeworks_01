import './../index.css';

import { useLocation, useNavigate } from 'react-router';
import back from './../../public/previous.png';
import { useEffect, useState } from 'react';
import CustomFooter from './reusable/CustomFooter';

export default function ContactsPage(){

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicWidth, setDynamicWidth] = useState('mt-96');
    const [dynamicTopPx, setDynamicTopPx] = useState('pt-44');

    const [dynamicFooter, setDynamicFooter] = useState(false);

    

    useEffect(() => {
        console.log(`The current location is: ${location.pathname}`);
        if(location.pathname == '/contacts'){
            setDynamicWidth('mt-0');
            setHideBackButton(true);
            setDynamicTopPx('pt-16');
            setDynamicFooter(true);
        }
    }, [])

    const navigator = useNavigate();

    function BackHandler(){
        navigator(-1);
    }


    // todo: State management for client message to hq
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [phoneNumber, setPhoneNumber] = useState();
    // const [services, setServices] = useState();
    // const [message, setMessage] = useState();

    return <section className={`sm:${dynamicWidth} bg-blue-400`}>
        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div>
            <p className={`text-center ${dynamicTopPx} pt-16 font-bold text-[40px] font-poppins sm:text-[20px]`}>We have got an entire team dedicated <br/>to supporting you and your business</p>
            <p className="text-center mt-4 font-barlow text-[14px]">Got any questions about product or scalling on our platform? We are here to help.</p>
            <p className="text-center font-barlow text-[14px]">Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>
        </div>

        {/* <div className="flex items-center justify-center my-8">
            <button className="bg-black font-barlow text-[14px] text-white px-4 py-1 rounded-full">Get In Touch</button>
        </div> */}

        <div className='sm:flex-col' id="contacts-section">
            <div className='sm:mr-2 sm:mx-4'>
                <form>
                    <div className='flex w-full justify-center p-8'>
                        <div className='mx-10'>
                            <div className='flex flex-col mr-8'>
                                    <label className='font-barlow text-[12px] font-bold text-white'>Full Name</label>
                                    <input
                                        placeholder='Full name'
                                        className='border border-slate-300 rounded px-2 font-barlow text-[12px] py-1 my-2'
                                    />
                            </div>

                            <div className='flex flex-col mr-8'>
                                    <label className='font-barlow text-[12px] font-bold text-white'>Email</label>
                                    <input
                                        placeholder='Johndoe@gmail.com'
                                        className='border border-slate-300 rounded px-2 font-barlow text-[12px] py-1 my-2'
                                    />
                            </div>

                            <div className='flex flex-col mr-8'>
                                    <label className='font-barlow text-[12px] font-bold text-white'>Phone Number</label>
                                    <input
                                        placeholder='+254786949756'
                                        className='border border-slate-300 rounded px-2 font-barlow text-[12px] py-1 my-2'
                                    />
                            </div>

                            <div>
                                <p className='font-bold text-[14px] font-barlow text-white'>Services</p>
                                <div className='flex'>
                                    <div className='mr-8'>
                                        <div className='flex my-2'>
                                            <input
                                                type='checkbox'
                                                className='mr-2'
                                            />
                                            <p className='font-barlow text-[12px] text-white'>App Development</p>
                                        </div>

                                        <div className='flex my-2'>
                                            <input
                                                type='checkbox'
                                                className='mr-2'
                                            />
                                            <p className='font-barlow text-[12px] text-white'>Web Development</p>
                                        </div>

                                        <div className='flex my-2'>
                                            <input
                                                type='checkbox'
                                                className='mr-2'
                                            />
                                            <p className='font-barlow text-[12px] text-white'>Management System</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex my-2'>
                                            <input
                                                type='checkbox'
                                                className='mr-2'
                                            />
                                            <p className='font-barlow text-[12px] text-white'>Bulky SMS</p>
                                        </div>

                                        <div className='flex my-2'>
                                            <input
                                                type='checkbox'
                                                className='mr-2'
                                            />
                                            <p className='font-barlow text-[12px] text-white'>USSD Codes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[30%]'>
                            <div className='flex flex-col mr-8'>
                                    <label className='font-barlow text-[12px] font-bold text-white'>Message</label>
                                    <textarea
                                        rows={8}
                                        placeholder='Leave us a message...'
                                        className='border border-slate-300 rounded px-2 font-barlow text-[12px] py-1 my-2'
                                    />
                            </div>
                            <div className='w-[40%]'>
                                <button className='text-[14px] bg-[midnightblue] text-white rounded font-barlow px-4 py-1 my-4 w-full'>Send Message</button>
                            </div>
                        </div>

                    </div>

                </form>
            </div>

            {dynamicFooter && <CustomFooter/>}
        </div>
    </section>
}