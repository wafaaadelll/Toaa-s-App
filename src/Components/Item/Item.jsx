import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { useParams } from 'react-router-dom';
import Product from '../../Service/Product';

export default function Item() {
    const { productId } = useParams();
  const thisProduct = Product.find((prod) => prod.id === productId);
  return (
    <div className='mx-auto pt-40 flex items-center justify-between'style={{"width":"85%"}} >
        <div className='w-6/12 mx-auto'>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Color
                </th>
            </tr>
        </thead>
        <tbody>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Title
              </th>
              <td class="py-4 px-6">
                  {thisProduct.title}
              </td>
          </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Width
              </th>
              <td class="py-4 px-6">
                  {thisProduct.title}
              </td>
          </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Height
              </th>
              <td class="py-4 px-6">
                  {thisProduct.title}
              </td>
          </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Length
              </th>
              <td class="py-4 px-6">
                  {thisProduct.title}
              </td>
          </tr>
        </tbody>
    </table>
    </div> 
    <div>
      <h2 className='text-gray-600 font-bold inline-block mt-5 text-2xl'>Price</h2>
      <button type="button" class="cursor-default bg-gradient-to-r from-red-600 to-gray-300 text-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-red-600 font-medium rounded-lg text-sm px-4 py-1.5 ml-5 mb-2">{thisProduct.price} $</button>
    </div>
        </div>
          <Carousel
            data={thisProduct.thumbnail}
            width="350px"
            height="400px"
            radius="10px"
            thumbnails={true}
            thumbnailWidth="50px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              margin: "auto",
              position: "relative",
            }}
          />
    </div>
  )
}
