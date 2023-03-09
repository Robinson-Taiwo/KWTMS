import React, { useEffect, useState } from 'react'
import ima from "../assets/ima.jpg"
import nav from "../assets/nav.svg"

import Onboarding from './Onboarding';
import RideReg from "./RideReg"
import UnitReg from "./UnitReg"
import "./Registration.css"
import { Link } from 'react-router-dom';


const Registration = () => {

    // const [view, setView] = useState("ONBOARDING");

    const [view, setView] = useState(() => {
        const storedView = localStorage.getItem('view');
        return storedView ? storedView : 'ONBOARDING';
    });

    useEffect(() => {
        localStorage.setItem('view', view);
    }, [view]);


    const CurrentView = VIEWS[view];

    return (
        <div className='registration-comp'>
            <img src={ima} alt="" className="image2" />

            <div className="form-dept">
                {/* 
                <p onClick={() => setView("ONBOARDING")} className="back">
                    <img src={nav} alt="" className="nav" />
                    back
                    
                </p> */}

                {
                    view === "ONBOARDING" ? (
                        <Link to="/" className="back">
                            <img src={nav} alt="" className="nav" />
                            back

                        </Link>) : (
                        <p onClick={() => setView("ONBOARDING")} className="back">
                            <img src={nav} alt="" className="nav" />
                            back

                        </p>)
                }

                <div className="current-view">
                    <CurrentView setView={setView} />

                </div>



            </div>


        </div>
    )
}

const VIEWS = {
    ONBOARDING: Onboarding,
    RIDER_REG: RideReg,
    UNIT_REG: UnitReg
}

export default Registration