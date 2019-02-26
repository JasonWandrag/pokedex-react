import React from 'react';

const Item = props => {
  return (
    <div className='listItem'>
      <p className='capitalize'>{props.name}</p>
    </div>
  );
};

export default Item;
