"use client"
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export interface ProductCardProps {
    id?: string;
    image: string;
    title: string;
    description: string;
    price: string;
    originalPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
    return (
        <StyledWrapper>
        <div className="card h-full  bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row w-full sm:w-64 max-w-xs mx-auto">
            <div className="w-full sm:w-28 flex-shrink-0 mb-4 sm:mb-0">
                <Image
                    width={70}
                    height={70}
                    src={image}
                    alt={title}
                    className="w-full h-40 sm:h-28 object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="font-bold text-md text-gray-800">{title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{description}</p>
                    <p className="font-bold text-orange-500 text-md">S/ {price}</p>
                </div>
                <div className="flex justify-around mt-2 text-gray-600 text-xs">
                    <span>12oz</span>
                    <span>16oz</span>
                    <span>24oz</span>
                </div>
                <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded-md font-semibold text-sm hover:bg-orange-600">
                    Agregar
                </button>
            </div>
        </div>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div`
.card {
 transform-style: preserve-3d;
 perspective: 1000px;
 transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
 cursor: pointer;
}

.card:hover {
 transform: rotateY(10deg)  scale(1.05);
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
`;

export default ProductCard;
