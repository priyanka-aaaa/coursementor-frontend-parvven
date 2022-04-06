import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faStar, faAngleUp, faHistory,
  faBars,faSearch,faBullseye,faShield,faUniversity,faCheckSquare,faCreditCard,faLaptop

} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF, faGoogle, faTwitter, faFacebook,
  faPinterest, faInstagram
} from "@fortawesome/free-brands-svg-icons";
function FinalFilter(props) {

  return (
    <div className="main-content">
      {/*Full width header Start*/}
      <div className="full-width-header">
        {/*Header Start*/}
        <header id="rs-header" className="rs-header style3 modify1">
          {/* Menu Start */}
          <div className="menu-area menu-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <div className="logo-part">
                    <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                  </div>
                  <div className="mobile-menu">
                    <a href="#" className="rs-menu-toggle rs-menu-toggle-close secondary">

                      <FontAwesomeIcon icon={faBars} />

                    </a>
                  </div>
                </div>
                <div className="col-lg-10 text-right">
                  <div className="rs-menu-area">
                    <div className="main-menu">
                      <nav className="rs-menu pr-86 lg-pr-50 md-pr-0">
                        <ul className="nav-menu">
                          <li className="menu-item-has-children current-menu-item"> <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="expand-btn-inner search-icon hidden-md">
                      <ul>
                        <li className="sidebarmenu-search">
                          <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                            <i className="flaticon-search" />
                          </a>
                        </li>
                        <li>
                          <a id="nav-expander" className="humburger nav-expander" href="#">
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu End */}
        </header>
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
            <p> Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on hundreds of subjects
              or topics, whenever you need it.
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
              <li><a href="#">
                <FontAwesomeIcon icon={faFacebook} />

              </a></li>
              <li><a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a></li>
              <li><a href="#">
                <FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </nav>
        {/* Canvas Menu end */}
      </div>
      {/*Full width header End*/}
      {/* Breadcrumbs Start */}
      <div className="rs-breadcrumbs img1">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">522 Courses in 108 universities found</h1>
          <ul>
            <li title="coursementor">
              <a className="active" href="index.html">Home</a>
            </li>
            <li>Universities/Courses</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumbs End */}
      <div className="container-fluid">
        <div className="row mb-3 mt-5">
          <div className="col-md-2">
            <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" style={{ fontSize: '20px' }}>×</span>
              </button> Masters
            </div>
          </div>
          <div className="col-md-2">
            <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" style={{ fontSize: '20px' }}>×</span>
              </button> Engineering
            </div>
          </div>
          <div className="col-md-2">
            <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" style={{ fontSize: '20px' }}>×</span>
              </button> Design
            </div>
          </div>
          <div className="col-md-2">
            <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" style={{ fontSize: '20px' }}>×</span>
              </button> Finance and Banking
            </div>
          </div>
          <div className="col-md-2 mt-3">
            <div className="search-country">
              <form>
                <div className="form-group d-flex serch-from">
                  <span className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input type="search" className="form-control" placeholder="Search Country" id="search" />
                </div>
              </form></div>
          </div>
          <div className="col-md-2 mt-3">
            <div className="search-country">
              <div className="form-group d-flex serch-from">
                <span className="btn btn-primary loct"><i className=" flaticon-location" /></span>
                <input type="search" className="form-control" placeholder="Search City" id="search-city" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-3">
            <section id="filterSection">
              <div className="search-country">
                <div id="accordion">
                  <div className="card">
                    <a className="card-link collapsed card-header" data-toggle="collapse" href="#collapseOne">
                      Country
                    </a>
                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <div className="form-group d-flex serch-from">
                            <span className="btn btn-primary">
                              <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="search" className="form-control" placeholder="Search Country" id="search" />
                          </div>
                        </form>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />United States
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />United Kingdom
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Australia
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Canada
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                      Area of Interest
                    </a>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <div className="form-group d-flex serch-from">
                            <span className="btn btn-primary">
                              <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="search" className="form-control" placeholder="Search" id="search" />
                          </div>
                        </form>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Management
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Master
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Engineering
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Computers and Data Science
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Design
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapseThree">
                      University Type
                    </a>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Fast Track
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapse4">
                      Intake
                    </a>
                    <div id="collapse4" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Apr - Jul 2022
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Aug - Nov 2022
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Dec - March 2023
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Apr - Jul 2023
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Aug - Nov 2023
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapse5">
                      Scholarship
                    </a>
                    <div id="collapse5" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Scholarship Available
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapse6">
                      Tution Fee Budget
                    </a>
                    <div id="collapse6" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <div className="slidecontainer">
                            <input type="range" min={0} max={50} defaultValue={0} className="slider" id="myRange" />
                            <p>Rs:<span id="demo">0</span></p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapse7">
                      Course Duration
                    </a>
                    <div id="collapse7" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <div className="slidecontainer">
                            <input type="range" min={0} max={50} defaultValue={0} className="slider" id="myRange" />
                            <p>Rs:<span id="demo">0</span></p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapse8">
                      English Proficiency Exam
                    </a>
                    <div id="collapse8" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <select className="form-control">
                            <option>Select</option>
                            <option>IELTS Waiver Available</option>
                            <option>IELTS Score</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-toggle="collapse" href="#collapse9">
                      Academic Proficiency Exam
                    </a>
                    <div id="collapse9" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <select className="form-control">
                            <option>Select</option>
                            <option>GRE</option>
                            <option>GMAT</option>
                            <option>SAT</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a className="readon started apply-filter" href="#">Apply Filter</a>
              </div>
            </section>
          </div>
          <div className="col-md-9">
            <div className="unver-coures-block search-country">
              {/* Nav pills */}
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="pill" href="#home">Universities (423)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu1">Courses (14203)</a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div id="home" className=" tab-pane active"><br />
                  <form>
                    <div className="form-group d-flex serch-from">
                      <span className="btn btn-primary">     <FontAwesomeIcon icon={faSearch} /></span>
                      <input type="search" className="form-control" placeholder="Search Country" id="search" />
                    </div>
                  </form>
                  <div className="universityCustomTabs">
                    <div className="overviewblock">
                      <div className="overview-box blue-light">
                        <span className="icon">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <h3>15 +<br /><span>Dream</span></h3>
                      </div>
                      <div className="overview-box green-light">
                        <span className="icon">
                          <FontAwesomeIcon icon={faBullseye} />

                        </span>
                        <h3>13<br /><span>Reach </span></h3>
                      </div>
                      <div className="overview-box ornage-light">
                        <span className="icon">
                          <FontAwesomeIcon icon={faShield} />
                        </span>
                        <h3>255<br /><span>Safe</span></h3>
                      </div>
                    </div>
                    <div className="dreamuniversity mt-5">
                      <h2><span className="icon">
                        <FontAwesomeIcon icon={faStar} />

                      </span> 15 Dream Universities</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/waterloouniversity.jpg" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">University of Waterloo</h4>
                                <p>Waterloo, Canada</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">
                                  <FontAwesomeIcon icon={faUniversity} />

                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faLaptop} />


                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>QS Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">
                                  <FontAwesomeIcon icon={faCheckSquare} />
                                  Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/tufts.png" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">Tufts University</h4>
                                <p>Medford, United States</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">
                                  <FontAwesomeIcon icon={faUniversity} />

                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>NA Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">
                                  <FontAwesomeIcon icon={faCheckSquare} />
                                  Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <a className="readon started apply-filter" href="#">View More Dream Universities</a>
                      </div>
                    </div>
                    <div className="dreamuniversity mt-5">
                      <h2><span className="icon">
                        <FontAwesomeIcon icon={faBullseye} />
                      </span> 13 Reach Universities</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/waterloouniversity.jpg" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">University of Waterloo</h4>
                                <p>Waterloo, Canada</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">
                                  <FontAwesomeIcon icon={faUniversity} />


                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faLaptop} />


                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>QS Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">
                                <FontAwesomeIcon icon={faCheckSquare} />
                                  
                                Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/tufts.png" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">Tufts University</h4>
                                <p>Medford, United States</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">     <FontAwesomeIcon icon={faUniversity}  />
                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>NA Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">    <FontAwesomeIcon icon={faCheckSquare}  />Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <a className="readon started apply-filter" href="#">View More Reach Universities</a>
                      </div>
                    </div>
                    <div className="dreamuniversity mt-5">
                      <h2><span className="icon">
                      <FontAwesomeIcon icon={faShield}  />
                      </span> 255 Safe Universities</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/waterloouniversity.jpg" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">University of Waterloo</h4>
                                <p>Waterloo, Canada</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">     <FontAwesomeIcon icon={faUniversity}  />
                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>QS Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">    <FontAwesomeIcon icon={faCheckSquare}  />Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/tufts.png" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">Tufts University</h4>
                                <p>Medford, United States</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">     <FontAwesomeIcon icon={faUniversity}  />
                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>NA Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">    <FontAwesomeIcon icon={faCheckSquare}  />Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <a className="readon started apply-filter" href="#">View More Safe Universities</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" className="tab-pane fade"><br />
                  <div className="unv-coures">
                    <div className="courseBox mb-3">
                      <div className="courseData">
                        <div className="head-title"><span className="title">Masters - Architecture</span></div>
                        <div className="university-details"><img src="assets/images/university/virginiauniversity.jpg" className="uni-logo" alt={9} id={9} />
                          <div className="details">
                            <h5>University of Virginia</h5>
                            <p>Charlottesville, United States</p>
                          </div>
                        </div>
                        <div className="facilities">
                          <div className="data">
                            <span>
                            <FontAwesomeIcon icon={faCreditCard} />
                            </span>
                            <div className="dataDetails">
                              <h5>USD 31686</h5>
                              <p> Tuition Fee </p>
                            </div>
                          </div>
                          <div className="data">
                            <span>
                            <FontAwesomeIcon icon={faHistory} />
                             </span>
                            <div className="dataDetails">
                              <h5>3 Months</h5>
                              <p> Duration </p>
                            </div>
                          </div>
                          <div className="data" />
                        </div>
                        <div className="action"><button>Apply Now</button></div>
                      </div>
                    </div>
                    <div className="courseBox mb-3">
                      <div className="courseData">
                        <div className="head-title"><span className="title">Masters - Architecture</span></div>
                        <div className="university-details"><img src="assets/images/university/virginiauniversity.jpg" className="uni-logo" alt={9} id={9} />
                          <div className="details">
                            <h5>University of Virginia</h5>
                            <p>Charlottesville, United States</p>
                          </div>
                        </div>
                        <div className="facilities">
                          <div className="data">
                            <span>
                            <FontAwesomeIcon icon={faCreditCard} />
                   </span>
                            <div className="dataDetails">
                              <h5>USD 31686</h5>
                              <p> Tuition Fee </p>
                            </div>
                          </div>
                          <div className="data">
                            <span>
                            <FontAwesomeIcon icon={faHistory} />
                            </span>
                            <div className="dataDetails">
                              <h5>3 Months</h5>
                              <p> Duration </p>
                            </div>
                          </div>
                          <div className="data" />
                        </div>
                        <div className="action"><button>Apply Now</button></div>
                      </div>
                    </div>
                    <div className="courseBox mb-3">
                      <div className="courseData">
                        <div className="head-title"><span className="title">Masters - Architecture</span></div>
                        <div className="university-details"><img src="assets/images/university/virginiauniversity.jpg" className="uni-logo" alt={9} id={9} />
                          <div className="details">
                            <h5>University of Virginia</h5>
                            <p>Charlottesville, United States</p>
                          </div>
                        </div>
                        <div className="facilities">
                          <div className="data">
                            <span>
                            <FontAwesomeIcon icon={faCreditCard}  />
                            </span>
                            <div className="dataDetails">
                              <h5>USD 31686</h5>
                              <p> Tuition Fee </p>
                            </div>
                          </div>
                          <div className="data">
                            <span>   <FontAwesomeIcon icon={faHistory}  /></span>
                            <div className="dataDetails">
                              <h5>3 Months</h5>
                              <p> Duration </p>
                            </div>
                          </div>
                          <div className="data" />
                        </div>
                        <div className="action"><button>Apply Now</button></div>
                      </div>
                    </div>
                    <div className="courseBox mb-3">
                      <div className="courseData">
                        <div className="head-title"><span className="title">Masters - Architecture</span></div>
                        <div className="university-details"><img src="assets/images/university/virginiauniversity.jpg" className="uni-logo" alt={9} id={9} />
                          <div className="details">
                            <h5>University of Virginia</h5>
                            <p>Charlottesville, United States</p>
                          </div>
                        </div>
                        <div className="facilities">
                          <div className="data">
                            <span>
                              
                            <FontAwesomeIcon icon={faCreditCard}  /></span>
                            <div className="dataDetails">
                              <h5>USD 31686</h5>
                              <p> Tuition Fee </p>
                            </div>
                          </div>
                          <div className="data">
                            <span>    <FontAwesomeIcon icon={faHistory}  /></span>
                            <div className="dataDetails">
                              <h5>3 Months</h5>
                              <p> Duration </p>
                            </div>
                          </div>
                          <div className="data" />
                        </div>
                        <div className="action"><button>Apply Now</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main content End */}
      {/* Footer Start */}
      <footer id="rs-footer" className="rs-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                <div className="footer-logo mb-30">
                  <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                </div>
                <div className="textwidget pb-30">
                  <p>Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on
                    hundreds of subjects or topics, whenever you need it.</p>
                </div>
                <ul className="footer-social md-mb-30">
                  <li>
                    <a href="#" target="_blank"><span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span></a>
                  </li>
                  <li>
                    <a href="# " target="_blank"><span>   <FontAwesomeIcon icon={faTwitter} /></span></a>
                  </li>
                  <li>
                    <a href="# " target="_blank"><span>
                      <FontAwesomeIcon icon={faPinterest} />
                    </span></a>
                  </li>
                  <li>
                    <a href="# " target="_blank"><span>    <FontAwesomeIcon icon={faInstagram} /></span></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                <h3 className="widget-title">Policy</h3>
                <ul className="site-map">
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                  <li><a href="#">Honor Code</a></li>
                  <li><a href="#">Mentors</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                <h3 className="widget-title">Contact Info</h3>
                <ul className="address-widget">
                  <li>
                    <i className="flaticon-location" />
                    <div className="desc">#211 P,Sector7 Kurukshetra,haryana 136118</div>
                  </li>
                  <li>
                    <i className="flaticon-call" />
                    <div className="desc">
                      <a href="tel:1800-890-6477">1800-890-6477</a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-email" />
                    <div className="desc">
                      <a href="mailto:hello@coursementor.com">hello@coursementor.com</a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-clock-1" />
                    <div className="desc">
                      Our Mentors are ready to help 24/7
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h3 className="widget-title">Exploring</h3>
                <ul className="site-map">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
                {/* <p className="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              {/* <div className="col-lg-6 text-right md-mb-10 order-last">
                                        <ul className="copy-right-menu">
                                           <li><a href="index.html">Home</a></li>
                                           <li><a href="about.html">About</a></li>
                                           <li><a href="blog.html">Blog</a></li>
                                           <li><a href="shop.html">Shop</a></li>
                                           <li><a href=case-studies-single.html></a></li>
                                        </ul>
                                    </div> */}
              <div className="col-lg-6">
                <div className="copyright">
                  <p>©Copyright 2018 - 2022<a href="http://Coursementor.com/">Coursementor.com</a> All
                    rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
      {/* start scrollUp  */}
      <div id="scrollUp" className="orange-color">

        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      {/* End scrollUp  */}
      {/* Search Modal Start */}
      <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex={-1}>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span className="flaticon-cross" />
        </button>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="search-block clearfix">
              <form>
                <div className="form-group">
                  <input className="form-control" placeholder="Search Here..." type="text" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>




  );



}

export default FinalFilter;