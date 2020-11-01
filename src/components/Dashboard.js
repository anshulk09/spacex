import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getFilteredData } from '../actions';
import Filter from './Filters';
import Cardgrid from './Cardgrid';
import { useLocation } from 'react-router-dom';

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const initialData = useSelector(state => state.initialData);
  const location = useLocation();
  const launch_year = new URLSearchParams(location.search).get('launch_year');
  const launch_success = new URLSearchParams(location.search).get(
    'launch_success'
  );
  const land_success = new URLSearchParams(location.search).get('land_success');

  useEffect(() => {
    console.log('useeffect');
    !launch_year && !launch_success && !land_success && dispatch(getData());
  }, []);
  // initialData && initialData.map((i) => console.log(i.launch_year));
  // console.log(initialData);

  const handleOnClick = data => {
    console.log('onclick');
    dispatch(getFilteredData(data));
  };

  return (
    <div className="dashboard">
      <div className="dashboardTitle">
        <span>SpaceX Launch Programs</span>
      </div>
      <div className="dashboardContent">
        <div className="filterBox">
          <Filter initialData={initialData} handleOnClick={handleOnClick} />
        </div>
        <div className="cardBox">
          <Cardgrid initialData={initialData} />
        </div>
      </div>
    </div>
  );
}
