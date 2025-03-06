import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Orisz Group</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We provide the best services for your business.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
             Learn More
            </button>
          </section>

          {/* Services Section */}
          <section className="container mx-auto p-4 mt-8">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          </section>
          {/* Footer */}
          <Footer />
        </div>
    );
};

export default Home;