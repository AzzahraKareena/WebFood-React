import React from 'react';
import '../App.css';
import Navbar from "./Navbar";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <Navbar />
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt = "" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt = ""/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part of A Balanced Diet 
            </h1>
            <p className='primary-text'>
            Selamat datang di GoHealthy! Kami adalah platform yang didedikasikan untuk menyediakan solusi makanan sehat yang mudah diakses dan disesuaikan sesuai kebutuhan Anda. Di GoHealthy, kami menggabungkan kelezatan dan kesehatan dalam setiap hidangan.<br></br>
            Kami percaya bahwa makanan sehat dapat enak dan mudah dijangkau. Dengan beragam menu yang dapat Anda sesuaikan, kami memberikan Anda kebebasan untuk menikmati hidangan lezat yang cocok dengan preferensi diet Anda.
            </p>
            <p className='primary-text'>
            Bersama GoHealthy, Anda dapat menjalani gaya hidup yang lebih baik, satu gigitan sekaligus.<br></br>
            Jelajahi menu kami, pesan makanan sehat favorit Anda, dan nikmati kemudahan pengiriman langsung ke pintu Anda. Bergabunglah dengan kami dalam perjalanan menuju hidup lebih sehat dengan GoHealthy!
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill/> Watch Video </button>
            </div>
        </div>
    </div>
  )
}

export default About