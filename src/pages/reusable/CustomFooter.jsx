import send from '../assets/gmail.png';
import logo from '../assets/logo.png';

import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedIn from '../assets/linkedin.png';

import phone from '../assets/call.png';
import loc from '../assets/location.png';

import whatsapp from '../assets/whatsapp.png';
import { Link } from 'react-router-dom';

export default function CustomFooter(){
    return <div className='sm:mx-4 bg-white flex justify-evenly p-6 pb-10'>
                
    <div>
        <img src={logo} alt='pic' className='h-12'/>
        {/* <p className='text-[14px] font-barlow'>Ask your questions to our friendly team</p> */}
        <div className='flex hover:cursor-pointer ml-4'>
            <img src={send} alt='pic' className='h-3 mt-[2px] mr-2'/>
            <a href="mailto:analystmuli@gmail.com" className='text-[12px] font-semibold font-barlow'>Shoot us an email</a>
        </div>

        <div className='flex my-2 hover:cursor-pointer ml-4'>
            <img src={twitter} alt='pic' className='h-3 mt-[2px] mr-2'/>
            <p className='text-[12px] font-semibold font-barlow'>Message us on X</p>
        </div>

        <div className='flex my-2 hover:cursor-pointer ml-4'>
            <img src={whatsapp} alt='pic' className='h-3 mt-[2px] mr-2'/>
            <Link className='text-[12px] font-semibold font-barlow' to='https://wa.me/+254780825021'>Chat with us</Link>
        </div>
    </div>


    <div>
        <p className='font-bold font-barlow mb-2'>Contact Us</p>
        {/* <p className='font-barlow text-[14px]'>Call Our Team Mon - Fri from 8am to 5pm</p> */}
        <div className='flex mb-8 hover:cursor-pointer flex-col'>
            <p className='text-[14px] font-barlow mb-1'>Call us on</p>
            <div className='flex'>
                <img src={phone} alt='pic' className='h-3 mt-[2px] mr-2'/>
                {/* <Link className='text-[12px] font-semibold font-barlow' to="#" onClick={() => { window.location.href = 'tel:+1234567890'}}>+254780825021</Link> */}
                <a href="tel:+254713248097" className='text-[12px] font-semibold font-barlow' >+254713248097</a>
            </div>
        </div>
    </div>

    <div>
        <p className='font-barlow font-bold'>Social Media</p>
        <p className='text-[14px] font-barlow mt-1'>Our social media links</p>
        <div className='flex mt-2'>
          <Link className='mr-2'>
            <img src={twitter} alt='pic' className='h-4'/>
          </Link>  

          <Link className='mx-2'>
            <img src={instagram} alt='pic' className='h-4'/>
          </Link> 

          <Link className='mx-2'>
            <img src={facebook} alt='pic' className='h-4'/>
          </Link>  

          <Link className='mx-2'>
            <img src={linkedIn} alt='pic' className='h-4'/>
          </Link>  
        </div>
    </div>
    
    <div className=''>
        <p className='font-barlow font-bold'>Visit Us</p>
        <p className='text-[14px] font-barlow'>Chat with us in person at our Thika HQ</p>
        <div className='flex my-2 hover:cursor-pointer'>
            <img src={loc} alt='pic' className='h-3 mt-[2px] mr-2'/>
            <p className='text-[12px] font-semibold font-barlow'>CodeWorks Solution Floor, Juja Road</p>
        </div>
    </div>

</div>

}