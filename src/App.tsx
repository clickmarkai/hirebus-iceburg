import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobDetails from './components/JobDetails';
import Footer from './components/Footer';
import type { Job } from './types';
import './App.css';

const supabaseUrl = 'https://owpxgumskjpwezzmcwtx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cHhndW1za2pwd2V6em1jd3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNDY1NjIsImV4cCI6MjA2NjYyMjU2Mn0.HMEinqSc5oE5_zF-OVtzQrCwneNCuUtfeSpQrqAWooo';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchJob = async (jobId: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('scraped_leads')
        .select('*')
        .eq('job_key', jobId)
        .limit(1);
      
      if (error) {
        console.error('Error fetching job:', error);
        setError('Failed to fetch job details');
        setJob(null);
      } else if (data && data.length > 0) {
        setJob(data[0]);
        setError(null);
      } else {
        setError('Job not found');
        setJob(null);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An unexpected error occurred');
      setJob(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJob(id);
    } else {
      setLoading(false);
      setJob(null);
      setError(null);
    }
  }, [id]);

  const handleSearch = (what: string, where: string) => {
    // In a real app, this would trigger a search and update the view
    console.log('Searching for:', { what, where });
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-1 flex justify-center items-start px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p>Loading job details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-1 flex justify-center items-start px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 flex justify-center items-start px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <SearchBar job={job} onSearch={handleSearch} />
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {job ? (
              <JobDetails job={job} />
            ) : (
              <p>No job selected. Please provide a valid job ID in the URL.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
