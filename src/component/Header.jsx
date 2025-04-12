import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaHome, FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

import { FaCartShopping } from "react-icons/fa6";


function Header() {

    return (
        <>

            <header className="bg-white shadow">

                <div className="container mx-auto py-4  sm:flex sm:justify-between  ">

                    <div className="text-2xl font-bold text-green-700 px-4">
                        Plant House Store
                    </div>
                    <div>
                        <input


                            id="searchBar"
                            type="search"
                            placeholder="Anthuriyam plant "
                            className="w-80 p-3 placeholder:font-bold border-2 rounded-3xl"
                        />

                    </div>

                    <div
                        className=" space-x-4 sm:overflow-hidden fixed bottom-0 bg-blue-50 w-full h-20 **:text-4xl flex
                    items-center justify-evenly z-10">
                        <NavLink className=" text-gray-600 hover:text-green-700" to='/'>
                            <FaHome />
                        </NavLink>

                        <NavLink className="text-gray-600 hover:text-green-700" to='/order'>

                            <TbTruckDelivery />
                        </NavLink>
                        <NavLink className="text-gray-600 hover:text-green-700 relative" to='/Cart'>

                            <FaCartShopping />

                        </NavLink>
                        <NavLink className="text-gray-600 hover:text-green-700" to='/Login'>

                            <FaUser />
                        </NavLink >
                    </div >
                </div >
            </header >
        </>
    );
}

export default Header
