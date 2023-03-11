import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import ayo from "../assets/ayo.jpg"
// import black from "../assets/black.jpg"
import josh from "../assets/josh.jpg"
import data from "../Components/data"
import logo from "../assets/logo.svg"
import keke from "../assets/keke.svg"
import bike from "../assets/okada.svg"
import taxi from "../assets/taxi.svg"
import alarm from "../assets/alarm.svg"
import "./Home.css"



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Home = () => {
    return (
        <div className='home'>
            <nav className='navbar'>
                <div className="nav1">
                    <img src={logo} alt="" className="logo" />
                    <h2 className="logo-text"> KWTMS</h2>
                </div>

                <a href='#contact' className="contact">
                    Contact us
                </a>
            </nav>
            <Parallax strength={200} bgImage={ayo}>
                <div className="first-sect">

                    <div className="section1">
                        <div className="big-header">
                            Track Every Transport Worker in  <strong>"Kwara State"</strong>  for Increased Security and Revenue Generation
                        </div>
                        <p className="main-texts">
                            Record every transport worker in the state to a safe database for future use, security purposes, and revenue generation for the government.
                        </p>

                        <Link to="/registration" className='glow-button' >Register now</Link>
                    </div>

                </div>
            </Parallax>

            <Parallax strength={300} blur={10} >
                <div className="second-sect">

                    <div className="sect2-h">
                        Let's Introduce You To The System:
                    </div>

                    <div className="second-sectT">
                        "Welcome to a state-of-the-art platform designed to help record the details of every transport worker in Kwara State and save it to a safe database for future use, security purposes, and revenue generation for the government. Our platform is built to streamline transport management, reduce fraud, and increase safety and security on our roads."

                    </div>



                </div>
            </Parallax>

            <div className="third-sect">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="card">
                            <h1 className="num">{item.num}</h1>
                            <p className="card-p">{item.text}</p>
                        </div>
                    )
                })}
            </div>

            <div className="fourth-sect">

                <img src={alarm} alt="" className="alarm" />

                <div className="fourth-sect1">
                    <h1 className='report'>Report vehicles</h1>
                    <p className="report-text">
                        where you can report details of transport workers in your state. This is a vital tool in maintaining safety on our roads, improving revenue generation for the government, and ensuring the safety of both drivers and passengers.

                    </p>
                    <Link to="/report" className='glow-button1'>
                        Report Vehicle
                    </Link>
                </div>



            </div>

            <section className="fifth-sect">

                <div className="fifth-sect2">

                    <div className="white">
                        <div className="kekel">
                            <img src={keke} alt="" className="keke" />
                            <h1 className='shw' >Tricycle/Napep</h1>
                            <p className='spw' >Registration And Confirmation Of Tricycle Riders</p>

                        </div>

                        <div className="bike">
                            <img src={bike} alt="" className="okada" />
                            <h1 className='shw' >BIKE RIDERS/LOGISTICS</h1>
                            <p className='spw' >Registration And Confirmation Of Bike/ Logistics Riders</p>
                        </div>
                    </div>

                </div>
                <div className="fifth-sect3">
                    <img src={taxi} alt="" className="taxi" />
                    <h1 className='sh' >Taxi</h1>
                    <p className='sp' >Registration And Confirmation of Taxi Drivers</p>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-top">
                    <img src={logo} alt="" className="footer-logo" />

                    <div className="footer-top-right">
                        <Link className='footer-link' to="/registration">Register</Link>
                        <Link className='footer-link' to="/report">Report</Link>

                    </div>

                </div>
                <div className="middle">
                    <div className="mddle-left">
                        <h1 className="middle-left-head">
                            Suscribe to our newsletter to get latest update
                        </h1>
                    </div>

                    <div className="middle-right">
                        <input type="text" placeholder='input your email' className="email" />
                        <button className="drop">
                            Submit
                        </button>
                    </div>
                </div>

                <div id='contact' className="footer-bottom">

                    <h1 className="contact-us">
                        Contact us here:
                    </h1>
                </div>

            </footer>




        </div>
    )
}

export default Home