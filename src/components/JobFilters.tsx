import { Tabs, Tab, Box } from '@mui/material';
import { type JobStatus } from '../types/job';

interface FilterProps {
  currentFilter: JobStatus | 'All';
  onFilterChange: (filter: JobStatus | 'All') => void;
}

export const JobFilters = ({ currentFilter, onFilterChange }: FilterProps) => {
  return (
    <Box>
      <Tabs 
        value={currentFilter} 
        onChange={(_, val) => onFilterChange(val)}
        textColor="primary"
        indicatorColor="primary"
        sx={{fontFamily: "Roboto"}}
      >
        <Tab label="All Jobs" value="All" sx={{ fontWeight: 600 }} />
        <Tab label="Pending" value="Pending" sx={{ fontWeight: 600 }} />
        <Tab label="In Progress" value="In Progress" sx={{ fontWeight: 600 }} />
        <Tab label="Completed" value="Completed" sx={{ fontWeight: 600 }} />
      </Tabs>
    </Box>
  );
};