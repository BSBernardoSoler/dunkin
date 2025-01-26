"use client"
import Image from 'next/image';
import React from 'react';

type OrderTrackingFormProps = {
  onSearch: (info: string, channel: string, orderNumber: string) => void;
};

const OrderTrackingForm: React.FC<OrderTrackingFormProps> = ({ onSearch }) => {
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const info = (form.elements.namedItem('info') as HTMLInputElement).value;
    const channel = (form.elements.namedItem('channel') as HTMLInputElement).value;
    const orderNumber = (form.elements.namedItem('orderNumber') as HTMLInputElement).value;
    onSearch(info, channel, orderNumber);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label htmlFor="info" className="text-pink-600 font-bold text-lg">Información</label>
        <input
          id="info"
          name="info"
          type="text"
          placeholder="Ingresa información"
          className="border border-gray-300 rounded-lg p-3 text-gray-800"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="channel" className="text-pink-600 font-bold text-lg">Elige tu canal</label>
        <input
          id="channel"
          name="channel"
          type="text"
          placeholder="Ingresa tu canal"
          className="border border-gray-300 rounded-lg p-3 text-gray-800"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="orderNumber" className="text-pink-600 font-bold text-lg">Número de pedido</label>
        <input
          id="orderNumber"
          name="orderNumber"
          type="text"
          placeholder="Ingresa número de pedido"
          className="border border-gray-300 rounded-lg p-3 text-gray-800"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-orange-600 shadow-md"
      >
        BUSCAR
      </button>
    </form>
  );
};

const App: React.FC = () => {
  const handleSearch = (info: string, channel: string, orderNumber: string) => {
    console.log('Información:', info);
    console.log('Canal:', channel);
    console.log('Número de pedido:', orderNumber);
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
            src="/images/IMAGEN 8.png"
            alt="Delivery Scooter"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 w-full">
          <OrderTrackingForm onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default App;
