import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem' ;

const Collections = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);

const toggleCategory = (e) => {
  if(category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item => item !== e.target.value))

  }
  else{
    setCategory(prev => [...prev,e.target.value])
  }
}

const toggleSubCategory = (e) => {
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev => prev.filter(item => item !== e.target.value))
  }
  else{
    setSubCategory(prev => [...prev,e.target.value])
  }
}



  useEffect(() => {
    setFilterProducts(products);
  }, [])


  return (
    <div className='flex flex-col gap-1 border-t sm:gap-10 sm:flex-row pt-10'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setshowFilter(!showFilter)} className='my-2 text-xl items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filters  */}
        <div className={`border border-gray-300 pl-5 mt-6 py-3 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory } />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/* SubCtegory Filters */}
        <div className={`border border-gray-300 pl-5 my-6 py-3 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4' >
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavet">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }

        </div>


      </div>

    </div>
  )
}

export default Collections