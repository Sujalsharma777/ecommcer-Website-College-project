import React from 'react'
import productIMG from '../assets/Image/Cactus.jpg'
function ProductAds() {
    return (
        <>
            <section className="sm:h-82 py-16  bg-cover" style={{ backgroundImage: `url(${productIMG})` }}>
                <div className="container mx-auto px-4 text-center ">
                    <h1 className="text-4xl font-bold text-gray-800 ">Products</h1>
                    <p className="text-gray-600 mt-2">Home  Products</p>
                </div>
            </section>
        </>
    )
}

export default ProductAds