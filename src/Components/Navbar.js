import React, { useState } from 'react';
import Logo from "../Assets/LOGO.png";
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOption = [
        {
            text: "Home",
            icon: <HomeIcon />,
            link: "/"
        },
        {
            text: "About",
            icon: <InfoIcon />,
            link : "/About"
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon />
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />
        },
    ];

    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt="" style={{ width: '150px', height: 'auto' }} />
            </div>
            <div className='navbar-links-container'>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Testimonials</a>
                <a href=''>Contact</a>
                <a href=''>
                    <BsCart2 className='navbar-cart-icon' />
                </a>
                {/* Gunakan Link untuk pindah ke halaman login */}
                <Link to='/Login' className='nav-link'>
                    <button className='primary-button'>
                        Sign In
                    </button>
                </Link>
            </div>
            <div className='navbar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
        </nav>
    );
}

export default Navbar;
