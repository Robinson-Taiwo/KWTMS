import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'

const AppRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>

        </div>
    )
}

export default AppRoutes