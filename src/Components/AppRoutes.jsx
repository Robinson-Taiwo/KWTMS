import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Onboarding from './Onboarding'
import Registration from './Registration'

const AppRoutes = () => {

    const isRider = useSelector((state) => state.registration.rider);

    return (
        <div>

            <Routes>
                <Route path="/" element={<Onboarding />} />
                {!isRider && <Route path="/Registration/unit" element={<Registration />} />
                }
                {isRider && (<Route path="/Registration/ride" element={<Registration />} />)
                }

            </Routes>

        </div>
    )
}

export default AppRoutes