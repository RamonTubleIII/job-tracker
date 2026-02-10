export type JobStatus = 'Pending' | 'In Progress' | 'Completed';


export interface IJob {
    id: string;
    jobName: string;
    clientName: string;
    status: JobStatus;
    priority?: 'Low' | 'Medium' | 'High';
    createdAt: string;
    lastUpdatedAt: string;
}