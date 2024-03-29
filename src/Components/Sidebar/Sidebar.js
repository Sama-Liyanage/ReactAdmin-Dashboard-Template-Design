import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { UilBars } from "@iconscout/react-unicons";
import './Sidebar.css'
import { SidebarData } from '../../Data/Data';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { motion } from "framer-motion";



const Sidebar = () => {

  const [selected, setSelected] = useState(0)
  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)

  return (
    <>
      <>
        <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
          <UilBars />
        </div>
        <motion.div className='sidebar'
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ''}
        >
          {/* logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>
              Sh<span>o</span>ps
            </span>
          </div>

          <div className="menu">
            {SidebarData.map((item, index) => {
              return (
                <div
                  className={selected === index ? "menuItem active" : "menuItem"}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              );
            })}
            {/* signoutIcon */}
            <div className="menuItem">
              <UilSignOutAlt />
            </div>
          </div>
        </motion.div>
      </>
    </>

  )
}

export default Sidebar