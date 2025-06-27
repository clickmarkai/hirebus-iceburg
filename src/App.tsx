import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from('data').select('*').limit(1);
      if (error) {
        console.error('Error fetching jobs:', error);
      } else if (data && data.length > 0) {
        setJob(data[0]);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (what: string, where: string) => {
    // In a real app, this would trigger a search and update the view
    console.log('Searching for:', { what, where });
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="w-full max-w-4xl ml-[130px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <SearchBar job={job} onSearch={handleSearch} />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          {job ? <JobDetails job={job} /> : <p>Loading job details...</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
