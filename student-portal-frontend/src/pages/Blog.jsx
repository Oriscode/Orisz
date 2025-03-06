import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Blog Section */}
      <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-700 text-center">
          Stay updated with our latest articles and insights.
        </p>
        {/* Blog Posts */}
        <div className="container mx-auto p-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">How to Build a Website</h3>
            <p className="text-gray-700">
              Learn the basics of web development.
            </p>
            <p className="text-sm text-gray-500">
              Published on January 1, 2025
            </p>
          </div>
          {/* Blog Post 2 */}
          <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">
              Top Web Development Trends
            </h3>
            <p className="text-gray-700">
              Explore the latest trends in web development.
            </p>
            <p className="text-sm text-gray-500">
              Published on February 15, 2025
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
