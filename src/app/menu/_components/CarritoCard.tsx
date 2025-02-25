import { removeItem, updateQuantity } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import { ProductCardProps } from "./ProductCard";

interface props {
  item: ProductCardProps;
}

export default function CarritoCard({ item }: props) {

  const dispatch = useAppDispatch();
  const handleRemoveProduct = () => {
    if (item.id) {
      dispatch(removeItem(item.id));
    } else {
      console.warn("No hay un ID válido para eliminar el producto.");
    }
  };

  const handleIncrement = (id: string, currentQuantity: number) => {
    dispatch(updateQuantity({ id, cantidad: currentQuantity + 1 }));

  };

  const handleDecrement = (id: string, currentQuantity: number) => {
    const newQuantity = Math.max(1, currentQuantity - 1);
    dispatch(updateQuantity({ id, cantidad: newQuantity }));
};

  return (
    <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
      <img
        src={item.image}
        alt={item.description}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-500">{item.description}</p>
        <p className="text-gray-500">{item.price}</p>
        <div className="flex items-center mt-2">
          <button
            className="px-2 py-1 bg-gray-300 text-white rounded-md mr-2"
            onClick={() => {handleDecrement(item.id!, item.cantidad ?? 1)   }}
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-200 rounded-md">{item.cantidad}</span>
          <button
            className="px-2 py-1 bg-gray-300 text-white rounded-md ml-2"
            onClick={() => {handleIncrement(item.id!, item.cantidad ?? 1)}}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="ml-auto bg-orange-400 text-white px-4 py-2 rounded-md"
        onClick={handleRemoveProduct}
      >
        Eliminar
      </button>
    </div>
  );
}
