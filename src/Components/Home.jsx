import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import ayo from "../assets/ayo.jpg"
import josh from "../assets/josh.jpg"
import data from "../Components/data"
import logo from "../assets/logo.svg"
import "./Home.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
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
                <img src={logo} alt="" className="logo" />
                <h2 className="logo-text"> KWTMS</h2>
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
            {/* 
            <Parallax bgImage={josh} strength={300}>
                <div className="fourth-sect">

                </div>
            </Parallax> */}




        </div>
    )
}

export default Home