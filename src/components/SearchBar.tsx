import React, { useState, useEffect } from 'react';
import type { Job } from '../types';

interface SearchBarProps {
  job: Job | null;
  onSearch: (what: string, where: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ job, onSearch }) => {
  const [what, setWhat] = useState('');
  const [where, setWhere] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(what, where);
  };

  useEffect(() => {
    if (job) {
      setWhat(job.company);
      setWhere(job.location);
    }
  }, [job]);

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <div className="flex flex-1 border bg-white border-gray-400 rounded-lg">
        <div className="flex-1 flex items-center relative px-4">
          <label htmlFor="what" className="font-bold text-gray-700 mr-2">What</label>
          <input
            id="what"
            type="text"
            value={what}
            onChange={(e) => setWhat(e.target.value)}
            placeholder="Job title, keywords, or company"
            className="w-full h-10 border-none focus:ring-0 pl-4"
          />
        </div>
        <div className="border-l border-gray-400 h-8 self-center"></div>
        <div className="flex-1 flex items-center relative px-4">
          <label htmlFor="where" className="font-bold text-gray-700 mr-2">Where</label>
          <input
            id="where"
            type="text"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            placeholder="City, state, or zip code"
            className="w-full h-12 border-none focus:ring-0 pl-4"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-white font-bold h-12 px-4 rounded-lg hover:bg-blue-800"
      >
        Find Jobs
      </button>
    </form>
  );
};

export default SearchBar; 