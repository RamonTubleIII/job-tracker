import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { type JobStatus } from '../types/job';

interface FilterProps {
  currentFilter: JobStatus | 'All';
  onFilterChange: (filter: JobStatus | 'All') => void;
}

export const JobFilters = ({ currentFilter, onFilterChange }: FilterProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
      <ToggleButtonGroup
        value={currentFilter}
        exclusive
        onChange={(_, val) => val && onFilterChange(val)}
        color="primary"
        aria-label="Filter jobs by status"
      >
        <ToggleButton value="All">All Jobs</ToggleButton>
        <ToggleButton value="Pending">Pending</ToggleButton>
        <ToggleButton value="In Progress">In Progress</ToggleButton>
        <ToggleButton value="Completed">Completed</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};