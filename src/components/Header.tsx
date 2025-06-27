import React from 'react';
import indeedLogo from '../assets/indeedlogo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div className="flex items-center space-x-8">
            <img src={indeedLogo} alt="Indeed Logo" className="h-8 w-auto" />
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-gray-900 border-b-2 border-blue-600 pb-4 -mb-4">Home</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Company reviews</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Find salaries</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Sign in</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Employers / Post Job</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 