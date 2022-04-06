import React, { useState, useEffect } from "react";
import Loader from '../../Home/Loader';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown, faAngleUp
} from '@fortawesome/free-solid-svg-icons';
export default function AddressProfile() {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [country, setcountry] = useState("Select Country");
    const [state, setstate] = useState("Select State");
    const [city, setcity] = useState("Select City");
    const [address, setaddress] = useState();
    const [zipcode, setzipcode] = useState()
    const [Checkmycountry, setCheckmycountry] = useState("0")

    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    const [communication_address, setcommunication_address] = useState("no");
    const [CheckState, setCheckState] = useState("0");
    const [CheckCity, setCheckCity] = useState("0");
    const [stateError, setstateError] = useState("");
    const [cityError, setcityError] = useState("");
    const [countries, setcountries] = useState([{
        country_name: ""
    }]);
    const [states, setstates] = useState([{
        state_name: ""
    }])
    const [cities, setcities] = useState([{
        city_name: ""
    }])
    const [loader, setmyloader] = useState("false");
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        axios.get(process.env.REACT_APP_SERVER_URL + 'student/address', { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentAddress = res.data.studentAddress;
                    if (studentAddress.country !== "") {
                        setCheckmycountry("1")
                    }
                    setcountry(studentAddress.country);
                    setstate(studentAddress.state);
                    setcity(studentAddress.city);
                    setaddress(studentAddress.address);
                    setzipcode(studentAddress.zipcode);
                    setcommunication_address(studentAddress.communication_address);
                }
            })
            .catch(error => {
            });
        axios.get(process.env.REACT_APP_SERVER_URL + 'countries/')
            .then(function (res) {
                if (res.data.success === true) {
                    setcountries(res.data.result);
                }
            })
            .catch(error => {
            });
        axios.get(process.env.REACT_APP_SERVER_URL + 'states/india')
            .then(function (res) {
                if (res.data.success === true) {
                }
            })
            .catch(error => {
            });
    }, [])
    function application_address(event) {
        event.preventDefault();
        setmyloader("true")
        const obj = {
            country: country,
            state: state,
            city: city,
            address: address,
            zipcode: zipcode,
            communication_address: communication_address
        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'student/address', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setmyloader("false")
                if (res.data.success === true) {
                    setsuccessMessage("Address Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    axios.get(process.env.REACT_APP_SERVER_URL + 'student/address', { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            if (res.data.success === true) {
                                var studentAddress = res.data.studentAddress;
                                if (studentAddress.country !== "") {
                                    setCheckmycountry("1")
                                }
                                setcountry(studentAddress.country);
                                setstate(studentAddress.state);
                                setcity(studentAddress.city);
                                setaddress(studentAddress.address);
                                setzipcode(studentAddress.zipcode);
                                setcommunication_address(studentAddress.communication_address);
                            }
                        })
                        .catch(error => {
                        });
                }
            })
            .catch(error => {
            });
    }
    function handlecountry(e) {
        setcountry(e)
        setCheckState("1")
        axios.get(process.env.REACT_APP_SERVER_URL + 'states/' + e + '/')
            .then(function (res) {
                if (res.data.success === true) {
                    setstates(res.data.result);
                }
            })
            .catch(error => {
            });
    }
    function handlestate(e) {
        setstate(e)
        axios.get(process.env.REACT_APP_SERVER_URL + 'cities/' + e + '/')
            .then(function (res) {
                if (res.data.success === true) {
                    setcities(res.data.result);
                }
            })
            .catch(error => {
            });
    }
    function handleClick() {
        if (down === "1") {
            setdown("0");
            setup("1")
        }
        else {
            setdown("1");
            setup("0")
        }
    }
    return (
        <div>
            <div className="card">
                {loader === "true" ?
                    <Loader />
                    : null}
                {submitSuccess === 1 ? <div className="Show_success_message">
                    <strong>Success!</strong> {successMessage}
                </div> : null}

                <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo" onClick={() => handleClick()}>
                    <strong>2</strong>   Address & Contact
                    {down === "0" ?
                        null
                        :
                        <FontAwesomeIcon icon={faAngleDown} style={{
                            position: "absolute",
                            fontWeight: 900,
                            fontFamily: 'Font Awesome 5 Free',
                            marginRight: "0.1rem",
                            right: "16px",

                        }} />
                    }
                    {up === "0" ?
                        null
                        :
                        <FontAwesomeIcon icon={faAngleUp} style={{
                            position: "absolute",
                            fontWeight: 900,
                            fontFamily: 'Font Awesome 5 Free',
                            marginRight: "0.1rem",
                            right: "16px",
                        }} />
                    }
                </a>

                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <form onSubmit={application_address}>
                            <div className="d-flex flex-wrap" id="Address">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="Country">Country<span className="text-danger">
                                            *</span>
                                        </label>
                                        <select
                                            value={country}
                                            onChange={(e) => handlecountry(e.target.value)}
                                            className="form-control" name="country" required>
                                            {Checkmycountry === "0" ? <option value={country}>{country}</option> : <option value="">Please select Country</option>}
                                            {countries.map((element, index) => {
                                                return (
                                                    <option
                                                        value={element.country_name} key={index}>{element.country_name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="State/Province">State/Province<span className="text-danger"> *</span>
                                        </label>
                                        <select className="form-control" name="state"
                                            onChange={(e) => handlestate(e.target.value)}
                                            required
                                            value={state}
                                        >
                                            {CheckState === "0" ? <option value={state}>{state}</option> : <option value="">Please select state</option>}
                                            {states.map((element, index) => {
                                                return (
                                                    <option
                                                        value={element.state_name} key={index}>{element.state_name}</option>
                                                )
                                            })}
                                        </select>
                                        <span style={{ color: "red" }}> {stateError}</span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group"><label htmlFor="City/Town">City/Town<span className="text-danger"> *</span></label>
                                        <select className="form-control" name="city" required
                                            value={city}
                                            onChange={(e) => setcity(e.target.value)}
                                        >
                                            {CheckCity === "0" ? <option value={city}>{city}</option> : <option value="">Please select City</option>}
                                            {cities.map((element, index) => {
                                                return (
                                                    <option
                                                        value={element.city_name} key={index}>{element.city_name}</option>
                                                )
                                            })}
                                        </select>
                                        <span style={{ color: "red" }}> {cityError}</span>

                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="addressLine2">Address<span className="text-danger">
                                            *</span></label>
                                        <input
                                            value={address}
                                            onChange={(e) => setaddress(e.target.value)}
                                            type="text" className="form-control" placeholder="Address" name="address_text" required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="Zipcode">Zipcode<span className="text-danger">
                                            *</span></label>
                                        <input
                                            value={zipcode}
                                            onChange={(e) => setzipcode(e.target.value)}
                                            type="number" className="form-control" placeholder="Zipcode" name="zip_code" required />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                                    <div className="form-group"><label htmlFor="addressLine2">Is your Home
                                        Address same as Communication Address?</label>
                                        <div className="checkgrp">
                                        <label htmlFor="1" className="m-3">
                                            <input

                                                onChange={(e) => setcommunication_address("yes")}
                                                checked={communication_address === "yes"}

                                                type="radio" name="address_check" /> Yes</label>
                                        <label htmlFor="0" className="m-3"><input type="radio" name="address_check"

                                            onChange={(e) => setcommunication_address("no")}
                                            checked={communication_address === "no"}

                                        /> No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">
                                        <button type="submit" className="btn btn-secondary " title="Save">Save
                                        </button>
                                        <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse3" title="Save & Next">Save &
                                            Next</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}