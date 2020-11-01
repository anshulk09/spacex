import React from 'react';
import Card from './Card';

export default function Cardgrid({ initialData }) {
  return (
    <div className='cardGrid'>
      {initialData.map((item, i) => {
        return <Card cardData={item} key={i} />;
      })}
    </div>
  );
}
