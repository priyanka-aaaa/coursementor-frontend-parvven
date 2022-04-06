import React, { useState, useEffect } from "react";
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

export default function AdminLogin() {
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
    useEffect(() => {
        if (localStorage.getItem('adminId')) {
            setredirectToReferrer(true)
        }
    }, [])
    function handleSubmit(event) {
        setemailError("");
        setpasswordError("");
        setwrongUsername("")
        setwrongPassword("")
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
            axios.post(process.env.REACT_APP_SERVER_URL + 'admin/login', obj)
                .then(result => {
                    setmyloader("false")
                    let responseJson = result;
                    if (responseJson.data.success === true) {
                        localStorage.setItem('adminId', responseJson.data.admin._id);
                        localStorage.setItem('adminToken', responseJson.data.token);
                        localStorage.setItem('adminName', responseJson.data.admin.name);
                        localStorage.setItem('adminEmail', responseJson.data.admin.email);
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
    if (redirectToReferrer === true || localStorage.getItem('adminId')) {
        return (<Redirect to={'/admin/dashboard'} />)
    }
    return (
        <div>
            {/* //gf */}
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
            <div className="main-content">
                <div className="full-width-header">
                    <Header />
                    <section className="Form-block" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={images["AdminLogin.svg"]} alt="login" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-centerblock">
                                        <h2>Admin Login</h2>
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    );
}