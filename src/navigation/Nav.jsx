import { NavLink } from "react-router-dom";
import '../index.css';
import React from "react";
import REACTDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";

import home from './assets/home.png';
import services from './assets/service.png';
import cont from './assets/telephone.png';
import about from './assets/about.png';
import close from './assets/close.png';
import { modalActions } from "../store/modal-state";

export default function MobileNavigation(){
    
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modalState.isModalOpen);

    function BackDrop(){
        return <div className='fixed top-0 left-0 w-full h-[100vh] bg-white'/>
    }

    function closeModalHandler(){
        dispatch(modalActions.closeModalHandler());
    }

    function OverLay(){
        return <div className="relative z-[100] h-[100vh]">
            <div className="flex justify-between">
                <div className="mt-2">
                    <p className="font-cambo font-semibold ml-4">CodeWorks Solution Limited</p>
                    <p className="text-[14px] font-cambo ml-4">Quality. Secure. Scalable</p>
                </div>
                <div className="mr-4 mt-4" onClick={closeModalHandler}>
                    <img src={close} alt="pic" className="h-4"/>
                </div>
            </div>
            <div className='flex flex-col mt-6'>
                <div className="flex ml-4">
                    <img src={home} alt="pic" className="h-4 mt-3"/>
                    <NavLink to='' className={(isActive) => isActive? "ml-2 text-black my-2 font-cambo" : 'mx-4 font-pacifico my-6'} end>Home</NavLink>
                </div>
                <hr className="mx-4"/>

                <div className="flex ml-4 mt-4">
                    <img src={services} alt="pic" className="h-4 mt-3"/>
                    <NavLink to='services' className={(isActive) => isActive? "ml-2 text-black my-2 font-cambo" : 'mx-4 font-pacifico my-6'} end>Our Services</NavLink>
                </div>
                <hr className="mx-4"/>

                <div className="flex ml-4 mt-4">
                    <img src={cont} alt="pic" className="h-4 mt-3"/>
                    <NavLink to='contacts' className={(isActive) => isActive? "ml-2 text-black my-2 font-cambo" : 'mx-4 font-pacifico my-6'} end>Contacts</NavLink>
                </div>
                <hr className="mx-4"/>

                <div className="flex ml-4 mt-4">
                    <img src={about} alt="pic" className="h-4 mt-3"/>
                    <NavLink to='about' className={(isActive) => isActive? "ml-2 text-black my-2 font-cambo" : 'mx-4 font-pacifico my-6'} end>About Us</NavLink>
                </div>
                <hr className="mx-4"/>
            </div>

            <div className="mt-20 mx-4 flex items-center justify-center">
                <button className="px-4 py-[6px] rounded-full border border-blue-900 font-cambo w-[80%]">Call: +254789098754</button>
            </div>
            <div className="mt-4 mx-4 flex items-center justify-center">
                <button className="px-4 py-[8px] rounded-full bg-black text-white font-cambo w-[80%]">info@codeworkssolution.co.ke</button>
            </div>

            <div>
                <p className="fixed bottom-4 ml-4 font-lily">&copy; CodeWorks Solutions 2024</p>
            </div>
        </div>
    }
    return <React.Fragment >
        {showModal && REACTDOM.createPortal(<BackDrop/>, document.getElementById("backdrop"))}
        {showModal && REACTDOM.createPortal(<OverLay/>, document.getElementById("overlay"))}
    </React.Fragment>
}