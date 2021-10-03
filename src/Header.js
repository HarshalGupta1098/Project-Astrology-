import React from 'react'
import menu from './assets/hamburger.png'
import logo from './assets/logo.png'
import profile from './assets/profile.png'

function Header() {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <img 
            style={{width:"30px", height:"30px"}}
            src={menu} alt="menu"
            />
            <img style={{width:"60px", height:"55px"}}src={logo} alt="logo"/>
            <img style={{width:"30px", height:"30px"}}src={profile} alt="profile"/>
        </div>
    )
}

export default Header
