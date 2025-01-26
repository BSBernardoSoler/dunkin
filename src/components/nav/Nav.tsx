'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '../login/LoginComponent'; // Asegúrate de ajustar la ruta según tu estructura.







export const Header = () => {

  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserPopover, setShowUserPopover] = useState(false);
  const [isWebView, setIsWebView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);




  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const closeSidebar = () => setShowSidebar(false);
  const toggleUserPopover = () => setShowUserPopover(!showUserPopover);
  const openModal=()=>{
    setIsModalOpen(true)
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-800">
   

      
       
      
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={'/images/logo.png'}
                width={200}
                height={40}
                alt="Logo de los premios inti"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-orange-400 p-2 rounded-md focus:outline-none"
            >
              {showSidebar ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <NavLink textColor="black"href="/menu">Menu</NavLink>
            <NavLink  textColor="black"href="/pedidos">Mis pedidos</NavLink>
            <NavLink  textColor="black"href="/encuentranos">Encuentranos</NavLink>
            <div  className='flex items-center text-md px-3 py-2 text-pink-600 hover:text-orange-400 transition-colors' onClick={openModal}  >
            Iniciar Sesion
          </div>
          </div>

          <div className="relative flex items-center space-x-3">
            
              <div className='hidden'>
                <button
                  onClick={toggleUserPopover}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-700">
                    <Image
                      src={ '/placeholder.svg'}
                      alt={'User avatar'}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-white">
                    asfsadfasdf
                  </span>
                </button>

                {showUserPopover && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#020817] border border-slate-800 rounded-lg shadow-lg">
                    <ul className="divide-y divide-slate-700">
                  
                        <li
                          onClick={() => {}}
                          className="flex items-center px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                        >
                          <LogOut className="mr-2 w-5 h-5" />
                          Cerrar sesión
                        </li>
                      
                    </ul>
                  </div>
                )}
              </div>
           
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-y-0 left-0 bg-orange-400 transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 w-64`}
      >
        <div className="flex flex-col h-full p-4 space-y-4">
          <NavLink textColor="white"href="/menu" onClick={closeSidebar}>
            Menu
          </NavLink>
          <NavLink  textColor="white" href="/pedidos" onClick={closeSidebar}>
            Mis pedidos
          </NavLink>
          <NavLink textColor="white" href="/encuentranos" onClick={closeSidebar}>
            Encuentranos
          </NavLink>
          <div  className='flex items-center text-md px-3 py-2 text-pink-600 hover:text-orange-400 transition-colors' onClick={openModal}  >
            Iniciar Sesion
          </div>

          <button
            onClick={closeSidebar}
            className="text-white hover:text-white mt-auto"
          >
            Cerrar menú
          </button>
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="bg-orange-400 text-white text-sm text-center py-2">
          <span>Aprovecha ,solo por hoy! Mas de 30% de dcto</span>
        </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  comingSoon?: boolean;
  onClick?: () => void;
  textColor: string;
}

function NavLink({ href, children, comingSoon, onClick,textColor }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center text-md px-3 py-2 text-${textColor} hover:text-orange-400 transition-colors`}
    >
      {children}
    </Link>
  );
}
