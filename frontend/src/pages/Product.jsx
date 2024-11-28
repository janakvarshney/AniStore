import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const { productID } = useParams();
  // console.log(productID)
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('') ;
  const fetchProductData = async () =>{
    products.map((item)=>{
      if(item._id === productID){
        setProductData(item)
        setImage(item.image[0]) 
        // console.log(item)
        return null ;
      }
    })

  }
  useEffect(()=>{
    fetchProductData() ;
  },[productID,products]) ;

  return productData ? (
    <div className='border-t-2 transition-opacity ease-in duration-500 opacity-100'>
      {/* productdata  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
    {/* Products Images  */}
      </div>

    </div>
  ) : <div className='opacity-0'> 
  {/* if we do not get product data  */}
  </div>
}

export default Product