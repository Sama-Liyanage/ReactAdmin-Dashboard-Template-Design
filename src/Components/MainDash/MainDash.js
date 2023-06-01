import React from 'react'
import Cards from '../../Components/Cards/Cards'
import './MainDash.css'
import Table from '../Table/Table'

const MainDash = () => {
    return (
        <div className='MainDash'>
            <h1>DashBoard</h1>
            <Cards />
            <Table/>
        </div>
    )
}

export default MainDash