import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Services Section */}
      <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h1>
        <p className="text-lg text-gray-700 text-center">
          We offer a range of services to help your business grow.
        </p>

        {/* Service Cards */}
        <div className="container mx-auto p-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-700">Build modern and scalable web applications.</p>
          </div>

          {/* Service Card 2 */}
          <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
            <p className="text-gray-700">Create native and cross-platform mobile apps.</p>
          </div>

          {/* Service Card 3 */}
          <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">Academy</h3>
            <p className="text-gray-700">Learn full-stack development with JavaScript.</p>
          </div>

          {/* Service Card 4 */}
          <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">Custom Software Solutions</h3>
            <p className="text-gray-700">Tailored software solutions for your business needs.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;