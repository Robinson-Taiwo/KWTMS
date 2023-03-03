import React, { useState } from 'react'
import image from "../assets/image.png"
import loc from "../assets/loc.svg"
import acc from "../assets/acc.svg"
import icon1 from "../assets/icon1.svg"

import "./Onboarding.css"
import RideReg from './RideReg'
import UnitReg from './UnitReg'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setRider } from "../Components/store/registrationReducer";

import Registration from './Registration'

const Onboarding = () => {

    // const [registrationType, setRegistrationType] = useState("")
    // const [registerUnit, setRegisterUnit] = useState(false)
    // const [registerRide, setRegisterRide] = useState(false)
    // const [onboarding, setOnboarding] = useState(true)
    // const handleRegistrationType = (e) => {
    //     setRegistrationType(e.target.value)
    // }

    const [isRegisteringRide, setIsRegisteringRide] = useState(true)
    const [isRegisteringRider, setIsRegisteringRider] = useState(true)

    const isRider = useSelector((state) => state.registration.rider);

    // const SetRider = () => {
    //     setIsRegisteringRide(false)
    // }

    // const SetRide = () => {
    //     setIsRegisteringRide(true)
    // }


    const dispatch = useDispatch();
    function handleRiderClick() {
        dispatch(setRider(false));
    }


    return (
        <div className='all'>


            <img src={image} alt="" className="picture" />

            <div className="form-section">
                <h1 className="form-header">
                    Welcome to KWTMS
                </h1>
                <div className="form-paragraph">
                    Tell us what are you Registering:
                </div>

                <div className="buts">
                    <Link className='links' onClick={isRegisteringRider} to="/Registration/ride">
                        <img src={loc} alt="" className="icons" />

                        <div className="onboard-second">
                            <h1 className='big'> Ride/Rider</h1>

                            <p className="onboard-desc">Register yourself and your ride at a goal</p>

                        </div>
                    </Link>
                </div>


                <div onClick={handleRiderClick} className="buts">
                    <Link className='links' to="/Registration/unit">

                        <img src={acc} alt="" className="icons" />

                        <div className="onboard-second">
                            <h1 className='big'> Transport Unit</h1>

                            <p className="onboard-desc">Register your unit</p>

                        </div></Link>

                </div>



                {/* <div className="hidden">
                    <Registration data={isRegisteringRide} data2={isRegisteringRider} />
                </div> */}
            </div>




        </div>
    )
}

export default Onboarding