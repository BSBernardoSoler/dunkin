import React from 'react'
import { bebidasCalientes} from '../_data/dataMenu';
import ProductCard, { ProductCardProps } from '../_components/ProductCard';

export default function BebidasCalientes() {
    return (
        <div className="min-h-screen max-h-screen flex flex-col mt-2">
          {/* Product Section */}
          <div className="flex-1 p-8 overflow-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
              {bebidasCalientes.map((item: ProductCardProps) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={`/menu/${item.image}`}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  isbebida={true}
                />
              ))}
            </div>
          </div>
        </div>
      );
}
