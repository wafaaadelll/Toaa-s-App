import React from 'react'

export default function ShopSort({LowToHigh,HighToLow}) {
  return (
    <div>
        <ul>
            <li className='text-gray-900 block px-2 py-2 text-sm' onClick={()=>LowToHigh()}> <span className='font-medium '> Price :</span>  From Low To High </li>
            <li className='text-gray-900 block px-2 py-2 text-sm' onClick={()=>HighToLow()}> <span className='font-medium '> Price :</span>  From High To Low </li>
            <li className='text-gray-900 block px-2 py-2 text-sm' onClick={()=>HighToLow()}> <span className='font-medium '> Size :</span>  From High To Low </li>
            <li className='text-gray-900 block px-2 py-2 text-sm' onClick={()=>HighToLow()}> <span className='font-medium '> Size :</span>  From Low To High </li>
        </ul>
    </div>
  )
}
