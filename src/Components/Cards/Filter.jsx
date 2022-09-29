import React from 'react'
import Product from '../../Service/Product';

export default function Filter({ filterItem, setItem, menuItems }) {

  return (
        <section>
            <div className="d-flex justify-content-center">
                <button className="bg-gray-400 text-white w-28 py-1 rounded-lg mb-5 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800"onClick={() => setItem(Product)}>All</button>
                {menuItems.map((Val, id) => {
                return (
                    <button
                    className=" text-white bg-gray-400 mx-2 w-28 py-1 rounded-lg mb-5 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800"onClick={() => filterItem(Val)}key={id}>{Val}</button>);
                })}
            </div>
        </section>
  )
}
