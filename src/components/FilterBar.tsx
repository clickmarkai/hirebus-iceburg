import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FilterBarProps {
  onFilter: (filters: { jobType: string[]; pay: string[] }) => void;
}

const FilterButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
    <span>{label}</span>
    <FiChevronDown className="ml-2 h-4 w-4" />
  </button>
);

const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  // The onFilter prop is unused for now, but kept for future functionality.
  console.log(onFilter);
  return (
    <div className="mt-4 flex items-center space-x-2">
      <FilterButton label="Job Type" />
      <FilterButton label="Pay" />
    </div>
  );
};

export default FilterBar; 