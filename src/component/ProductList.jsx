import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Data from '../data.json'


const ProductList = () => {


    return (
        <section>
            <div className="py-10 px-15 text-left">
                <h1 className="text-2xl font-bold underline ">Latest Arrived</h1>
            </div>
            <div className="my-5 m-10 grid grid-cols-1  sm:grid-cols-4 gap-8 *:flex *:flex-col *:items-center">

                {Data.map((data) => {
                    return (

                        <div className="text-center relative shadow-gray-400 shadow-md rounded-2xl p-5 " key={data.index} >
                            <img src={data.image} alt="" className="max-h-50 w-50 rounded-2xl" />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                {data.Discount}%
                            </span>
                            <h2 className="mt-4 text-lg font-medium">{data.name}</h2>
                            <p className="text-red-700 line-through">{data.price}</p>
                            <p className="text-black">Price {data.price} </p>
                            <div className="flex justify-center gap-3">
                                <NavLink to="/Cart" className="p-2 my-3   bg-green-700 text-white rounded-sm">
                                    Add to cart
                                </NavLink>
                                <NavLink to="/ProductView" className="p-2 my-3   bg-green-700 text-white rounded-sm">
                                    View
                                </NavLink>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className=" flex justify-center items-center">
                <NavLink to="/Product  " className="p-2 my-3   bg-green-700 text-white rounded-sm">
                    All Product
                </NavLink>
            </div>
        </section>
    );
}

export default ProductList;
