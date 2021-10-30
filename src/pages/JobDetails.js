import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getJobById } from '../api';
import Header from '../components/Header';
import Container from '../components/UI/Container';
import './JobDetails.scss';

function JobDetails({ goBackToHome }) {
  let { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    getJobById(id).then((res) => {
      setJob(res.data);
    });
  }, [id]);

  const link = job.refs
    ? job.refs.landing_page
    : 'https://www.themuse.com/jobs';

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
        <div
          dangerouslySetInnerHTML={{ __html: job.contents }}
          className='job-content'
        ></div>
      </div>
    </Container>
  );
}

export default JobDetails;
