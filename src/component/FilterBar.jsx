import React from 'react'
import datas from '../data.json'
function Filtterbar() {


    return (

        < section className="container mx-auto px-4 py-8 " >
            <div className="flex sm:justify-between sm:items-center h-auto mb-8 invisible sm:visible ">

                <div className=" grid grid-cols-4 gap-5  ">
                    <select className="px-4 py-2 bg-gray-200 text-gray-600 rounded ">
                        <option>Indor Plant</option>
                        <option>Outdoor Plant</option>
                        <option>Flower Plant</option>
                        <option>Bonsai</option>
                        <option>Fruit</option>

                    </select>

                    <select className="px-4 py-2 bg-gray-200 text-gray-600 rounded">
                        <option>With Pot</option>
                        <option>Without Pot</option>
                    </select>
                    <select className="px-4 py-2 bg-gray-200 text-gray-600 rounded">
                        <option>100  500</option>
                        <option>600  1000</option>
                        <option>1000  5000</option>
                    </select>
                    <select className="px-4 py-2 bg-gray-200 text-gray-600 rounded">
                        <option>Discount 10%</option>
                        <option>Discount 20%</option>
                        <option>Discount 50%</option>
                        <option>Discount 80%</option>

                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-4 gap-8 *:flex *:flex-col *:items-center">
                {datas.map(data => {
                    return (
                        <div class="text-center relative -z-10" key={data.id}>
                            <img src={data.image} alt="" class="max-h-50 w-50" />
                            <span class="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">{data.Discount}%</span>
                            <h2 class="mt-4 text-lg font-medium">{data.name}</h2>
                            <p class="text-gray-500 line-through">{data.price}</p>
                            <p class="text-green-700">Price {data.price} </p>
                            <div class="flex justify-center gap-3">
                                <a href="" class="p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500"><i
                                    class="fa-regular fa-heart font-bold"></i>
                                    View</a>
                                <a href="" class="p-2 font-bold  bg-green-600 rounded-lg my-3 hover:bg-green-500"><i
                                    class="fa-regular fa-heart font-bold"></i>
                                    Add To
                                    Cart</a>

                            </div>
                        </div>
                    )
                })}
            </div>


        </section >
    );
}

export default Filtterbar