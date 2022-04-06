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
  faAngleRight, faFile,
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
    const url1 = process.env.REACT_APP_SERVER_URL + 'universityCountry/Australia';
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
      setmyloader("true")
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
                  setmyloader("false")
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
            setmyloader("false")
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
                  setmyloader("false")
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
            setmyloader("false")
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
            <h1 className="page-title">Study in Australia
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
                      <p>Capital<br /><strong>Canberra</strong></p>
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
                      <p>Population<br /><strong>26 Mn</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=

                      {images[""]}
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


                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>International Students<br /><strong>869,709</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=

                      {images["economic.webp"]}

                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>GDP<br /><strong>$1.37 Trillion</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["keypad.webp"]}


                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Dialing Code<br /><strong>+61</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img src=
                      {images["money.webp"]}


                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Currency<br /><strong>Australian Dollar</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="study-location-facts_capital__1MYWF">
                    <div className="study-location-facts_imgBox__3psUR"><img
                      src=

                      {images["graduation-hat.webp"]}
                    />
                    </div>
                    <div className="study-location-facts_imgDetails__3qjdN">
                      <p>Universities<br /><strong>43</strong></p>
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
                  <p style={{ marginBottom: '0px' }}>Download your Australia Free Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main content End */}
      <section className="taranding-block" id="top-uni">
        <div className="container">
          <h2>What’s Trending?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=

                    {images["trad-aus1.jpg"]}
                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">Western Australia Reopens for International
                    Students</a></h4>
                  <p className="desc">Western Australia reopens its borders for international students after 2
                    years of isolatio...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=
                    {images["trad-aus2.jpg"]}

                    alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title  mt-3"><a href="#">Master of Supply Chain Management in
                    Australia</a>
                  </h4>
                  <p className="desc">Master of Supply Chain Management is an international degree offered as
                    an
                    MBA in Supply C...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxs-trad">
                <div className="image-wrap">
                  <a href="#"><img src=
                    {images[" trad-aus3.jpg"]} alt="" /></a>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title mt-3"><a href="#">Deakin University Scholarships for International
                    Students</a></h4>
                  <p className="desc">Founded in 1974, Deakin University is a public university located in
                    Victoria, Australia. ...</p>
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
            <FontAwesomeIcon icon={faAngleRight} />

          </span></a>
        </div>
      </section>
      <section className="admission-require" id="adm">
        <div className="container">
          <h2>Admission Requirements</h2>
          <div className="admissionlist">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li><span>


                    <FontAwesomeIcon icon={faFile} /></span>Copy of a valid passport</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>ACT/SAT/LSAT for UG programs</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>English proficiency scores (TOEFL/IELTS)</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>CV/Resume/Essays</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Evidence of funds</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Australian secondary school certificate of
                    education (Year 12) or equivalent or Diploma / Advanced Diploma from the Vocational
                    Education and Training (VET) sector</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>GMAT/GRE scores for PG programs</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Letters of Recommendation</li>
                  <li><span><FontAwesomeIcon icon={faFile} /></span>Statement of Purpose (SOP) </li>
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
                        <li><span>


                          <FontAwesomeIcon icon={faAngleRight} /></span>Agriculture and
                          Environmental
                          Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Education and Training</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Management and Commerce</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Information Technology</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nursing and Allied Health
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>$15,000 to $33,000 (INR 11,15,332- 24,53,731) per year</p>
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
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Agriculture and
                          Environmental
                          Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Hospitality and Tourism</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Education and Training</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Management and Commerce</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Information Technology</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nursing and Allied Health
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>$20,000 to $37,000 (INR 14,87,150- 27,51,153) per year</p>
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
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Agriculture and
                          Environmental
                          Sciences</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Business</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Engineering</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Medicine</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Hospitality and Tourism</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Education and Training</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Management and Commerce</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Information Technology</li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Nursing and Allied Health
                        </li>
                        <li><span><FontAwesomeIcon icon={faAngleRight} /></span>Corporate Administration
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="timeline-box">
                      <h4>Cost Estimate</h4>
                      <p>$58,384- $60,000 (INR 43,38,369- 44,58,450) per year</p>
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
                  <h5 className="name">Temporary Graduate Visa Subclass 485</h5>
                  <h6 className="cost">Cost - AU$1634</h6>
                  <p className="type">Type- Work</p>
                  <p className="desc">This visa is for international students who have recently graduated in
                    Australia. It lets you live, study and work in Australia temporarily.</p>
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
                    <div className="float-left">Canberra</div>
                    <div className="float-right"><span className="celc">11<sup>o</sup></span><span
                      className="fahren">25<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Melbourne</div>
                    <div className="float-right"><span className="celc">15<sup>o</sup></span><span
                      className="fahren">24<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Sydney</div>
                    <div className="float-right"><span className="celc">18<sup>o</sup></span><span
                      className="fahren">25<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Adelaide</div>
                    <div className="float-right"><span className="celc">16<sup>o</sup></span><span
                      className="fahren">26<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Brisbane</div>
                    <div className="float-right"><span className="celc">20<sup>o</sup></span><span
                      className="fahren">29<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Perth</div>
                    <div className="float-right"><span className="celc">18<sup>o</sup></span><span
                      className="fahren">29<sup>o</sup></span></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="temp__list clearfix">
                    <div className="float-left">Gold Coast</div>
                    <div className="float-right"><span className="celc">19<sup>o</sup></span><span
                      className="fahren">28<sup>o</sup></span></div>
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
                    <p className="cost">AU$201 - AU$583</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["food.svg"]}

                    alt="" />
                    <h5 className="name">Food</h5>
                    <p className="cost">AU$243 - AU$341</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=
                    {images["transport.svg"]}


                    alt="" />
                    <h5 className="name">Transport</h5>
                    <p className="cost">AU$96 - AU$583</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="livingBox text-center"><img src=

                    {images["dice.svg"]}
                    alt="" />
                    <h5 className="name">Miscellaneous</h5>
                    <p className="cost">AU$243 - AU$487</p>
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
                    {images["Consulting.web"]}

                  /></span>Law and Legal Studies</li>
                  <li><span><img src=
                    {images["engineering.webp"]}

                  /></span>Architecture</li>
                  <li><span><img src=
                    {images["ealthCare.webp"]}

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
                <h4>Why Study in Australia</h4>
                <p>A country famed for its pioneering innovations, Australia ranks among the top 3 study abroad
                  destinations. Apart from the Group Eight Universities, the island nation houses some of the
                  leading academic institutions offering quality education across fields. Australia is the
                  origin for inventions like Wifi and Google Maps which the world now depends upon. Studying
                  under renowned experts and professionals, students can gain skills and grow abundantly in
                  their unique field of interest.</p>
                <p>Studying in Australia guarantees high academic standards and globally recognised
                  qualifications with education administered by the Australian Qualifications Framework (AQF).
                  From experiencing a serene environment and exploring the world’s largest coral reef,
                  studying in Australia is definitely a unique experience.</p>
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
                <button className="accordion">How much does it cost to study in Australia?</button>
                <div className="panel">
                  <p>The total cost of studying in Australia varies across courses and universities. The
                    average tuition fees for UG courses is $15,000 to $33,000 (INR 11,15,332- 24,53,731 and
                    PG courses is $20,000 to $37,000 (INR 14,87,150- 27,51,153)..</p>
                </div>
                <button className="accordion">How much does a student earn in Australia?</button>
                <div className="panel">
                  <p>A student is entitled to earn a minimum wage of $18.23 (INR 1,354) per hour or $719.20
                    (INR 53,452) per week for working both on-campus and off-campus during the period of
                    their full-time study.</p>
                </div>
                <button className="accordion">How do you get PR in Australia?</button>
                <div className="panel">
                  <p>Points determine one’s eligibility for a PR visa. You must score at least 65 points under
                    the Point’s Grid. The categories to achieve points include age, skills, education,
                    experience, language, and sponsorships.</p>
                </div>
                <button className="accordion">Which is the best course to study in Australia?</button>
                <div className="panel">
                  <p>Being the biggest technology hub, Australia is known for courses like Engineering, Data
                    Science, and Electronics. Apart from these, other popular courses include Business
                    Management, Medicine, Architecture, and Accounting.</p>
                </div>
                <button className="accordion">Which is the best university to study in Australia?</button>
                <div className="panel">
                  <strong> The following are the top-ranked universities in Australia.</strong>
                  <ul>
                    <li>Australian National University</li>
                    <li>The University of Melbourne</li>
                    <li>The University of Sydney</li>
                    <li>University of New South Wales</li>
                    <li>The University of Queensland</li>
                    <li>Monash University</li>
                    <li>The University of Western Australia</li>
                    <li>The University of Adelaide</li>
                    <li>University of Technology Sydney</li>
                    <li>The University of Newcastle</li>
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

