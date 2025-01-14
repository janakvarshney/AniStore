import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
        return (
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
                        <img
                                className="w-[max(10%,80px)]"
                                src={assets.logo}
                                alt="logo"
                        />
                        <button className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
                                Logout
                        </button>
                </div>
        );
};

export default Navbar;
