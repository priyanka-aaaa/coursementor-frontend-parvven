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
    const url1 = process.env.REACT_APP_SERVER_URL + 'universityCountry/United Kingdom';
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
            <h1 className="page-title">Study in UK
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
                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Capital<br /><strong>London</strong></p>
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
                      <p>Population<br /><strong>68 Mn</strong></p>
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
                      <p>International Students<br /><strong>485,645</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["economic.webp"]}

                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>GDP<br /><strong>$ 3.12 Trillion</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["keypad.webp"]}

                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Dialing Code<br /><strong>+44</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["money.webp"]}

                    /></div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Currency<br /><strong>Pound Sterling</strong></p>
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
                      <p>Universities<br /><strong>359</strong></p>
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
                  <p>Download your Uk Free Guide</p>
                </div><a id="button"><img src=
                  {images["icon.png"]}

                /></a>
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
                    {images["uk1.webp"]}

                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">All About Kingston University Accommodation
                  </a></h4>
                  <p className="desc">Who wouldn’t want to be a part of one of the UK‘s finest universities?
                    ......</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=
                    {images["uk2.jpg"]}

                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">How to Get bussines Visa </a>
                  </h4>
                  <p className="desc">Europe’s leading investment destination filled with renowned multinational
                    companies......</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=
                    {images["uk3.webp"]}

                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title mt-3"><a href="#">Kingston University Notable Alumni
                  </a></h4>
                  <p className="desc">Kingston University London is a public research university in South West
                    London, England, .... ...</p>
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
          <a href="#" className="consult-btn seeAll">Find Your Dream University<span>
          <FontAwesomeIcon icon={faAngleRight} /></span></a>
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
                  <li><span><FontAwesomeIcon icon={faFile} /></span>GMAT/GRE scores for PG programs</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>A CV (if applicable)</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Statement of Purpose (SOP) </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>TOEFL/IELTS/C1 Advanced scores</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Academic Transcripts</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Portfolio (for specific courses)</li>
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
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Natural Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering and Technology</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Social Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Law</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nursing and Allied Health</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>£9,000 - 30,000 (INR 9,00,000 - 30,00,000) per year</p>
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
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Natural Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering and Technology</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Social Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Law</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nursing and Allied Health</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>
                        Cost Estimate
                        £15,000 - 35,000 (INR 15,00,000 - 35,00,000) per year</p>
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
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Natural Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering and Technology</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Social Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Law</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nursing and Allied Health</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>£12,000 - 80,000 (INR 12,00,000 - 80,00,000) per year</p>
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
                  <h5 className="name">General Student Tier 4</h5>
                  <h6 className="cost">Cost - 339</h6>
                  <p className="type">Type- Study</p>
                  <p className="desc">TThis category is for students coming to the UK for post-16 education. A
                    Tier 4 (General) Student must be at least 16 years old..</p>
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
                    <div className="float-left">London</div>
                    <div className="float-right"><span className="celc">11<sup>o</sup></span><span
                      className="fahren">25<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Melbourne</div>
                    <div className="float-right"><span className="celc">6<sup>o</sup></span><span
                      className="fahren">12<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Glasgow</div>
                    <div className="float-right"><span className="celc">4<sup>o</sup></span><span
                      className="fahren">9<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Coventry</div>
                    <div className="float-right"><span className="celc">4<sup>o</sup></span><span
                      className="fahren">10<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Nottingham</div>
                    <div className="float-right"><span className="celc">3<sup>o</sup></span><span
                      className="fahren">10<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Briningham</div>
                    <div className="float-right"><span className="celc">3<sup>o</sup></span><span
                      className="fahren">10<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">New Castle</div>
                    <div className="float-right"><span className="celc">1<sup>o</sup></span><span
                      className="fahren">12<sup>o</sup></span></div>
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
                    <p className="cost">£341 - £536</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=

                    {images["food.svg"]}
                    alt="" />
                    <h5 className="name">Food</h5>
                    <p className="cost">£78 - £244</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["transport.svg"]}

                    alt="" />
                    <h5 className="name">Transport</h5>
                    <p className="cost">£39 - £78</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["dice.svg"]}

                    alt="" />
                    <h5 className="name">Miscellaneous</h5>
                    <p className="cost">£244 - £488</p>
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
                <h4>Why Study in Uk</h4>
                <p>The United Kingdom is home to the world’s most esteemed universities and is among the popular
                  destinations for studying abroad. Ranked as the best education systems in the world, the British
                  Education System provides a plethora of courses in various subjects including Business,
                  Engineering, Medicine, Arts, and Design delivered through exceptional teaching styles. The
                  curriculum is designed in a flexible way which helps students customize their courses depending
                  on their unique interests. The United Kingdom is among the top countries for advanced research
                  and has contributed consistently to groundbreaking discoveries.
                  ..</p>
                <p> Apart from ranking high in academic excellence, the UK is known for its multicultural ethos that
                  attracts many students globally. Famed for its heritage sites and art, students can also indulge
                  a dynamic culture which makes their stay merrier. Being the global hub of Europe, the country
                  has a high-income economy making it the best place to find various job opportunities..</p>
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
                <button className="accordion">How much does it cost to study in Uk?</button>
                <div className="panel">
                  <p>The fees for courses vary across different universities in the UK. The average cost of UG
                    courses in UK range from £9,000- 30,000 (INR 9,00,000- 30,00,000). The fees for PG courses
                    is around £15,000-35,000 (INR 15,00,000 -35,00,000). MBA courses in UK cost around £12,000-
                    80,000 (INR 12,00,000- 80,00,000)...</p>
                </div>
                <button className="accordion">Is It possible to study In Uk without IELTS</button>
                <div className="panel">
                  <p>Yes, it is possible for you to study in UK without IELTS! The alternatives to IELTS might
                    include online interviews held by the university or a major in English, and high school
                    certification. These might not be applicable for all universities but certain universities
                    do offer this provision. Some of the universities that provide this route include the
                    University of East Anglia, University of Bristol, London Southbank University, Brunel
                    University among others..</p>
                </div>
                <button className="accordion">How Long can one Stay after Studying In Uk</button>
                <div className="panel">
                  <p>According to the new law, Indian students will now have the opportunity of obtaining a
                    two-year work permit upon the completion of their degree thus opening up avenues for
                    permanent settlement in the country. There are immense prospects for a lucrative career
                    after you study in UK. So, it is important that you engage effectively with your course and
                    stay on the lookout for good career opportunities!</p>
                </div>
                <button className="accordion">Which is the best course to study Uk?</button>
                <div className="panel">
                  <p>Being the biggest technology hub, Uk is known for courses like Engineering, Data Science, and
                    Electronics. Apart from these, other popular courses include Business Management, Medicine,
                    Architecture, and Accounting.</p>
                </div>
                <button className="accordion">Which is the best university to study Uk?</button>
                <div className="panel">
                  <strong> The following are the top-ranked universities in Uk</strong>
                  <ul>
                    <li>University of Cambridge</li>
                    <li>The University of Oxford</li>
                    <li>London School of Economics and Political Science</li>
                    <li>University of Bath</li>
                    <li>University of East Anglia</li>
                    <li>University of St Andrews</li>
                    <li>King’s College London</li>
                    <li>University of Birmingham</li>
                    <li>Queen Mary University of London</li>
                    <li>University of York</li>
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

