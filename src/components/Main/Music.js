import './Music.css'

import React from 'react';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const Music = () => {
  return (
    <div className="product-grid  no-border" style={{boder: 'none'}}>
      {productsArr.map(product => (
        <div className="product">
          <h3>{product.title}</h3>
          <img className="my-image" src={product.imageUrl} alt={product.title} width={300}/>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Music;

