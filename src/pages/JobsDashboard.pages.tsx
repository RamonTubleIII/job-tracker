import { Container, Typography, Box } from "@mui/material";
import { useJobs } from "../hooks/useJobs";
import { JobCard } from "../components/JobCard";
import { JobFilters } from "../components/JobFilters";

export const JobsDashboard = () => {
  const { filteredJobs, currentFilter, setFilter, updateJobStatus } = useJobs();

  return (
    <Box sx={{ bgcolor: "grey.50", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="xl">
        <Box mb={2}>
          <Typography fontWeight={600} fontSize={28} color="#1e293b">Job Tracker Dashboard</Typography>
        </Box>

        <JobFilters currentFilter={currentFilter} onFilterChange={setFilter} />
        <Box
          sx={{
            mt: 2,
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
          }}
        >
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onStatusChange={updateJobStatus} />
          ))}
        </Box>

        {filteredJobs.length === 0 && (
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h6" color="text.secondary">
              No jobs match the selected status.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};
