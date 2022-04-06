import React,{useEffect} from 'react';
import Footer from './Footer'
import Header from './Header'

import StudentloginForm from '../StudentloginForm';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faTrash, faPen, faEye, faUser, faFile, faFileUpload, faUserTie,
  faCheck, faPaperPlane, faGraduationCap

} from '@fortawesome/free-solid-svg-icons';
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function Student(props) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {

    window.scrollTo(0, 0)
}, []);
  return (
    <div>
      {/* Main content Start */}
      <div className="main-content">
        {/*Full width header Start*/}
        <div className="full-width-header">
          {/*Header Start*/}
          <Header />
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
              <p> Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on hundreds of subjects or topics, whenever you need it.
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
        {/* Banner Section Start */}
        <div className="rs-banner style3 modify2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  order-last">
                <div className="banner-img">

                  {/* start for student register */}
                  <section className="Form-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <StudentloginForm />
                        </div>
                      </div>
                    </div>

                  </section>
                  {/* end for student register */}


                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1 className="title"><span>The Easiest Way to </span><br /> Study Abroad</h1>
                  <p className="desc">
                    Discover programmes and schools, get matched with the best selections, and submit your applications quickly and conveniently. We'll help you every step of the journey, from research to admission to visas and arrival at your desired school!
                  </p>
                  <ul className="banner-btn">
                    <li>
                      <Link to={'/StudentRegister'} className="readon started" >
                        Explore Programs</Link>
                    </li>
                    {/* <li>
                                                  <div className="rs-videos">
                                                      <div className="animate-border">
                                                          <a className="popup-border popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                                              <i className="fa fa-play"></i>
                                                          </a>
                                                      </div>
                                                  </div> 
                                              </li> */}
                  </ul>
                </div>
                {/* Partner Start */}
              </div>
            </div>
          </div>
          <div className="rs-animation">
            <img className="dance3" src=
              {images["b4-dot-6.png"]}

              alt="images" />
          </div>
        </div>
        {/* Banner Section End */}
        {/* Services Section Start */}
        <div className="rs-services style2 modify1 pt-40 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">We Are Best</span>
              <h2 className="title">
                Our Impact
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
                            <img src=
                              {images["home-style6-6.png"]}
                              alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Students
                            Helped </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            200,000+</p>
                        </div>
                        <div className="front-btn-part">
                          <a className="readon view-more" href="#">View More</a>
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
                            <img src=
                              {images["home-icons-8.png"]}
                              alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Student Source
                            Countries</a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            125+
                          </p>
                        </div>
                        <div className="front-btn-part">
                          <a className="readon view-more" href="#">View More</a>
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
                            <img src=

                              {images["home-icons-9.png"]}
                              alt="" />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title"><a href="#">Offer of
                            Admission Rate </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            95%
                          </p>
                        </div>
                        <div className="front-btn-part">
                          <a className="readon view-more" href="#">View More</a>
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
        <div className="rs-about style2 modify2 gray-color pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 md-mb-50">
                <div className="sec-title mb-30">
                  <div className="sub-text style4-bg">CourseMentor</div>
                  <h2 className="title pb-20">
                    Find and Apply to the Best Programs and Schools for You
                  </h2>
                  <p>While there's no cap on the number of schools you can apply to, some students, especially those from affluent backgrounds who want to go to a selective college, can go overboard, applying to more than 20 or 30 colleges</p>
                </div>
                {/* Skillbar Section Start */}
                <div className="rs-skillbar style1 home4">
                  <div className="cl-skill-bar">
                    <div className="btn-part mt-45">
                      <a className="readon started" href="course_finder_select_country.html">Get Started</a>
                    </div>
                  </div>
                </div>
                {/* Skillbar Section End */}
              </div>
              <div className="col-lg-6 pl-65 md-pl-15">
                <div className="about-img">
                  <img src=

                    {images["home-about-5.png"]}
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section End */}
        <div className="rs-services style3 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">SKILLS</span>
              <h2 className="title title2">
                How It Works
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="services-item pink-light-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span>

                        <FontAwesomeIcon icon={faUser} />

                      </span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Check Your Eligibility</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Complete a short survey and get matched to programs and schools.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="services-item blue2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span>
                        <FontAwesomeIcon icon={faFile} />


                      </span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#"> Apply to Schools</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Select a school and program, complete profile, pay fees, and submit documents.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="services-item paste2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span>

                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Get Accepted</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        The schools review your application and an acceptance letter is issued.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mb-30">
                <div className="services-item purple2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span>
                        <FontAwesomeIcon icon={faFile} />


                      </span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Applies for Visa</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Course Mentor experts guide the student through the visa application process.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mb-30">
                <div className="services-item cyan2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span>

                        <FontAwesomeIcon icon={faPaperPlane} />

                      </span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Student Journey Begins</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Book your flight, pack your bags, and start your adventure.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="services-item pink2-bg">
                  <div className="services-icon">
                    <div className="image-part">
                      <span>

                        <FontAwesomeIcon icon={faGraduationCap} />

                      </span>
                    </div>
                  </div>
                  <div className="services-content">
                    <div className="services-text">
                      <h3 className="title"><a href="#">Learn From Industry Experts</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Learning top skills can bring an extra-ordinary outcome in a career.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Section Start */}
        <div className="rs-technology gray-color pt-50 pb-50 mt-50 mb-50">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text gold-color">Student</span>
              <h2 className="title title2">
                Trusted by Universities
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
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
            </div>
            <div className="col-lg-12 text-center">
              <div className="btn-part mt-30">
                <a className="readon started" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Section End */}
        {/* Testimonial Section Start */}
        <div className="rs-testimonial main-home style4 modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="testi-img">
                  <img src=

                    {images["testimonial-3.png"]}
                    alt="" />
                </div>
              </div>
              <div className="col-lg-6 md-pt-50 modify-gap">
                <div className="sec-title mb-50">
                  <div className="sub-text style4-bg left testi">Testimonials</div>
                  <h2 className="title pb-20">
                    What Our Students Have To Say
                  </h2>
                  <div className="desc">
                    "It's a great course. The starting can be a bit tough if you're not from a programming
                    background, but later, you start to understand everything because they will explain
                    everything step by step.".
                  </div>
                </div>
                <Slider {...settings}>
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
      </div>
      {/* Main content End */}
      {/* Blog Section Start */}
      <div id="rs-blog" className="rs-blog pt-10 pb-50 md-pt-80 md-pb-20">
        <div className="container">
          <div className="sec-title2 text-center mb-30">
            <span className="sub-text">Student</span>
            <h2 className="title testi-title">
              Featured Study Destinations
            </h2>
          </div>
          <div className="rs-carousel owl-carousel" data-loop="true" data-items={3} data-margin={30} data-autoplay="true" data-hoverpause="true" data-autoplay-timeout={5000} data-smart-speed={800} data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device={1} data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device={2} data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2={2} data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device={3} data-md-device-nav="false" data-md-device-dots="false">
            <div className="blog-item">
              <div className="image-wrap">
                <a href="#">
                  <img src={images["canda.jpg"]} alt="" />

                </a>
                <ul className="post-categories">
                  <li><a href="#">Canada</a></li>
                </ul>
              </div>
              <div className="blog-content">
                <h3 className="blog-title"><a href="#">Explore Canada</a></h3>
                <p className="desc">Quality education at low cost. Work during study, post-study work permits, and pro-immigration policies. Diverse, safe, and inclusive.</p>
                <div className="blog-button"><a href="#">Learn More</a></div>
              </div>
            </div>
            <div className="blog-item">
              <div className="image-wrap">
                <a href="#">
                  <img src={images["united-kingdom.jpg"]} alt="" />

                </a>
                <ul className="post-categories">
                  <li><a href="#"> United Kingdom</a></li>
                </ul>
              </div>
              <div className="blog-content">
                <h3 className="blog-title"><a href="#">Explore the United Kingdom</a></h3>
                <p className="desc">World-class universities in the heart of Europe. Shorter study duration to fast-track your career and reduce costs. Options to work during study and after graduation.</p>
                <div className="blog-button"><a href="#">Learn More</a></div>
              </div>
            </div>
            <div className="blog-item">
              <div className="image-wrap">
                <a href="#">
                  <img src={images["united-state.jpg"]} alt="" />
                </a>
                <ul className="post-categories">
                  <li><a href="#"> United States</a></li>
                </ul>
              </div>
              <div className="blog-content">
                <h3 className="blog-title"><a href="#">Explore the United States</a></h3>
                <p className="desc">Globally renowned education from the highest-ranked universities and colleges. Chosen by over a million international students every year.</p>
                <div className="blog-button"><a href="#">Learn More</a></div>
              </div>
            </div>
            <div className="blog-item">
              <div className="image-wrap">
                <a href="#">
                  <img src={images["austrila.jpg"]} alt="" />

                </a>
                <ul className="post-categories">
                  <li><a href="#">Australia</a></li>
                </ul>
              </div>
              <div className="blog-content">
                <h3 className="blog-title"><a href="#">Explore Australia</a></h3>
                <p className="desc">Top-ranked education in a multicultural environment with breathtaking landscapes, beautiful beaches, and a growing economy.</p>
                <div className="blog-button"><a href="#">Learn More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Section End */}
      <Footer />
    </div>

  );
}

export default Student;