import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Data from '../data.json'


const ProductList = () => {


    return (
        <section>
            <div className="py-10 px-15 text-left">
                <h1 className="text-2xl font-bold underline ">Latest Arrived</h1>
            </div>
            <div className="my-5 grid grid-cols-1  sm:grid-cols-4 gap-8 *:flex *:flex-col *:items-center">

                {Data.map((data) => {
                    return (

                        <div className="text-center relative shadow-2xl rounded-2xl p-5 " key={data.index} >
                            <img src={data.image} alt="" className="max-h-50 w-50 rounded-2xl" />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                {data.Discount}%
                            </span>
                            <h2 className="mt-4 text-lg font-medium">{data.name}</h2>
                            <p className="text-gray-500 line-through">{data.price}</p>
                            <p className="text-green-700">Price {data.price} </p>
                            <div className="flex justify-center gap-3">
                                <NavLink to="/Cart" className="p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500 cursor-pointer">
                                    Add to cart
                                </NavLink>
                                <NavLink to="/ProductView" className="p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500 cursor-pointer">
                                    View
                                </NavLink>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className=" flex justify-center items-center">
                <NavLink to="/productView   " className=" p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500 cursor-pointer">
                    All Product
                </NavLink>
            </div>
        </section>
    );
}

export default ProductList;
