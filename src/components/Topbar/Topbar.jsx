import React, { useState } from 'react'
import './topbar.css'
import user from '../../assets/user.png'
import logout from '../../assets/logout.png'

const Topbar = () => {
    
  return (
    <div className='topbar'>
        <img src="https://cdn.pixabay.com/photo/2017/12/17/16/08/customer-experience-3024488_960_720.jpg" alt="" />
        <img src={logout} alt="userlogout" />
    </div>
  )
}

export default Topbar