import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getJobById } from '../api';
import Header from '../components/Header';
import Container from '../components/UI/Container';
import { dayPast } from '../Utils';
import './JobDetails.scss';

function JobDetails({ goBackToHome }) {
  let { id } = useParams();
  const [job, setJob] = useState({});

  const getJobData = useCallback(async () => {
    await getJobById(id).then((res) => {
      setJob(res.data);
    });
  }, [id]);

  useEffect(() => {
    getJobData();
  }, [getJobData]);

  const link = job.refs
    ? job.refs.landing_page
    : 'https://www.themuse.com/jobs';

  const days = dayPast(job.publication_date);

  const resultDays =
    +days === 0 ? 'Today' : +days === 1 ? 'yesterday' : `${days} days ago`;

  return (
    <Container>
      <Header goBackToHome={goBackToHome} />
      <div className='info'>
        <div className='sub-info'>
          <Link to='/' className='goback-link'>
            <span className='material-icons'>arrow_back</span>Back to search
          </Link>
          <div className='more-info'>
            <p>
              <span className='more-info__heading'>
                For more information go to:
              </span>
              <a
                href={link}
                rel='noreferrer'
                target='_blank'
                className='more-info__link'
              >
                {link}
              </a>
            </p>
          </div>
        </div>
        <div className='main-info'>
          <h2 className='main-info__heading'>{job.name}</h2>
          <div className='main-info__time'>
            <span className='material-icons'>schedule</span> {resultDays}
          </div>
          <div className='main-info__company'>
            {job.company && (
              <div className='main-info__company-img'>
                <img
                  src={`https://assets.themuse.com/uploaded/companies/${job.company.id}/small_logo.png`}
                  alt=''
                />
              </div>
            )}

            <div className='main-info__company-info'>
              <h3 className='company-name'>
                {job.company && job.company.name}
              </h3>
              <h3 className='company-place'>
                {job.locations && job.locations[0].name}
              </h3>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: job.contents }}
            className='job-content'
          ></div>
        </div>
      </div>
    </Container>
  );
}

export default JobDetails;
