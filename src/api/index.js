import axios from 'axios';

export const getJobs = (query) =>
  axios.get(`https://www.themuse.com/api/public/jobs?${query}`);

export const getJobById = (id) =>
  axios.get(`https://www.themuse.com/api/public/jobs/${id}`);
