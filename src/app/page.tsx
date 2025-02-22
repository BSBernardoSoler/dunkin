import React from 'react';
import Image from 'next/image';

const App = () => {
  //
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <div className="text-center">
          <h1 className="text-pink-600 font-bold text-5xl md:text-7xl">DELEITA</h1>
          <span className="text-orange-500 text-3xl md:text-5xl font-bold">TU PALADAR</span>
        </div>

        <div className="mt-4 mb-8">
          <div className="bg-orange-500 text-white font-bold text-xl md:text-2xl px-6 py-3 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            S/14.90
          </div>
        </div>
      </div>
       
      <div className="hidden md:flex flex-col md:flex-row justify-center gap-2 ml-0 md:ml-10">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Image
        src="/images/IMAGEN 1.png"
        alt="Drink 1"
        width={300}
        height={600}
        className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <Image
        src="/images/IMAGEN 2.png"
        alt="Drink 2"
        width={300}
        height={600}
        className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
        src="/images/IMAGEN 3.png"
        alt="Drink 3"
        width={300}
        height={600}
        className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
