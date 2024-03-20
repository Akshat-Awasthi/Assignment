import React from 'react'
import logo from '/src/resources/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    let Links1 = [
        {name: 'About Us', link: '/'},
        {name: 'Shop All', link: '/'},
        {name: 'FAQ', link: '/'},
        {name: 'Returns and Exchange', link: '/'},
        {name: 'Terms of Service', link: '/'},
        {name: 'Refund', link: '/'}
    ]
    let Links2 = [
        {name: 'All Products', link: '/'},
        {name: 'Hemp Nutrtion', link: '/'},
        {name: 'CannaBliss', link: '/'},
        {name: 'Skin Health', link: '/'}
    ]
    let Links3 = [
        {name: '+91 91081 54394', link: '/'},
        {name: 'info@indiahemoorganics.com', link: '/'},
        {name: '#41/2 Castle Street, Ashok Nagar, Bangalore - 560025', link: '/'},
    ]
  return (
    <footer className='footer'>
        <div className=' p-10 h-96 bg-teal-900 text-rose-50'>
             <div className='flex flex-col items-center justify-center mt-24'>
                <h1 className='font-medium text-5xl pb-3'>Stay Updated on all news on Hemp</h1>
                <p>Join our mailing list and get 10% off your next order</p>
             </div>
             <div className='flex flex-row items-center justify-center mt-16'>
                <input className='bg-teal-900 text-rose-50 mr-6 w-96 border-none outline-none' type="text" placeholder='Enter your email' />
                <button className='w-52 h-10 text-xl bg-rose-50 text-teal-900 rounded-none hover:bg-gray-200'>SIGN IN</button>
             </div>
             <div class="ml-350 mt-3 border-b border-gray-500 w-1/2"></div>
        </div>
        <div className='h-96 flex flex-row'>
            <div className='h-full w-72 flex items-center justify-center'>
                <img className='h-32 mb-40' src={logo} alt="" />
            </div>
            <div className='text-amber-950'>
            <div className='flex flex-col h-28 items-center justify-center'>
                <div className='flex flex-row space-x-48 mr-32 mt-16 text-base font-medium'>
                    <h1>INFORMATION</h1>
                    <h1>SHOP NOW</h1>
                    <h1>CONTACT US</h1>
                </div>
            </div>
            <div class="ml-20 mt-1 border-b border-gray-500 w-11/12"></div>
            <div className='flex flex-row space-x-40 item-center justify-center mt-8 ml-28'>
                 <div className='pl-4'>
                     <ul className='space-y-2 text-sm'>
                        {
                         Links1.map(link => <li className=''>
                            <a href="/">{link.name}</a>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='pr-5'>
                    <ul className='space-y-2 text-sm'>
                        {
                            Links2.map(link => <li className=''>
                                <a href="/">{link.name}</a>
                                </li>)
                        }
                    </ul>
                </div>
                <div className='flex flex-row'>
                    <div className='space-y-6 mt-1 mr-1'>
                    <FaPhoneAlt size={11}/>
                    <MdMailOutline size={13}/>
                    <IoLocationOutline />
                    </div>
                    <div>
                    <ul className='space-y-4 text-sm'>
                        {
                            Links3.map(link => <li className=''>
                                <a href="/">{link.name}</a>
                                </li>)
                        }
                    </ul>
                    <div className='flex flex-row space-x-2 mt-1'>
                    <FaFacebook />
                    <FaSquareInstagram />
                    <FaTwitter />
                    <FaLinkedin />

                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer