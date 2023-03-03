import React, { useState } from 'react'
import "./UnitReg.css"

const UnitReg = () => {

    const [unitName, setUnitName] = useState("")
    const [unitNumber, setUnitNumber] = useState("")
    const [address, setAddress] = useState("")



    // HANDLING THE SUBMIT FUNCTION FOR THE BUTTON

    const handleUnitSubmit = (event) => {
        event.preventDefault();
        const form = event.target.form;
        const unitNameValue = unitName.trim();
        const unitNumberValue = unitNumber.trim();
        const addressValue = address.trim();

        if (unitNameValue && unitNumberValue && addressValue) {
            console.log(`UnitName: ${unitNameValue}`);
            console.log(`UnitNumber: ${unitNumberValue}`);
            console.log(`Address: ${addressValue}`);



            setUnitName("");
            setUnitNumber("");
            setAddress("");
            form.reset(); // reset the form after submission
        } else {
            console.log("Please fill in all required fields");
        }

        // Here you can store the data in a state management library like Redux, or send it to an API endpoint
    };


    const handleAddress = (e) => {
        e.preventDefault();
        setAddress(e.target.value)
    }

    const handleUnitName = (e) => {
        e.preventDefault();
        setUnitName(e.target.value)
    }

    const handleUnitNumber = (e) => {
        e.preventDefault();
        setUnitNumber(e.target.value)
    }

    return (
        <div className='unit-reg' >

            <div className="unit-form">
                <div className="unit-top">
                    <h1 className="unit-head">Register your Unit</h1>
                    <p className="unit-desc">
                        Please make sure to input correct informations
                    </p>
                </div>

                <div className="unit-line"></div>

                <form className="unit-reg-form">

                    <div className="unit-cont">
                        <p className="unit-label"> Unit name*</p>
                        <input value={unitName} required onChange={handleUnitName} placeholder='E.g Jane Doe' type="text" className="unit-input" />
                    </div>

                    <div className="unit-cont">
                        <p className="unit-label">Unit number*</p>
                        <input value={unitNumber} required onChange={handleUnitNumber} placeholder='E.g 080XXXXXXXX' type="tel" className="unit-input" />
                    </div>

                    <div className="unit-cont">
                        <p className="unit-label">Unit Address*</p>
                        <input value={address} required onChange={handleAddress} placeholder='E.g 723974008EG' type="num" className="unit-input" />
                    </div>





                    <button disabled={!address || !unitNumber || !unitName} onClick={handleUnitSubmit} className="unit-button">
                        submit Data
                    </button>

                </form>


            </div>



        </div>
    )
}

export default UnitReg
