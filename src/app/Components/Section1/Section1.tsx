import React from 'react';
import './Section1.css'
import '../Responsive.css'
import Image from 'next/image';

import New from '../Asset/Section1/New.png';
import Sale from '../Asset/Section1/Sale.png';
import Women from '../Asset/Section1/Women.png';
import Men from '../Asset/Section1/Men.png';

export default function Section1() {
  const images = [
    {
        text: 'New',
        img: New
    },
    {
        text: 'Sale',
        img: Sale
    },
    {
        text: 'Women',
        img: Women
    },
    {
        text: 'Men',
        img: Men
    },
  ];

  return (
    <div className="section1Container">
      {images.map((item) => (
        <div className='section1ContainerItem'>
            <Image src={item.img} alt='hg' />
            <div className='section1ContainerItemH1Container'>
              <h1>{item.text}</h1>
            </div>
        </div>
      ))}
    </div>
  );
}
