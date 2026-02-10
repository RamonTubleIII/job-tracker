import { Container, Typography, Box } from '@mui/material';
import { useJobs } from '../hooks/useJobs';
import { JobCard } from '../components/JobCard';
import { JobFilters } from '../components/JobFilters';

export const JobsDashboard = () => {
  const { filteredJobs, currentFilter, setFilter, updateJobStatus } = useJobs();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box mb={5}>
        <Typography variant="h4" component="h1" fontWeight={800} gutterBottom>
          Job Tracker
        </Typography>
        <Typography color="text.secondary">
          Track, filter, and manage client job statuses in real-time.
        </Typography>
      </Box>

      <JobFilters currentFilter={currentFilter} onFilterChange={setFilter} />

      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
        }}
      >
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onStatusChange={updateJobStatus}
          />
        ))}
      </Box>

      {filteredJobs.length === 0 && (
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No jobs match the selected status.
          </Typography>
        </Box>
      )}
    </Container>
  );
};