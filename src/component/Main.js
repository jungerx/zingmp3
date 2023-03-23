import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout';
import My from './My';
import ZingChart from './ZingChart';
import Home from './Home';
import Radio from './Radio'
import Follow from './Follow'

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='my' element={<My />} />
                    <Route path='zingchart' element={<ZingChart />} />
                    <Route path='radio' element={<Radio />} />
                    <Route path='follow' element={<Follow />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Main