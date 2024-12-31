import { FaTools, FaHeadset, FaCheckCircle, FaPrint, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const Service = () => {
  return (
    <section className="relative h-[1100px] overflow-hidden text-white py-20" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}>
      
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
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Best Printer Services</h2>
        <p className="text-lg text-white mb-12">Explore our top-rated services that guarantee fast and efficient printer maintenance, repairs, and more!</p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service 1: Printer Repair */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold mb-4">Printer Repair</h3>
            <p className="text-sm mb-6">We offer professional printer repair services for all major printer brands. Whether it’s a hardware issue or software glitch, we fix it quickly to get you back to work.</p>
            <ul className="list-disc text-left mb-4">
              <li>Fast diagnostics and repair</li>
              <li>Support for all printer models</li>
              <li>Affordable pricing</li>
            </ul>
            <a href="#services" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>

          {/* Service 2: Printer Maintenance */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold mb-4">Printer Maintenance</h3>
            <p className="text-sm mb-6">Regular printer maintenance can increase the lifespan of your printer and keep it running like new. Our experts offer full-service checkups and cleaning for your device.</p>
            <ul className="list-disc text-left mb-4">
              <li>Regular maintenance schedules</li>
              <li>Thorough internal and external cleaning</li>
              <li>Preventive measures to avoid major repairs</li>
            </ul>
            <a href="#services" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>

          {/* Service 3: Support & Consultation */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-semibold mb-4">Support & Consultation</h3>
            <p className="text-sm mb-6">Need advice or troubleshooting support? Our expert technicians offer phone and online consultations to help you resolve any printer issues you encounter.</p>
            <ul className="list-disc text-left mb-4">
              <li>Remote troubleshooting support</li>
              <li>Expert consultation for your printer setup</li>
              <li>24/7 customer support</li>
            </ul>
            <a href="#services" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>

          {/* Service 4: Printer Installation */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaPrint />
            </div>
            <h3 className="text-xl font-semibold mb-4">Printer Installation</h3>
            <p className="text-sm mb-6">Our team offers professional printer installation for businesses and home offices. We ensure your printer is set up and connected properly to your devices.</p>
            <ul className="list-disc text-left mb-4">
              <li>Easy, quick printer setup</li>
              <li>Network and Wi-Fi configuration</li>
              <li>Support for all major brands</li>
            </ul>
            <a href="#services" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>

          {/* Service 5: Printer Protection Plan */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4">Printer Protection Plan</h3>
            <p className="text-sm mb-6">Our protection plans ensure your printer is always covered, with regular checkups and quick repairs to avoid any downtime.</p>
            <ul className="list-disc text-left mb-4">
              <li>Annual service checkups</li>
              <li>Priority support</li>
              <li>Cost-effective repair solutions</li>
            </ul>
            <a href="#services" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>

          {/* Service 6: Mobile Printer Solutions */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-blue-500">
              <FaMobileAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mobile Printer Solutions</h3>
            <p className="text-sm mb-6">Our mobile printing services allow you to print from anywhere with ease, whether you’re in the office, at home, or on the go.</p>
            <ul className="list-disc text-left mb-4">
              <li>Mobile app integration</li>
              <li>Support for all devices</li>
              <li>Print from smartphones and tablets</li>
            </ul>
            <a href="#services" className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a href="#contact" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Service;
