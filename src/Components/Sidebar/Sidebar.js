import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import './Sidebar.css'
import { UilEstate } from "@iconscout/react-unicons"

import { SidebarData } from '../../Data/Data';
import { AiOutlineExclamationCircle } from "react-icons/ai";


const Sidebar = () => {

  const [selected, setSelected] = useState(0)

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
            <div className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >

              <item.icon />
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}

        <div className='menuItem'>
          <AiOutlineExclamationCircle />
        </div>
      </div>

    </div>


  )
}

export default Sidebar