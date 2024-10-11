import { NavLink, useNavigate } from "react-router-dom";
import '../index.css';
import logo from './assets/logo.png';

export default function Navigation(){
    const navigator = useNavigate();

    // * Navigate to the Contacts section
    function goToContactPage(){
        navigator("/contacts#contacts-section")
    }

    return (
        <section className="flex justify-between my-4 mx-4 z-10 relative sm:hidden" id="navigation">
            <div className="flex items-center">
                <img src={logo} alt="Company Logo" className='h-16 ml-8'/>
                {/* Uncomment these lines if you want to display the company name and tagline */}
                {/* <p className="font-cambo font-semibold mx-10">CodeWorks Solutions Limited</p> */}
                {/* <p className="text-[12px] font-cambo ml-12">Quality. Secure. Scalable</p> */}
            </div>
            <div className="flex items-center">
                <NavLink to='/' className={({isActive}) => isActive ? "mx-4 text-blue-500 font-barlow font-bold underline" : 'mx-4 font-barlow font-bold'} end={true} aria-label="Home">
                    Home
                </NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? "mx-4 text-blue-500 font-barlow font-bold underline" : 'mx-4 font-barlow font-bold'} end={true} aria-label="About Us">
                    About Us
                </NavLink>
                <NavLink to='/services' className={({isActive}) => isActive ? "mx-4 text-blue-500 font-barlow font-bold underline" : 'mx-4 font-barlow font-bold text-black'} end={true} aria-label="Our Services">
                    Our Services
                </NavLink>
                <NavLink to='/contacts' className={({isActive}) => isActive ? "mx-4 text-blue-500 font-barlow font-bold underline" : 'mx-4 font-barlow font-bold text-black'} end={true} aria-label="Contacts">
                    Contacts
                </NavLink>
            </div>
            <div className="flex items-center">
                <button className="bg-[midnightblue] rounded-full px-4 text-white py-1 text-[12px] font-barlow" onClick={goToContactPage}>
                    Get Started
                </button>
            </div>
        </section>
    );
}
