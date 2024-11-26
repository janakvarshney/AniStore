import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
        const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
        const location = useLocation();
        const [visible, setVisible] = useState(false);
        useEffect(() => {
                if (location.pathname.includes('collection') && showSearch) {
                        setVisible(true);
                }
                else {
                        setVisible(false);
                }
        }, [location])

        return showSearch && visible ? (
                <div className='border-t border-b bg-gray-50 text-center'>
                        <div className='inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/4'>
                                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search It!!' className='flex-1 outline-none bg-inherit text-sm' />
                                <img className='w-4' src={assets.search_icon} alt="" />
                        </div>
                        <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
                </div>
        ) : null
}

export default SearchBar