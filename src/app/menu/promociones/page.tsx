import React from 'react';
import { promociones} from '../_data/dataMenu';
import ProductCard, { ProductCardProps } from '../_components/ProductCard';

export default function Promociones() {
    return (
        <div className="flex flex-col max-h-screen min-h-screen mt-2">
            {/* Sección de Productos */}
            <main className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-160px)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
                    {promociones.map((item: ProductCardProps) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            image={`/menu/${item.image}`}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            originalPrice={item.originalPrice}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
