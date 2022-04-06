import React ,{ useEffect} from 'react';
import Footer from './Footer'
import Header from './Header'
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

export default function About() {
  useEffect(() => {

    window.scrollTo(0, 0)
}, []);
  return (
 <div className="main-content">
    <div className="full-width-header">
      <Header />
   
      </div>
   <div className="rs-breadcrumbs img1">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">About</h1>
          <ul>
            <li title="Braintech - IT Solutions and Technology Startup HTML Template">
              <a className="active" href="index.html">Home</a>
            </li>
          <li>About</li>
          </ul>
        </div>
      </div>
    <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 md-mb-30">
              <div className="rs-animation-shape">
                <div className="images">
                  <img
                    src={images["about-3.png"]}
                    alt="" />
                </div>
                <div className="middle-image2">
                  <img className="dance3"
                    src=
                    {images["effect-1.png"]}

                    alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-60 md-pl-15">
              <div className="contact-wrap">
                <div className="sec-title mb-30">
                  <div className="sub-text style-bg">About Us</div>
                  <h2 className="title pb-38">
                  Who Are We?
                  </h2>
                  <div className="desc pb-35">
                  <p>“Course Mentor” is the esteemed provider of educational content to the students globally. We provide every type of Assignment help to the students. We have a team of qualified American, UK, and Australian experts who help us in providing the assignment service to the students.</p>

                  </div>
                  <p className="desc margin-0 pb-15">
                   
<p>“Course Mentor” is a globally accepted device which is serving consumers based in more than 20 countries. We have a Staff of around 1700+ people who are distributed over different countries and they help us achieve our goals.</p>

<p>A few years back, we started with a small scale company assisting local students in America with their academic assessments. Today, we’re the liger of academic services; making our home in different cities like Sydney, California and other parts of the world, providing the best solutions and turning students market-ready for jobs.</p>
                  </p>
                </div>
               
              </div>
            </div>
          </div>
          <div className="shape-image">
            <img className="top dance"
              src=
              {images["dotted-3.png"]}

              alt="" />
          </div>
        </div>
      </div>
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
      {/* Team Section End */}
      {/* Process Section Start */}
      <div className="rs-process style2 pt-50 pb-50 mt-50 mb-50">
        <div className="container">
          <div className="sec-title2 text-center mb-45">
            <span className="sub-text style-bg">Process</span>
            <h2 className="title title2">
              Our Working Process
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 md-mb-50">
              <div className="addon-process">
                <div className="process-wrap">
                  <div className="process-img">
                    <img src=

                      {images["process1.png"]}
                      alt="" />
                  </div>
                  <div className="process-text">
                    <h3 className="title">Australia</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 md-mb-50">
              <div className="addon-process">
                <div className="process-wrap">
                  <div className="process-img">
                    <img src=
                      {images["process4.png"]}

                      alt="" />
                  </div>
                  <div className="process-text">
                    <h3 className="title">United States</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="addon-process">
                <div className="process-wrap">
                  <div className="process-img">
                    <img src=
                      {images["process2.png"]}

                      alt="" />
                  </div>
                  <div className="process-text">
                    <h3 className="title">Canada</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="addon-process">
                <div className="process-wrap">
                  <div className="process-img">
                    <img src=
                      {images["process3.png"]}

                      alt="" />
                  </div>
                  <div className="process-text">
                    <h3 className="title">United Kingdom</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Section End */}
   
      {/* Counter Section Start */}
      <div className="rs-contact-wrap bg5 pt-120 pb-390 md-pt-80">
        <div className="container">
          <div className="sec-title2 text-center mb-30">
            <span className="sub-text style-bg white-color">Contact</span>
            <h2 className="title white-color">
              Request A Free Consultation
            </h2>
          </div>
        </div>
      </div>
      {/* Counter Section End */}
      {/* Video Section End */}

     

      <div className="rs-video-wrap style2 inner pb-120 md-pb-80">
        <div className="container">
          <div className="row margin-0 gray-color">
            <div className="col-lg-6 padding-0">
              <div className="video-item">
                <div className="rs-videos">
                  <div className="animate-border main-home style2">
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 padding-0">
              <div className="rs-requset">
                <div id="form-messages" />
                <h4>Get in Touch</h4>
                <form id="contact-form" method="post" action="https://rstheme.com/products/html/braintech/mailer.php">
                  <fieldset>
                    <div className="row">
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="name" name="name" placeholder="Name" required />
                      </div>
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="email" name="email" placeholder="E-Mail" required />
                      </div>
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required />
                      </div>
                      <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                        <input className="from-control" type="text" id="website" name="website" placeholder="Your Website" required />
                      </div>
                      <div className="col-lg-12 mb-45">
                        <textarea className="from-control" id="message" name="message" placeholder="Your message Here" required defaultValue={""} />
                      </div>
                    </div>
                    <div className="btn-part">
                      <input className="submit sub-small" type="submit" defaultValue="Submit Now" />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section End */}
      
      <Footer />
    </div>


  );
}

