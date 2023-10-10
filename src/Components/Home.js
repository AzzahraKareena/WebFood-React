import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/background-oren.png";
import { FiShoppingCart } from "react-icons/fi";
import Image1 from "../Assets/produk1-dashboard.png";
import Image2 from "../Assets/produk2-dashboard.png";
import Image3 from "../Assets/produk3-dashboard.png";


const Home = () => {
    return(
        <div className='home-container'>
            <Navbar />
            <div className="home-banner-container">
                <div className = "home-bannerImage-container">
                    <img src ={BannerBackground} alt="" style={{ marginTop: '50px' }}/>
                </div>
            <div className = "home-text-section">
                <h1 className = "primary-heading">
                Stay healthy and choose your taste  
                </h1>
                <p className="primary-text">
                We make and deliver the most delicious food that is good for your health. 
                Find your favorites now and eat what you like
                </p>
                <button className="secondary-button">
                    Order Now <FiShoppingCart/>
                </button>
                <div className="home-images">
                        <img src={Image1} alt="" style={{ width: '209px', height: '370px' }} />
                        <img src={Image2} alt="" style={{ width: '209px', height: '370px' }} />
                        <img src={Image3} alt="" style={{ width: '209px', height: '370px' }} />
                    </div>
            </div>
        </div>
        </div>
    )
};

export default Home;