import React from 'react';
import Container from '../components/UI/Container';
import Header from '../components/Header';
import Main from '../components/Main';
import Pagination from 'rc-pagination';
import '../../node_modules/rc-pagination/assets/index.css';
import './Home.scss';

function Home({
  jobList,
  fetchJobsByPage,
  fetchJobsByCompany,
  currentPage,
  goBackToHome,
  level,
  category,
  locationSubmitHandler,
  levelSubmitHandler,
  categorySubmitHandler,
  isLoading,
  totalPage,
}) {
  const onChange = (page) => {
    fetchJobsByPage(page);
  };

  return (
    <Container>
      <Header goBackToHome={goBackToHome} />
      <Main
        jobList={jobList}
        fetchJobsByCompany={fetchJobsByCompany}
        level={level}
        category={category}
        locationSubmitHandler={locationSubmitHandler}
        levelSubmitHandler={levelSubmitHandler}
        categorySubmitHandler={categorySubmitHandler}
        isLoading={isLoading}
      />
      {jobList.length > 0 && (
        <Pagination
          onChange={onChange}
          current={currentPage}
          total={totalPage * 10}
          className='pagination'
        />
      )}
    </Container>
  );
}

export default Home;
