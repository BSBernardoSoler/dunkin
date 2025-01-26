import React from 'react';
import Image from 'next/image';

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
};

type NavigationMenuProps = {
  items: string[];
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }) => {
    return (
        <div className="w-1/ bg-white h-full shadow-md border-r-8 border-orange-400 pl-10 pt-5">
            <ul className="flex flex-col text-pink-600 font-bold text-lg">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="px-4 py-3 hover:text-orange-500 cursor-pointer"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex w-64">
            <Image width={70} height={70} src={image} alt={title} className="w-28 h-28 object-cover rounded-md mr-4" />
            <div className="flex flex-col justify-between">
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
                <button className="mt-1 w-full bg-orange-500 text-white py-1 rounded-md font-semibold text-sm hover:bg-orange-600">
                    Agregar
                </button>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const navigationItems = [
    'DONUTS',
    'COMBOS Y BOXES',
    'PROMOCIONES',
    'BEBIDAS FRIAS',
    'BEBIDAS CALIENTES',
    'PERSONALIZADOS',
    'SANDWICHES',
    'OTROS',
  ];

  return (
    <div className="h-screen w-screen flex bg-white mt-24">
 
        <NavigationMenu items={navigationItems} />

        {/* Product Section */}
        <div className="flex-1 bg-gray-100 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
            image="/images/IMAGEN 1.png"
            title="Frozen Fresa"
            description="Frozen de jarabe de fresa, leche, cafe expresso, decorado con canela y dulce de fresa."
            price="13.90"
            />
            <ProductCard
            image="/images/IMAGEN 2.png"
            title="Frozen Ginger Cookie"
            description="Frozen de cafe expresso, leche y jarabe de caramelo."
            price="15.90"
            />
            <ProductCard
            image="/images/IMAGEN 3.png"
            title="Ice Tropical Fresa Pitahaya"
            description="Refrescante bebida sabor fresa y pitahaya, servida sobre hielo."
            price="13.90"
            />
              <ProductCard
            image="/images/IMAGEN 3.png"
            title="Ice Tropical Fresa Pitahaya"
            description="Refrescante bebida sabor fresa y pitahaya, servida sobre hielo."
            price="13.90"
            />
              <ProductCard
            image="/images/IMAGEN 3.png"
            title="Ice Tropical Fresa Pitahaya"
            description="Refrescante bebida sabor fresa y pitahaya, servida sobre hielo."
            price="13.90"
            />
              <ProductCard
            image="/images/IMAGEN 3.png"
            title="Ice Tropical Fresa Pitahaya"
            description="Refrescante bebida sabor fresa y pitahaya, servida sobre hielo."
            price="13.90"
            />
              <ProductCard
            image="/images/IMAGEN 3.png"
            title="Ice Tropical Fresa Pitahaya"
            description="Refrescante bebida sabor fresa y pitahaya, servida sobre hielo."
            price="13.90"
            />
               <ProductCard
            image="/images/IMAGEN 1.png"
            title="Frozen Fresa"
            description="Frozen de jarabe de fresa, leche, cafe expresso, decorado con canela y dulce de fresa."
            price="13.90"
            />
          </div>
        </div>
    </div>
  );
};

export default App;
