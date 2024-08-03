import { NavLink, useNavigate } from "react-router-dom";
import '../index.css';

export default function Navigation(){
    const navigator = useNavigate();

    // * Got to a specific page
    function goToContactPage(){
        navigator("/contacts#contacts-section")
    }

    return <section className="flex justify-between my-4 mx-4 z-10 relative sm:hidden" id="navigation">
        <div>
            <p className="font-cambo font-semibold mx-10">CodeWorks Solutions Limited</p>
            <p className="text-[14px] font-cambo mx-10">Quality. Secure. Scalable</p>
        </div>
        <div>
            <NavLink to='' className={({isActive}) => isActive? "mx-4 text-blue-500 font-pacifico underline" : 'mx-4 font-pacifico'} end={true}>Home</NavLink>
            <NavLink to='/services' className={({isActive}) => isActive? "mx-4 text-blue-500 font-pacifico underline" : 'mx-4 font-pacifico text-black'} end={true}>Our Services</NavLink>
            <NavLink to='/contacts' className={({isActive}) => isActive? "mx-4 text-blue-500 font-pacifico underline" : 'mx-4 font-pacifico text-black'} end={true}>Contacts</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive? "mx-4 text-blue-500 font-pacifico underline" : 'mx-4 font-pacifico'} end={true}>About Us</NavLink>
        </div>
        <div>
            <button className="bg-[midnightblue] rounded-full px-4 text-white py-1 text-[12px] font-lily" onClick={goToContactPage}>Get Started</button>
        </div>
    </section>
}