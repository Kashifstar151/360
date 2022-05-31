import React from 'react'
import search from "../Sass/image/search.png"
import cart from "../Sass/image/shopping-cart.png"
import nature from "../Sass/image/nature.png"
import user from "../Sass/image/user.png"
import instagram from "../Sass/image/instagram.png"
import fb from "../Sass/image/fb.png"
// import { useTranslation } from 'react-i18next'
// import Locales from "../LocaleContext"

// const { t } =useTranslation;
const Navbar = () => {
    
    // function languageChange (l){
    //     if(Locales !==1){
    //         i18n.changeLanguage(l)
    //     }
    //     localStorage.setItem('lang',l)
    // }

    return (
        <div className="navbar">
            <div className='navbar__container1'>
                <div className='container1__left'>
                <img src={instagram} alt="" className='img1' />
                <img src={fb} alt="" /></div>
                
                <div className='container1__right'>
                    <p>Language</p><span className='span'></span>
                    <select className='dropdown'>
                        <option value="" onClick="">English</option>
                        <option value="" onClick="">Chinese</option>
                    </select>
                </div>
            </div>
            <div className="navbar__container">
                <div className="navbar__left"><img src={nature} /></div>

                <div className='navbar__center'>
                    <ul className="navbar__content">
                        <li><a href="">Shop</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Partnership</a></li>
                        <li><a href="">Media</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='navbar__right'>
                    <img src={search} className="img" alt='' />
                    <img src={cart} className="img" alt='' />
                    <img src={user} className="img" alt='' /></div>
            </div>

        </div>
    )
}

export default Navbar