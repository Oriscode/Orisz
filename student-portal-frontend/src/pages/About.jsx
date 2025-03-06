import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          We are a team of skilled developers passionate about building innovative solutions.
        </p>

        {/* Team Members */}
        <div className="container mx-auto p-4 mt-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member Card 1 */}
            <div className="border p-4 rounded shadow-md bg-white">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>

            {/* Team Member Card 2 */}
            <div className="border p-4 rounded shadow-md bg-white">
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-700">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;