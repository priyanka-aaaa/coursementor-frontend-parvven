import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import routes from "./university/UniversityRoutes.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faBook, faDollarSign, faClock, faCog, faBars, faAngleLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import undraw_profile from '../img/undraw_profile.svg';
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
function UniversityLayout(props) {
    const [width, setwidth] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const [redirectToReferrer, setredirectToReferrer] = useState("false");
    const [menuBackground, setmenuBackground] = useState("green");

    const [mounted, setMounted] = useState();
    const [email, setemail] = useState();
    const [universityEmail, setuniversityEmail] = useState();
    const [currentMenu, setcurrentMenu] = useState("dashboard");


    function handletoogleClick() {
        if (width === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setwidth("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
        }
        else {
            setwidth("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }
    function handleCurrentClick(value) {
        setcurrentMenu(value)

    }
    useEffect(() => {

        if (localStorage.getItem('universityId')) {
            var universityId = localStorage.getItem('universityId');
            var mounted = localStorage.getItem('universityToken');
            var universityEmail = localStorage.getItem('universityEmail');
            setMounted(mounted)
            setuniversityEmail(universityEmail);
        }
        else {
            var universityEmail = "";
            setredirectToReferrer("true")
        }

    }, [])

    function logout() {
        localStorage.removeItem("universityId");
        localStorage.removeItem("universityToken");
        localStorage.removeItem("universityName");
        localStorage.removeItem("universityEmail");
        window.location.href = "/universitylogin";
    }
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/university") {
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
                <ul className={width} id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        {width === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" ?
                            <Link to={'/university/dashboard'}  >
                                <img src={images["small-dash-logo.png"]} alt="" />
                            </Link>
                            :
                            <Link to={'/university/dashboard'}  >
                                <img src={images["dash-logo.png"]} alt="" />
                            </Link>

                        }
                        <div className="sidebar-brand-text mx-3">

                        </div>
                    </a>
                    <hr className="sidebar-divider my-0" />

                    {currentMenu === "dashboard" ?
                        <li className="nav-item"
                            onClick={() => handleCurrentClick("dashboard")}
                         
                            data-toggle="tooltip" data-placement="right" title="University">
                            <Link to={'/university/dashboard'} className="nav-link current-tab" >
                                <FontAwesomeIcon icon={faUniversity} />
                                <span>University</span></Link>
                        </li>
                        : <li className="nav-item"
                            onClick={() => handleCurrentClick("dashboard")}

                            data-toggle="tooltip" data-placement="right" title="University">
                            <Link to={'/university/dashboard'} className="nav-link" >
                                <FontAwesomeIcon icon={faUniversity} />
                                <span>University</span></Link>
                        </li>}
                    {currentMenu === "courses" ?
                        <li onClick={() => handleCurrentClick("courses")} className="nav-item"  data-toggle="tooltip" data-placement="right" title="Coures Listingn">
                            <Link to={'/university/courses'} className="nav-link current-tab" data-toggle="tooltip" data-placement="right" title="Coures Listing">
                                <FontAwesomeIcon icon={faBook}

                                />
                                <span>Courses Listing</span></Link>
                        </li> :
                        <li onClick={() => handleCurrentClick("courses")}

                            className="nav-item" data-toggle="tooltip" data-placement="right" title="Coures Listingn">
                            <Link to={'/university/courses'} className="nav-link" data-toggle="tooltip" data-placement="right" title="Coures Listing">
                                <FontAwesomeIcon icon={faBook}

                                />
                                <span>Courses Listing</span></Link>
                        </li>
                    }
                    {currentMenu === "commission" ?
                        <li className="nav-item "
                           
                            data-toggle="tooltip" data-placement="right" title="Set Commission">
                            <Link to={'/university/commission'} className="nav-link current-tab" href="#"
                                onClick={() => handleCurrentClick("commission")}

                            >
                                <FontAwesomeIcon icon={faClock} />
                                <span >Commission</span></Link>
                        </li>

                        : <li className="nav-item " data-toggle="tooltip" data-placement="right" title="Set Commission">
                            <Link to={'/university/commission'} className="nav-link" href="#"
                                onClick={() => handleCurrentClick("commission")}

                            >
                                <FontAwesomeIcon icon={faClock} />
                                <span >Commission</span></Link>
                        </li>}
                    {currentMenu === "summary" ?
                        <li className="nav-item "
                           
                            data-toggle="tooltip" data-placement="right" title="Summary Information"
                        >
                            <Link to={'/university/summary'} className="nav-link current-tab" href="#"
                                onClick={() => handleCurrentClick("summary")}
                            >
                                <FontAwesomeIcon icon={faClock} />
                                <span >Summary Information</span></Link>
                        </li>
                        :
                        <li className="nav-item " data-toggle="tooltip" data-placement="right" title="Summary Information"
                        >
                            <Link to={'/university/summary'} className="nav-link" href="#"
                                onClick={() => handleCurrentClick("summary")}
                            >
                                <FontAwesomeIcon icon={faClock} />
                                <span >Summary Information</span></Link>
                        </li>
                    }



                    {currentMenu === "setting" ?
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Setting"
                            onClick={() => handleCurrentClick("setting")}
                        >
                            <a className="nav-link current-tab" data-bs-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                <FontAwesomeIcon icon={faCog} />
                                <span>Settings </span>
                            </a>
                            <div id="collapseTen" className="collapse" data-bs-parent="#accordion" data-parent="#accordionSidebar" >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link to={'/university/password'} className="collapse-item" href="#">
                                        <span>Change Password</span></Link>
                                    <Link to={'/university/intake'} className="collapse-item" href="#">
                                        <span>Intake</span></Link>
                                </div>
                            </div>
                        </li>
                        :
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Setting"
                            onClick={() => handleCurrentClick("setting")}
                        >
                            <a className="nav-link collapsed" data-bs-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                <FontAwesomeIcon icon={faCog} />
                                <span>Settings </span>
                            </a>
                            <div id="collapseTen" className="collapse" data-bs-parent="#accordion" data-parent="#accordionSidebar" >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link to={'/university/password'} className="collapse-item" href="#">
                                        <span>Change Password</span></Link>
                                    <Link to={'/university/intake'} className="collapse-item" href="#">
                                        <span>Intake</span></Link>
                                </div>
                            </div>
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
                        <div>
                            {redirectToReferrer === "true" ?
                                <Redirect to={'/universitylogin'} />
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

                                                <a className="nav-link dropdown-toggle" href="#collapseEleven" id="userDropdown" role="button" data-bs-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{universityEmail}</span>

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
                        <Switch>{getRoutes(routes)}</Switch>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default UniversityLayout;