import React from 'react';

const Slider = () => {
    return (
        <div className="relative h-[650px] overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}>
            {/* Left Triangular Patterns */}
            <div className="absolute left-0 top-0 h-full w-1/2">
                <div className="absolute top-[50px] left-[50px] w-[300px] h-[300px] bg-white opacity-20 clip-triangle"></div>
                <div className="absolute top-[200px] left-[100px] w-[200px] h-[200px] bg-white opacity-30 clip-triangle"></div>
                <div className="absolute top-[300px] left-[150px] w-[100px] h-[100px] bg-white opacity-40 clip-triangle"></div>
            </div>

            {/* Right Triangular Patterns */}
            <div className="absolute right-0 top-0 h-full w-1/2">
                <div className="absolute top-[50px] right-[50px] w-[300px] h-[300px] bg-white opacity-20 clip-invertedTriangle"></div>
                <div className="absolute top-[200px] right-[100px] w-[200px] h-[200px] bg-white opacity-30 clip-invertedTriangle"></div>
                <div className="absolute top-[300px] right-[150px] w-[100px] h-[100px] bg-white opacity-40 clip-invertedTriangle"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto mt-20 max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-white">Discover the Perfect Printer for Your Needs</h1>
                <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-5xl font-extrabold text-pink-600">High-Quality Printing, Anytime</h2>
                    <ul className="mt-4 text-gray-600 text-left space-y-2">
                        <li>Explore a wide range of printers designed for home and office use</li>
                        <li>
                            Find printers with advanced features like wireless connectivity and high-speed printing
                        </li>
                        <li>Durable, reliable, and tailored for your unique requirements</li>
                        <li>
                            Get expert support and guidance to choose the best printer for your needs.
                        </li>
                    </ul>
                    <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg">
                        Shop Printers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;



