import React,{ useEffect} from 'react';
import Footer from './Footer'
import Header from './Header'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import AgentLoginForm from '../AgentLoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen,faEye,faUser,faFile,faFileUpload,faUserTie,
    faCheck,faPaperPlane,faGraduationCap

} from '@fortawesome/free-solid-svg-icons';
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function Recruitment(props) {
  useEffect(() => {

    window.scrollTo(0, 0)
}, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div>
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
                  <AgentLoginForm/>
               
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1 className="title"><span>Your Success
                    is Our Success –</span><br />  We’re Here to See<br /> You Grow </h1>
                  <p className="desc">
                    Course Mentor is more than a platform, it is your trusted partner to help you do what you do best: help as many students as possible fulfill their international education dreams.
                  </p>
                  <ul className="banner-btn">


                    <li>
                      <Link to={'/AgentRegister'} className="readon started" >
                        Partner With Us</Link></li>
               
                  </ul>
                </div>
            
              </div>
            </div>
          </div>
          <div className="rs-animation">
            <img className="dance3" src=
              {images["home-b4-dot-6.png"]}

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
                Access More Schools,Perks &amp; Faster Commissions
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
                          <h3 className="title"><a href="#">Best Commissions </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Quick and reliable commissions<br></br> so you get paid for your<br></br> hard work.</p>
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
                          <h3 className="title"><a href="#">Access to 1,500+ Schools</a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Top programs at the top schools in the most desirable destinations at your fingertips.
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
                          <h3 className="title"><a href="#">Events and Webinars </a></h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Regular online webinars, training and events, to keep you updated on the latest trends and regulations.
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
                    Join 10,000+ Global
                    Recruitment Partners
                  </h2>
                  <div className="desc">
                    <ul>
                      <li><span><i className="fa fa-angle-right " /></span> <strong>300,000+</strong> Students Helped</li>
                      <li><span><i className="fa fa-angle-right " /></span> <strong>95%</strong> Acceptance Rate</li>
                      <li><span><i className="fa fa-angle-right " /></span> <strong>1,500+</strong> School Partnerships</li>
                      <li><span><i className="fa fa-angle-right " /></span> <strong>$50M+</strong> Helped students access $50M+ in scholarships</li>
                    </ul>
                  </div>
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
                International Education
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-30">
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
                      <h3 className="title"><a href="#">
                        Local Support</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Our international recruitment experts are there to <br></br>support you every<br></br> step of the way.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
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
                      <h3 className="title"><a href="#">Education</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Expand your knowledge and stay at the top of your competitors with guided online courses and certificates.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
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
                      <h3 className="title"><a href="#">
                        Events and Webinars</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Regular online webinars, training and events, to keep you updated on the latest trends and regulations.
                      </p>
                    </div>
                    <div className="services-button"><a href="#">Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 md-mb-30">
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
                      <h3 className="title"><a href="#">Data and Insights</a></h3>
                    </div>
                    <div className="services-desc">
                      <p>
                        Industry leading insights and knowledge that helps you plan expand, and achieve your goals.
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
      <Footer />
    </div>

  );
}

export default Recruitment;