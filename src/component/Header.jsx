import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaHome, FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

import { FaCartShopping } from "react-icons/fa6";

function Header() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="container py-5 sm:flex sm:justify-between sm:items-center px-5 ">
                    <div
                        className="text-2xl font-bold  text-green-700  ">
                        Plant House Store
                    </div>

                    <div className="grid grid-cols-4 justify-center gap-5 ">
                        <NavLink className=" text-gray-600 hover:text-green-700" to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className=" text-gray-600 hover:text-green-700"
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            className=" text-gray-600 hover:text-green-700"
                            to="/Product">
                            Product
                        </NavLink>

                        <NavLink className="text-gray-600 hover:text-green-700" to="/order">
                            Order
                        </NavLink>
                    </div>
                    <div className="grid grid-cols-2  justify-center gap-5 ">
                        <NavLink className="text-gray-600 hover:text-green-700" to="/Login">
                            <FaUser />
                        </NavLink>
                        <NavLink
                            className="text-gray-600 hover:text-green-700 relative"
                            to="/Cart">
                            <FaCartShopping />
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
