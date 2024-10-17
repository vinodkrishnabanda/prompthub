import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Discover, Share, and Create with Powerful Prompts</h1>
        <p className="text-xl mb-8">Unlock the potential of AI with our curated collection of ChatGPT prompts</p>
        <div className="space-x-4">
          <Link to="/browse" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Explore Prompts</Link>
          <Link to="/submit" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Submit a Prompt</Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Top Prompts of the Month</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for prompt cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Prompt Title {i}</h3>
              <p className="text-gray-600 mb-4">Brief description of the prompt...</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By: Author Name</span>
                <span className="text-sm text-blue-500">Category</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Placeholder for category tiles */}
          {['Writing', 'Coding', 'Design', 'Business', 'Education', 'Entertainment', 'Productivity', 'Other'].map((category) => (
            <div key={category} className="bg-gray-100 p-4 rounded-md text-center hover:bg-gray-200 cursor-pointer">
              {category}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/categories" className="text-blue-500 hover:underline">View All Categories</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;