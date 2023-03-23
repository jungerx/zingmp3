import React from 'react'
import '../css/sidebarL.css';
import { NavLink } from 'react-router-dom'
const SideBarLeft = () => {
    return (
        <div className='sidebar-left'>
            <figure>
                <NavLink to="/"><img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="" /></NavLink>
            </figure>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/My">Cá nhân</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Khám phá</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ZingChart">Bảng xếp hạng</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Radio">Radio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Follow">Theo dõi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/My">Nhạc mới</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Thể loại</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ZingChart">Top 100</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Radio">MV</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBarLeft