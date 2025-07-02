import React from 'react';
import type { Job } from '../types';
import { FiBookmark, FiLink, FiMapPin, FiFlag } from 'react-icons/fi';
import { formatDescription } from '../utils';
import payIcon from '../assets/pay.png';
import jobTypeIcon from '../assets/jobtype.png';

interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  if (!job) {
    return null;
  }


  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <div className="flex mt-2 text-base">
          <p className="mr-2 text-gray-800">{job.company}</p>
          <a href="#" className="text-blue-600 mr-2">&#8599;</a>
        </div>
        <p className="text-md text-gray-600 mt-1">{job.location}</p>
        <p className="text-md text-gray-700 mt-2 font-medium">{`$${Number(job.min_amount).toLocaleString()} - $${Number(job.max_amount).toLocaleString()} ${job.interval}`}</p>
      </div>

      <div className="flex space-x-2 mb-6">
        <a href={'#'} target="_blank" className="bg-blue-700 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-800 inline-flex text-base">
          Apply now
        </a>
        <button className="p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          <FiBookmark size={20} />
        </button>
        <button className="p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          <FiLink size={20} />
        </button>
      </div>
      
      <div className="border-t border-gray-200 my-6"></div>

      <div>
        <h2 className="text-xl font-bold mb-4">Job details</h2>
        <div className="space-y-5">
          <div className="flex items-start">
            <img src={payIcon} alt="Pay" className="w-5 h-5 mr-4 mt-1" />
            <div>
              <p className="font-semibold text-gray-800">Pay</p>
              <div className="mt-1">
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md border border-gray-200">{`$${Number(job.min_amount).toLocaleString()} - $${Number(job.max_amount).toLocaleString()} ${job.interval}`}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <img src={jobTypeIcon} alt="Job Type" className="w-5 h-5 mr-4 mt-1" />
            <div>
              <p className="font-semibold text-gray-800">Job type</p>
              <div className="mt-1">
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md border border-gray-200">{job.job_type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 my-6"></div>

      <div>
        <h2 className="text-xl font-bold mb-4">Location</h2>
        <div className="flex text-gray-700">
          <FiMapPin className="mr-2" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <div>
        <h2 className="text-xl font-bold mb-4">Full job description</h2>
        <div 
          className="prose prose-sm max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: formatDescription(job.description || '') }} 
        />
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <div className="mt-6">
        <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 border border-gray-300">
          <FiFlag />
          <span>Report job</span>
        </button>
      </div>
    </div>
  );
};

export default JobDetails; 