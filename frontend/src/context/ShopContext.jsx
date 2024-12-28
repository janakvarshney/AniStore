import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please select a size');
            return;
        }

        setCartItems(prevCartItems => {
            const cartData = { ...prevCartItems };

            if (cartData[itemId]) {
                cartData[itemId][size]
                    ? (cartData[itemId][size] += 1)
                    : (cartData[itemId][size] = 1);
            } else {
                cartData[itemId] = {};
                cartData[itemId][size] = 1;
            }

            return cartData;
        });
    };

    const addOrder = () => {
        setOrders(prevOrders => {
            const newOrder = [];

            // Convert cartItems to a list of orders
            for (const item in cartItems) {
                for (const size in cartItems[item]) {
                    if (cartItems[item][size] > 0) {
                        newOrder.push({
                            _id: item,
                            size,
                            quantity: cartItems[item][size],
                        });
                    }
                }
            }

            // Clear the cart after placing the order
            setCartItems({});

            return [...prevOrders, ...newOrder];
        });
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                if (cartItems[item][size] > 0) {
                    totalCount += cartItems[item][size];
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        if (quantity < 0) return; // Prevent negative quantity

        setCartItems(prevCartItems => {
            const cartData = { ...prevCartItems };
            cartData[itemId][size] = quantity;
            return cartData;
        });
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            const productInfo = products.find((product) => product._id === item);
            if (!productInfo) continue; // Skip if product not found

            for (const size in cartItems[item]) {
                if (cartItems[item][size] > 0) {
                    totalAmount += productInfo.price * cartItems[item][size];
                }
            }
        }
        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        addOrder,
        orders,
        navigate,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
