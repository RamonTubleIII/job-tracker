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
      sx={{
        height: "100%",
        borderLeft: 6,
        borderColor: `${JOB_COLORS[job.status]}`,
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="flex-end"
          mb={1}
        >
          <Chip
            sx={{ borderRadius: 1, backgroundColor: JOB_COLORS[job.status], color: "#fff" }}
            label={job.status}
            size="small"
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {job.jobName}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {job.clientName}
            </Typography>
          </Box>
        </Box>

        <Box mt={2}>
          <Select
            size="small"
            value={job.status}
            onChange={(e) =>
              onStatusChange(job.id, e.target.value as JobStatus)
            }
            fullWidth
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
