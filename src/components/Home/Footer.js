import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
  faFacebookF, faGoogle, faTwitter, faFacebook,
  faPinterest, faInstagram
} from "@fortawesome/free-brands-svg-icons";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function Footer(props) {
  return (
    <footer id="rs-footer" className="rs-footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
              <div className="footer-logo mb-30">
                <a href="index.html"><img src={images["logofirst-1.png"]} alt="" /></a>
              </div>
              <div className="textwidget pb-30">
                <p>Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on
                  hundreds of subjects or topics, whenever you need it.</p>
              </div>
              <ul className="footer-social md-mb-30">
                <li>
                  <a href="#" target="_blank"><span>
                    <FontAwesomeIcon icon={faFacebook} />
                  </span></a>
                </li>
                <li>
                  <a href="# " target="_blank"><span>

                    <FontAwesomeIcon icon={faTwitter} />
                  </span></a>
                </li>
                <li>
                  <a href="# " target="_blank"><span>
                    <FontAwesomeIcon icon={faPinterest} />

                  </span></a>
                </li>
                <li>
                  <a href="# " target="_blank"><span>
                    <FontAwesomeIcon icon={faInstagram} />

                  </span></a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12">
              <h3 className="widget-title">Exploring</h3>
              <ul className="site-map">
                <li> <Link to={'/'} href="#">
                  Home</Link></li>
                <li> <Link to={'/About'} href="#">
                  About Us</Link></li>
            
                <li>  <Link to={'/contact'} href="#">
                  Contact Us</Link>  </li>
              </ul>
              {/* <p className="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p> */}
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
              <h3 className="widget-title">Policy</h3>
              <ul className="site-map">
                <li> <Link to={'/terms-condition'} href="#">
                Terms and Conditions</Link>   </li>
                <li><Link to={'/privacy-policy'} href="#">
                Privacy Policy</Link></li>
                <li><Link to={'/refund-policy'} href="#">
                Refund Policy</Link></li>
                <li><Link to={'/honor-code'} href="#">
                Honor Code</Link></li>
         
              </ul>
            </div>



            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
              <h3 className="widget-title">Contact Info</h3>
              <ul className="address-widget">
                <li>
                  <i className="flaticon-location" />
                  <div className="desc">#211 P,Sector7 Kurukshetra,haryana 136118</div>
                </li>
                <li>
                  <i className="flaticon-call" />
                  <div className="desc">
                    <a href="tel:1800-890-6477">1800-890-6477</a>
                  </div>
                </li>
                <li>
                  <i className="flaticon-email" />
                  <div className="desc">
                    <a href="mailto:hello@coursementor.com">hello@coursementor.com</a>
                  </div>
                </li>
                <li>
                  <i className="flaticon-clock-1" />
                  <div className="desc">
                    Our Mentors are ready to help 24/7
                  </div>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row y-middle">

            <div className="col-lg-6">
              <div className="copyright">
                <p>©Copyright 2018 - 2022 <a href="http://Coursementor.com/"> Coursementor.com</a> All
                  rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;