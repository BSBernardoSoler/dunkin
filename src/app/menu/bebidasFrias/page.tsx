import React from 'react';
import ProductCard, { ProductCardProps } from '../_components/ProductCard';

import { bebidasFrias } from '../_data/dataMenu';

export default function BebidasFrias() {
    return (
        <div className="flex flex-col max-h-screen min-h-screen mt-2">
            {/* Sección de Productos */}
            <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-160px)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
                    {bebidasFrias.map((item: ProductCardProps) => (
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
            </main>
        </div>
    );
}
