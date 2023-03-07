import React from 'react'
import { useState } from 'react'
import "./RideReg.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init()

const RideReg = () => {


    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [idNumber, setIdNumber] = useState("")
    const [chasesNumber, setChasesNumber] = useState("")
    const [selectedOption, setSelectedOption] = useState("")
    const [selectedRegistration, setSelectedRegistration] = useState("")
    const [selectedOwnership, setSelectedOwnersip] = useState("")
    const [image, setImage] = useState("");


    // handling the submit function for the button
    const handleSubmit = (event) => {
        event.preventDefault();
        // checking for empty input elements
        const form = event.target.form;
        const nameValue = name.trim();
        const numberValue = number.trim();
        const idNumberValue = idNumber.trim();
        const chasesNumberValue = chasesNumber.trim();
        const imageValue = image.trim("")
        // consoling the value only when the input elements are not empty

        if (nameValue && numberValue && idNumberValue && chasesNumberValue) {
            console.log(`Name: ${nameValue}`);
            console.log(`Number: ${numberValue}`);
            console.log(`ID Number: ${idNumberValue}`);
            console.log(`Chases Number: ${chasesNumberValue}`);
            console.log(`IDENTIFICATION TYPE: ${selectedOption}`);
            console.log(`TYPE of ownership: ${selectedOwnership}`);
            console.log(`Type of registration: ${selectedRegistration}`);
            console.log(`selected image: ${imageValue}`);
            setImage("");


            setName("");
            setNumber("");
            setIdNumber("");
            setChasesNumber("");
            setName("")
            form.reset(); // reset the form after submission

        } else {
            console.log("Please fill in all required fields");
        }
        // Here you can store the data in a state management library like Redux, or send it to an API endpoint
    };


    // defining onChange functions for the input elements
    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    const handleId = (e) => {
        e.preventDefault();
        setIdNumber(e.target.value)
    }

    const handleChases = (e) => {
        e.preventDefault();
        setChasesNumber(e.target.value)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleRegistration = (event) => {
        setSelectedRegistration(event.target.value);
    };

    const handleOwnership = (event) => {
        setSelectedOwnersip(event.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className='ride-reg' >



            <div className="ride-form">



                <div data-aos="fade-right" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out" className="ride-top">
                    <h1 className="ride-head">Register Your Ride</h1>
                    <p className="ride-desc">
                        For the purpose of proper data computation, your details are required.
                    </p>

                </div>

                <div className="ride-line"></div>


                {/* form with the inputs element */}
                <form data-aos="fade-left" data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out" className="ride-reg-form">
                    <div className="cont">
                        <p className="label"> Owner's name*</p>
                        <input value={name} required onChange={handleName} placeholder='E.g Jane Doe' type="text" className="input" />
                    </div>

                    <div className="cont">
                        <p className="label">Phone number*</p>
                        <input value={number} required onChange={handleNumber} placeholder='E.g 080XXXXXXXX' type="tel" className="input" />
                    </div>

                    <div className="cont">
                        <p className="label">Identity Number*</p>
                        <input value={idNumber} required onChange={handleId} placeholder='E.g 723974008EG' type="num" className="input" />
                    </div>

                    <div className="cont">
                        <p className="label">Chases number*</p>
                        <input value={chasesNumber} required onChange={handleChases} placeholder='E.g 4JJDU83' type="text" className="input" />
                    </div>

                    <div className="cont">
                        <p className="label">Identification Type*</p>
                        <select className='input' value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Select an option</option>
                            <option value="NIN">NIN</option>
                            <option value="voter's card">VOTERS CARD</option>
                            <option value="DRIVER'S LISENCE">DRIVER LISENCE</option>
                        </select>
                    </div>

                    <div className="cont">
                        <p className="label">Type of Registration*</p>
                        <select className='input' value={selectedRegistration} onChange={handleRegistration}>
                            <option value="">Select an option</option>
                            <option value="bike">Bike</option>
                            <option value="napep">Napep</option>
                            <option value="taxi">Taxi</option>
                        </select>
                    </div>

                    <div className="cont">
                        <p className="label">Type of Ownership*</p>
                        <select className='input' value={selectedOwnership} onChange={handleOwnership}>
                            <option value="">Select an option</option>
                            <option value="direct owner">Direct owner</option>
                            <option value="higher purchase">Higher purchase</option>
                            <option value="agency">Agency</option>
                        </select>
                    </div>



                    <div className="cont">
                        <p className="label">Upload passport*</p>
                        <div>
                            <div className="custom-input">
                                <label htmlFor="image-upload">
                                    {image ? (
                                        <img src={image} alt="Selected file" />
                                    ) : (
                                        <span>Choose file</span>
                                    )}
                                </label>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                    </div>



                    {/* calling the handleSubmit function in the button and checking if the input elements are filled before activating button */}

                    <button disabled={!name || !number || !idNumber || !chasesNumber || !selectedOption || !selectedRegistration || !selectedOwnership || !image} onClick={handleSubmit} className="ride-button">
                        submit Data
                    </button>

                </form>
            </div>






        </div>
    )
}

export default RideReg