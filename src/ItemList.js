import React from 'react';

const ItemList = (props) => {
  return(
    <ol className="item-list">
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ol>
  );
}

export default ItemList;