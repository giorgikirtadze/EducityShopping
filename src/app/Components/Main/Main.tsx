import React from 'react'
import './Main.css'
import Image from 'next/image'

import MainPageGirlImg from '../Asset/main/mainImgGirlImg.png'
export default function Main() {
  return (
    <div className='MainPage'>
        <div className='MainPageInfoContainer'>
            <h1>LET’S<br/>EXPLORE UNIQUE CLOTHES.</h1>
            <p>Live for Influential and Innovative fashion!</p>
            <button>SHOP NOW</button>
        </div>
        <div className='MainPageImgContainer'>
            <Image src={MainPageGirlImg} alt='MainPageGirlImg'/>
        </div>
    </div>
  )
}
