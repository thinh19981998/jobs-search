import React from 'react';
import JobFeatureBox from './JobFeatureBox';
import Search from './Search';

function Main({
  jobList,
  fetchJobsByCompany,
  level,
  category,
  levelSubmitHandler,
  categorySubmitHandler,
  locationSubmitHandler,
}) {
  return (
    <main>
      <Search fetchJobsByCompany={fetchJobsByCompany} />
      <JobFeatureBox
        jobList={jobList}
        level={level}
        category={category}
        levelSubmitHandler={levelSubmitHandler}
        categorySubmitHandler={categorySubmitHandler}
        locationSubmitHandler={locationSubmitHandler}
      />
    </main>
  );
}

export default Main;
