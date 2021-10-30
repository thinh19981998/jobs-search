import React from 'react';
import JobCardList from './JobCardList';
import SideBar from './SideBar';
import './index.scss';

function JobFeatureBox({
  jobList,
  level,
  category,
  levelSubmitHandler,
  categorySubmitHandler,
  locationSubmitHandler,
  isLoading,
}) {
  return (
    <div className='job-feature-box'>
      <SideBar
        level={level}
        category={category}
        levelSubmitHandler={levelSubmitHandler}
        categorySubmitHandler={categorySubmitHandler}
        locationSubmitHandler={locationSubmitHandler}
      />
      <JobCardList jobList={jobList} isLoading={isLoading} />
    </div>
  );
}

export default JobFeatureBox;
