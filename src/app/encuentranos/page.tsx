import React from 'react';

const FindUs: React.FC = () => {
    return (
        <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6 md:p-12 mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.948895105847!2d-122.08424968468113!3d37.42206587982562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba022c3b8fbb%3A0x7756b19fb0c3d1c3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616581641512!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        allowFullScreen={false}
                        loading="lazy"
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>
                <div className="w-full md:flex-1">
                    <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-8">
                        Encuentra nuestras tiendas más cercanas a ti ingresando tu ubicación.
                    </p>
                    <form className="flex flex-col gap-4 md:gap-8">
                        <div className="flex flex-col">
                            <label htmlFor="location" className="text-pink-600 font-bold text-lg md:text-xl">Tu ubicación</label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                placeholder="Ingresa tu ubicación"
                                className="border border-gray-300 rounded-lg p-2 md:p-4 text-gray-800"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-lg text-lg md:text-xl hover:bg-orange-600 shadow-md"
                        >
                            BUSCAR TIENDAS
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <FindUs />
    );
};

export default App;
