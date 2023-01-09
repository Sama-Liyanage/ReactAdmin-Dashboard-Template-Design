import React from 'react'
import logo from "../../assets/images/logo.png"
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {/* logo */}
      <div className='logo'>
        <img style={{width:'50px'}} src={logo} alt=''/>
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

    </div>
  )
}

export default Sidebar