export interface Job {
  id: number;
  company: string;
  location: string;
  'job-title': string;
  'salary-min': number;
  'salary-max': number;
  interval: string;
  'job-type': string;
  'job-description': string;
  created_at: string;
} 