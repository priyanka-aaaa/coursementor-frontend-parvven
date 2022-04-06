import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import logo from '../img/logo.png';
import axios from 'axios';
import Footer from './Home/Footer'
import Header from './Home/Header'
import LoaderFrontend from './Home/LoaderFrontend';
import SweetAlert from 'react-bootstrap-sweetalert';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function StudentloginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mounted, setMounted] = useState();
    const [redirectToReferrer, setredirectToReferrer] = useState(false);
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState();
    const [loader, setmyloader] = useState("false");
    const [wrongPassword, setwrongPassword] = useState("");
    const [wrongUsername, setwrongUsername] = useState("")
    const [resetEmail, setresetEmail] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [showModal, setshowModal] = useState(false);
    const [EmailExistError, setEmailExistError] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('studentId')) {
            setredirectToReferrer(true)
        }
    }, [])
    function open() {
        setshowModal(true)
    }
    function close() {
        setshowModal(false)
    }
    function handleSubmit(event) {
        setemailError("");
        setpasswordError("");
        setwrongUsername("")
        setwrongPassword("")
        setEmailExistError("")
        event.preventDefault();
        if (email === "") {
            setemailError("Please enter email");
        }
        if (password === "") {
            setPassword("Please enter password");
        }
        else {
            setmyloader("true")

            const obj = {
                email: email,
                password: password
            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'student/login', obj)
                .then(result => {
                    setmyloader("false")

                    let responseJson = result;

                    if (responseJson.data.success === true) {
                        localStorage.setItem('studentId', responseJson.data.student._id);
                        localStorage.setItem('studentToken', responseJson.data.token);
                        localStorage.setItem('studentName', responseJson.data.student.name);
                        localStorage.setItem('studentEmail', responseJson.data.student.email);
                        setredirectToReferrer(true)

                    }
                    else {
                        if (responseJson.data.message === "Password not matched") {
                            setwrongPassword(" Please enter a correct password")

                        }
                        else {

                            setwrongUsername("Please enter a correct email")
                        }

                    }
                }
                )
                .catch(error => {
                });
        }
    }

    if (redirectToReferrer === true || localStorage.getItem('studentId')) {
        return (<Redirect to={'/student/dashboard'} />)
    }
    function onChangeresetEmail(e) {
        setresetEmail(e)
    }
    function handleforgotPasswordSubmit(event) {
        event.preventDefault();
        const obj1 = new FormData();
        obj1.append("email", resetEmail);
        const url4 = process.env.REACT_APP_SERVER_URL + 'student/forgotPassword';
        fetch(url4, {
            method: 'POST',
            body: obj1
        })
            .then(response => response.json())
            .then(data => {

                if (data.success === true) {
                    setshowSweetAlert("1")
                    setshowModal(false)
                }
                if (data.success === false) {
                    setEmailExistError(data.messages)
                }
            })
    }
    return (
        <div className="form-centerblock">
            {loader === "true" ?
                <LoaderFrontend />
                : null}
            {showSweetAlert === "1" ?

                <SweetAlert
                    success
                    title="Send Link For Reset Password!"
                    onConfirm={(value) => {
                        setshowSweetAlert("0")
                    }}
                >
                    A link is send on your mail for reset password.
                </SweetAlert>
                : null
            }

            <h2>Students Login</h2>

            <div className="from-start">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Email </label>
                        <input type="email" className="form-control" id="email"
                            placeholder="Enter email" name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div style={{ color: "red" }}> {wrongUsername}</div>
                    </div>
                    <span style={{ color: "red" }}>{emailError}</span>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control " id="uname"
                            placeholder="Password" name="name"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div style={{ color: "red" }}> {wrongPassword}</div>
                    </div>
                    <span style={{ color: "red" }}> {passwordError}</span>
                    <button type="submit" className="btn btn-website">Login</button>
                </form>

                <div className="footer-login">
                <a onClick={() => open()} >     Forgot your Password?</a>

                <p>Don't have an account? Click here to
                    <Link to={'/Studentregister'} className="" href="#">
                        Register</Link></p>
                        </div>


            </div>
            <Modal className="modal-container"
                show={showModal}
                onHide={() => close()}

                animation={true}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>


                <div className="modal-body">
                    <form onSubmit={handleforgotPasswordSubmit}>

                        <div className="mb-3 mt-3">
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                                value={resetEmail}
                                onChange={(e) => onChangeresetEmail(e.target.value)}
                                required
                            />

                            <div style={{ color: "red" }}> {EmailExistError}</div>

                        </div>


                        <button type="submit" className="btn btn-primary" >Send Password Reset Link</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}