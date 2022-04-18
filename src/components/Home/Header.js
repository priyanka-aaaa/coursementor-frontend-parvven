import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faTrash, faPen, faAngleDown, faAngleUp, faBars, faSearch, faClose

} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import SearchBar from "./SearchBar";
import BookData from "./Data.json";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));
function Header(props) {
  const [textflag, settextflag] = useState("-500px");
  const [display, setdisplay] = useState("-500px");
  const [searchData, setsearchData] = useState([]);


  const [showModal, setshowModal] = useState(false);
  useEffect(() => {
    const url1 = process.env.REACT_APP_SERVER_URL + 'universitySuggestion'
    fetch(url1, {
      method: 'get',
    })
      .then(response => response.json())
      .then(data => {
        var myDatabaseValue = data.suggestion
        setsearchData(myDatabaseValue)
      })
  }, [])
  function open() {
    setshowModal(true)
  }
  function close() {
    setshowModal(false)
  }

  function ToggleButton() {

    if (textflag == "-500px") {
      settextflag("0px")
    }
    else {
      settextflag("-500px")
    }
  }
  function ToggleTwoButton() {
    if (display === "none") {
      setdisplay("inline")
    }
    else {
      setdisplay("none")

    }
  }
  return (
    <header id="rs-header" className="rs-header style3 modify1">

      {/* Menu Start */}


      <div className="menu-area menu-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo-part">
                <Link to={'/'} href="#"
                >
                  <img src={images["logo.png"]} alt="" />
                </Link>


              </div>
              <div className="mobile-menu">
                <a href="#" className="rs-menu-toggle rs-menu-toggle-close secondary" onClick={() => ToggleTwoButton()}>
                  {/* <i className="fa fa-bars" /> */}
                  <FontAwesomeIcon icon={faBars} />

                </a>
              </div>
            </div>
            <div className="col-lg-10 text-right" style={{ display: display }} >
              <div className="rs-menu-area">
                <div className="main-menu">
                  <nav className="rs-menu pr-86 lg-pr-50 md-pr-0">
                    <ul className="nav-menu">
                      <li><Link to={'/School'} className="menu-item-has-children current-menu-item" href="#">
                        <span className='icon'><i className="fal fa-university fa-fw" ></i></span>Schools
                      </Link>
                      </li>
                      <li><Link to={'/Recruitment'} className="nav-link" href="#">
                        Recruitment Partners</Link>
                      </li>
                      <li><Link to={'/students'} href="#">
                        Students</Link>
                      </li>
                      <li className='mr-3'>
                        <Link to={'/StudentLogin'} className="btn outline-website-btn" href="#">Login</Link>
                      </li>
                      <li>
                        <Link to={'/StudentRegister'} className="btn website-btn" href="#">Register</Link>


                      </li>


                    </ul> {/* //.nav-menu */}

                  </nav>

                </div> {/* //.main-menu */}

                <div className="expand-btn-inner search-icon hidden-md">
                  <ul>
                    <li className="sidebarmenu-search">

                      <a onClick={() => open()} className="frontend-main-search">
                        <FontAwesomeIcon icon={faSearch} /></a>
                    </li>
                    <li>

                      <a id="nav-expander" className="humburger nav-expander" onClick={() => ToggleButton()}
                      >

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
      {/* start for toogle */}

      <nav className="right_menu_togle hidden-md" style={{ right: textflag }} >
        <div className="close-btn">
          <div className="nav-link">
            <a id="nav-close" className="humburger nav-expander" onClick={() => ToggleButton()} >
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
          <a href="index.html">
            <img src={images["logofirst-1.png"]} alt="logo" /></a>

        </div>
        <div className="offcanvas-text">
          <p> Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on hundreds
            of subjects or topics, whenever you need it.
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
      {/* end for toogle */}
      {/* start for search model */}


      <Modal dialogClassName="custom-modal" className="modal-container custom-map-modal search-modal" id="front-search-modal"
        show={showModal}
        onHide={() => close()}

        animation={true}
      >
        <button type="button" className="close" onClick={() => close()}  >
        
          <FontAwesomeIcon icon={faClose} />
          <span className="flaticon-cross" />
        </button>
        <div className="">
          <div className="modal-content">
            <div className="search-block clearfix">
              <form>
                <div className="form-group">
                  <label>Search</label>
                  <SearchBar placeholder="Enter course, college, exam or destination" data={searchData} />

                </div>
              </form>
              <div className="top-country">
                <h5>Popular Destinations</h5>
                <div className="row">
                  <div className="col-lg-3 col-sm-6 md-mb-50">
                    <div className="addon-process">
                      <Link to={'/study-in-australia'} className="process-wrap" onClick={() => close()}>
                        <div className="process-wrap">
                          <div className="process-img">
                            <a href="#">
                              <img src={images["process-1.png"]}
                                alt="" />
                            </a>
                          </div>
                          <div className="process-text">
                            <h3 className="title">Australia</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 md-mb-50">
                    <div className="addon-process">
                      <Link to={'/study-in-canada'} className="process-wrap" onClick={() => close()}>
                        <div className="process-wrap">
                          <div className="process-img">
                            <a href="#"><img src={images["process-2.png"]} alt="" /></a>
                          </div>
                          <div className="process-text">
                            <h3 className="title">Canada</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="addon-process">
                      <Link to={'/study-in-united-kingdom'} className="process-wrap" onClick={() => close()}>

                        <div className="process-wrap">
                          <div className="process-img">
                            <a href="#"><img src={images["process-3.png"]} alt="" /></a>
                          </div>
                          <div className="process-text">
                            <h3 className="title">United Kingdom</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="addon-process">
                      <Link to={'/study-in-united-state'} className="process-wrap" onClick={() => close()}>

                        <div className="process-wrap">
                          <div className="process-img">
                            <a href="#"><img src={images["process-4.png"]} alt="" /></a>
                          </div>
                          <div className="process-text">
                            <h3 className="title">United States</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-country mt-5">
                <h5>Popular Tests</h5>
                <div className="row">
                  <div className="col-lg-3 col-sm-6 md-mb-50">
                    <div className="addon-process">
                      <div className="process-wrap">
                        <div className="process-img">

                          <a href="course_finder_select_degree.html">

                            <img src={images["ielts.webp"]} alt="" />
                          </a>
                        </div>
                        <div className="process-text">
                          <h3 className="title">IELTS</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 md-mb-50">
                    <div className="addon-process">
                      <div className="process-wrap">
                        <div className="process-img">
                          <a href="course_finder_select_degree.html">

                            <img src={images["gmat.webp"]} alt="" />
                          </a>
                        </div>
                        <div className="process-text">
                          <h3 className="title">GMAT</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="addon-process">
                      <div className="process-wrap">
                        <div className="process-img">
                          <a href="course_finder_select_degree.html">

                            <img src={images["gre.webp"]} alt="" />
                          </a>
                        </div>
                        <div className="process-text">
                          <h3 className="title">GRE</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="addon-process">
                      <div className="process-wrap">
                        <div className="process-img">
                          <a href="course_finder_select_degree.html">

                            <img src={images["sat.webp"]} alt="" />

                          </a>
                        </div>
                        <div className="process-text">
                          <h3 className="title">SAT</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* end for search model */}
    </header>
  );
}

export default Header;