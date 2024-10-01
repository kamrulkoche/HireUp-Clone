import React from 'react';
import Picture from '../Picture/Picture';
import { FiDollarSign } from "react-icons/fi";
import Button from '../Button/Button';

interface CardProps {
    image: any;
    width: number;
    height: number;
    title: string;
    descriptionOne: string;
    descriptionTwo: string;
    descriptionThree: string;
    descriptionFour: string;
    price: string;
    discountPrice: string;
}

const ProductCard: React.FC<CardProps> = ({ image, width, height, title, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, price, discountPrice }) => {
    return (
        <div className='border p-4 shadow-lg'>
            <div className='grid justify-center'>
                <div className='border-b border-gray-200 flex justify-center pb-6'>
                    <Picture image={image} width={width} height={height} />
                </div>
                <div className='border-b border-gray-200 pb-6 pt-4'>
                    <h2 className='text-lg font-medium pb-8'>{title}</h2>
                    <div className='grid gap-2 text-base text-zinc-700'>
                        <li>{descriptionOne}</li>
                        <li>{descriptionTwo}</li>
                        <li>{descriptionThree}</li>
                        <li>{descriptionFour}</li>
                    </div>
                </div>
                <div className='text-lg font-medium flex items-center justify-center gap-10 pt-4'>
                    <h2 className='text-seventh-100'><span className='flex items-center gap-1'>{discountPrice} <FiDollarSign /></span></h2>
                    <h2 className='line-through'><span className='flex items-center gap-1'>{price} <FiDollarSign /></span></h2>
                </div>
                <div className='pt-4 pb-2'>
                    <Button title='Buy Now' />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
