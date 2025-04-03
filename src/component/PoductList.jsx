import React from 'react'
import { NavLink } from 'react-router'
import datas from '../data.json'
import { useState } from 'react'
import ProductView from '../productView'

function PoductList({ search }) {
    const [store, setStore] = useState(datas)
    let filterout = store.filter((values) => {
        return values.name.toLowerCase().includes(search)
    })
    return (
        <div className="grid grid-cols-1  sm:grid-cols-4 gap-8 *:flex *:flex-col *:items-center">
            {filterout.map((data) => {
                return (
                    <div className="text-center relative -z-10" key={data.id}>
                        <img src={data.image} alt="" className="max-h-50 w-50" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">{data.Discount}%</span>
                        <h2 className="mt-4 text-lg font-medium">{data.name}</h2>
                        <p className="text-gray-500 line-through">{data.price}</p>
                        <p className="text-green-700">Price {data.price} </p>
                        <div className="flex justify-center gap-3">
                            <NavLink className="p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500">
                                Add to cart</NavLink>
                            <NavLink className="p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500">
                                View</NavLink>


                        </div>

                    </div>
                )
            })}
        </div >
    )
}

export default PoductList