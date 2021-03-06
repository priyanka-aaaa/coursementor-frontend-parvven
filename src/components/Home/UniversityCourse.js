import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoaderFrontend from './LoaderFrontend';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    faStar, faGraduationCap, faCalendarCheck, faPhone,
    faEnvelope, faGlobe, faCheckCircle, faAngleDown, faAngleUp

} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import ReadMore from './ReadMore';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));

export default function UniversityCourse() {
    let { slug } = useParams();
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [foundedYear, setfoundedYear] = useState("");
    const [loader, setmyloader] = useState("false");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [showErrorSweetAlert, setshowErrorSweetAlert] = useState("0");
    const [showModal, setshowModal] = useState(false);
    const [showLoginSweetAlert, setshowLoginSweetAlert] = useState("0");

    // start for login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState();
    const [wrongPassword, setwrongPassword] = useState("");
    const [wrongUsername, setwrongUsername] = useState("");
    // end for login
    const [coursesNoValues, setcoursesNoValues] = useState("0");
    // const [myslug, setmyslug] = useState();


    const [formValues, setFormValues] = useState([{
        question: "", answer: ""
    }])
    const [FormAdmissionValues, setFormAdmissionValues] = useState([{
        point: ""
    }])
    const [FormuniversitiesValues, setFormuniversitiesValues] = useState([{
        name: "", email: ""
    }])
    const [FormDocumentValues, setFormDocumentValues] = useState([{
        document: ""
    }])
    const [FormOverviewValues, setFormOverviewValues] = useState([{
        english: "", acceptanceRate: "", cgpa: "", course: "", courseNo: "", foundedYear: "", month: "",
        ranking: "", rate: "", year: ""
    }])
    const [FormPrimaryInformationValues, setFormPrimaryInformationValues] = useState([{
        website: "", country: "", phone: "", type: ""
    }])
    const [universityImageValues, setuniversityImageValues] = useState([{
        logo: "", coverPic: ""
    }])
    const [coursesValues, setcoursesValues] = useState([{
        courseName: "", duration: "", tuitionFee: "", studyField: "", fee: "", courseLevel: "", cgpa: "",
        eligibility: "", english: "", coursewebsite: "", description: "", exam: ""
    }])
    const [similarUniveristyValues, setsimilarUniveristyValues] = useState([{
        universityPrimaryInformation: "", universityOverview: "", universityImage: "", _id: ""
        // universityPrimaryInformation: "", duration: "", tuitionFee: "", studyField: "", fee: "", courseLevel: "", cgpa: "",
        // eligibility: "", english: "", coursewebsite: "", description: "", exam: ""
    }])

    const [rankingValues, setrankingValues] = useState([])
    const [imageVideoValues, setimageVideoValues] = useState([])
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    useEffect(() => {
        window.scrollTo(0, 0)
        function completeUniversityCourse() {
            setmyloader("true")
            const urlMain = process.env.REACT_APP_SERVER_URL + 'universitySlug/' + slug;
            fetch(urlMain, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    var id = data.universities[0]._id;
                    setuniversityId(id)


                    const url7 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/image';
                    fetch(url7, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                            var myuniversityImage = data.universityImage
                            if (myuniversityImage !== undefined) {
                                setuniversityImageValues(myuniversityImage)
                            }
                        })

                    const url4 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/overview';
                    fetch(url4, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                            var myResult = data.universityOverview
                            if (myResult !== undefined) {
                                setFormOverviewValues(data.universityOverview)
                            }
                        })
                    const url5 = process.env.REACT_APP_SERVER_URL + 'universities';
                    fetch(url5, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                            var myuniversitiesResult = data.universities
                            myuniversitiesResult.map((element) => {
                                if (element._id === id) {
                                    setFormuniversitiesValues(element)
                                }
                            })
                        })
                    const url6 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/primaryInformation';
                    fetch(url6, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                            var myresults = data.universityPrimaryInformation;
                            if (Object.keys(myresults).length !== 0) {
                                setFormPrimaryInformationValues(data.universityPrimaryInformation)


                            }
                        })

                    const url8 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/courses';
                    fetch(url8, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                            setmyloader("false")
                            setcoursesValues(data.universityCourses)
                            var myresults = data.universityCourses
                            if (Object.keys(myresults).length > 3) {
                                setcoursesNoValues(1);
                            }
                            else {
                                setcoursesNoValues(0);

                            }

                        })

                })
        }
        completeUniversityCourse()
    }, [])
    var divStyle = {
        backgroundImage: 'url(' + universityImageValues.coverPic + ')'
    }
    function open() {
        setshowModal(true)
    }
    function close() {
        setshowModal(false)
    }
    function handleClick() {
        if (down === "1") {
            setdown("0");
            setup("1")
        }
        else {
            setdown("1");
            setup("0")
        }
    }
    function handleSubmit(event) {
        setemailError("");
        setpasswordError("");
        setwrongUsername("")
        setwrongPassword("")
        event.preventDefault();
        if (email === "") {
            setemailError("Please enter email");
        }
        if (password === "") {
            setPassword("Please enter password");
        }
        else {
            setmyloader("true")
            const obj = {
                email: email,
                password: password
            };
            var myurl = process.env.REACT_APP_SERVER_URL;
            axios.post(myurl + 'student/login', obj)
                .then(result => {
                    let responseJson = result;
                    setmyloader("false")
                    if (responseJson.data.success === true) {

                        setshowModal(false)

                        localStorage.setItem('studentId', responseJson.data.student._id);
                        localStorage.setItem('studentToken', responseJson.data.token);
                        localStorage.setItem('studentName', responseJson.data.student.name);
                        localStorage.setItem('studentEmail', responseJson.data.student.email);

                        setshowLoginSweetAlert("1")
                    }
                    else {
                        if (responseJson.data.message === "Password not matched") {
                            setwrongPassword(" Please enter a correct password")
                        }
                        else {

                            setwrongUsername("Please enter a correct email")
                        }
                    }
                }
                )
                .catch(error => {
                });
        }
    }
    function handleApplyNow(universityID, courseID, session, applicationProgress, mycountry, universityName) {
        if (!localStorage.getItem("studentId")) {
            setshowModal(true)
        }
        else {
            var studentToken = localStorage.getItem("studentToken")
            setmyloader("true")
            const obj = {
                universityID: universityID,
                courseID: courseID,
                session: session,
                applicationProgress: applicationProgress,
                country: mycountry,
                universityName: universityName
            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'student/applications', obj, { headers: { 'Authorization': studentToken } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setshowSweetAlert("1")
                    }
                    else {
                        setshowErrorSweetAlert("1")
                    }
                })
                .catch(error => {

                });
        }
    }
    return (
        <div>

            {loader === "true" ?
                <LoaderFrontend />
                : null}
            {showSweetAlert === "1" ?

                <SweetAlert
                    success
                    title="Success!"
                    onConfirm={(value) => {
                        setshowSweetAlert("0")
                    }}
                >
                    You Are Apply Successfully
                </SweetAlert>
                : null
            }
            {showErrorSweetAlert === "1" ?

                <SweetAlert
                    warning
                    title="Failure!"
                    onConfirm={(value) => {
                        setshowErrorSweetAlert("0")
                    }}
                >
                    Already Applied
                </SweetAlert>
                : null
            }
            <div className="main-content">
                {/*Full width header Start*/}
                <div className="full-width-header">
                    {/*Header Start*/}
                    <Header />
                </div>
            </div>
            <div className="defult-home">
                <div className="main-content">
                    <div className="rs-breadcrumbs img4 cover-pict" style={divStyle} >
                        <div className="breadcrumbs-inner text-center">
                            <h1 className="page-title">{FormPrimaryInformationValues.name}</h1>
                            <ul>
                                <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                                    <a className="active" href="index.html">Home</a>
                                </li>
                                <li>University</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                    <div className="widget-area">
                                        <div className="university-widget mb-50">
                                            <div className="cover"><img src={universityImageValues.coverPic} /></div>
                                            <div className="univer-logo"><img src={universityImageValues.logo} /></div>
                                            <h4>{FormPrimaryInformationValues.name}</h4>
                                            <p>{FormPrimaryInformationValues.state + ", " + FormPrimaryInformationValues.country}<br />
                                                {FormPrimaryInformationValues.type} | Estd. {FormOverviewValues.foundedYear}</p>
                                            <button type="button" className="btn btn-primary btn-lg">Talk to an Expert for FREE</button>
                                        </div>
                                        <div className="recent-posts mb-50">
                                            <div className="widget-title">
                                                <h3 className="title">Get in Touch</h3>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span>
                                                        <FontAwesomeIcon icon={faPhone} />
                                                    </span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        <FontAwesomeIcon icon={faPhone} />
                                                        Call Now
                                                    </span>
                                                    <a href="tel:4401915153000">{FormPrimaryInformationValues.phone}</a>

                                                </div>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">


                                                        <i className="fa fa-calendar"></i>
                                                        Email
                                                    </span>
                                                    <a
                                                        href="mailto:student.helpline@sunderland.ac.uk">{FormuniversitiesValues.email}</a>
                                                </div>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span>
                                                        <FontAwesomeIcon icon={faGlobe} />
                                                    </span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        <i className="fa fa-calendar"></i>
                                                        Website
                                                    </span>
                                                    <a href="https://www.sunderland.ac.uk/">{FormPrimaryInformationValues.website}</a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-8 pr-35 md-pr-15">
                                    <div className="row">
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item">
                                                <ul>


                                                    <li>

                                                        <Link to={'/schools/' + slug} className="nav-link" >Overview</Link>


                                                    </li>

                                                </ul>

                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <div className="blog-item" id="courses">
                                                <div className="blog-content">
                                                    <h3 className="blog-title">Browse Courses</h3>
                                                    <div className="row mb-3" >
                                                        {coursesValues.map((element, index) => (



                                                            <div className="col-sm-6 mb-4" >

                                                                <div>
                                                                    <div className="subcourses_courseBox__3deGG">
                                                                        <div className="subcourses_program__3pkFj col-sm-12 p-0">
                                                                            <img src={images["project-management.png"]} alt="" />

                                                                            <div><span className="subcourses_h-title__sLV10">{element.courseName}</span><span
                                                                                className="subcourses_subHeading__zdEIg">{element.areaOfInterest}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="subcourses_line__T3g-V"></div>
                                                                        <div className="row align-items-center">
                                                                            <div className="col-6 col-sm-4 clearfix">
                                                                                <div className="subcourses_details__3g8AB">
                                                                                    <h3 className="subcourses_c-desc__Dzhnk">
                                                                                        {element.currency === "GBP" ?
                                                                                            <>??</>
                                                                                            :
                                                                                            element.currency === "EUR" ?
                                                                                                <>???</>
                                                                                                :
                                                                                                <>$</>

                                                                                        }
                                                                                        {element.tuitionFee}{" "}  {element.currency}
                                                                                    </h3>
                                                                                    <p className="subcourses_c-title__2MKAy">Fee</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <div className="subcourses_details__3g8AB">
                                                                                    <h3 className="subcourses_c-desc__Dzhnk">{element.duration} Month
                                                                                    </h3>
                                                                                    <p className="subcourses_c-title__2MKAy">Duration</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4">
                                                                                <div className="subcourses_details__3g8AB">
                                                                                    <h3 className="subcourses_c-desc__Dzhnk">{element.english}</h3>
                                                                                    <p className="subcourses_c-title__2MKAy">Education</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4 mt-2">
                                                                                <div className="subcourses_details__3g8AB">
                                                                                    <h3 className="subcourses_c-desc__Dzhnk">{element.courseLevel}</h3>
                                                                                    <p className="subcourses_c-title__2MKAy">Course level</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4 mt-2">
                                                                                <div className="subcourses_details__3g8AB">
                                                                                    <h3 className="subcourses_c-desc__Dzhnk">On Campus </h3>
                                                                                    <p className="subcourses_c-title__2MKAy">Mode of Degree</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 col-sm-4 mt-2">
                                                                                <div className="subcourses_details__3g8AB">
                                                                                    <h3 className="subcourses_c-desc__Dzhnk">{element.year}{' '}{element.month}</h3>
                                                                                    <p className="subcourses_c-title__2MKAy">Intakes</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12">
                                                                                <div className="subcourses_line__T3g-V">
                                                                                </div>
                                                                                <ReadMore>{element.description}</ReadMore>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right w-100">
                                                                        <button className="btn btn-primary  w-100" onClick={() => handleApplyNow(universityId, element._id, element.year + element.month, "first", FormPrimaryInformationValues.country, FormPrimaryInformationValues.name)}>Apply Now
                                                                            <img
                                                                                src="https://images.leverageedu.com/university/whitearrow.svg" />
                                                                        </button>
                                                                    </div>
                                                                </div>



                                                            </div>

                                                        ))}
                                                        <div>

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
                </div>
                <Footer />

            </div >
            <Modal className="modal-container"
                show={showModal}
                onHide={() => close()}

                animation={true}
                bsSize="small">

                <Modal.Header closeButton>
                    <Modal.Title>Student Login Form</Modal.Title>
                </Modal.Header>


                <div className="from-start" >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email </label>
                            <input type="email" className="form-control " id="email"
                                placeholder="Enter email" name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div style={{ color: "red" }}> {wrongUsername}</div>


                        </div>
                        <span style={{ color: "red" }}>{emailError}</span>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control " id="uname"
                                placeholder="Password" name="name"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div style={{ color: "red" }}> {wrongPassword}</div>
                        </div>
                        <span style={{ color: "red" }}> {passwordError}</span>
                        <button type="submit" className="btn btn-website">Login</button>
                    </form>

                    <a onClick={() => open()} >     Forgot your Password?</a>

                    <p>Don't have an account? Click here to
                        <Link to={'/Universityregister'} className="" >
                            Register</Link></p>

                </div>



            </Modal>
        </div >
    );
};


