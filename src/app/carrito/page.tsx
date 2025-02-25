"use client"
import { useAppSelector } from '@/redux/hooks';
import React, { useEffect, useState } from 'react';
import CarritoCard from '../menu/_components/CarritoCard';
import { Report } from 'notiflix/build/notiflix-report-aio';




const CarritoDeCompras = () => {
  const cart = useAppSelector(state => state.auth.items)

  const [totalPrice,setTotalPrice]= useState<number>(0);


  useEffect(() => {
    function t (){
      const total = cart.reduce((total: number, item) => {
        // Elimina los primeros dos caracteres ("S/") y convierte el precio a número
        const price = parseFloat(item.price.replace(/^S\//, "")) || 0;
        const cantidad = item.cantidad ?? 1;
    
        console.log(`Producto: ${item.title}, Precio: ${price}, Cantidad: ${cantidad}`);
        
        return total + price * cantidad;
    }, 0);
    
    
    
      setTotalPrice(total)
    }
    t();
   
  }, [cart])
  

  



  
  return (
    <div className="pt-28 px-6  bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      <div className="grid gap-4">
        {cart.map((item) => (
          <CarritoCard
          key={item.id}
            item={item}
          />
        ))}
      </div>
      <div className="flex items-center mt-6 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold ">Total: S/.{totalPrice}</h2>
        <button
        className="ml-auto bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={()=>{
        if(totalPrice !== 0){
          Report.success(
            'Dunkin',
            '"su compra ha sido realizada con exito" <br/><br/>',
            'Okay',
            );
        }else{
          Report.failure(
            'Dunkin',
            '"El carrito esta vacio"',
            'Okay',
            );
        }
        }}
      
      >
        Realizar Compra
      </button>
      </div>
    </div>
  );
};

export default CarritoDeCompras;
