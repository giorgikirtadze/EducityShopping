import React from 'react'
import './Menclothes.css'
import '../Responsive.css'
import Image from 'next/image';

import Img1 from '../Asset/MensClothes/beautiful-male-model-holding-hand-hair 1.png'
import Img2 from '../Asset/MensClothes/curly-haired-man-with-brown-blouse-posing 2.png'
import Img3 from '../Asset/MensClothes/portrait-man-wearing-white-clothes 3.png'
import Img4 from '../Asset/MensClothes/man-with-camera-yellow-scene 4.png'
import Img5 from '../Asset/MensClothes/close-up-portrait-man-shirt-mockup 5.png'

export default function Menclothes() {
    const MenClothesInfo = [
        {
            Img: Img1,
            brand: 'Cotton T Shirt',
            model: 'Full Sleeve Zipper',
            price: 199,
            size: ['S', 'M', 'L', 'XL']
        },
        {
            Img: Img2,
            brand: 'Cotton T Shirt',
            model: 'Full Sleeve Zipper',
            price: 199,
            size: ['S', 'M', 'L', 'XL']
        },
        {
            Img: Img3,
            brand: 'Cotton T Shirt',
            model: 'Full Sleeve Zipper',
            price: 199,
            size: ['S', 'M', 'L', 'XL']
        },
        {
            Img: Img4,
            brand: 'Cotton T Shirt',
            model: 'Full Sleeve Zipper',
            price: 199,
            size: ['S', 'M', 'L', 'XL']
        },
        {
            Img: Img5,
            brand: 'Cotton T Shirt',
            model: 'Full Sleeve Zipper',
            price: 199,
            size: ['S', 'M', 'L', 'XL']
        }
    ]
  return (
    <div className='MenclothesContainer'>
        <h1 className='MensClothesHead'>Men's Clothes</h1>
        {/* <div className='MensParentContainer'> */}
            <div className='MenclothesContentContainer'>
                {MenClothesInfo.map((item, index) => (
                    <div key={index} className='MensContainer'>
                        <Image src={item.Img} alt={item.model}/>
                        <div className='MensContainerbrpric'>
                            <h5>{item.brand}</h5>
                            <h4>${item.price}</h4>
                        </div>
                        <div className='MensContainermodsize'>
                            <h4>{item.model}</h4>
                            <div className='MensclothesSize'>
                                <h5 key={index}>{item.size}</h5>
                                {/* <h5>S</h5> */}
                                {/* <h5>M</h5> */}
                                {/* <h5>L</h5> */}
                                {/* <h5>XL</h5> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        {/* </div> */}
    </div>
  )
}
