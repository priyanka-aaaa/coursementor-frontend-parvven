import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';

import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoaderRegister from './LoaderRegister';
import axios from 'axios';
import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import SweetAlert from 'react-bootstrap-sweetalert';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
var settingsBlog = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settingsBlog: {
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settingsBlog: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settingsBlog: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
};
var settings3 = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
var settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
};

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function Home() {
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
  const [UniveristyValues, setUniveristyValues] = useState([{
    universityPrimaryInformation: "", universityOverview: "", universityImage: "", _id: "", slug: ""
  }])


  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [nameError, setnameError] = useState("");

  const [phoneError, setphoneError] = useState("");


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
  function handleRegisterFormSubmit(event) {
    setnameError("");
    setemailError("");
    setphoneError("");
    event.preventDefault();
    if (name === "") {
      setnameError("Please enter name");
    }
    if (email === "") {
      setemailError("Please enter email");
    }
    if (phone === "") {
      setphoneError("Please enter phone number");
    }
    if (isValidPhoneNumber(phone) === false) {
      setphoneError("Please enter correct phone number");
    }
    else {
      setmyloader("true")

      const obj = {
        name: name,
        email: email,
        phone: phone

      };
      axios.post(process.env.REACT_APP_SERVER_URL + 'student/register', obj)
        .then(function (res) {
          setmyloader("false")

          if (res.data.success === true) {
            setshowSweetAlert("1")
            setName("");
            setEmail("");
            setPhone("");

          }
          else if (res.data.message === "Student already exist") {
            setemailError("Email already exist");
          }
          else {

          }
        })
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
  function handlecountryUniversity(value) {
    setmyloader("true")

    const url1 = process.env.REACT_APP_SERVER_URL + 'universityCountry/' + value;
    fetch(url1, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data1 => {
        var myresultsUniversity = data1.universities;
        setmyloader("false")
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


  }
  return (

    <div>
      {submitSuccess === 1 ? <div className="Show_success_bookmark">
        <strong>Success!</strong> {successMessage}
      </div> : null}
      {loader === "true" ?
        <LoaderRegister />
        : null}
      {showSweetAlert === "1" ?
        <SweetAlert
          success
          title="Success!"
          onConfirm={(value) => {
            setshowSweetAlert("0")
          }}
        >
          You are registered successfully. Please check your email for password.
        </SweetAlert>
        : null
      }
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
          {/*Header End*/}

        </div>
        {/*Full width header End*/}
        {/* Banner Section Start */}
        <div className="rs-banner style3 modify2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 md-mb-50 order-last">
                <div className="banner-img">

                  <img src={images["cbanner-5.png"]}
                    alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1 className="title"><span>No one like you.</span><br /> No place like this Coursementor</h1>
                  <p className="desc">
                    It has never been more competitive for universities and colleges to recruit students to
                    their campuses.Institutions of higher learning have to stand out from hundreds if not
                    thousands of competing schools.
                  </p>
                  <ul className="banner-btn">


                    <li>
                      <Link to={'/country'} className="readon started" href="#">

                        Get Started</Link>

                    </li>

                  </ul>
                </div>
                {/* Partner Start */}
                <div className="rs-partner style2 modify1 pt-50 ">
                  <p className="title">Trusted By 5000+ Worldwide Customers:</p>
                  <Slider {...settings3}>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-1.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-2.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-3.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-4.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-5.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-6.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-7.png"]} alt="" />
                      </a>
                    </div>
                    <div className="Trusted-Slider">
                      <a href="#">
                        <img src={images["pt-8.png"]} alt="" />
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Banner Section End */}
        {/* Services Section Start */}
        <div className="rs-services style2 modify1 pt-50 pb-50 mt-50 mb-50">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">We Are Best</span>
              <h2 className="title">
                Course Mentor
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part purple-bg">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={images["service-6.png"]} alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Student </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Are you a student looking to study abroad in Canada, the United States, the United Kingdom, or Australia? Register to let our team of experts guide you through<br></br> your journey.
                          </p>
                        </div>
                        <div className="front-btn-part">
                          {/* <a className="readon view-more" href="#">Student Registration</a> */}
                          <Link to={'/StudentRegister'} className="readon view-more" href="#">Student Registration</Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part gold-bg">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={images["universities-icon.png"]} alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Recruitment Partners</a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Do you recruit prospective students who want to study in Canada, the United States, the United Kingdom, or Australia? Register to become an Course Mentor Certified Recruitment Partner.
                          </p>
                        </div>
                        <div className="front-btn-part">
                          {/* <a className="readon view-more" href="#">Recruiter Registration</a> */}
                          <Link to={'/AgentRegister'} className="readon view-more" href="#">Recruiter Registration</Link>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part blue-bg">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={images["patner.png"]} alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Partner Schools </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Become an Course Mentor partner school to diversify your campus by attracting qualified students from around the world. Complete this form and our Partner Relations team will be in touch.
                          </p>
                        </div>
                        <div className="front-btn-part">
                          {/* <a className="readon view-more" href="#">Partner Inquiry</a> */}
                          <Link to={'/Universitylogin'} className="readon view-more" href="#">University Registration</Link>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section End */}
        {/* About Section Start */}
        <div className="rs-about style2 modify2 gray-color pt-120 pb-120 md-pt-80 ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 md-mb-50">
                <div className="sec-title mb-30">
                  <div className="sub-text style4-bg">CourseMentor</div>
                  <h2 className="title pb-20">
                    What kind of help do you need? Study Abroad Expert
                  </h2>
                  <div className="desc">
                    Thinking of studying abroad? But don't know which
                    universities &amp; courses are best-fit for you!
                    Try our AI powered Course Finder. Feed in your
                    preferences, let the AI match them against millions of
                    data points &amp; voila! you get what you are looking for,
                    saving you hours of research.
                  </div>
                </div>
                {/* Skillbar Section Start */}
                <div className="rs-skillbar style1 home4">
                  <div className="cl-skill-bar">
                    <div className="btn-part mt-45">
                      {/* <a className="readon started" href="course_finder_select_country.html">Get Started</a> */}
                      <Link to={'/country'} className="readon started" href="#">

                        Get Started</Link>
                    </div>
                  </div>
                </div>
                {/* Skillbar Section End */}
              </div>
              <div className="col-lg-6 pl-65 md-pl-15">
                <div className="about-img">
                  <img src={images["ab-5.png"]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section End */}
        {/* Industry Section Start */}
        {/* <div className="rs-industry pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">Work For Any Industry</span>
              <h2 className="title">
                Best Solutions, For All Organizations
              </h2>
            </div>
            <div className="all-services">
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["style3-1.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Find Programs<br></br>
                      Faster</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["spport-team.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Helpful and Dedicated<br></br> Support Team</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["scholarship.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Access to Exclusive<br></br>  Scholarships</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["style3-10.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">One Easy Application<br></br> Platform</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["style3-5.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Knowledgeable<br></br> Support Team</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={images["ssm-8.png"]} alt="" />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Data Driven<br></br>
                      Insights</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> */}


        <div className="rs-industry pt-50 pb-50  un-acc-program">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">  University</span>
              <h2 className="title">
                Accelerator Programs
              </h2>
            </div>
            <div className="all-country">
              <div className='row'>
                <h6>Browse by Country</h6>
                <div className='brows-count-list'>
                  <ul>
                    <li><a className="active" onClick={() => handlecountryUniversity("Australia")} >Australia</a></li>
                    <li><a onClick={() => handlecountryUniversity("United States")}>USA</a></li>
                    <li><a onClick={() => handlecountryUniversity("United Kingdom")}>UK</a></li>

                    <li><a onClick={() => handlecountryUniversity("New Zealand")}>New Zealand</a></li>
                    <li><a onClick={() => handlecountryUniversity("Germany")}>Germany</a></li>
                    <li><a onClick={() => handlecountryUniversity("Canada")}>Canada</a></li>
                    <li><a onClick={() => handlecountryUniversity("Cyprus")}>Cyprus</a></li>

                  </ul>
                </div>
              </div>

              <Slider {...settings}>

                {allGroupsUserSpecific.map((element, index) => (

                  <div className="row">
                    <div className="col-md-4">
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
                            <div className="star">
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
                        </div>
                        <div className="detailBlock">
                          <div className="detail"><img className="logo" src=""

                          />
                            <div className="content">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="value">6</div>
                                  <div className="description">Minimum IELTS Required</div>
                                </div>
                                <div className="col-md-6">
                                  <div className="value">{element.universityOverview.course} </div>
                                  <div className="description">Popular Courses</div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="value">{element.universityOverview.courseNo} </div>
                                  <div className="description"> No. of courses</div>
                                </div>
                                <div className="col-md-6">
                                  <div className="value">{element.universityOverview.ranking}</div>
                                  <div className="description">Ranking</div>
                                </div>
                              </div>





                            </div>
                          </div>
                          {/* <div className="detail"><img className="logo" src=
                        {images["ranking.web"]}


                      />
                        <div className="content">
                          <div className="value">{element.universityOverview.ranking}</div>
                          <div className="description">Ranking</div>
                        </div>
                      </div> */}
                        </div>
                        <Link to={'/schools/' + element.universityPrimaryInformation.slug} target="_blank" className="redirector">
                          Apply Now
                        </Link>

                      </div>
                    </div>
                  </div>



                ))}
              </Slider>



            </div>
          </div>
        </div>





        {/* About Section Start */}
        <div className="rs-about bookingblock modify2 pt-50 pb-50 ">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-8 md-mb-50">
                <form onSubmit={handleRegisterFormSubmit}>
                  <div className='book-counseling'>
                    <h4>Book a Free Counseling Session</h4>

                    <div className="form-group">
                      <label htmlFor="name" className="">Name</label>
                      <input name="name" className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" id="name" placeholder="Enter Your Name" required />
                      <div style={{ color: "red" }}> {nameError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile" className="">Email</label>
                      <input name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" type="text" id="phone" placeholder="Enter Your Email" />
                      <div style={{ color: "red" }}>{emailError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile" className="">Mobile</label>
                      <PhoneInput
                        placeholder="Enter phone number"
                        required
                        value={phone}
                        onChange={setPhone} />
                      {/* <input name="phone" className="form-control" type="number" id="phone" placeholder="Enter Your Mobile" /> */}

                      <div style={{ color: "red" }}> {phoneError}</div>
                    </div>

                    <div className='tabblock'>
                      <h5>What level of study are you looking to go for?</h5>
                      <div className='btngroup'>
                        <a href='#' className='btn btn-bachler '> Bachelor's</a>
                        <a href='#' className='btn btn-master'> Master's</a>
                      </div>
                      <div className='choose-country'>
                        <h5>Which country are you planning to study in?</h5>
                        <div className="brows-count-list"><ul><li><a href="#">Germany</a></li><li><a href="#">USA</a></li><li><a href="#">Ireland</a></li><li><a href="#">UK</a></li><li><a href="#">Canada</a></li><li><a href="#">Australia</a></li><li><a href="#">France</a></li><li><a href="#">Other</a></li></ul></div>
                      </div>
                      <p>By submitting this form, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>

                      {/* <a className="readon started" href="#">Submit</a> */}
                      <button type="submit" className="readon started">Submit</button>
                    </div>

                  </div>
                </form>
              </div>
              <div className="col-lg-4 pl-65 md-pl-15">
                <div className="about-img girlpict">
                  <img src={images["girl.png"]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section End */}


        <div className="rs-technology gray-color pt-50 pb-50 mt-50 mb-50 uni-partlogo">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">Logo</span>
              <h2 className="title title2">
                University Partners
              </h2>
            </div>
            <div className="row">
              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["pt-1.png"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["pt-2.png"]}

                        alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["pt-3.png"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=
                        {images["pt-4.png"]}

                        alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["pt-5.png"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>
              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["pt-6.png"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo1.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo2.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo3.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo4.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo5.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo6.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo7.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo8.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo9.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>

              <div className=" col-md-3 col-sm-4 col-6">
                <div className="technology-item">
                  <a href="#">
                    <div className="logo-img">
                      <img src=

                        {images["un-logo10.webp"]}
                        alt="" />
                    </div>
                  </a>
                </div>
              </div>


            </div>
            <div className="col-lg-12 text-center">
              <div className="btn-part mt-30">
                <a className="readon started" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Section End */}
        {/* Blog Section Start */}
        <div id="rs-blog" className="rs-blog pt-50 pb-50 mt-50 mb-50">
          <div className="container">
            <div className="sec-title2 text-center mb-30">
              <span className="sub-text gold-color">Blogs</span>
              <h2 className="title title2">
                Latest Blogs
              </h2>
            </div>
            <Slider {...settingsBlog}>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-1.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">Software Development</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Necessity May Give Us Your Best Virtual
                    Court System</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-2.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#"> Web Development</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Tech Products That Makes Its Easier to
                    Stay at Home</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="blog-details.html"><img src={images["bmh-3.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">It Services</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Open Source Job Report Show More Openings
                    Fewer</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-4.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">Artifical Intelligence</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Types of Social Proof What its Makes Them
                    Effective</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-5.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">Digital Technology</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Tech Firms Support Huawei Restriction,
                    Balk at Cost</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
              <div className="blog-item">
                <div className="image-wrap">
                  <a href="#"><img src={images["bmh-6.jpg"]} alt="" /></a>
                  <ul className="post-categories">
                    <li><a href="#">It Services</a></li>
                  </ul>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title"><a href="#">Servo Project Joins The Linux Foundation
                    Fold Desco</a></h3>
                  <p className="desc">We denounce with righteous indige nation and dislike men who are so
                    beguiled...</p>
                  <div className="blog-button"><a href="#">Learn More</a></div>
                </div>
              </div>
            </Slider>

          </div>
        </div>
        {/* Blog Section End */}
        {/* Testimonial Section Start */}
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="testi-img">
                  <img src={images["testimonial-3.png"]} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title">
                  <div className="sub-text style4-bg left testi">Testimonials</div>
                  <h2 className="title mb-20">
                    What Our Students Have To Say
                  </h2>

                </div>
                <Slider {...settings2}>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"I
                          had an excellent time learning about many topics. I had a little bit
                          of knowledge but never had the chance to study them deeply. Thank
                          You so much for valuable information. "</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh4.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Parteek sharma</a>
                          {/* <span className="designation">Arist</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"
                          It's a great course. The starting can be a bit tough if you're not
                          from a programming background, but later, you start to understand
                          everything because they will explain everything step by step."</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh2.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Somya Saini</a>
                          {/* <span className="designation">CEO, Keen IT Solution</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"Based on such knowledge, we may understand several other
                          programming languages in a more in-depth way. They have such an easy
                          way of teaching. 5/5 rating great work keep it up"</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh3.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Imran Khan</a>
                          {/* <span className="designation">Web Developer</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"I
                          had an excellent time learning about many topics. I had a little bit
                          of knowledge but never had the chance to study them deeply. Thank
                          You so much for valuable information. "</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh4.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Parteek sharma</a>
                          {/* <span className="designation">Arist</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>

                  </div>
                  <div>
                    <div className="testi-item">
                      <div className="author-desc">
                        <div className="desc"><img className="quote" src={images["quote2.png"]} alt="" />"
                          It's a great course. The starting can be a bit tough if you're not
                          from a programming background, but later, you start to understand
                          everything because they will explain everything step by step."</div>
                      </div>
                      <div className="testimonial-content">
                        <div className="author-img">
                          <img src={images["tmh2.jpg"]} alt="" />
                        </div>
                        <div className="author-part">
                          <a className="name" href="#">Somya Saini</a>
                          {/* <span className="designation">CEO, Keen IT Solution</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Section End */}
        {/* Partner Start */}

        {/* Partner End */}
      </div>
      {/* Main content End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
      {/* start scrollUp  */}
      <div id="scrollUp" className="orange-color">
        <i className="fa fa-angle-up" />
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
      <Modal className="modal-container"
        show={showModal}
        onHide={() => close()}

        animation={true}
      // bsSize="small"
      >

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
