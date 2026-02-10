import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Select,
  MenuItem,
} from "@mui/material";

import { type IJob, type JobStatus } from "../types/job";
import { JOB_COLORS } from '../constants/colors';

interface Props {
  job: IJob;
  onStatusChange: (id: string, status: JobStatus) => void;
}

export const JobCard = ({ job, onStatusChange }: Props) => {


  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: '1px solid #a3a3a3ff',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
          borderColor: JOB_COLORS[job.status],
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <Typography color="text.secondary" fontSize={14} gutterBottom>{job.clientName}</Typography>
            <Typography fontWeight={700} lineHeight={1.2}>{job.jobName}</Typography>
          </Box>
          <Chip
            label={job.status}
            size="small"
            sx={{ 
              fontWeight: 700, 
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              bgcolor: `${JOB_COLORS[job.status]}20`,
              color: JOB_COLORS[job.status],
              border: `1px solid ${JOB_COLORS[job.status]}`
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" fontWeight={600} color="text.secondary">STATUS:</Typography>
          <Select
            variant="standard"
            disableUnderline
            size="small"
            value={job.status}
            onChange={(e) => onStatusChange(job.id, e.target.value as JobStatus)}
            sx={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'primary.main',
              cursor: 'pointer'
            }}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </Box>
      </CardContent>
    </Card>
  );
};