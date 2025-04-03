import React from 'react'


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




        </section >
    );
}

export default Filtterbar