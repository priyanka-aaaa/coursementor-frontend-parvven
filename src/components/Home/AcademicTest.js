import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
function AcademicTest(props) {
  useEffect(() => {

    window.scrollTo(0, 0)
  }, []);
  const list = [
    {
      "academicTest": "ACT",
    },
    {
      "academicTest": "SAT"
    },
    {
      "academicTest": "Not planning to take any"
    },
  ]
  function setAcademicTestInLocalStorage(index) {

    localStorage.setItem("academicTestFilter", list[index].academicTest);
  }
  return (
    <div className="main-content">
      <div className="full-width-header">
        <Header />
      </div>
      <div className="rs-breadcrumbs img1">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">Study Plan</h1>
          <ul>
            <li title="coursementor">
              <a className="active" href="index.html">Home</a>
            </li>
            <li>Study Plan</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumbs End */}
      <div className="container">
        <div className="rs-about pt-120 pb-120 md-pt-80 md-pb-80 text-center grd-level">
          <h2>Which academic test have you taken OR are planning to take?</h2>
          {/* About Section Start */}
          <ul className="nav nav-pills" role="tablist">

            {list.map((item, index) =>
              <li className="nav-item" onClick={() => setAcademicTestInLocalStorage(index)}>
                <a className="nav-link btn btn-outline-primary" data-toggle="pill" href="#block1">{item.academicTest}</a>
              </li>
            )}
          </ul>
          {/* Tab panes */}
          {/* <div className="tab-content"> */}
          <div id="block1" className="container tab-pane  text-center"><br />
            <h3>Enter your score</h3>
            <from>
              <div className="row mt-3">
                <div className="col-md-4" />
                <div className="col-md-4">  <input aria-invalid="false" id="Percentage" className="form-control" type="number" placeholder="Score" defaultValue multiple /></div>
                <div className="col-md-4" />
              </div>
              <div className="btn-part">
                <div className="form-group mt-4">

                  <Link className="readon learn-more submit" to={'/Experience'} href="#">
                    Submit
                  </Link>
                  {/* <a href="course_finder_area.html"><input className="readon learn-more submit" type="submit" defaultValue="Continue" /></a> */}
                </div>
              </div>
            </from>
          </div>
          <div id="block2" className="container tab-pane fade"><br />
            <h3>Enter your score</h3>
            <from>
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">  <input aria-invalid="false" id="Percentage" placeholder="Score" className="form-control" type="number" defaultValue multiple /></div>
                <div className="col-md-4" />
              </div>
              <div className="btn-part">
                <div className="form-group mt-4">
                  <input className="readon learn-more submit" type="submit" defaultValue="Continue" />
                </div>
              </div>
            </from>
          </div>
          {/* </div>    */}
        </div>
      </div>
      <Footer />
    </div>


  );



}

export default AcademicTest;