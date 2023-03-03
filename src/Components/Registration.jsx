import React from 'react'
import { useSelector } from 'react-redux';
import image from "../assets/image.png"
import back from "../assets/back.svg"
import RideReg from './RideReg';
import UnitReg from './UnitReg';
import "./Registration.css"
import { Link } from 'react-router-dom';

const Registration = ({ }) => {

    const isRider = useSelector((state) => state.registration.rider);
    return (
        <div className='registration-comp'>

            <img src={image} alt="" className="image2" />

            <section className="form-dept">

                <Link className='back' to="/" >  <img src={back} alt="" /> Back</Link>

                {/* render the appropriate form based on the value of isRider */}

                <div className="forms">
                    {isRider ? <RideReg /> : <UnitReg />}

                </div>

            </section>

        </div>
    )
}

export default Registration
