import React, { useState, useEffect } from "react";
import Footer from './Home/Footer'
import Header from './Home/Header'
import axios from 'axios';
import LoaderFrontend from './Home/LoaderFrontend';
import SweetAlert from 'react-bootstrap-sweetalert';
import UniversityloginForm from './UniversityloginForm'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function Universityregister() {
    return (

        <div>

          
            <div className="main-content">
                {/*Full width header Start*/}
                <div className="full-width-header">
                    <Header />
                    <section className="Form-block">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={images["login.png"]} alt="login" />

                                </div>
                                <div className="col-lg-6">
                                <UniversityloginForm/>
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