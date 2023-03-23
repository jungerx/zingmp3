import React from 'react'
import { NavLink } from 'react-router-dom'
import My from './My'
const SideBarLeft = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/My">Cá nhân</NavLink>
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
                </ul>
            </nav>
        </div>
    )
}

export default SideBarLeft