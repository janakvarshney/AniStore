import PropTypes from 'prop-types';
import { ShopContext } from '../context/ShopContext';
import { useContext, useEffect, useState } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProd, setRelatedProd] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products
        .filter((product) =>
          product.category === category && product.subCategory === subCategory
        )
        .slice(0, 5); 

      // Avoid unnecessary state updates
      if (JSON.stringify(filteredProducts) !== JSON.stringify(relatedProd)) {
        setRelatedProd(filteredProducts);
      }
    }
  }, [products, category, subCategory, relatedProd]);  // Depend on relatedProd

  return (
    <div className="my-24">
      <div className="text-center text-2xl py-2">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProd.map((item, index) => (
          <ProductItem  // Fixed component name
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            className="cursor-pointer w-[24%] sm:w-full sm:mb-3 flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  category: PropTypes.string,
  subCategory: PropTypes.string,
};

export default RelatedProducts;
