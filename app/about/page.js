// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="text-gray-800 py-12" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(212, 167, 213, 0.4) 17%, rgb(207, 81, 165) 82%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About IjStart Printer</h1>
        <div className="space-y-12">
          {/* Our Story Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="leading-relaxed">
              At <strong>IjStart Printer</strong>, we believe that printing should be easy, efficient, and accessible to everyone. Our journey began with a simple idea: to create printers that are not only advanced in technology but also user-friendly and reliable. Over the years, we have grown into a trusted name in the printing industry, known for our innovative solutions and exceptional customer service.
            </p>
          </section>

          {/* Our Mission Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission is to revolutionize the printing experience by providing cutting-edge technology and unparalleled support. We strive to make printing seamless and hassle-free, enabling our customers to focus on what truly matters – their creativity, productivity, and business growth.
            </p>
          </section>

          {/* Our Values Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Innovation</strong>: We are committed to continuous improvement and innovation, ensuring that our products and services always meet the evolving needs of our customers.</li>
              <li><strong>Quality</strong>: We uphold the highest standards of quality in our products, ensuring durability, reliability, and superior performance.</li>
              <li><strong>Customer Focus</strong>: Our customers are at the heart of everything we do. We listen to their needs and provide personalized solutions to help them achieve their goals.</li>
              <li><strong>Integrity</strong>: We conduct our business with the utmost integrity, transparency, and ethical standards.</li>
            </ul>
          </section>

          {/* Our Products Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <p className="leading-relaxed">
              IjStart Printer offers a wide range of printing solutions designed to cater to various needs, from home and small office use to large enterprises. Our product lineup includes:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Inkjet Printers</strong>: High-quality color and monochrome printers that deliver crisp and vibrant prints.</li>
              <li><strong>Laser Printers</strong>: Fast and efficient printers for high-volume printing needs.</li>
              <li><strong>All-in-One Printers</strong>: Multifunctional devices that combine printing, scanning, copying, and faxing capabilities.</li>
              <li><strong>Portable Printers</strong>: Compact and lightweight printers for on-the-go printing.</li>
              <li><strong>Specialty Printers</strong>: Printers designed for specific applications, such as photo printing and label printing.</li>
            </ul>
          </section>

          {/* Our Technology Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
            <p className="leading-relaxed">
              We leverage the latest advancements in printing technology to deliver superior performance and efficiency. Our printers feature:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>High-Resolution Printing</strong>: Enjoy sharp, detailed prints with our advanced printhead technology.</li>
              <li><strong>Wireless Connectivity</strong>: Print from anywhere using Wi-Fi, Bluetooth, or mobile printing apps.</li>
              <li><strong>Eco-Friendly Options</strong>: Reduce your environmental impact with our energy-efficient and eco-friendly printing solutions.</li>
              <li><strong>Smart Features</strong>: Benefit from smart features like automatic duplex printing, cloud printing, and touchscreen interfaces.</li>
            </ul>
          </section>

          {/* Sustainability Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Sustainability</h2>
            <p className="leading-relaxed">
              At IjStart Printer, we are committed to sustainability and environmental responsibility. We strive to minimize our ecological footprint through:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><strong>Eco-Friendly Materials</strong>: Using recyclable materials and reducing waste in our manufacturing processes.</li>
              <li><strong>Energy Efficiency</strong>: Designing energy-efficient products that help reduce power consumption.</li>
              <li><strong>Recycling Programs</strong>: Offering recycling programs for ink cartridges and printers to promote responsible disposal and recycling.</li>
            </ul>
          </section>

          {/* Customer Support Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
            <p className="leading-relaxed">
              We pride ourselves on providing exceptional customer support. Our dedicated team of experts is always ready to assist you with any questions or issues you may have. Whether you need help with setup, troubleshooting, or maintenance, we are here to ensure your IjStart Printer experience is smooth and satisfactory.
            </p>
          </section>

          {/* Join Us Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
            <p className="leading-relaxed">
              Join the IjStart Printer community and experience the future of printing. Stay connected with us through our social media channels, blog, and newsletter to get the latest updates, tips, and exclusive offers.
            </p>
          </section>

          {/* Contact Us Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions, feedback, or inquiries, feel free to reach out to us. We are always here to help and support you.
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li><strong>Email</strong>: <a href="mailto:support@ijstartprinter.com" className="text-blue-600 hover:underline">support@ijstartprinter.com</a></li>
              <li><strong>Phone</strong>: 1-800-123-4567</li>
              <li><strong>Address</strong>: 123 Printer Avenue, Tech City, TX 75001, USA</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;