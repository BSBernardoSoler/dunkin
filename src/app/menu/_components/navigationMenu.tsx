"use client"
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

    return (
        <div className="md:w-1/4 h-full bg-white shadow-md border-r-8 border-orange-400 md:pl-20 pt-5">
            <button 
                className="md:hidden p-4 focus:outline-none text-orange-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul className={`flex flex-col text-pink-600 font-bold text-lg md:block ${isOpen ? 'block' : 'hidden'}`}>
                {items.map((item, index) => (
                    <Link href={`/menu/${item.url}`} key={index} onClick={() => setIsOpen(!isOpen)}>
                        <li
                            className="px-4 py-3 hover:text-orange-500 cursor-pointer"
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
