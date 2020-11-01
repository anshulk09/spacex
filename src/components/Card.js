import React from 'react';

export default function Card({ cardData }) {
  // console.log(cardData);
  return (
    <div className='cardView'>
      <img className='cardImg' src={cardData.links.mission_patch}></img>
      <div className='cardContent'>
        <div className='missionName'>
          <span>
            {cardData.mission_name}#{cardData.flight_number}
          </span>
        </div>
        <div className='missionId'>
          <span className='heading'>Mission IDs:</span>
          <ul>
            {cardData.mission_id.map((item, i) => {
              return (
                <li key={i} className='headingContent'>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='launchYear'>
          <span className='heading'>Launch Year:&nbsp;</span>
          <span className='headingContent'>{cardData.launch_year}</span>
        </div>
        <div className='launchSuccess'>
          <span className='heading'>Successful Launch:&nbsp;</span>
          <span className='headingContent'>
            {cardData.launch_success ? 'True' : 'False'}
          </span>
        </div>
        <div className='landSuccess'>
          <span className='heading'>Successful Landing:&nbsp;</span>
          <span className='headingContent'>
            {cardData.rocket.first_stage.cores[0].land_success
              ? 'True'
              : 'False'}
          </span>
        </div>
      </div>
    </div>
  );
}
