import React, { useRef } from 'react';
import './index.scss';

function Search({ fetchJobsByCompany }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobsByCompany(inputRef.current.value);
  };
  return (
    <div className='search-container'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='input-group'>
          <span className='material-icons input-group__icon'>work_outline</span>
          <input
            type='text'
            placeholder='Search company name'
            className='input-group__input'
            ref={inputRef}
          />
          <button className='input-group__btn'>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
