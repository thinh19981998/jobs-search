import React, { useRef } from 'react';
import './index.scss';

function SideBar({
  level,
  category,
  levelSubmitHandler,
  categorySubmitHandler,
  locationSubmitHandler,
}) {
  const locationRef = useRef();

  const onLocationSubmit = (e) => {
    e.preventDefault();
    locationSubmitHandler(locationRef.current.value);
  };

  const onLevelChange = (e) => {
    levelSubmitHandler(e.target.value);
  };

  const onCategoryChange = (e) => {
    categorySubmitHandler(e.target.value);
  };

  return (
    <div className='sideBar'>
      <form className='location' onSubmit={onLocationSubmit}>
        <label htmlFor='location-input'>Location</label>
        <div className='location-input-group'>
          <span className='material-icons'>public</span>
          <input
            type='text'
            placeholder='Location search'
            id='location-input'
            ref={locationRef}
          />
        </div>
      </form>

      <div className='level'>
        <label htmlFor='level-input'>Level</label>
        <select name='level' id='level-input' onChange={onLevelChange}>
          <option value={'null'} defaultValue>
            ---All Level---
          </option>
          {level.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className='category'>
        <label htmlFor='category-input'>Category</label>
        <select name='category' id='category-input' onChange={onCategoryChange}>
          <option value={'null'} defaultValue>
            ---All category---
          </option>
          {category.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SideBar;
