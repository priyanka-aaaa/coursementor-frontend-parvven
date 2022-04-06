import React from 'react';
import logo from '../img/logo.png';
import { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
class StudentForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',

            errors: {},
            redirectToReferrer: false
        }
    }
    handleValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;
     
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter a email";
        }
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");
            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            const obj = {
                email: this.state.email

            };
            axios.post('/student/forgotPassword ', obj)
                .then(result => {
                    let responseJson = result;
                  
                    if (responseJson.data.success === true) {
               
                    }
                    else {
                      
                    }
                }
                )
                .catch(error => {
          
                });
            this.setState({
                email: '',
                password: ''
            })
        }
        const obj = {
            email: this.state.email,
            password: this.state.password,
        };

    }
    render() {
      
        return (
            <div >
                <section className="Form-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-centerblock">
                                    <a href="#" className="logo"><img src={logo} /></a>
                                    <div className="from-start">
                                        <form>
                                            <div className="mb-3 mt-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control " id="email"
                                                    placeholder="Enter email" name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                />
                                            </div>

                                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>





                                            <button type="submit" onClick={this.onSubmit} className="btn btn-website">Submit</button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div >
        );
    }
}
export default StudentForgotPassword;
