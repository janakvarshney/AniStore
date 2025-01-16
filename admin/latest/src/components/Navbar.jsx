import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
        return (
                <div className="flex items-center justify-between px-4 py-3 bg-blend-darken bg-gray-300 hover:bg-gray-200">
                        <img
                                className="w-[max(10%,80px)]"
                                src={assets.logo}
                                alt="logo"
                        />
                        <button className="bg-gray-600 hover:bg-gray-400 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
                                Logout
                        </button>
                </div>
        );
};

export default Navbar;
