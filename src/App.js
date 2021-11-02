import { useCallback, useEffect, useState } from 'react';
import { getJobs } from './api';
import './App.scss';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import JobDetails from './pages/JobDetails';
import queryString from 'query-string';

const category = [
  'Accounting',
  'Account Management/Customer Success',
  ' Corporate',
  'Customer Service Career',
  'Data Science',
  'Design',
  'Editor',
  'Education',
  'HR',
  'IT',
  'Law',
  'Marketing',
  'Mechanic',
  'Mental Health',
  'Nurses',
  'Office Administration',
  'Physical Assistant',
  'Product',
  'Project Management',
  'Public Relations',
  'Recruiting',
  'Retail',
  'Sales',
  'Software Engineer',
  'UX',
  'Videography',
  'Writer',
];

const level = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Management',
  'Internship',
];

function App() {
  const [jobList, setJobList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [query, setQuery] = useState({
    page: 1,
    location: null,
    company: null,
    level: null,
    category: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobList = useCallback(async () => {
    setIsLoading(true);
    const urlQuery = queryString.stringify(query, { skipNull: true });
    await getJobs(urlQuery).then((res) => {
      const data = res.data;
      setJobList(data.results.slice(0, 5));
      if (data.page_count > 99) {
        setTotalPage(99);
      } else {
        setTotalPage(data.page_count - 1);
      }
    });
    setIsLoading(false);
  }, [query, setIsLoading]);

  useEffect(() => {
    fetchJobList();
  }, [fetchJobList]);

  const fetchJobsByPage = (page) => {
    setQuery({ ...query, page: page });
  };

  const fetchJobsByCompany = (companyInput) => {
    setQuery({ ...query, company: companyInput, page: 1 });
  };

  const locationSubmitHandler = (location) => {
    if (location === 'null') {
      setQuery({ ...query, location: null, page: 1 });
    } else {
      setQuery({ ...query, location: location, page: 1 });
    }
  };

  const levelSubmitHandler = (level) => {
    if (level === 'null') {
      setQuery({ ...query, level: null, page: 1 });
    } else {
      setQuery({ ...query, level: level, page: 1 });
    }
  };

  const categorySubmitHandler = (category) => {
    if (category === 'null') {
      setQuery({ ...query, category: null, page: 1 });
    } else {
      setQuery({ ...query, category: category, page: 1 });
    }
  };

  const goBackToHome = () => {
    setQuery({
      page: 1,
      location: null,
      company: null,
      level: null,
    });
  };

  return (
    <Switch>
      <Route path='/' exact>
        <Home
          jobList={jobList}
          currentPage={query.page}
          fetchJobsByPage={fetchJobsByPage}
          fetchJobsByCompany={fetchJobsByCompany}
          fetchJobList={fetchJobList}
          goBackToHome={goBackToHome}
          level={level}
          category={category}
          locationSubmitHandler={locationSubmitHandler}
          categorySubmitHandler={categorySubmitHandler}
          levelSubmitHandler={levelSubmitHandler}
          isLoading={isLoading}
          totalPage={totalPage}
        />
      </Route>
      <Route path='/job-details/:id'>
        <JobDetails
          fetchJobList={fetchJobList}
          jobList={jobList}
          goBackToHome={goBackToHome}
        />
      </Route>
    </Switch>
  );
}

export default App;
