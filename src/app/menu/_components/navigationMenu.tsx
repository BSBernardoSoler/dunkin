"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItems {
    title: string;
    url: string;
}

type NavigationMenuProps = {
    items: NavItems[];
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
        setIsOpen(false);
    };

    return (
        <div className="w-full md:w-1/3 lg:w-1/4 h-full bg-white shadow-md border-r-8 border-orange-400 md:pl-10 pt-5">
            <button
                className="md:hidden p-4 focus:outline-none text-orange-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul
                className={`flex flex-col text-pink-600 font-bold text-lg transition-all duration-300 
                ${isOpen ? "block" : "hidden"} md:block`}
            >
                {items.map((item, index) => (
                    <Link
                        href={`/menu/${item.url}`}
                        key={index}
                        onClick={() => handleItemClick(index)}
                    >
                        <li
                            className={`px-3 py-3 cursor-pointer rounded-full transition-colors m-1 
                            ${
                                activeIndex === index
                                    ? "bg-orange-400 bg-opacity-90 text-white"
                                    : "hover:bg-orange-400 hover:bg-opacity-90 hover:text-white"
                            }`}
                        >
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default NavigationMenu;
