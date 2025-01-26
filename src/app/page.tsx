import React from 'react';
import Image from 'next/image';

const App = () => {
  return (
    <div className="h-screen w-screen bg-pink-100 flex flex-col-2 justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-pink-600 font-bold text-7xl">DELEITA</h1>
          <span className="text-orange-500 text-5xl font-bold">TU PALADAR</span>
        </div>

        <div className="mt-4 mb-8">
          <div className="bg-orange-500 text-white font-bold text-2xl px-6 py-3 rounded-full w-24 h-24 flex items-center justify-center">
            S/14.90
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 ml-10">
        <div className="flex flex-col items-center">
          <Image
        src="/images/IMAGEN 1.png" // Replace with actual path or link to the first drink image
        alt="Drink 1"
        width={300}
        height={600}
        className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
        src="/images/IMAGEN 2.png" // Replace with actual path or link to the second drink image
        alt="Drink 2"
        width={300}
        height={600}
        className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
        src="/images/IMAGEN 3.png" // Replace with actual path or link to the third drink image
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
