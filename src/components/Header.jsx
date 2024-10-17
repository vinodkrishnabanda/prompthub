import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">PromptShare</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/browse" className="hover:text-gray-300">Browse</Link></li>
            <li><Link to="/submit" className="hover:text-gray-300">Submit Prompt</Link></li>
            <li><a href="#" className="hover:text-gray-300">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;