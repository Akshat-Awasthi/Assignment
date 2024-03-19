import React, { useState, useEffect }from 'react'
import { BsSearch } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
    let Links = [
        {name: 'SHOP', link: '/'},
        {name: 'CONSULTATION', link: '/'},
        {name: 'RESOURCES', link: '/'},
        {name: 'MEMBERSHIP', link: '/'},
        {name: 'ABOUT', link: '/'}
    ]
  return (
    <nav className= {`w-full bg-transparent fixed border-b-2 border-gray-300 ${visible ? 'top-0' : '-top-40'}`}>
        <div className='bg-transparent md:px-10 flex py-10'>
            <div>
                <span className='font-bold text-white'>Name</span>
            </div>
            <div className='flex justify-center ml-80 space-x-72'>
            <ul className='flex pl-9 md:pl-0'>
                {
                    Links.map(link => <li className='my-7 md:my-0 md:ml-8 text-white'>
                        <a href="/">{link.name}</a>
                        </li>)
                }
                <div className='flex space-x-14 ml-28 '>
            <BsSearch color='white' size={25} />
            <BsFillPersonFill color='white' size={30} />
            <GiShoppingBag color='white' size={30}/>
            </div>
            </ul>
            
            
            </div>
            
        
        </div>
         
    </nav>
  )
}

export default Header