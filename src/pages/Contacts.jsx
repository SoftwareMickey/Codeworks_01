import './../index.css';
import { useLocation, useNavigate } from 'react-router';
import back from './../../public/previous.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomFooter from './reusable/CustomFooter';
import whatsA from './assets/whatsA.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ContactsPage() {
    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicWidth, setDynamicWidth] = useState('mt-10');
    const [dynamicTopPx, setDynamicTopPx] = useState('pt-44');
    const [dynamicFooter, setDynamicFooter] = useState(false);

    // Initial form data to reset fields after submission
    const initialFormData = {
        fullName: '',
        email: '',
        phoneNumber: '',
        services: [],
        message: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const navigator = useNavigate();

    useEffect(() => {
        console.log(`The current location is: ${location.pathname}`);
        if (location.pathname === '/contacts') {
            setDynamicWidth('mt-96');
            setHideBackButton(true);
            setDynamicTopPx('pt-16');
            setDynamicFooter(true);
        }
    }, [location.pathname]);

    function BackHandler() {
        navigator(-1);
    }

    const handleCheckboxChange = (e) => {
        const { checked, value } = e.target;
        setFormData((prevData) => {
            const updatedServices = checked
                ? [...prevData.services, value]
                : prevData.services.filter((service) => service !== value);
            return { ...prevData, services: updatedServices };
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Submit form data
            await axios.post('http://localhost:5000/api/contacts', formData);
            alert('Message sent successfully!');
            // Clear the form fields after submission
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send the message.');
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phoneNumber: value });
    };

    return (
        <section className={`sm:${dynamicWidth} bg-blue-400`}>
            {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler} />}
            <div>
                <p className={`text-center ${dynamicTopPx} pt-16 font-bold text-[40px] font-poppins sm:text-[20px]`}>
                    We have got an entire team dedicated <br />to supporting you and your business
                </p>
                <p className="text-center mt-4 font-barlow text-[14px]">
                    Got any questions about product or scaling on our platform? We are here to help.
                </p>
                <p className="text-center font-barlow text-[14px]">
                    Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
                </p>
            </div>

            <div className='flex items-center justify-center min-h-screen bg-blue-100 p-8'>
                <div className='bg-blue-700 p-8 rounded-lg shadow-lg w-full max-w-4xl'>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex flex-col w-full md:w-1/2 space-y-6'>
                                <div className='flex flex-col'>
                                    <label className='text-white text-lg font-bold mb-1'>Full Name</label>
                                    <input
                                        name='fullName'
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder='Full name'
                                        className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='text-white text-lg font-bold mb-1'>Email</label>
                                    <input
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Johndoe@gmail.com'
                                        className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <label className='text-white text-lg font-bold mb-1'>Phone Number</label>
                                    {}
                                    <PhoneInput
                                        country={'ke'}
                                        value={formData.phoneNumber}
                                        onChange={handlePhoneChange}
                                        placeholder='Phone number'  
                                        inputClass='border border-gray-300 rounded px-3 py-2 text-gray-700' 
                                        containerClass="phone-input-container"
                                        buttonClass="phone-input-dropdown"  
                                        enableSearch={true}
                                    />

                                </div>

                                <div>
                                    <p className='text-white text-lg font-bold mb-2'>Services</p>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                        {['App Development', 'Web Development', 'Management System', 'Bulky SMS', 'USSD Codes'].map((service) => (
                                            <div key={service} className='flex items-center'>
                                                <input
                                                    type='checkbox'
                                                    value={service}
                                                    checked={formData.services.includes(service)}
                                                    onChange={handleCheckboxChange}
                                                    className='mr-4'
                                                />
                                                <label className='text-white text-sm'>{service}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='w-full md:w-2/3 mt-6 ml-3 md:mt-0'>
                                <div className='flex flex-col'>
                                    <label className='text-white text-lg font-bold mb-1'>Message</label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={7}
                                        placeholder='Leave us a message...'
                                        className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                                    />
                                </div>
                                <div className='mt-4'>
                                    <button
                                        type='submit'
                                        className='bg-blue-400 text-white rounded px-6 py-1 w-full font-semibold hover:bg-blue-200'>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="fixed-whatsapp">
                <a href="https://wa.me/+254727937157" target="_blank" rel="noopener noreferrer">
                    <img src={whatsA} alt="WhatsApp icon" />
                </a>
            </div>
            {dynamicFooter && <CustomFooter />}
        </section>
    );
}
