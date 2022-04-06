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
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Setting</h1>
        </div>
        <div class="row">
            <div class="col-xl-12 col-lg-7">
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="form-block">
                            <div class="card-body">
                                <h1 class="h3 mb-3 text-gray-800">Change Password</h1>
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <form onSubmit={setting}>
                                                <div class="row">
                                                    <div class="col-sm-12 ">
                                                        <div class="form-group">
                                                            <label htmlFor="password">Enter Password<span class="req-star">*</span></label>
                                                            <input required="" name="password" type="password" id="password" class="form-control"
                                                                value={password}
                                                                onChange={(e) => setpassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label htmlFor="c_password">Confirm Password<span class="req-star">*</span></label>
                                                            <input required="" name="c_password" type="password" id="c_password" class="form-control"
                                                                value={conformPassword}
                                                                onChange={(e) => setconformPassword(e.target.value)}
                                                            />
                                                        </div>
                                                        <span style={{ color: "red" }}> {confirmpasswordError}</span>

                                                    </div>
                                                    <div class="col-sm-12 text-danger"></div>
                                                    <div class="col-sm-12"><button type="submit" class="btn btn-success">Save</button></div>
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