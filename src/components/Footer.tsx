import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600">
      <div className="border-t border-gray-200 pt-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Browse jobs</a>
            <a href="#" className="hover:underline">Browse companies</a>
            <a href="#" className="hover:underline">Salaries</a>
            <a href="#" className="hover:underline">Countries</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">ESG at Indeed</a>
          </div>
          <div className="flex space-x-4">
            <span>© 2025 Indeed</span>
            <a href="#" className="hover:underline">Accessibility at Indeed</a>
            <a href="#" className="hover:underline">Privacy Center and Ad Choices</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 