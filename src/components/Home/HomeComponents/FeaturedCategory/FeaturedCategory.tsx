"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FeaturedCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('data/featured_category.json')
            .then((response) => response.json())
            .then((data) => {
                setCategory(data);
            });
    }, []);

    return (
        <div>
            <div className="text-center grid gap-2">
                <h2 className="text-xl font-medium text-sixth-black">Featured Category</h2>
                <p className="text-base font-normal text-second-300">Get Your Desired Product from Featured Category!</p>
            </div>
            <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.map(({ id, img, name }) => (
                    <button>
                        <div key={id} className="grid justify-center border rounded-xl shadow-xl p-8">
                        <Image
                            src={img}
                            width={500}
                            height={500}
                            alt={name}
                        />
                        <h2 className="text-xl font-medium text-center mt-4 hover:text-seventh-100">{name}</h2>
                    </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FeaturedCategory;
