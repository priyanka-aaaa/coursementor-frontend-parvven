import React, { useState, useEffect } from "react";

import { Modal, Button } from 'react-bootstrap';

import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown, faAngleUp, faTrash, faPlus, faPen
} from '@fortawesome/free-solid-svg-icons';

export default function AgentTeam() {
    const [showModal, setshowModal] = useState(false);

    const [mounted, setMounted] = useState();
    const [agentId, setagentId] = useState();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");

    const [address, setaddress] = useState("");
    const [country, setcountry] = useState("Select Country");
    const [state, setstate] = useState("Select State");
    const [city, setcity] = useState("Select City");
    const [pincode, setpincode] = useState("");
    const [type, settype] = useState("");
    const [description, setdescription] = useState("");
    const [website, setwebsite] = useState("");
    const [data, setdata] = useState([]);
    const [myTable, setTable] = useState("");
    const [organization, setorganization] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [CheckState, setCheckState] = useState("0");
    const [CheckCity, setCheckCity] = useState("0");
    const [phoneError, setphoneError] = useState("");
    const [typeError, settypeError] = useState("");
    const [descriptionError, setdescriptionError] = useState("");
    const [stateError, setstateError] = useState("");
    const [cityError, setcityError] = useState("");
    const [DescriptionLengthError, setDescriptionLengthError] = useState("");
    const [websiteStartError, setwebsiteStartError] = useState("");
    const [websiteEndError, setwebsiteEndError] = useState("");
    const [pincodeError, setpincodeError] = useState("");
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    const [loader, setmyloader] = useState("false");
    const [countries, setcountries] = useState([{
        country_name: ""
    }]);
    const [states, setstates] = useState([{
        state_name: ""
    }])
    const [cities, setcities] = useState([{
        city_name: ""
    }])
    useEffect(() => {
        var agentId = localStorage.getItem('agentId');
        var mounted = localStorage.getItem('agentToken');
        setMounted(mounted)
        setagentId(agentId);
        if (agentId !== null) {
            const url1 = process.env.REACT_APP_SERVER_URL + 'agent/partner';
            fetch(url1, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    var myresults = data.agentPartners;
                    if (Object.keys(myresults).length === 0) {
                        setTable("true");
                    }
                    setdata(data.agentPartners)
                })
        }

        axios.get(process.env.REACT_APP_SERVER_URL + 'countries/')
            .then(function (res) {
                if (res.data.success === true) {
                    setcountries(res.data.result);
                }
            })
            .catch(error => {

            });

    }, [])
    function open() {
        setshowModal(true)
    }
    function close() {
        setshowModal(false)
    }
    function onChangeName(e) {
        const arr = e.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setname(str2)
    }
    function handleFormSubmit(event) {
        event.preventDefault();

        setmyloader("true")
        const obj = {
            name: name,
            email: email,
            phone: phone,
            password: password,
            country: country,
            state: state,
            city: city,
            address: address,
            pincode: pincode,

        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'agent/partner', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setshowModal(false)
                setmyloader("false")
                if (res.data.success === true) {
                    setsuccessMessage("User Added")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    const url1 = process.env.REACT_APP_SERVER_URL + 'agent/partner';
                    fetch(url1, {
                        method: 'GET',
                        headers: { 'Authorization': mounted }
                    })
                        .then(response => response.json())
                        .then(data => {
                            var myresults = data.agentPartners;
                            if (Object.keys(myresults).length === 0) {
                                setTable("true");
                            }
                            setdata(data.agentPartners)
                        })
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
        setCheckCity("1")
        axios.get(process.env.REACT_APP_SERVER_URL + 'cities/' + e + '/')
            .then(function (res) {
                if (res.data.success === true) {
                    setcities(res.data.result);
                }
            })
            .catch(error => {

            });
    }
    function handleDeleteClick(value) {
        setshowSweetAlert("1")
        setdeleteId(value)
    }
    return (
        <div className="container-fluid">
              {loader === "true" ?
                            <Loader />
                            : null}
             {submitSuccess === 1 ? <div className="Show_success_message">
                            <strong></strong> {successMessage}
                        </div> : null}
            {showSweetAlert === "1" ? <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"

                title="Are you sure?"
                onConfirm={(value) => {
                    setshowSweetAlert("0");
                    setmyloader("true")
                    axios.delete(process.env.REACT_APP_SERVER_URL + 'agent/partner/' + deleteId, { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            setmyloader("false")
                            if (res.data.success === true) {
                                setsuccessMessage("User deleted")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
                                const url1 = process.env.REACT_APP_SERVER_URL + 'agent/partner';
                                fetch(url1, {
                                    method: 'GET',
                                    headers: { 'Authorization': mounted }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        var myresults = data.agentPartners;
                                        if (Object.keys(myresults).length === 0) {
                                            setTable("true");
                                        }
                                        setdata(data.agentPartners)
                                    })
                            }
                        })

                }}
                onCancel={() =>
                    setshowSweetAlert("0")
                }
                focusCancelBtn
            >
            </SweetAlert>
                : null
            }
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Partner Team</h1>
            </div>

            {/* <!-- Content Row --> */}

            {/* <!-- Content Row --> */}
            <div className="row">

                {/* <!-- Content Column --> */}
                <div className="col-lg-12 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="m-0 font-weight-bold text-primary">All User</h6>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-success"
                                        onClick={() => open()}
                                    ><span><i className="fas fa-plus"></i></span>Add User</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- The Modal --> */}
                        <Modal className="modal-container"
                            show={showModal}
                            onHide={() => close()}

                            animation={true}
                        >

                            <Modal.Header closeButton>
                                <Modal.Title>Add user</Modal.Title>
                            </Modal.Header>


                            <div className="modal-body">
                                <form onSubmit={handleFormSubmit}>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label className="form-label"><span>*</span>Name</label>
                                                <input type="text" className="form-control"
                                                    required
                                                    placeholder="" name="name"
                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <label className="form-label"><span>*</span>Email</label>
                                                <input type="text" className="form-control" placeholder="" name="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setemail(e.target.value)}
                                                />


                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label"><span>*</span>Mobile No</label>
                                                <input type="text" className="form-control" placeholder="" name="phone"
                                                    value={phone}
                                                    required
                                                    onChange={(e) => setphone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label className="form-label"><span>*</span>Password</label>
                                                <input type="password" className="form-control" placeholder="" name="password"
                                                    value={password}
                                                    required
                                                    onChange={(e) => setpassword(e.target.value)}
                                                />
                                            </div>


                                            <div className="col-md-4">

                                                <label className="form-label"><span>*</span>Country</label>
                                                <select className="form-control" name="country" required
                                                    value={country}
                                                    onChange={(e) => handlecountry(e.target.value)}

                                                >
                                                    <option
                                                        value="" >Select country</option>
                                                    {countries.map((element, index) => {
                                                        return (
                                                            <option
                                                                value={element.country_name} key={index}>{element.country_name}</option>
                                                        )
                                                    })}
                                                </select>

                                            </div>

                                            <div className="col-md-4">

                                                <label htmlFor="State/Province">State/Province <span className="text-danger"> *</span>
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
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label className="form-label"><span>*</span>City</label>
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


                                            <div className="col-md-4">

                                                <label className="form-label"><span>*</span>Pin Code</label>
                                                <input type="text" className="form-control" placeholder="" name="pincode" required
                                                    value={pincode}
                                                    onChange={(e) => setpincode(e.target.value)}
                                                />


                                            </div>

                                            <div className="col-md-4">

                                                <label htmlFor="State/Province">Address<span className="text-danger"> *</span>
                                                </label>
                                                <input type="text" className="form-control" placeholder="" name="address" required
                                                    value={address}
                                                    onChange={(e) => setaddress(e.target.value)}
                                                />


                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary" >Save</button>
                                </form>
                            </div>
                        </Modal>


                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">


                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="card shadow mb-4 mt-3">

                                                {myTable === "true" ?
                                                    null
                                                    : <div className="table-responsive-sm">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>No.</th>
                                                                    <th>Name</th>
                                                                    <th> Email</th>
                                                                   
                                                                    <th>Phone</th>
                                                                    <th> Password</th>
                                                                    <th>Address</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data.map((element, index) => {

                                                                    return (
                                                                        <tr key={index}>
                                                                            <td> {index + 1}</td>
                                                                            <td> {element.name}</td>
                                                                            <td> {element.email}</td>
                                                                       
                                                                            <td> {element.phone}</td>
                                                                            <td> {element.password}</td>
                                                                          
                                                                            <td> {element.address+", "+element.city+" ,"+element.state+" ,"+element.country}</td>
                                                                            <td>
                                                                                {/* <button title="Edit" className="btn btn-success btn-sm " onClick={() => handleEditClick(element._id)}>
                                                                                    <FontAwesomeIcon icon={faPen} />
                                                                                </button> */}
                                                                                <button title="Delete" className="btn btn-danger btn-sm vbtn" onClick={() => handleDeleteClick(element._id)}>
                                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>






                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}