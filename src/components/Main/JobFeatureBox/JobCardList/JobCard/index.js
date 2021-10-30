import React from 'react';
import './index.scss';
import { dayPast } from '../../../../../Utils/index';
import { Link } from 'react-router-dom';

function JobCard({ logo, company, job, location, time, id }) {
  const days = dayPast(time);

  const resultDays =
    +days === 0 ? 'Today' : +days === 1 ? 'yesterday' : `${days} days ago`;

  return (
    <Link to={`/job-details/${id}`} className='card-container'>
      <div className='card-img-container'>
        <img
          src={`https://assets.themuse.com/uploaded/companies/${logo}/small_logo.png`}
          alt=''
        />
      </div>
      <div className='card-content'>
        <span className='card-company'>{company}</span>
        <h3 className='card-job'>{job}</h3>
        <div className='card-place'>
          <span className='material-icons'>public</span>
          {location}
        </div>
        <div className='card-time'>
          <span className='material-icons'>schedule</span> {resultDays}
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
