"use client"
import ProductCard from '@/components/CommonComponents/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react'

const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data/featured_products.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div>
            <div className="text-center grid gap-2">
                <h2 className="text-xl font-medium text-sixth-black">Featured Products</h2>
                <p className="text-base font-normal text-second-300">Check & Get Your Desired Product!</p>
            </div>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(({ id, img, name, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, discountPrice, price }) => (
                    <ProductCard image={img} title={name} width={150} height={150} descriptionOne={descriptionOne} descriptionTwo={descriptionTwo} descriptionThree={descriptionThree} descriptionFour={descriptionFour} discountPrice={discountPrice} price={price} />

                ))}
            </div>

        </div>
    )
}

export default FeaturedProducts
