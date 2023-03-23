import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'

const Layout = () => {
    return (
        <div className='container'>
            <div className='sidebar-l'>
                <SideBarLeft />
            </div>
            <Outlet />
            <div className='sidebar-r'>
                <SideBarRight />
            </div>
        </div>
    )
}

export default Layout