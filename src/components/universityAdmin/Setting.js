import React, { useState, useEffect } from "react";
import axios from 'axios';
export default function Setting() {
    const [mounted, setMounted] = useState();
    const [password, setpassword] = useState("");
    const [conformPassword, setconformPassword] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    useEffect(() => {
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
    }, [])
    function setting(event) {
        setconfirmpasswordError("");
        event.preventDefault();
        if (password !== conformPassword) {
            setconfirmpasswordError("confirm password is not match");
        }
        else {
            const obj = {
                password: password,
            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'university/changePassword', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    if (res.data.success === true) {
                    }
                    else {
                    }
                })
                .catch(error => {
                });
        }
    }
    return (
        <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Setting</h1>
        </div>
        <div className="row">
            <div className="col-xl-12 col-lg-7">
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="form-block">
                            <div className="card-body">
                                <h1 className="h3 mb-3 text-gray-800">Change Password</h1>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <form onSubmit={setting}>
                                                <div className="row">
                                                    <div className="col-sm-12 ">
                                                        <div className="form-group">
                                                            <label htmlFor="password">Enter Password<span className="req-star">*</span></label>
                                                            <input required="" name="password" type="password" id="password" className="form-control"
                                                                value={password}
                                                                onChange={(e) => setpassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label htmlFor="c_password">Confirm Password<span className="req-star">*</span></label>
                                                            <input required="" name="c_password" type="password" id="c_password" className="form-control"
                                                                value={conformPassword}
                                                                onChange={(e) => setconformPassword(e.target.value)}
                                                            />
                                                        </div>
                                                        <span style={{ color: "red" }}> {confirmpasswordError}</span>

                                                    </div>
                                                    <div className="col-sm-12 text-danger"></div>
                                                    <div className="col-sm-12"><button type="submit" className="btn btn-success">Save</button></div>
                                                </div>
                                            </form>
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