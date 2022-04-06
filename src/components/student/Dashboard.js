import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faCloudDownload, faCheckCircle, faPaperPlane, faUniversity, faGraduationCap, faCalendarDay, faAreaChart
} from '@fortawesome/free-solid-svg-icons';
export default function Dashboard() {
  const [data, setdata] = useState([]);
  const [mounted, setMounted] = useState();

  const [myid, setmyid] = useState();
  const [universityApplication, setuniversityApplication] = useState([])

  const [myapplicationProgress, setmyapplicationProgress] = useState();
  const [myapplicationProgressStep, setmyapplicationProgressStep] = useState();
  const [mybuildApplicationID, setmybuildApplicationID] = useState();
  const [mycountry, setmycountry] = useState();
  const [mycountryID, setmycountryID] = useState();
  const [mycourseName, setmycourseName] = useState();
  const [mysession, setmysession] = useState();
  const [myuniversityName, setmyuniversityName] = useState();
  const [firstviewWidth, setfirstviewWidth] = useState("0px");



  useEffect(() => {
    var mounted = localStorage.getItem("studentToken")
    setMounted(mounted)
    if (mounted !== null) {
      axios.get(process.env.REACT_APP_SERVER_URL + 'student/applications', { headers: { 'Authorization': mounted } })
        .then(function (res) {
          if (res.data.success === true) {
            setdata(res.data.studentApplications)
            var studentCountryId = res.data.studentApplications.countryID
          }
        })
        .catch(error => {
        });
    }
  }, [])
  function handleCloseView() {
    setfirstviewWidth("0px");

  }

  function handleView(_id, applicationProgress, applicationProgressStep, buildApplicationID, country,
    countryID, courseName, session, universityName) {
    setfirstviewWidth("90%");
    setmyid(_id)
    setmyapplicationProgress(applicationProgress)
    setmyapplicationProgressStep(applicationProgressStep)
    setmybuildApplicationID(buildApplicationID)
    setmycountry(country)
    setmycountryID(countryID)
    setmycourseName(courseName)
    setmysession(session)
    setmyuniversityName(universityName)
    //start for fetch country step
    const url60 = process.env.REACT_APP_SERVER_URL + 'countriesStep/' + countryID;
    fetch(url60, {
      method: 'GET',
      headers: { 'Authorization': mounted }
    })
      .then(response => response.json())
      .then(data => {
        setuniversityApplication(data.adminCountry.countrySteps)
      })
    //end for fetch country satep
  }
  return (
    <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">My Application</h1>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-7">
          {data.map((object, i) => {
            return (
              <div className="card shadow mb-4 appblock" key={i}>
                <div className="row">
                  <div className="col-md-10">
                    <div className="unv-name">
                      <span><FontAwesomeIcon icon={faUniversity} /></span>
                      <h5>University</h5>
                      <p>{object.universityName}</p>
                    </div>
                    <div className="course-name">
                      <span><FontAwesomeIcon icon={faGraduationCap} /></span>
                      <h5>Course</h5>
                      <p>{object.courseName}</p>
                    </div>
                    <div className="Session-name">
                      <span><FontAwesomeIcon icon={faCalendarDay} /></span>
                      <span><i className="fas fa-calendar-week" /></span>
                      <h5>Session</h5>
                      <p>{object.session}</p>
                    </div>
                    <div className="apply-process">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="unv-name">
                            <span><FontAwesomeIcon icon={faAreaChart} /></span>

                            <h5>Current Application Process</h5>
                            {object.applicationProgress}
                          </div>
                        </div>
                        <div className="col-md-6 text-right">
                       
                        </div>
                      </div>
                    
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="btn-groups admin-btn">
                      <button title="View Student Application" className="btn btn-success"
                        onClick={() => handleView(object._id, object.applicationProgress, object.applicationProgressStep, object.buildApplicationID, object.country,
                          object.countryID, object.courseName, object.session, object.universityName
                        )}>View Application  </button>
                      <Link to={'/student/document'}  ><button type="button" className="btn btn-primary" title="Upload Document">Upload Doc</button></Link>

                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* start for sidebar */}
      <div id="mySidenav" className="sidenav" style={{ width: firstviewWidth }}>
        <section className="pcoded-main-containerx container-fluid">
          <a onClick={() => handleCloseView()} className="closebtn" >×</a>
          <div className="pcoded-content">
            <div className="pcoded-content">
             
              <div className="row">
                <div className="col-md-8">
                  <div class="card">
                    <h5>Application Information</h5><hr />
                    <div class="row">
                      <div class="col-md-3">
                        <h5>Order Id </h5>
                        <p>{mybuildApplicationID}</p>
                      </div>
                      <div class="col-md-3">
                        <h5>Course Name</h5>
                        <p>{mycourseName}</p>
                      </div>
                      <div class="col-md-3">
                        <h5> Session</h5>
                        <p>{mysession} </p>
                      </div>
                      <div class="col-md-3">
                        <h5>University Name</h5>
                        <p>{myuniversityName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <h5> University Country</h5>
                        <p>{mycountry}</p>
                      </div>
                   
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="profile-main">
                      <div className="application-current-status">
                        <ul>
                          {universityApplication.map((object, i) => {
                            return (


                              <div key={i}>
                                {i <= myapplicationProgressStep ?
                                  <>
                                    {object === myapplicationProgress ?
                                      <li className="statusBox current-stat" style={{ 'backgroundColor': '#0982A5' }}>{object}<span>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                      </span></li>
                                      : <li className="statusBox" style={{ 'backgroundColor': "#fff" }}>{object}<span>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                      </span></li>}
                                  </>
                                  : <li className="statusBox">{object}<span className="status-completed">

                                  </span></li>}
                              </div>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
      {/* end for sidebar */}
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">To Do List</h6>
            </div>
            <div className="card-body">
              <h4 className="small ">1 Visit our Facebook Profile <a href="https://www.facebook.com/coursementors/" target="_blank"
                className="float-right">Visit</a></h4>



              <h4 className="small">3 Link your Pinterest profile <a href="https://in.pinterest.com/Thecoursementor/_created/" target="_blank"
                className="float-right">Update</a></h4>

              <h4 className="small">4 Link your Instagram profile <a href="https://www.instagram.com/course_mentor/" target="_blank"
                className="float-right">Update</a></h4>


            </div>
          </div>
        </div>
        {/* <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Important Dates</h6>
          </div>
          <div className="card-body">
            <a className=" d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                o4<br /> April
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncatex">Hi there! I am wondering if you can help me with
                  a
                  problem I've been having.</div>
                <div className="small text-gray-500">01 : 00 AM - 06 : 00 PM</div>
              </div>
            </a>
            <a className=" d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                o1<br /> JAN
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncatex">Hi there! I am wondering if you can help me with
                  a
                  problem I've been having.</div>
                <div className="small text-gray-500">03 : 00 pm - 05 : 00 PM</div>
              </div>
            </a>
            <a className=" d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                o4<br /> April
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncatex">Hi there! I am wondering if you can help me with
                  a
                  problem I've been having.</div>
                <div className="small text-gray-500">10 : 00 AM - 04 : 00 PM</div>
              </div>
            </a>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}
