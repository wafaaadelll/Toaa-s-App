import React, { useState } from 'react'
import Product from '../../Service/Product'
import Cards from '../Cards/Cards';
import Filter from '../Cards/Filter';
import AOS from 'aos'
import "./Products.css"
import 'aos/dist/aos.css';

export default function Products() {
    const [item, setItem] = useState(Product);

  const menuItems = [...new Set(Product.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Product.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  AOS.init()
  return (
    <div data-aos="fade-up" data-aos-delay="100"
    data-aos-duration="1000" style={{"width":"85%"}} className="mt-7 mx-auto">
        <div className='mb-7'>
            <h2 className='text-3xl headtext'>Our Shop</h2>
        </div>
        <Filter filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
        <Cards item={item}/>
    </div>
  )
}
