import React from 'react';
import JobCard from './JobCard';
import './index.scss';

function JobCardList({ jobList, isLoading }) {
  let rederJobList;
  if (jobList.length > 0) {
    rederJobList = jobList.map((item) => {
      return (
        <JobCard
          key={item.id}
          id={item.id}
          company={item.company.name}
          logo={item.company.id}
          job={item.name}
          location={
            item.locations.length !== 0 ? item.locations[0].name : 'No location'
          }
          time={item.publication_date}
        />
      );
    });
  } else {
    rederJobList = isLoading ? (
      <h3 className='no-job'>Loading...</h3>
    ) : (
      <h3 className='no-job'>No jobs found</h3>
    );
  }

  return <div className='job-list'>{rederJobList}</div>;
}

export default JobCardList;
