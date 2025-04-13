import React from "react";
import { NavLink } from "react-router";

const Contact = () => {
    return (
        <>
            <div className="flex min-h-full sm:w-full sm:h-lvh  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex justify-center ">
                    <h1 className="text-4xl font-bold ">
                        Contact Us
                    </h1>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="https://formspree.io/f/xwplyzbo" method="POST" className="space-y-6">
                        <div>
                            <input
                                type="UserName"
                                name="UserName"
                                id="UserName"
                                required
                                placeholder="Jhon Viek"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                placeholder="Example@gmail.com"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                            />
                        </div>
                        <div>
                            <textarea
                                name="Message"
                                id="Message"
                                placeholder="Drop Message"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"></textarea>
                        </div>

                        <button
                            type="submit"
                            className="p-2 my-3   bg-green-700 text-white rounded-sm">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
