import React from 'react';
import { FiBookmark } from 'react-icons/fi';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
  onJobClick: () => void;
  isSelected: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, onJobClick, isSelected }) => {
  const cardClasses = `p-4 border rounded-lg cursor-pointer bg-white ${
    isSelected ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-blue-500'
  }`;

  return (
    <div className={cardClasses} onClick={onJobClick}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-bold text-blue-800">{job['job-title']}</h2>
          <p className="text-sm text-gray-700">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <div className="text-right">
          <button className="text-gray-400 hover:text-gray-600">
            <FiBookmark size={20} />
          </button>
          <div className="mt-2">
            <p className="text-sm text-gray-800">{`${job['salary-min']} - ${job['salary-max']} ${job.interval}`}</p>
            <span className="mt-1 inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {job['job-type']}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard; 