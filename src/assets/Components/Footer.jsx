import React from 'react'

const Footer = () => {
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
        <div className='h-96'>

        </div>
    </footer>
  )
}

export default Footer