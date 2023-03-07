import React from 'react'
import loc from "../assets/loc.svg"
import acc from "../assets/acc.svg"
import "./Onboarding.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init()


const Onboarding = ({ setView }) => {
    return (
        <div className='onboard-screen'>

            <div className="form-section">

                <h1 data-aos="zoom-in-up" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out" className="form-header">
                    Welcome to KWTMS
                </h1>
                <div data-aos="zoom-in-up" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out" className="form-paragraph">
                    Tell us what are you Registering:
                </div>




                <button data-aos="fade-down" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out" className='buts' onClick={() => setView("RIDER_REG")}>
                    <div className="links">
                        <img src={loc} alt="" className="icons" />

                        <div className="onboard-second">
                            <h1 className='big'> Ride/Rider</h1>

                            <p className="onboard-desc">Register yourself and your ride</p>

                        </div>
                    </div>


                </button>
                <button data-aos="fade-up" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out" className='buts' onClick={() => setView("UNIT_REG")}>
                    <div className="links">
                        <img src={acc} alt="" className="icons" />

                        <div className="onboard-second">
                            <h1 className='big'> Transport Unit</h1>

                            <p className="onboard-desc">Register your unit here</p>

                        </div>
                    </div>

                </button>
            </div>

        </div>
    )
}

export default Onboarding














