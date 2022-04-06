import React, { useState, useEffect } from "react";
import Footer from './Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Header from './Header'
import LoaderFrontend from './LoaderFrontend';
import SweetAlert from 'react-bootstrap-sweetalert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Slider from "react-slick";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,faFile,
  faStar, faGraduationCap, faCalendarCheck, faPhone,
  faEnvelope, faGlobe, faCheckCircle, faAngleDown, faAngleUp, faHistory

} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faGoogle, faTwitter, faFacebook,
  faPinterest, faInstagram
} from "@fortawesome/free-brands-svg-icons";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function StudyAustralia() {
  const [UniveristyValues, setUniveristyValues] = useState([{
    universityPrimaryInformation: "", universityOverview: "", universityImage: "", _id: "", slug: ""
  }])
  const [displayPrpoerty, setdisplayPrpoerty] = useState("inline");
  const [data, setdata] = useState([]);
  const [allGroupsUserSpecific, setallGroupsUserSpecific] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [settings, setsettings] = useState([]);

  const [passwordError, setpasswordError] = useState();
  const [wrongPassword, setwrongPassword] = useState("");
  const [wrongUsername, setwrongUsername] = useState("");
  const [studentToken, setstudentToken] = useState();
  const [submitSuccess, setsubmitSuccess] = useState("0");
  const [successMessage, setsuccessMessage] = useState("");
  const [showSweetAlert, setshowSweetAlert] = useState("0");
  const [showLoginSweetAlert, setshowLoginSweetAlert] = useState("0");
  const [loader, setmyloader] = useState("false");
  useEffect(() => {
    window.scrollTo(0, 0)
    const url1 = process.env.REACT_APP_SERVER_URL + 'universityCountry/United States';
    fetch(url1, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data1 => {
        var myresultsUniversity = data1.universities;

        setUniveristyValues(data1.universities)
        if (Object.keys(myresultsUniversity).length > 3) {
          var universityLength = 3
        }
        else {
          var universityLength = Object.keys(myresultsUniversity).length
        }
        var mysettings = {
          infinite: true,
          speed: 500,
          slidesToShow: universityLength,
          arrow: true,
        };
        setsettings(mysettings)
        if (localStorage.getItem("studentToken")) {
          var studentToken = localStorage.getItem("studentToken")
          setstudentToken(studentToken)
          const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
          fetch(url, {
            method: 'GET',
            headers: { 'Authorization': studentToken }
          })
            .then(response => response.json())
            .then(data => {
              setdata(data.studentBookmarks)
              var resultstudentBookmarks = data.studentBookmarks
              let followingIds = resultstudentBookmarks.map(group => group.universityID);
              let allGroupsUserSpecific1 = myresultsUniversity.map(group => (
                { ...group, following: followingIds.includes(group._id) })
              );
              setallGroupsUserSpecific(allGroupsUserSpecific1)
            })
        }
        else {
          var allGroupsUserSpecific1 = data1.universities
          setallGroupsUserSpecific(allGroupsUserSpecific1)
        }
      })
  }, [])
  function open() {
    setshowModal(true)
  }
  function close() {
    setshowModal(false)
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
            setstudentToken(responseJson.data.token)
            const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
            fetch(url, {
              method: 'GET',
              headers: { 'Authorization': responseJson.data.token }
            })
              .then(response => response.json())
              .then(data => {
                setdata(data.studentBookmarks)
                var resultstudentBookmarks = data.studentBookmarks
                let followingIds = resultstudentBookmarks.map(group => group.universityID);
                let allGroupsUserSpecific1 = UniveristyValues.map(group => (
                  { ...group, following: followingIds.includes(group._id) })
                );
                setallGroupsUserSpecific(allGroupsUserSpecific1)
              })
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
  function handleStarClick(value, universityID, name, logo, slug) {
    if (!localStorage.getItem("studentId")) {
      setshowModal(true)
    }
    else {
      if (value === "active") {
        axios.delete(process.env.REACT_APP_SERVER_URL + 'student/bookmarks/' + universityID, { headers: { 'Authorization': studentToken } })
          .then(function (res) {
            if (res.data.success === true) {
              const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
              fetch(url, {
                method: 'GET',
                headers: { 'Authorization': studentToken }
              })
                .then(response => response.json())
                .then(data => {
                  setdata(data.studentBookmarks)
                  setsuccessMessage("You have crossed off This University")
                  setTimeout(() => setsubmitSuccess(""), 3000);
                  setsubmitSuccess(1)
                  var resultstudentBookmarks = data.studentBookmarks
                  let followingIds = resultstudentBookmarks.map(group => group.universityID);
                  let allGroupsUserSpecific1 = UniveristyValues.map(group => (
                    { ...group, following: followingIds.includes(group._id) })
                  );
                  setallGroupsUserSpecific(allGroupsUserSpecific1)
                })
            }
          })
          .catch(error => {
          });
      }
      else {
        const obj = {
          universityID: universityID,
          name: name,
          logo: logo,
          slug: slug

        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'student/bookmarks', obj, { headers: { 'Authorization': studentToken } })
          .then(function (res) {
            if (res.data.success === true) {
              const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
              fetch(url, {
                method: 'GET',
                headers: { 'Authorization': studentToken }
              })
                .then(response => response.json())
                .then(data => {
                  const url = process.env.REACT_APP_SERVER_URL + 'student/bookmarks';
                  fetch(url, {
                    method: 'GET',
                    headers: { 'Authorization': studentToken }
                  })
                    .then(response => response.json())
                    .then(data => {
                      setdata(data.studentBookmarks)
                      setsuccessMessage("You have Shortlisted This University")
                      setTimeout(() => setsubmitSuccess(""), 3000);
                      setsubmitSuccess(1)
                      var resultstudentBookmarks = data.studentBookmarks
                      let followingIds = resultstudentBookmarks.map(group => group.universityID);
                      let allGroupsUserSpecific1 = UniveristyValues.map(group => (
                        { ...group, following: followingIds.includes(group._id) })
                      );
                      setallGroupsUserSpecific(allGroupsUserSpecific1)
                    })
                })
            }
          })
          .catch(error => {
          });
      }
    }
  }
  return (
    <div>

      {submitSuccess === 1 ? <div className="Show_success_bookmark">
        <strong>Success!</strong> {successMessage}
      </div> : null}
      {loader === "true" ?
        <LoaderFrontend />
        : null}
      {showLoginSweetAlert === "1" ?
        <SweetAlert
          success
          title="Success!"
          onConfirm={(value) => {
            setshowLoginSweetAlert("0")
          }}
        >
          You Are Login Successfully. Now You Can Bookmark University
        </SweetAlert>
        : null
      }
      <div className="main-content">
        {/*Full width header Start*/}
        <div className="full-width-header">
          {/*Header Start*/}
          <Header />


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
              <a href="index.html"><img

                src={images["logo.png"]} alt="logo" /></a>
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
                <li><a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a></li>
                <li><a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li><a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a></li>
              </ul>
            </div>
          </nav>
          {/* Canvas Menu end */}
        </div>
        {/*Full width header End*/}
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img1">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Study in USA
            </h1>
            <a className="readon started" href="#"> Apply Now</a>
          </div>
        </div>
        {/* Breadcrumbs End */}
        <section id="secondaryNavBar" style={{ display: 'block' }}>
          <ul>
            <li className><a href="#fast"> FAST FACTS</a></li>
            <li className><a href="#top-uni"> TOP UNIVERSITIES</a></li>
            <li className><a href="#adm"> ADMISSIONS</a></li>
            <li className><a href="#visa"> VISA</a></li>
            <li className><a href="#cost"> COST OF LIVING</a></li>
            <li className><a href="#workopp"> WORK OPPORTUNITIES</a></li>
            <li className><a href="#faq"> FAQs</a></li>
          </ul>
        </section>
        <div className="container">
          <div className="row  mt-5 mb-5">
            <div className="col-sm-10 ">
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img
                      src=
                      {images["washington-monument.webp"]}
                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Capital<br /><strong>Washington DC</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=

                      {images["population.png"]}
                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Population<br /><strong>333 Million</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["language.png"]}


                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Language<br /><strong>English</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["int-student.png"]}


                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>International Students<br /><strong>1.1 Mn</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=

                      {images["economic.webp"]}
                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>GDP<br /><strong>$22.675 Trillion</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=

                      {images["keypad.webp"]}
                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Dialing Code<br /><strong>+1</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=

                      {images["money.webp"]}
                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Currency<br /><strong>US Dollar</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["graduation-hat.webp"]}


                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Universities<br /><strong>3982</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="study-location-facts_rankingBox__2pQ44 mobile-hide">
                <img src=

                  {images["7.jpg"]}
                />
              </div>
              <div className="study-location-facts_studyGuide__isgq9 mobile-hide">
                <div className="textC ">
                  <p>Download your USA Free Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main content End */}
      <section className="taranding-block">
        <div className="container">
          <h2>What’s Trending?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=
                    {images["usa-1.png"]}

                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">Top MBA College In USA
                  </a></h4>
                  <p className="desc">The first MBA program in the 20th century was started at the US’s oldest and
                    best business......</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=

                    {images["usa-2.jpeg"]}
                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">Top Universities In California</a>
                  </h4>
                  <p className="desc">California is known for its extravagant beaches, boisterous festivals, and
                    bustling Hollyw......</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=
                    {images["usa-3.png"]}

                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title mt-3"><a href="#">North Western University Notable Alumni</a></h4>
                  <p className="desc">Northwestern Institution is a private research university located in
                    Evanston, Illinois. I... ...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="taranding-block" id="top-uni">
        <div className="container">
          <h2>Top Universities</h2>
          <Slider {...settings}>

            {allGroupsUserSpecific.map((element, index) => (


              <div className="uniBlock" key={index}>
                {/* start for bookmark */}


                {/* end for bookmark */}
                <div className="headerBlock"><a href="#" target="_blank"><img className="logo"
                  src=
                  {element.universityImage.logo}


                /></a>
                  <div className="nameBlock">

                    <div className="name">{element.universityPrimaryInformation.name}</div>
                    <div className="address">{element.universityPrimaryInformation.state}, {element.universityPrimaryInformation.country}</div>

                    {element.following === true ?
                      <img onClick={() => handleStarClick("active", element._id, element.universityPrimaryInformation.name, element.universityImage.logo, element.universityPrimaryInformation.slug)} src=
                        {images["starActive.png"]} alt=""
                        style={{
                          width: "37px",
                          height: "33px",
                          display: displayPrpoerty
                        }}
                      />
                      :
                      <img onClick={() => handleStarClick("inactive", element._id, element.universityPrimaryInformation.name, element.universityImage.logo, element.universityPrimaryInformation.slug)} alt=""
                        src={images["starInactive.png"]}
                        style={{
                          width: "37px",
                          height: "33px",
                          display: displayPrpoerty
                        }}
                      />
                    }
                  </div>
                </div>
                <div className="detailBlock">
                  <div className="detail"><img className="logo" src=""

                  />
                    <div className="content">
                      <div className="value">6</div>
                      <div className="description">Minimum IELTS Required</div>
                    </div>
                  </div>
                  <div className="detail"><img className="logo" src=
                    {images["ranking.web"]}


                  />
                    <div className="content">
                      <div className="value">{element.universityOverview.ranking}</div>
                      <div className="description">Ranking</div>
                    </div>
                  </div>
                </div>
                <Link to={'/schools/' + element.universityPrimaryInformation.slug} target="_blank" className="redirector">
                  Apply Now
                </Link>

              </div>


            ))}


          </Slider>
          <a href="#" className="consult-btn seeAll">Find Your Dream University<span><FontAwesomeIcon icon={faAngleRight} /></span></a>
        </div>
      </section>
      <section className="admission-require" id="adm">
        <div className="container">
          <h2>Admission Requirements</h2>
          <div className="admissionlist">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Copy of a valid passport</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>ACT/SAT/LSAT for UG programs</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Academic Reference Letters, the number of
                    reference letters depends from university to university</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>CV/Resume</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Essays (if demanded by the university)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Certificates of extracurricular activities</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Proof of English proficiency (TOEFL/IELTS test
                    scores)</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Academic Transcripts from the previous study</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Letters of recommendation from the
                    employer/manager (if applicable)</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Statement of Purpose (SOP)</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Evidence of funds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rs-partner pt-80 pb-70">
        <div className="container">
          <div className="freedemo">
            <div className="row">
              <div className="col-md-9">
                <h4><span>Get your Dream IELTS or GMAT Score with Leverage Live Classes</span>
                  Learn from the Best Coursementor</h4>
              </div>
              <div className="col-md-3">
                <a className="readon started" href="#"> Book Your Free Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="admission-timeline">
        <div className="container">
          <div className="timelinetab">
            {/* Nav tabs */}
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">After 12th / UG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu1">Masters</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu2">MBA</a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div id="home" className="container tab-pane active"><br />
                <div className="row">
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>How to Apply</h4>
                      <p>UG Applications are submitted directly through the websites of each university
                      </p>
                    </div>
                    <div className="timeline-box">
                      <h4>Popular Programs</h4>
                      <ul>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Agriculture and Environmental
                          Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Maths and Computer Sciences
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Social Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Physical and Life Sciences
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Psychology</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>$24,000- $32,000 (INR 17,84,745 -23,79,660) per year</p>
                    </div>
                    <div className="timeline-box">
                      <h4>Popular Universities</h4>
                      <div className="un-logo">
                        <div className="row">
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo1.jpg"]}

                              alt="unlogo" />
                          </div>
                          <div className="col-md-4">
                            <img src=

                              {images["aus-logo2.jp"]}
                              alt="unlogo2" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo3.jpg"]}

                              alt="unlogo3" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo4.jpg"]}

                              alt="unlogo" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo5.jpg"]}

                              alt="unlogo2" />
                          </div>
                          <div className="col-md-4">
                            <img src=

                              {images["aus-logo6.jpg"]}
                              alt="unlogo3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu1" className="container tab-pane fade"><br />
                <div className="row">
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>How to Apply</h4>
                      <p>PG applications are directly sent to the universities via online or offline modes
                      </p>
                    </div>
                    <div className="timeline-box">
                      <h4>Popular Programs</h4>
                      <ul>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Agriculture and Environmental
                          Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nutrition</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Maths and Computer Sciences
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Social Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Physical and Life Sciences
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Psychology</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>$30,000 - $35,000 (INR 22,30,932- 26,02,754) per year</p>
                    </div>
                    <div className="timeline-box">
                      <h4>Popular Universities</h4>
                      <div className="un-logo">
                        <div className="row">
                          <div className="col-md-4">
                            <img src=
                              {images["us-logo1.jpg"]}

                              alt="unlogo" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo2.jpg"]}

                              alt="unlogo2" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo3.jpg"]}

                              alt="unlogo3" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo4.jpg"]}

                              alt="unlogo" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["us-logo5.jpg"]}

                              alt="unlogo2" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo6.jpg"]}

                              alt="unlogo3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu2" className="container tab-pane fade"><br />
                <div className="row">
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>How to Apply</h4>
                      <p>MBA applications are submitted directly to the universities</p>
                    </div>
                    <div className="timeline-box">
                      <h4>Popular Programs</h4>
                      <ul>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Agriculture and Environmental
                          Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nutrition</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Maths and Computer Sciences
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Entrepreneurship</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Physical and Life Sciences
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Psychology</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>$60,000- $48,000 (INR 44,61,864 - 35,69,491) per year</p>
                    </div>
                    <div className="timeline-box">
                      <h4>Popular Universities</h4>
                      <div className="un-logo">
                        <div className="row">
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo1.jpg"]}

                              alt="unlogo" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo2.jpg"]}

                              alt="unlogo2" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo3.jpg"]}

                              alt="unlogo3" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo4.jpg"]}

                              alt="unlogo" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo5.jpg"]}

                              alt="unlogo2" />
                          </div>
                          <div className="col-md-4">
                            <img src=
                              {images["aus-logo6.jpg"]}

                              alt="unlogo3" />
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
      </section>
      <section className="postadmission" id="visa">
        <div className="container">
          <h2>Post Admission Experience</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="visa-opt">
                <h5>Visa Options</h5>
                <div className="visaBox blue">
                  <h5 className="name">J-1</h5>
                  <h6 className="cost">Cost - $160</h6>
                  <p className="type">Type- study</p>
                  <p className="desc">The J-1 visa is for people who wish to take part in work-and-study-based
                    exchange and visitor programs in the U.S. These programs are sponsored by an ...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Weather">
              <div className="row">
                <div className="col-sm-12">
                  <div className="clearfix ">
                    <h5 className="options__title float-left">Weather</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 text-right"><span className="mr-2">Min</span> <span
                  className="mr-3">Max</span>
                </div>
                <div className="col-sm-6 text-right mobile-hide"><span className="mr-2">Min</span> <span
                  className="mr-3">Max</span></div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Washington DC</div>
                    <div className="float-right"><span className="celc">2<sup>o</sup></span><span
                      className="fahren">13<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Boston</div>
                    <div className="float-right"><span className="celc">-1<sup>o</sup></span><span
                      className="fahren">8<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">New York</div>
                    <div className="float-right"><span className="celc">0<sup>o</sup></span><span
                      className="fahren">9<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Los Angeles</div>
                    <div className="float-right"><span className="celc">11<sup>o</sup></span><span
                      className="fahren">21<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">San Fransisco</div>
                    <div className="float-right"><span className="celc">10<sup>o</sup></span><span
                      className="fahren">17<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Chicago</div>
                    <div className="float-right"><span className="celc">1<sup>o</sup></span><span
                      className="fahren">7<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Alanta</div>
                    <div className="float-right"><span className="celc">6<sup>o</sup></span><span
                      className="fahren">19<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">San Diego</div>
                    <div className="float-right"><span className="celc">12<sup>o</sup></span><span
                      className="fahren">19<sup>o</sup></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50" id="cost">
            <div className="col-md-6">
              <h5>Cost Of Living</h5>
              <div className="cost-pict">
                <img src=
                  {images["Ellipse.webp"]}

                  alt="elip" />
                <span className="needle low" />
              </div>
              <div className="row">
                <div className="col-12 d-flex">
                  <div className="low_text">
                    <p>Low</p>
                  </div>
                  <div className="high_text">
                    <p>High</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Monthly Living Expenses</h5>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["rent.svg"]}

                    alt="" />
                    <h5 className="name">Rent</h5>
                    <p className="cost">$600 - $1000</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["food.svg"]}

                    alt="" />
                    <h5 className="name">Food</h5>
                    <p className="cost">$350 - $500</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=

                    "images/transport.svg"
                    alt="" />
                    <h5 className="name">Transport</h5>
                    <p className="cost">$500 - $1000</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["dice.sv"]}

                    alt="" />
                    <h5 className="name">Miscellaneous</h5>
                    <p className="cost">$500 - $1000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rs-partner pt-80 pb-70">
        <div className="container">
          <div className="freedemo">
            <div className="row">
              <div className="col-md-9">
                <h4><span>Worried About How Much You Will Be Spending?</span>
                  Get a Personalised Monthly Expense Estimate</h4>
              </div>
              <div className="col-md-3">
                <a className="readon started" href="#">Calculate Your Expenses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="carrer-work" id="workopp">
        <div className="container">
          <h2>Careers + Work Opportunities</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="care-list">
                <ul>
                  <li><span><img src=
                    {images["arts.webp"]}

                  /></span>Arts and Humanities</li>
                  <li><span><img src=
                    {images["Consulting.webp"]}

                  /></span>Law and Legal Studies</li>
                  <li><span><img src=
                    {images["engineering.webp"]}

                  /></span>Architecture</li>
                  <li><span><img src=
                    {images["healthCare.webp"]}

                  /></span>Medicine and Life Sciences</li>
                  <li><span><img src=
                    {images["Business.webp"]}

                  /></span>Social Sciences</li>
                  <li><span><img src=
                    {images["infoTech.webp"]}

                  /></span>Engineering and Technology</li>
                  <li><span><img src=
                    {images["arts.webp"]}

                  /></span>Design</li>
                  <li><span><img src=
                    {images["Consulting.webp"]}

                  /></span>Natural Sciences</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="car-pict"><img src=
                {images["careerswork.jpg"]}

              /></div>
            </div>
          </div>
        </div>
      </section>
      <div className="rs-partner">
        <div className="container">
          <div className="freedemo">
            <div className="row">
              <div className="col-md-12">
                <h4>Why Study in USA</h4>
                <p>The United States of America is amongst the most popular study destinations globally, housing
                  the world’s top-ranked institutions. It is known to host the highest number of international
                  students from all over the globe. Studying in the USA offers a perfectly blended student
                  experience with an exciting campus environment and cultural diversity.</p>
                <p>The melting-pot country provides an ideal environment for students’ developmental growth
                  through flexible education methods and promotes creative thinking in various fields of
                  study. It houses all 8 Ivy League universities of the world, of which Harvard University
                  holds the highest rank in the country and is considered the most prestigious. Thanks to the
                  sheer size of the country and a large number of schools and universities, there is a
                  university suited for each student. From the breathtaking L.A. beaches to the Big Apple, the
                  United States is truly the land of opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="faq" id="faq">
        <div className="container">
          <h2>FAQs</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="faq-block">
                <button className="accordion">Can I study in USA for free??</button>
                <div className="panel">
                  <p>There are various private and government scholarships available for studying in USA that
                    offer 100% coverage of their major expenses like tuition fees, accommodation, health
                    insurance, etc...</p>
                </div>
                <button className="accordion">what exam Required For Study In USA?</button>
                <div className="panel">
                  <p>Qualifying entrance level exams are necessary when it comes to fulfilling your dream of
                    studying abroad. For those who are willing to study in the USA, it will be mandatory for
                    you to qualify for IELTS, TOEFL along with subject/ program related exams like SAT/ACT
                    or GMAT/GRE..</p>
                </div>
                <button className="accordion">How much it will Cost to Study In USA?</button>
                <div className="panel">
                  <p>The average cost to study in USA will totally depend on the program as well as the living
                    standards you opt for. If you are about to pursue UG courses, your average tuition fee
                    will be around INR 17,80,000- 23, 00,000. On the other hand, seeking a PG degree in the
                    country will cost you around INR 26,00,000- 22,50,000..</p>
                </div>
                <button className="accordion">Is IELTS required for study in USA</button>
                <div className="panel">
                  <p>Yes, IELTS is one of the most prominent requirements when it comes to studying in USA.
                    But, there are a few universities that allow admissions without undertaking the score of
                    IELTS..</p>
                </div>
                <button className="accordion">which is the best university for study in USA?</button>
                <div className="panel">
                  <strong> The following are the top-ranked universities in Australia.</strong>
                  <ul>
                    <li>Stanford University</li>
                    <li>Harvard University</li>
                    <li>California Institute of Technology (Caltech)</li>
                    <li>Massachusetts Institute of Technology</li>
                    <li>University of California, Berkeley</li>
                    <li>Yale University</li>
                    <li>University of California Los Angeles</li>
                    <li>Princeton University</li>
                    <li>University of Chicago</li>
                    <li>Johns Hopkins University</li>
                    <li>University of Pennsylvania</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-pict"><img src=
                {images["faq.webp"]}

                alt="faq" /></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* Footer Start */}
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
    </div>



  );
}

