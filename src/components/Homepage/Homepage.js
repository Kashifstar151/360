import React from 'react'
import image from "./images/1.jpg"
import "./_homepage.scss"

const Homepage = () => {
    return (
        <div className='main-home'>
            <div className="header"> 
                <div className='header__content1'>
                    <button className='btn1 bt2'>Shop Now</button>
                    <button className='btn1'>Learn More</button>
                </div>
                <div className='header__content'>
                    <section className='section'>
                        <div className='section__left'></div>
                        <div className='section__right'></div>
                    </section>
                </div>

            </div>
            <div className='banner container'>
                <div className='banner_left'>
                    <h1 className='banner_heading'>About NATURE 360</h1>
                    <h3 className='banner-brand-text'>Brand Story</h3>
                    <p className='banner-desc'>The broad and fertile land nurtures a magnificent tree. This tree inspired the founders to open the door to their vision of good health. We wish all the best of health and hope to bring across the concept of good health to the world. May the user lead a healthy and active lifestyle!</p>
                    <button className='banner-btn'>LEARN MORE</button>
                </div>
                <div className='banner_right'>

                    <div className='banner-img'>
                        <img className='img' src="https://nature360.com.sg/wp-content/uploads/2021/06/logo.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage