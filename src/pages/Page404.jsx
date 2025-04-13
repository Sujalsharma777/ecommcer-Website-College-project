import React from "react";
import { NavLink } from "react-router";

const Page404 = () => {
    return (
        <>
            <div className="w-full h-lvh flex justify-center items-center overflow-hidden">
                <div className="grid text-center grid-rows-3 ">
                    <div>
                        <h1 className="text-6xl font-extrabold font-sans ">404</h1>
                    </div>
                    <div>
                        <h1>Oops, The Page Not Found </h1>
                    </div>
                    <div>Lorem ipsum dolor</div>
                    <div>
                        <NavLink to="/" className="p-2 my-3   bg-green-700 text-white rounded-sm">Go Back</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page404;
