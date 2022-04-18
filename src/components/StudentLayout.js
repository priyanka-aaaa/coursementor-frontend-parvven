import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import routes from "./student/StudentRoutes.js";
import { Dropdown } from 'react-bootstrap';

import { faAngleLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import undraw_profile from '../img/undraw_profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSignOutAlt, faFile, faDashboard, faUserCircle, faAddressBook, faBookmark, faCog, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

function StudentLayout(props) {
    const [width, setwidth] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const [redirectToReferrer, setredirectToReferrer] = useState("false");
    const [mounted, setMounted] = useState();
    const [email, setemail] = useState();
    const [notification, setnotification] = useState([]);
    const [resultLength, setresultLength] = useState();
    const [studentEmail, setstudentEmail] = useState();
    const [studentId, setstudentId] = useState();
    const [currentMenu, setcurrentMenu] = useState("");
    function handletoogleClick() {
        if (width === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setwidth("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
        }
        else {
            setwidth("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        var studentEmail = localStorage.getItem("studentEmail")
        var studentId = localStorage.getItem("studentId")
        setMounted(mounted)
        setstudentEmail(studentEmail)
        setstudentId(studentId)

        if (localStorage.getItem("studentId")) {
            var mounted = localStorage.getItem("studentToken")
            var studentEmail = localStorage.getItem("studentEmail")
            var studentId = localStorage.getItem("studentId")
            setMounted(mounted)
            setstudentEmail(studentEmail)
            setstudentId(studentId)

            const url = process.env.REACT_APP_SERVER_URL + 'student/messagesUnread';
            fetch(url, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    var myresults = data.notifications
                    setnotification(data.notifications)
                    var resultLength = Object.keys(myresults).length
                    setresultLength(resultLength)
                })
        }
        else {
            var studentEmail = "";
            setredirectToReferrer("true")
        }
        var currentUrl = window.location.href;
        var splitcurrentUrl = currentUrl.split("student/")
        setcurrentMenu(splitcurrentUrl[1])
    }, [])
    function handleCurrentClick(value) {
        setcurrentMenu(value)
    }
    function logout() {
        localStorage.removeItem("studentId");
        localStorage.removeItem("studentToken");
        localStorage.removeItem("studentName");
        localStorage.removeItem("studentEmail");
        window.location.href = "/Studentlogin";
    }


    function getRoutes(routes) {
        return routes.map((prop, key) => {

            if (prop.layout === "/student") {

                return (

                    <Route

                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    return (
        <div id="page-top">
            <div id="wrapper">
                {/* start for sidebar */}
                <ul className={width} id="accordionSidebar">

                    {/* <div className="sidebar-brand-icon ">
                        CM
                    </div> */}
                    <span className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        {width === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" ?
                            <Link to={'/student/dashboard'}  >
                                <img src={images["small-dash-logo.png"]} alt="" />
                            </Link>
                            :
                            <Link to={'/student/dashboard'}  >
                                <img src={images["dash-logo.png"]} alt="" />
                            </Link>

                        }
                        <div className="sidebar-brand-text mx-3">
                        </div>
                    </span>
                    <hr className="sidebar-divider my-0" />
                    {currentMenu === "dashboard" ?
                        <li className="nav-item " onClick={() => handleCurrentClick("dashboard")}>
                            <Link to={'/student/dashboard'} className="nav-link current-tab" title="Dashboard" >
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span> <FontAwesomeIcon icon={faDashboard} />Dashboard  </span></Link>
                        </li>
                        :
                        <li className="nav-item " onClick={() => handleCurrentClick("dashboard")}>
                            <Link to={'/student/dashboard'} className="nav-link" title="Dashboard" >
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span> <FontAwesomeIcon icon={faDashboard} />Dashboard  </span></Link>
                        </li>
                    }
                    {currentMenu === "applicationProfile" ?
                        <li className="nav-item" onClick={() => handleCurrentClick("applicationProfile")}>

                            <Link to={'/student/applicationProfile'} className="nav-link current-tab" tiele="Application Profile">
                                <i className="fas fa-file-alt"></i>
                                <span><FontAwesomeIcon icon={faAddressBook} />Application Profile</span></Link>
                        </li>
                        :
                        <li className="nav-item" onClick={() => handleCurrentClick("applicationProfile")}>

                            <Link to={'/student/applicationProfile'} className="nav-link" tiele="Application Profile">
                                <i className="fas fa-file-alt"></i>
                                <span><FontAwesomeIcon icon={faAddressBook} />Application Profile</span></Link>
                        </li>
                    }
                    {currentMenu === "document" ?
                        <li className="nav-item " onClick={() => handleCurrentClick("document")}>
                            <Link to={'/student/document'} className="nav-link current-tab" href="#" tiele="My Documents" >
                                <i className="fas fa-file-upload"></i>
                                <span><FontAwesomeIcon icon={faFile} />My Documents</span></Link>
                        </li>
                        :
                        <li className="nav-item " onClick={() => handleCurrentClick("document")}>
                            <Link to={'/student/document'} className="nav-link" href="#" tiele="My Documents" >
                                <i className="fas fa-file-upload"></i>
                                <span><FontAwesomeIcon icon={faFile} />My Documents</span></Link>
                        </li>
                    }
                    {currentMenu === "bookmark" ?
                        <li className="nav-item " onClick={() => handleCurrentClick("bookmark")}>
                            <Link to={'/student/bookmark'} className="nav-link current-tab" href="#" title="Bookmark">
                                <i className="fas fa-bookmark"></i>
                                <span><FontAwesomeIcon icon={faBookmark} />Bookmark</span></Link>
                        </li>
                        :
                        <li className="nav-item " onClick={() => handleCurrentClick("bookmark")}>
                            <Link to={'/student/bookmark'} className="nav-link" href="#" title="Bookmark">
                                <i className="fas fa-bookmark"></i>
                                <span><FontAwesomeIcon icon={faBookmark} />Bookmark</span></Link>
                        </li>
                    }
                    {currentMenu === "Message" ?
                        <li className="nav-item " onClick={() => handleCurrentClick("Message")}>
                            <Link to={'/student/message'} className="nav-link current-tab" href="#" title="Settings"

                            >
                                <i className="fas fa-bookmark"></i>
                                <span><FontAwesomeIcon icon={faEnvelope} />Message</span></Link>
                        </li>
                        :
                        <li className="nav-item " onClick={() => handleCurrentClick("Message")}>
                            <Link to={'/student/message'} className="nav-link" href="#" title="Settings"

                            >
                                <i className="fas fa-bookmark"></i>
                                <span><FontAwesomeIcon icon={faEnvelope} />Message</span></Link>
                        </li>
                    }
                    {currentMenu === "Settings" ?
                        <li className="nav-item " onClick={() => handleCurrentClick("Settings")}>
                            <Link to={'/student/setting'} className="nav-link current-tab" href="#" title="Settings">
                                <i className="fas fa-bookmark"></i>
                                <span><FontAwesomeIcon icon={faCog} /> Settings</span></Link>
                        </li>
                        :
                        <li className="nav-item " onClick={() => handleCurrentClick("Settings")}>
                            <Link to={'/student/setting'} className="nav-link" href="#" title="Settings">
                                <i className="fas fa-bookmark"></i>
                                <span><FontAwesomeIcon icon={faCog} /> Settings</span></Link>
                        </li>
                    }
                    <div className="text-center d-none d-md-inline">
                        <button title="Sidenar-toggle" className="rounded-circle border-0" id="sidebarToggle" onClick={() => handletoogleClick()}>
                            <i className="fa-solid fa-arrow-right"></i>
                            <FontAwesomeIcon icon={faAngleLeft} style={{
                                fontWeight: 900,
                                marginRight: "0.1rem",
                                color: "rgba(255, 255, 255, 0.5)"
                            }} />
                        </button>
                    </div>
                </ul>
                {/* end for sidebar */}
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        {/* start for topbar */}
                        <div>
                            {redirectToReferrer === "true" ?
                                <Redirect to={'/Studentlogin'} />
                                : <div>
                                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3"
                                            onClick={() => handletoogleClick()}
                                        >


                                            <FontAwesomeIcon icon={faBars} />

                                        </button>
                                        <form
                                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                            <div className="input-group">
                                            </div>
                                        </form>
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item dropdown no-arrow d-sm-none">
                                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-search fa-fw"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                                    aria-labelledby="searchDropdown">
                                                    <form className="form-inline mr-auto w-100 navbar-search">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control bg-light border-0 small"
                                                                placeholder="Search for..." aria-label="Search"
                                                                aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary" type="button">
                                                                    <i className="fas fa-search fa-sm"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown no-arrow mx-1">
                                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="alertsDropdown">
                                                    <h6 className="dropdown-header">
                                                        Alerts Center
                                                    </h6>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="mr-3">
                                                            <div className="icon-circle bg-primary">
                                                                <i className="fas fa-file-alt text-white"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="small text-gray-500">December 12, 2019</div>
                                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="mr-3">
                                                            <div className="icon-circle bg-success">
                                                                <i className="fas fa-donate text-white"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="small text-gray-500">December 7, 2019</div>
                                                            $290.29 has been deposited into your account!
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="mr-3">
                                                            <div className="icon-circle bg-warning">
                                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="small text-gray-500">December 2, 2019</div>
                                                            Spending Alert: We've noticed unusually high spending for your account.
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown no-arrow mx-1">
                                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="messagesDropdown">
                                                    <h6 className="dropdown-header">
                                                        Message Center
                                                    </h6>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src={require('../img/undraw_profile_1.svg')} alt="..." />
                                                            <div className="status-indicator bg-success"></div>
                                                        </div>
                                                        <div className="font-weight-bold">
                                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                                problem I've been having.</div>
                                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src={require('../img/undraw_profile_2.svg')} alt="..." />
                                                            <div className="status-indicator"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                                                would you like them sent to you?</div>
                                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src={require('../img/undraw_profile_3.svg')} alt="..." />
                                                            <div className="status-indicator bg-warning"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                                                the progress so far, keep up the good work!</div>
                                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                                alt="..." />
                                                            <div className="status-indicator bg-success"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                                told me that people say this to all dogs, even if they aren't good...</div>
                                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                                </div>

                                            </li>

                                            <li className="nav-item dropdown no-arrow">

                                                <a className="nav-link dropdown-toggle" href="#collapseEleven1" id="userDropdown2" role="button" data-bs-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-envelope fa-fw"></i>
                                                    <FontAwesomeIcon icon={faEnvelope} />



                                                    {resultLength !== 0 ?
                                                        <span className="badge badge-danger badge-counter">{resultLength}</span>
                                                        : null}
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown2" id="collapseEleven1" data-bs-parent="#accordion" >
                                                    {notification.map((element, index) => (
                                                        <Link to={'/student/message'} key={index}


                                                            className="dropdown-item"
                                                        >
                                                            {element.message}</Link>
                                                    ))}

                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="userDropdown">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Profile
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Settings
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Activity Log
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Logout
                                                    </a>
                                                </div>
                                            </li>
                                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown" id="collapseEleven" data-bs-parent="#accordion" >
                                                <a className="dropdown-item"
                                                    onClick={(e) => logout()}

                                                    href="" data-toggle="modal" data-target="#logoutModal">
                                                    <FontAwesomeIcon icon={faSignOutAlt} />

                                                    Logout
                                                </a>
                                            </div>





                                            <div className="topbar-divider d-none d-sm-block"></div>
                                            <li className="nav-item dropdown no-arrow">

                                                <a className="nav-link dropdown-toggle" href="#collapseEleven" id="userDropdown" role="button" data-bs-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                                                    <span>{studentEmail}</span>
                                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{email}</span>

                                                    <img className="img-profile rounded-circle" src={undraw_profile}
                                                    />

                                                </a>

                                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown" id="collapseEleven" data-bs-parent="#accordion" >
                                                    <a className="dropdown-item"
                                                        onClick={(e) => logout()}

                                                        href="" data-toggle="modal" data-target="#logoutModal">
                                                        <FontAwesomeIcon icon={faSignOutAlt} />

                                                        Logout
                                                    </a>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="userDropdown">
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Profile
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Settings
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Activity Log
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Logout
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>}
                        </div>
                        {/* end for topbar */}
                        <Switch>{getRoutes(routes)}</Switch>



                    </div>
                </div>
            </div>

        </div >
    );
}

export default StudentLayout;