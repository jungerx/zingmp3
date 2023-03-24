import React, { Component } from 'react';
import SideBarLeft from './SideBarLeft';

class Home extends Component {
    render() {
        return (
            <div className='content'>
                <header>
                    <div className='search'>
                        <input type="text" name="" value="" />
                    </div>
                    <a href="#"><i class="fa-sharp fa-solid fa-circle-down"></i><span>Tải bản Windows</span></a>
                    <a href="#"><i class="fa-sharp fa-regular fa-gem"></i></a>
                    <div className='edit'>
                        <i class="fa-sharp fa-solid fa-gear"></i>
                        <ul className='dropdown'>
                            <li>Trình phát nhạc</li>
                            <li>Giao diện</li>
                            <li>Giới thiệu</li>
                            <li>Liên hệ</li>
                            <li>Quảng cáo</li>
                            <li>Thỏa thuận sử dụng</li>
                            <li>Chính sách bảo mật</li>
                        </ul>
                    </div>
                    <button >Log in</button>
                </header>
            </div>
        );
    }
}

export default Home;