import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Extract cart data on mount or when cartItems change
  useEffect(() => {
    if (!cartItems || Object.keys(cartItems).length === 0) {
      setCartData([]);
      return;
    }

    const tempData = [];
    for (const size in cartItems) {
      if (cartItems[size] && typeof cartItems[size] === 'object') {
        for (const itemId in cartItems[size]) {
          if (cartItems[size][itemId] > 0) {
            tempData.push({
              _id: itemId,
              size: size,
              quantity: cartItems[size][itemId],
            });
          }
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'MY'} text2={'CART'} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            // Safely find the product data
            const productData = products.find((product) => product._id === item._id);

            if (!productData) {
              return (
                <div key={index} className='py-4 border-t text-red-500'>
                  Product not found (ID: {item._id})
                </div>
              );
            }

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4'
              >
                <div className='flex items-start gap-6'>
                  <img
                    className='w-16 sm:w-20'
                    src={productData.image ? productData.image[0] : '/placeholder.png'}
                    alt={productData.name || 'Product Image'}
                  />
                  <div>
                    <p className='text-sm sm:text-base'>{productData.name || 'Unknown Product'}</p>
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div>
                  <p>{currency} {productData.price || 'N/A'}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className='text-center py-10'>
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
