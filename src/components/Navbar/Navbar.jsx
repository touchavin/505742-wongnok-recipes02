import React from 'react'
import './์Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navber'>
        <img src={assets.logo} alt=''/>
        <ul className="navber-menu">
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
        </div>
        <div className="dot"></div>
         <button>sign in</button>
        </div>    
       
    </div>
  )
}

export default Navbar