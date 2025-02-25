import React from 'react'
import NavigationMenu from './_components/navigationMenu'
import { title } from 'process';

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const navigationItems = [
        {title :'DONUTS', url: ""},
        {title: "COMBOS Y BOXES", url: "combos"},
        {title: "PROMOCIONES", url: "promociones"},
        {title: "BEBIDAS FRIAS", url: "bebidasFrias"},
        {title: "BEBIDAS CALIENTES", url: "bebidasCalientes"},
        {title: "SANDWICHES", url: "sandwiches"},
        {title: "OTROS", url: "otros"},
        {title: "MERCH", url: "merch"}
      ];
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-white bg-opacity-60 mt-24">
    <NavigationMenu items={navigationItems} />
     <div className='min-h-screen '>
     {children}
     </div>
    </div>
  )
}
