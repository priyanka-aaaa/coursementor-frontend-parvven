import React from 'react';
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
export default function About() {
    return (


        <div className="main-content">
        {/*Full width header Start*/}
        <div className="full-width-header">
            {/*Header Start*/}
            <Header/>
            {/*Header End*/}
            {/* Canvas Menu start */}
            <nav className="right_menu_togle hidden-md">
                <div className="close-btn">
                    <div className="nav-link">
                        <a id="nav-close" className="humburger nav-expander" href="#">
                            <span className="dot1" />
                            <span className="dot2" />
                            <span className="dot3" />
                            <span className="dot4" />
                            <span className="dot5" />
                            <span className="dot6" />
                            <span className="dot7" />
                            <span className="dot8" />
                            <span className="dot9" />
                        </a>
                    </div>
                </div>
                <div className="canvas-logo">
                    <a href="index.html"><img src="assets/images/logo.png" alt="logo" /></a>
                </div>
                <div className="offcanvas-text">
                    <p> Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on hundreds of
                        subjects or topics, whenever you need it.
                    </p>
                </div>
                <div className="canvas-contact">
                    <div className="address-area">
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="flaticon-location" />
                            </div>
                            <div className="info-content">
                                <h4 className="title">Address</h4>
                                <em>#211 P,Sector7 Kurukshetra,haryana 136118</em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="flaticon-email" />
                            </div>
                            <div className="info-content">
                                <h4 className="title">Email</h4>
                                <em><a href="mailto:hello@coursementor.com/">hello@coursementor.com</a></em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="flaticon-call" />
                            </div>
                            <div className="info-content">
                                <h4 className="title">Phone</h4>
                                <em>1800-890-6477</em>
                            </div>
                        </div>
                    </div>
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                </div>
            </nav>
            {/* Canvas Menu end */}
        </div>
        {/*Full width header End*/}
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img3">
            <div className="breadcrumbs-inner text-center">
                <h1 className="page-title">Contact</h1>
                <ul>
                    <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                        <a className="active" href="index.html">Home</a>
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        {/* Breadcrumbs End */}
        {/* Contact Section Start */}
        <div className="rs-contact pt-120 md-pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 md-mb-60">
                        <div className="contact-box">
                            <div className="sec-title mb-45">
                                <span className="sub-text new-text white-color">Let's Talk</span>
                                <h2 className="title white-color">Speak With Expert Coursementor.</h2>
                            </div>
                            <div className="address-box mb-25">
                                <div className="address-icon">
                                    <i className="fa fa-home" />
                                </div>
                                <div className="address-text">
                                    <span className="label">Email:</span>
                                    <a href="mailto:hello@coursementor.com">hello@coursementor.com</a>
                                </div>
                            </div>
                            <div className="address-box mb-25">
                                <div className="address-icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone:</span>
                                    <a href="tel:18008906477">1800-890-6477</a>
                                </div>
                            </div>
                            <div className="address-box">
                                <div className="address-icon">
                                    <i className="fa fa-map-marker" />
                                </div>
                                <div className="address-text">
                                    <span className="label">Address:</span>
                                    <div className="desc">#211 P,Sector7 Kurukshetra,haryana 136118</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 pl-70 md-pl-15">
                        <div className="contact-widget">
                            <div className="sec-title2 mb-40">
                                <span className="sub-text contact mb-15">Get In Touch</span>
                                <h2 className="title testi-title">Fill The Form Below</h2>
                            </div>
                            <div id="form-messages" />
                            <form id="contact-form" method="post"
                                action="https://rstheme.com/products/html/braintech/mailer.php">
                                <fieldset>
                                    <div className="row">
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="name" name="name"
                                                placeholder="Name" required />
                                        </div>
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="email" name="email"
                                                placeholder="E-Mail" required />
                                        </div>
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="phone" name="phone"
                                                placeholder="Phone Number" required />
                                        </div>
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="website" name="website"
                                                placeholder="Your Website" required />
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <textarea className="from-control" id="message" name="message"
                                                placeholder="Your message Here" required defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="btn-part">
                                        <div className="form-group mb-0">
                                            <input className="readon learn-more submit" type="submit"
                                                defaultValue="Submit Now" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-canvas pt-120 md-pt-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1746672514537!2d76.87280201547092!3d29.974409878831935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e477a7988733f%3A0xba0ec1c16e425f5c!2sCAL%20Info%20-%20Website%20Development%20Company%20in%20Kurukshetra!5e0!3m2!1sen!2sin!4v1646391492819!5m2!1sen!2sin" />
            </div>
        </div>
        {/* Contact Section Start */}
        <Footer />
    </div>


    );
}

