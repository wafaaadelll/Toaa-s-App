import React from 'react'
import Product from '../../Service/Product';

export default function ShopButtons({ filterItem, setItem, menuItems }) {
  return (
    <ul role="list" className="space-y-4  pb-6 text-sm font-medium text-gray-900">
            <li onClick={() => setItem(Product)}>
                <a className='cursor-pointer'>All Products</a>
            </li>
            {menuItems.map((Val, id) => (
            <li key={id} onClick={() => filterItem(Val)}>
                <a className='cursor-pointer'>{Val}</a>
            </li>
            ))}
    </ul>
  )
}
