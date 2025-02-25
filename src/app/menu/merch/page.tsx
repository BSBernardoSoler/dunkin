import React from "react";
import ProductCard, { ProductCardProps } from "../_components/ProductCard";
import { merch } from "../_data/dataMenu";

const App: React.FC = () => {
  return (
    <div className="flex flex-col max-h-screen min-h-screen mt-2 w-full overflow-x-hidden">
      <main className="flex-1 p-4 overflow-y-auto max-h-[calc(100vh-160px)] w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
          {merch.map((item: ProductCardProps) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={`/menu/${item.image}`}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
