import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const { productID } = useParams();
  // console.log(productID)
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productID) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item)
        return null;
      }
    })

  }
  useEffect(() => {
    fetchProductData();
  }, [productID]);

  return productData ? (
    <div className='border-t-2 transition-opacity ease-in duration-500 opacity-100'>
      {/* productdata  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
        {/* Products Images  */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'> 

          </div>
          {
            productData.image.map((item, index) => (
              <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img src={image} className='w-full h-auto' alt="" />
        </div>
      </div>

    </div>
  ) : <div className='opacity-0'>
    {/* if we do not get product data  */}
  </div>
}

export default Product