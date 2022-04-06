import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

function country(props) {
  const list = [
    {
      "degree":"MBA",
      "image":images["graduated.png"]
    },
    {
      "degree": "Masters",
      "image": images["graduated.png"]
    },
  ]
  function setDegreeInLocalStorage(index){
  
    localStorage.setItem("degreeFilter",list[index].degree);
  }

  return (
    <div>
      {/* Main content Start */}
      <div className="main-content">
        {/*Full width header Start*/}
        <div className="full-width-header">
          {/*Header Start*/}
          <header id="rs-header" className="rs-header style3 modify1 ">
            {/* Menu Start */}
            <div className="menu-area menu-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="logo-part">
                      <a href="index.html"><img
                        src={images["graduated.png"]}
                        src="assets/images/logo.png" alt="" /></a>
                    </div>
                    <div className="mobile-menu">
                      <a href="#" className="rs-menu-toggle rs-menu-toggle-close secondary">
                        <i className="fa fa-bars" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-10 text-right">
                    <div className="rs-menu-area">
                      <div className="main-menu">
                        <nav className="rs-menu pr-86 lg-pr-50 md-pr-0">
                          <ul className="nav-menu">
                            <li className="menu-item-has-children current-menu-item"> <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                          </ul> {/* //.nav-menu */}
                        </nav>
                      </div> {/* //.main-menu */}
                      <div className="expand-btn-inner search-icon hidden-md">
                        <ul>
                          <li className="sidebarmenu-search">
                            <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                              <i className="flaticon-search" />
                            </a>
                          </li>
                          <li>
                            <a id="nav-expander" className="humburger nav-expander" href="#">
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu End */}
          </header>
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
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img1">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Degree</h1>
            <ul>
              <li title="coursementor">
                <a className="active" href="index.html">Home</a>
              </li>
              <li>Degree</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* About Section Start */}
        <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <h3 className="text-center mb-5">Which degree do you wish to pursue?</h3>
            <div className="row">
              {list.map((item,index)=><div className="col-lg-4 col-sm-8 md-mb-50" onClick={()=>setDegreeInLocalStorage(index)} >
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <a href="course_finder_master.html">
                      <Link to={'/EducationLevel'} href="#">
                        <img src={item.image} alt="" />

                      </Link>
                      </a>
                    </div>
                    <div className="process-text">
                      <h3 className="title">{item.degree}</h3>
                    </div>
                  </div>
                </div>
              </div>)}
              
              
            </div>
            {/* <div className="btn-part">
                                          <a className="readon learn-more" href="contact.html">Learn-More</a>
                                      </div> */}
            <div className="shape-image">
              <img className="top dance" src="assets/images/about/dotted-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Main content End */}
      {/* Footer Start */}
      <footer id="rs-footer" className="rs-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                <div className="footer-logo mb-30">
                  <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                </div>
                <div className="textwidget pb-30">
                  <p>Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on
                    hundreds of subjects or topics, whenever you need it.</p>
                </div>
                <ul className="footer-social md-mb-30">
                  <li>
                    <a href="#" target="_blank"><span><i className="fa fa-facebook" /></span></a>
                  </li>
                  <li>
                    <a href="# " target="_blank"><span><i className="fa fa-twitter" /></span></a>
                  </li>
                  <li>
                    <a href="# " target="_blank"><span><i className="fa fa-pinterest-p" /></span></a>
                  </li>
                  <li>
                    <a href="# " target="_blank"><span><i className="fa fa-instagram" /></span></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                <h3 className="widget-title">Policy</h3>
                <ul className="site-map">
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                  <li><a href="#">Honor Code</a></li>
                  <li><a href="#">Mentors</a></li>
                  <li><a href="#">Blog</a></li>
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
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h3 className="widget-title">Exploring</h3>
                <ul className="site-map">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
                {/* <p className="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              {/* <div className="col-lg-6 text-right md-mb-10 order-last">
                                  <ul className="copy-right-menu">
                                     <li><a href="index.html">Home</a></li>
                                     <li><a href="about.html">About</a></li>
                                     <li><a href="blog.html">Blog</a></li>
                                     <li><a href="shop.html">Shop</a></li>
                                     <li><a href=case-studies-single.html></a></li>
                                  </ul>
                              </div> */}
              <div className="col-lg-6">
                <div className="copyright">
                  <p>©Copyright 2018 - 2022<a href="http://Coursementor.com/">Coursementor.com</a> All
                    rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
    </div>
  );

}

export default country;