import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Offers() {
    AOS.init()
  return (
    <div data-aos="fade-up" data-aos-delay="500"
    data-aos-duration="2000" className='bg-gray-100'>
    <section className='flex mx-auto py-16 mt-7
    justify-between ' style={{"width":"85%"}}>
    <div data-aos="fade-right" data-aos-delay="500"
    data-aos-duration="2000"  className='w-6/12 relative mr-10 group-hover:mix-blend-soft-light  hover:translate-y-1.5 ease-in-out duration-500 '>
        <img src={"Images/o3.jpg"} className="h-56 w-full "/>
        {/* <button type="button" class="top-40 left-16 absolute text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Shop Now</button> */}
        <div className='w-44 top-6 left-0 absolute'>
        <h3 className='text-xl'><strong><span className='text-red-600'>Lorem </span> ipsum <span className='text-red-600'>dolor</span> sit.</strong></h3>
        <p className='italic text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facilis?</p>
        </div>
        <button class="top-40 left-10 absolute inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-gray-300 group-hover:from-red-600 group-hover:to-gray-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800">
            <span class="relative px-2 py-1 transition-all ease-in text-gray-600 duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hover:text-gray-50">
                show now
            </span>
        </button>
    </div>
    <div data-aos="fade-left" data-aos-delay="500"
    data-aos-duration="2000"  className='w-6/12 relative  group-hover:mix-blend-soft-light hover:translate-y-1.5 ease-in-out duration-500 '>
    <img src={"Images/o2.jpg"} className="h-56 w-full "/>
    {/* <button type="button" class="top-40 right-16 absolute text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Shop Now</button> */}
    <div className='w-40 top-6 right-0 absolute'>
        <h3 className='text-xl'><strong><span className='text-red-600'>Lorem </span> ipsum <span className='text-red-600'>dolor</span> sit.</strong></h3>
        <p className='italic text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, facilis?</p>
        </div>
        <button class="top-40 right-10 absolute inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-gray-300 group-hover:from-red-600 group-hover:to-gray-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800">
            <span class="relative px-2 py-1 transition-all ease-in text-gray-600 duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hover:text-gray-50">
                shop now
            </span>
        </button>
    </div>
    </section>
    </div>
  )
}
