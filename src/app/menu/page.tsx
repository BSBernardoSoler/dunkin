import React from "react";
import ProductCard, { ProductCardProps } from "./_components/ProductCard";
import { donutsWithId } from "./_data/dataMenu";

const App: React.FC = () => {
  return (
    <div className="flex flex-col max-h-screen min-h-screen mt-2">
      {/* Sección de Productos */}
      <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-160px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {donutsWithId.map((item: ProductCardProps) => (
            <ProductCard
              key={item.id}
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
