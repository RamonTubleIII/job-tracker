import { useState, useMemo } from 'react';

import initialData from '../data/jobs.json';
import { type IJob, type JobStatus } from '../types/job';

export const useJobs = () => {
  const [jobs, setJobs] = useState<IJob[]>(initialData as IJob[]);
  const [filter, setFilter] = useState<JobStatus | 'All'>('All');

  const filteredJobs = useMemo(() => {
    return filter === 'All' ? jobs : jobs.filter(j => j.status === filter);
  }, [jobs, filter]);

  const updateJobStatus = (id: string, newStatus: JobStatus) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, status: newStatus, lastUpdatedAt: new Date().toISOString() } : job
    ));
  };

  return { filteredJobs, setFilter, updateJobStatus, currentFilter: filter };
};