import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header-container'>
       <img width={'200'} onClick={'/'} src="https://premier.uz/files/global/partners/goodzonelogo%20(1).png" alt="" /> 
        <Link to={'/asosiy'} className='link1'>Do'konlar</Link>      
       <span style={{visibility: "hidden"}}> .</span>
       
    </div>
  )
}

export default Header