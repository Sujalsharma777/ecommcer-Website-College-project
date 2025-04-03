import React from 'react'

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
                            <a href="#" className="text-gray-600 hover:text-green-700 text-xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-600 hover:text-green-700 text-xl"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-gray-600 hover:text-green-700 text-xl"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">Customer Care</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Pagination</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Home page</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Accessories</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Terms of use</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">Quick Shop</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-green-700">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Products Return</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Wholesale Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Help Center</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Address Store</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Receivers & Amplifiers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-700">Plant House Store</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-600">
                    <p>&copy; Copyright 2022 | PlanthouseStore </p>

                </div>

            </footer>
        </>
    )
}

export default Footer