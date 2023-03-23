import React from 'react'
import '../css/common.css'
import { Outlet } from 'react-router-dom'
import SideBarLeft from './SideBarLeft'

const Layout = () => {
    return (
        <div className='container'>
            <div className='flexbox'>
                <div className='sidebar-l'>
                    <SideBarLeft />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout