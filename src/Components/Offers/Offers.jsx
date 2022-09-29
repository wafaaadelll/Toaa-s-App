import React from 'react'

export default function Offers() {
  return (
    <div className='bg-gray-200 flex mx-auto py-16 mt-7
    justify-evenly ' style={{"width":"85%"}}>
    <div className='w-5/12 relative  group-hover:mix-blend-soft-light  hover:translate-y-1.5 ease-in-out duration-500 '>
        <img src={"Images/o3.jpg"} className="h-56 w-full "/>
        <button type="button" class="top-40 left-16 absolute text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Shop Now</button>
    </div>

    <div className='w-5/12 relative  group-hover:mix-blend-soft-light hover:translate-y-1.5 ease-in-out duration-500 '>
    <img src={"Images/o2.jpg"} className="h-56 w-full "/>
    <button type="button" class="top-40 right-16 absolute text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Shop Now</button>

    </div>
    </div>
  )
}
