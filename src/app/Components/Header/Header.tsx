import React from 'react'
import "./Header.css"
import Image from 'next/image'

import Logo from '../Asset/Header/Logo.png'
import InputSearchLogo from '../Asset/Header/SearchLogo.png'
import SinginLogo from '../Asset/Header/SingIn.png'
import CartLogo from '../Asset/Header/CartLogo.png'
export default function Header() {
  return (
    <header>
        <div className='HeaderLogoContainer'>
            <Image src={Logo} alt="Logo"/>
        </div>
        <div className='HeaderMiddleContainer'>
            <nav>
                <h4>Men</h4>
                <h4>Women</h4>
                <h4>Sale</h4>
                <h4>New</h4>
            </nav>
            <div className='HeaderMiddleContainerInput'>
                <Image src={InputSearchLogo} alt='InputSearchLogo'/>
                <input placeholder='Enter Keywords...' type='Text'/>
            </div>
        </div>
        <div className='HeaderLeftContainer'>
            <div>
                <Image src={SinginLogo} alt='SinginLogo'/>
                <h4>Sing in</h4>
            </div>
            <div>
                <Image src={CartLogo} alt='CartLogo'/>
                <h4 className='HeaderCartpart'>Cart</h4>
            </div>
        </div>
    </header>
  )
}
