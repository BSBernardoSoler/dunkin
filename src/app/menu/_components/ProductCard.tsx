"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItem, removeItem } from "@/redux/features/authSlice";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

import { useRouter } from "next/navigation";
export interface ProductCardProps {
  id?: string;
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  isbebida?: boolean;
  isCarrito?: boolean;
  cantidad?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  isbebida,
  isCarrito,
  cantidad = 1,
}) => {
  const [cant, setCant] = useState<number>(cantidad);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.auth.items);
  const [productAdded, setProductAdded] = useState<ProductCardProps>();
  
  useEffect(() => {
    setProductAdded(cart.find((item) => item.id === id))
   
}, [])
  const router = useRouter();
  const handleAddProduct = () => {
   
    
   
    

    if (productAdded) {
      Report.failure("Dunkin", '"Este producto ya ha sido agregado"', "Okay");
    }else{
       if(!productAdded){
        dispatch(addItem({ id, image, title, description, price, cantidad: cant }));
        
        Confirm.show(
            'Dunkin',
            'Producto agregado , desea ir al carrito',
            'si',
            'No',
            () => {
                router.push('/carrito')
            },
            () => {
             
            },
            {
                width: '320px',
                borderRadius: '8px',
                titleColor: '#4e73df',
                okButtonBackground: 'orange',
                cancelButtonBackground: 'gray',
            }
        );
       }
        

    }
  };

  const handleRemoveProduct = () => {
    if (id) {
      dispatch(removeItem(id));
    } else {
      console.warn("No hay un ID válido para eliminar el producto.");
    }
  };

  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setCant(value);
    }
  };

  return (
    <div className="card bg-white shadow-lg rounded-xl p-3 flex flex-col w-full max-w-[12rem] mx-auto transform scale-90 transition-all hover:scale-95 hover:shadow-2xl">
      <div className="w-full flex-shrink-0 mb-3">
        <Image
          width={200}
          height={150}
          src={image}
          alt={title}
          className="w-full h-28 object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <h3 className="font-bold text-sm text-gray-800">{title}</h3>
        <p className="text-xs text-gray-600 mb-1">{description}</p>
        <p className="font-bold text-orange-500 text-sm mb-2">{price}</p>

        {isbebida && (
          <div className="flex justify-around mb-2 text-gray-600 text-xs">
            <span className="bg-gray-200 p-1 rounded-md">12oz</span>
            <span className="bg-gray-200 p-1 rounded-md">16oz</span>
            <span className="bg-gray-200 p-1 rounded-md">24oz</span>
          </div>
        )}

        <div className="mt-2 flex items-center space-x-2">
          <label className="text-xs text-gray-700">Cantidad:</label>
          <input
            type="number"
            value={cant}
            onChange={handleCantidadChange}
            className="w-14 border border-gray-300 rounded-md p-1 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs"
            min={1}
          />
        </div>

        {isCarrito ? (
          <button
            className="mt-4 w-full bg-red-500 text-white py-1 rounded-md font-semibold text-xs hover:bg-red-600 transition-colors"
            onClick={handleRemoveProduct}
          >
            Eliminar
          </button>
        ) : (
          <button
            className="mt-4 w-full bg-orange-500 text-white py-1 rounded-md font-semibold text-xs hover:bg-orange-600 transition-colors"
            onClick={handleAddProduct}
          >
            Agregar
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
