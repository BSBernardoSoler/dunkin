import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { GiSpellBook } from "react-icons/gi";

export default function FooterComponent() {
    return (
        <footer className="bg-white py-8 border-t mt-auto">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo y redes sociales */}
                <div className="flex flex-col items-center">
                    <Image src="/images/logo.png" alt="Logo" className="w-24 h-10 mb-4" width={400} height={400} />
                    <p className="text-gray-700 mb-2">Conéctate con nosotros</p>
                    <div className="flex space-x-4 text-2xl text-gray-700">
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />
                    </div>
                </div>

                {/* Nuestros productos */}
                <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-4">Nuestros Productos</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Donuts</li>
                        <li>Bebidas</li>
                        <li>Combos</li>
                        <li>Bakery</li>
                        <li>Sandwich</li>
                        <li>Complementos</li>
                        <li>Novedades</li>
                    </ul>
                </div>

                {/* Ayuda */}
                <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-4">Ayuda</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Comprobante Electrónico</li>
                        <li>Políticas de datos personales</li>
                        <li>Términos y condiciones</li>
                        <li>Derecho de Arco</li>
                        <li>Zonas de Reparto</li>
                    </ul>
                </div>

                {/* Libro de reclamaciones y métodos de pago */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-orange-400 mb-4">Libro de reclamaciones</h3>
                    <GiSpellBook size={70} className="mb-2" />
                    <h3 className="text-lg font-semibold text-orange-400 mb-4">Métodos de Pago</h3>
                    <div className="flex space-x-4">
                        <RiVisaFill size={30} />
                        <FaCcMastercard size={30} />
                        <SiAmericanexpress size={30} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
