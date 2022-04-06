import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Home/Footer'
import Header from './Home/Header'

import logo from '../img/logo.png';

import axios from 'axios';

import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import SweetAlert from 'react-bootstrap-sweetalert';
import LoaderRegister from './Home/LoaderRegister';

export default function AgentRegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [loader, setmyloader] = useState("false");

    function handleSubmit(event) {
        setnameError("");
        setemailError("");
        setphoneError("");
        event.preventDefault();
        if (name === "") {
            setnameError("Please enter name");
        }
        if (email === "") {
            setemailError("Please enter email");
        }
        if (phone === "") {
            setphoneError("Please enter phone number");
        }
        if (isValidPhoneNumber(phone) === false) {
            setphoneError("Please enter correct phone number");
        }
        else {
            setmyloader("true")

            const obj = {
                name: name,
                email: email,
                phone: phone

            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'agent/register', obj)
                .then(function (res) {
                    setmyloader("false")

                    if (res.data.success === true) {
                        setshowSweetAlert("1")

                        setName("");
                        setEmail("");
                        setPhone("");

                    }
                    else if (res.data.message === "agent already exist") {
                        setemailError("Email already exist");
                    }
                    else {

                    }
                })
                .catch(error => {

                });
        }

    }
    return (
        <div>
              {loader === "true" ?
    <LoaderRegister />
    : null}
            {showSweetAlert === "1" ?

                <SweetAlert
                    success
                    title="Success!"
                    onConfirm={(value) => {
                        setshowSweetAlert("0")
                    }}
                >
                   You are registered successfully. Please check your email for password.
                </SweetAlert>
                : null
            }
          <div className="form-centerblock">
                                <h2>Recruitment Partners</h2>

                                <div className="from-start">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Name</label>
                                            <input required type="text" className="form-control " id="uname"
                                                placeholder="Full Name" name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}> {nameError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Email</label>
                                            <input required type="email" className="form-control " id="email"
                                                placeholder="Enter email" name="email"

                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                        </div>
                                        <span style={{ color: "red" }}>{emailError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Phone</label>

                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                required
                                                value={phone}
                                                onChange={setPhone} />

                                            <span style={{ color: "red" }}> {phoneError}</span>
                                        </div>
                                        <button type="submit" className="btn btn-website">Register</button>
                                    </form>
                                    <p> Already have an account? Click here to
                                        <Link to={'/AgentLogin'} className="" >

                                            Login</Link></p>

                                </div>

                            </div>

        </div>
    );
}