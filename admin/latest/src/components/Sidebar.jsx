import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
const Sidebar = () => {
        return (
                <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
                <div className='flex flex-col gap-4 bg-gray-200 w-60 h-screen text-[15px] pl-[20%]'>
                        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
                                <img src={assets.add_icon} alt="icon" />
                                <p className='hidden md:block'>Add Items</p>
                        </NavLink>
                        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
                                <img src={assets.order_icon} alt="icon" />
                                <p className='hidden md:block'>List Items</p>
                        </NavLink>
                        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
                                <img src={assets.order_icon} alt="icon" />
                                <p className='hidden md:block'>Orders</p>
                        </NavLink>
                </div>
                </div>
        )
}

export default Sidebar