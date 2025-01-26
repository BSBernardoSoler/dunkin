import Image from 'next/image';
import React, { useState } from 'react';

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-96 p-8 relative">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Iniciar Sesión</h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 shadow-md transition duration-300"
          >
            INICIAR SESIÓN
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
};



export default LoginModal;
