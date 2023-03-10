import React from 'react'
import logo from "../../assets/images/logo.png"
import './Sidebar.css'
import { UilEstate } from "@iconscout/react-unicons"

import { SidebarData } from '../../Data/Data'
const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {/* logo */}
      <div className='logo'>
        <img style={{ width: '50px' }} src={logo} alt='' />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className='menu'>
        {SidebarData.map((item, index) => {
          return (
            <div className='menuItem'>
              <item.icon />
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}
      </div>

    </div>


  )
}

export default Sidebar