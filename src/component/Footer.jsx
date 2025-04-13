import React from 'react'
import { NavLink } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
    return (
        <>
            <footer className="bg-white py-8">

                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="">
                        <h3 className="text-lg font-bold text-green-700">Plant House</h3>
                        <p className="mt-4">Subscribe our newsletter and get discount 30% off</p>
                        <div className="mt-8 flex">
                            <input type="email" placeholder="Your email address"
                                className="px-4 w-28 py-2 border border-gray-300 rounded-l" />
                            <button className="px-4 py-2  bg-green-700 text-white rounded-r">Subscribe</button>
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <NavLink className="text-gray-600 hover:text-green-700 "><FaFacebook className='text-xl' /></NavLink>
                            <NavLink className="text-gray-600 hover:text-green-700 text-xl"> <BiLogoInstagramAlt className='text-xl' /></NavLink>
                            <NavLink className="text-gray-600 hover:text-green-700 text-xl"><FaWhatsappSquare className='text-xl' /></NavLink>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">Customer Care</h3>
                        <ul className="mt-4 space-y-2">
                            <li><NavLink className="text-gray-600 hover:text-green-700"> Pagination</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="/">  Home page</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="/Contact">Contact</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Accessories</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Terms of use</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">Quick Shop</h3>
                        <ul className="mt-4 space-y-2">
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="/about">About Us</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Privacy Policy</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Terms & Conditions</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Products Return</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700 " to="*">Wholesale Policy</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><NavLink className="text-gray-600 hover:text-green-700 " to="*">Help Center</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Address Store</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Privacy Policy</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Receivers & Amplifiers</NavLink></li>
                            <li><NavLink className="text-gray-600 hover:text-green-700" to="*">Plant House Store</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-600">
                    <p>&copy; Copyright 2025 | PlanthouseStore </p>

                </div>

            </footer>
        </>
    )
}

export default Footer