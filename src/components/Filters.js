import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function Filters({ initialData, handleOnClick }) {
  let history = useHistory();
  const location = useLocation();
  const launch_year = new URLSearchParams(location.search).get('launch_year');
  const launch_success = new URLSearchParams(location.search).get(
    'launch_success'
  );
  const land_success = new URLSearchParams(location.search).get('land_success');
  const [yearSelected, setYearSelected] = useState(
    launch_year ? launch_year : ''
  );
  const [launchSelected, setLaunchSelected] = useState(
    launch_success ? launch_success : ''
  );
  const [landSelected, setLandSelected] = useState(
    land_success ? land_success : ''
  );
  console.log(location);
  const filterYrs = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];

  useEffect(() => {
    handleOnClick({
      launch_success: launchSelected,
      land_success: landSelected,
      launch_year: yearSelected
    });
  }, [yearSelected, launchSelected, landSelected]);

  const onFilterYear = e => {
    let value = e.target.innerHTML;
    if (value == yearSelected) {
      setYearSelected('');
      history.push({
        pathname: `/launches`,
        search: `?limit=50${launchSelected &&
          '&launch_success=' + launchSelected}${landSelected &&
          '&land_success=' + landSelected}`
      });
    } else {
      setYearSelected(value);
    }
  };
  const onFilterLand = e => {
    let value = e.target.innerHTML;
    if (landSelected == 'true') {
      if (value == 'True') {
        setLandSelected('');
        history.push({
          pathname: `/launches`,
          search: `?limit=50${launchSelected &&
            '&launch_success=' + launchSelected}${yearSelected &&
            '&launch_year=' + yearSelected}`
        });
      }
      if (value == 'False') setLandSelected('false');
    } else if (landSelected == 'false') {
      if (value == 'False') {
        setLandSelected('');
        history.push({
          pathname: `/launches`,
          search: `?limit=50${launchSelected &&
            '&launch_success=' + launchSelected}${yearSelected &&
            '&launch_year=' + yearSelected}`
        });
      }
      if (value == 'True') setLandSelected('true');
    } else {
      if (value == 'False') setLandSelected('false');
      if (value == 'True') setLandSelected('true');
    }
  };
  const onFilterLaunch = e => {
    let value = e.target.innerHTML;
    if (launchSelected == 'true') {
      if (value == 'True') {
        setLaunchSelected('');
        history.push(
          `/launches?limit=50${landSelected &&
            '&land_success=' + landSelected}${yearSelected &&
            '&launch_year=' + yearSelected}`
        );
      }
      if (value == 'False') setLaunchSelected('false');
    } else if (launchSelected == 'false') {
      if (value == 'False') {
        setLaunchSelected('');
        history.push(
          `/launches?limit=50${landSelected &&
            '&land_success=' + landSelected}${yearSelected &&
            '&launch_year=' + yearSelected}`
        );
      }
      if (value == 'True') setLaunchSelected('true');
    } else {
      if (value == 'False') setLaunchSelected('false');
      if (value == 'True') setLaunchSelected('true');
    }
  };
  return (
    <div className="filterView">
      <div className="filterTitle">Filters</div>
      <div className="filter">
        <span className="filter1">Launch Year</span>
      </div>
      {filterYrs.map((item, i) => {
        return (
          <button
            key={i}
            className={`filterYear ${yearSelected == item ? 'active' : ''}`}
            onClick={onFilterYear}
          >
            <Link
              to={`/launches?limit=50${launchSelected &&
                '&launch_success=' + launchSelected}${landSelected &&
                '&land_success=' + landSelected}&launch_year=${item}`}
            >
              {item}
            </Link>
          </button>
        );
      })}
      <div className="filter">
        <span className="filter2">Successful Launch</span>
      </div>
      <button
        className={`filterYear ${launchSelected == 'true' ? 'active' : ''}`}
        onClick={onFilterLaunch}
      >
        <Link
          to={`/launches?limit=50&launch_success=true${landSelected &&
            '&land_success=' + landSelected}${yearSelected &&
            '&launch_year=' + yearSelected}`}
        >
          True
        </Link>
      </button>
      <button
        className={`filterYear ${launchSelected == 'false' ? 'active' : ''}`}
        onClick={onFilterLaunch}
      >
        <Link
          to={`/launches?limit=50&launch_success=false${landSelected &&
            '&land_success=' + landSelected}${yearSelected &&
            '&launch_year=' + yearSelected}`}
        >
          False
        </Link>
      </button>
      <div className="filter">
        <span className="filter3">Successful Landing</span>
      </div>
      <button
        className={`filterYear ${landSelected == 'true' ? 'active' : ''}`}
        onClick={onFilterLand}
      >
        <Link
          to={`/launches?limit=50${launchSelected &&
            '&launch_success=' +
              launchSelected}&land_success=true${yearSelected &&
            '&launch_year=' + yearSelected}`}
        >
          True
        </Link>
      </button>
      <button
        className={`filterYear ${landSelected == 'false' ? 'active' : ''}`}
        onClick={onFilterLand}
      >
        <Link
          to={`/launches?limit=50${launchSelected &&
            '&launch_success=' +
              launchSelected}&land_success=false${yearSelected &&
            '&launch_year=' + yearSelected}`}
        >
          False
        </Link>
      </button>
    </div>
  );
}
