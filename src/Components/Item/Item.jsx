import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { useParams } from 'react-router-dom';
import Product from '../../Service/Product';

export default function Item() {
    const { productId } = useParams();
  const thisProduct = Product.find((prod) => prod.id === productId);
  return (
    <div className='mx-auto 'style={{"width":"85%"}}>
          <Carousel
            data={thisProduct.thumbnail}
            width="300px"
            height="400px"
            radius="10px"
            thumbnails={true}
            thumbnailWidth="50px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "auto",
              position: "relative",
            }}
          />
    </div>
  )
}
