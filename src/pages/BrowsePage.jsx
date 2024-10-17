import React from 'react';

function BrowsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Prompts</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="category" className="block mb-2">Category</label>
              <select id="category" className="w-full p-2 border rounded">
                <option value="">All Categories</option>
                <option value="writing">Writing</option>
                <option value="coding">Coding</option>
                <option value="design">Design</option>
                {/* Add more categories */}
              </select>
            </div>
            <div>
              <label htmlFor="timeRange" className="block mb-2">Time Range</label>
              <select id="timeRange" className="w-full p-2 border rounded">
                <option value="all">All Time</option>
                <option value="day">Last 24 Hours</option>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
              </select>
            </div>
            <div>
              <label htmlFor="sortOrder" className="block mb-2">Sort By</label>
              <select id="sortOrder" className="w-full p-2 border rounded">
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="upvotes">Most Upvotes</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for prompt cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
          
          <div className="mt-8 text-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;