import React, { useEffect, useState } from "react";
import ProductAds from '../component/ProductAds'
import Filtterbar from '../component/FilterBar'
import Productlist from '../component/ProductList.jsx'
import productData from '../data.json';
import Footer from "../component/Footer.jsx";

const Home = () => {


    return (
        <>
            <ProductAds />

            <Productlist />
            <Footer />
        </>
    );
};

export default Home;
