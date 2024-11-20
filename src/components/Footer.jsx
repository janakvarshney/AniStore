import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
        return (
                <div>
                        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

                                <div>
                                        <img src={assets.logo} className='mb-5 w-32' alt="" />
                                        <p className='w-full md:2/3 text-gray-600'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, id.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dignissimos! Blanditiis amet incidunt vero ipsam voluptatum! Molestias sunt consequuntur dicta.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut fugiat quidem iste incidunt accusamus cupiditate obcaecati debitis maxime provident!
                                        </p>
                                </div>
                                <div>
                                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                                        <ul className='flex flex-col gap-1 text-gray-600'>
                                                <li>Home</li>
                                                <li>About Us </li>
                                                <li>Delivery</li>
                                                <li>Privacy Policy</li>
                                        </ul>
                                </div>
                                <div>
                                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                                        <ul className='text-gray-600 flex flex-col gap-1'>
                                                <li>+9460659449</li>
                                                <li>varshneyjanak@gmail.com</li>
                                        </ul>
                                </div>
                        </div>
                        <div>
                                <hr />
                                <p className='py-5 text-sm text-center'>Copyrights 2025 Forever Rights All Rights Reserved</p>
                        </div>
                </div>
        )
}

export default Footer