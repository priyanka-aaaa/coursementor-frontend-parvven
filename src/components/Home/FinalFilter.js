import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Footer from './Footer'
import Header from './Header'
import {
  faStar, faAngleUp, faHistory,
  faBars, faSearch, faBullseye, faShield, faUniversity, faCheckSquare, faCreditCard, faLaptop

} from '@fortawesome/free-solid-svg-icons';

function FinalFilter() {
  const [courseDurationRange, setcourseDurationRange] = useState("");
  const [tuitionFeeRange, settuitionFeeRange] = useState(1);
  const [universityType, setuniversityType] = useState("");


  const [universityNumber, setuniversityNumber] = useState("");
  const [arrayCountry, setarrayCountry] = useState([]);
  const [allUniversityValues, setallUniversityValues] = useState([{
    myinformation: [{ name: "", slug: "", country: "", state: "", type: "" }], myoverview: [{ ranking: "", foundedYear: "" }],
    myimage: [{ logo: "" }], _id: ""
  }])
  const [allCourseValues, setallCourseValues] = useState([{
    universities: [{ information: [{ name: "", state: "", country: "" }] }], _id: ""
  }])
  const [courseNumber, setcourseNumber] = useState("");
  const [completeCountry, setcompleteCountry] = useState([]);
  //start for areaOfInterest
  const [arrayAreaOfInterest, setarrayAreaOfInterest] = useState([]);
  const [completeAreaOfInterest, setcompleteAreaOfInterest] = useState([]);

  //end for areaOfInterest
  useEffect(() => {
    // start for country checkbox
    let buildfilterCountryArray = [
      { "id": "United States", "name": "United States" },
      { "id": "United Kingdom", "name": "United Kingdom" },
      { "id": "Australia", "name": "Australia" },
      { "id": "Canada", "name": "Canada" }
    ];
    let filterCountryFollowing = buildfilterCountryArray.map(group => (
      { ...group, following: arrayCountry.includes(group.id) })
    );
    setcompleteCountry(filterCountryFollowing)
    //end for country checkbox
    // start for areaOfInterest checkbox
    let buildfilterAreaOfInterestArray = [
      { "id": "Management", "name": "Management" },
      { "id": "Master", "name": "Master" },
      { "id": "Engineering", "name": "Engineering" },
      { "id": "Computers and Data Science", "name": "Computers and Data Science" },
      { "id": "Design", "name": "Design" }
    ];
    let filterAreaOfInterestFollowing = buildfilterAreaOfInterestArray.map(group => (
      { ...group, following: arrayAreaOfInterest.includes(group.id) })
    );

    setcompleteAreaOfInterest(filterAreaOfInterestFollowing)
    //end for areaOfInterest checkbox
    // start for intake checkbox
    // let buildfilterIntakeArray = [
    //   { "id": "Management", "name": "Management" },
    //   { "id": "Master", "name": "Master" },
    //   { "id": "Engineering", "name": "Engineering" },
    //   { "id": "Computers and Data Science", "name": "Computers and Data Science" },
    //   { "id": "Design", "name": "Design" }
    // ];
    // let filterIntakeFollowing = buildfilterIntakeArray.map(group => (
    //   { ...group, following: arrayAreaOfInterest.includes(group.id) })
    // );

    // setcompleteIntake(filterIntakeFollowing)
    //end for intake checkbox
    const url = process.env.REACT_APP_SERVER_URL + 'filter/allUniversity';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setallUniversityValues(data.applications)
        var myresultsUniversity = data.applications
        var universityNumber = Object.keys(myresultsUniversity).length;
        setuniversityNumber(universityNumber)
      })
    const url2 = process.env.REACT_APP_SERVER_URL + 'filtercourse';
    fetch(url2, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setallCourseValues(data.applications)
        var myresultsCourse = data.applications
        var courseNumber = Object.keys(myresultsCourse).length;
        setcourseNumber(courseNumber)
      })
  }, [])
  const handleuniveristyExamChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      var mycheckboxValue = e.target.value
      setarrayCountry((prevVals) =>
        [...prevVals, mycheckboxValue])
      var checkCountry = arrayCountry.concat(mycheckboxValue);
      let buildfilterCountryArray = [
        { "id": "United States", "name": "United States" },
        { "id": "United Kingdom", "name": "United Kingdom" },
        { "id": "Australia", "name": "Australia" },
        { "id": "Canada", "name": "Canada" }
      ];
      let filterCountryFollowing = buildfilterCountryArray.map(group => (
        { ...group, following: checkCountry.includes(group.id) })
      );
      setcompleteCountry(filterCountryFollowing)
    }
    else {
      var mycheckboxValue = e.target.value
      var filteredExamArray = arrayCountry.filter(e => e !== mycheckboxValue)
      setarrayCountry(filteredExamArray)

      // start for unchecked
      let buildfilterCountryArray = [
        { "id": "United States", "name": "United States" },
        { "id": "United Kingdom", "name": "United Kingdom" },
        { "id": "Australia", "name": "Australia" },
        { "id": "Canada", "name": "Canada" }
      ];
      let filterCountryFollowing = buildfilterCountryArray.map(group => (
        { ...group, following: filteredExamArray.includes(group.id) })
      );
      setcompleteCountry(filterCountryFollowing)
      // end for unchecked
    }

  };
  const handleAreaOfInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      var mycheckboxValue = e.target.value
      setarrayAreaOfInterest((prevVals) =>
        [...prevVals, mycheckboxValue])
      var checkAreaOfInterest = arrayAreaOfInterest.concat(mycheckboxValue);
      let buildfilterAreaOfInterestArray = [
        { "id": "Management", "name": "Management" },
        { "id": "Master", "name": "Master" },
        { "id": "Engineering", "name": "Engineering" },
        { "id": "Computers and Data Science", "name": "Computers and Data Science" },
        { "id": "Design", "name": "Design" }
      ];
      let filterAreaOfInterestFollowing = buildfilterAreaOfInterestArray.map(group => (
        { ...group, following: checkAreaOfInterest.includes(group.id) })
      );

      setcompleteAreaOfInterest(filterAreaOfInterestFollowing)
    }
    else {
      var mycheckboxValue = e.target.value
      var filteredAreaOfInterestArray = arrayAreaOfInterest.filter(e => e !== mycheckboxValue)
      setarrayAreaOfInterest(filteredAreaOfInterestArray)

      // start for unchecked
      let buildfilterAreaOfInterestArray = [
        { "id": "Management", "name": "Management" },
        { "id": "Master", "name": "Master" },
        { "id": "Engineering", "name": "Engineering" },
        { "id": "Computers and Data Science", "name": "Computers and Data Science" },
        { "id": "Design", "name": "Design" }
      ];
      let filterAreaOfInterestFollowing = buildfilterAreaOfInterestArray.map(group => (
        { ...group, following: filteredAreaOfInterestArray.includes(group.id) })
      );
      setcompleteAreaOfInterest(filterAreaOfInterestFollowing)
      // end for unchecked
    }

  };
  function deleteCountryClick(value) {
    var filteredExamArray = arrayCountry.filter(e => e !== value)
    setarrayCountry(filteredExamArray)
    let buildfilterCountryArray = [
      { "id": "United States", "name": "United States" },
      { "id": "United Kingdom", "name": "United Kingdom" },
      { "id": "Australia", "name": "Australia" },
      { "id": "Canada", "name": "Canada" }
    ];
    let filterCountryFollowing = buildfilterCountryArray.map(group => (
      { ...group, following: filteredExamArray.includes(group.id) })
    );
    setcompleteCountry(filterCountryFollowing)
  }
  function deleteAreaOfInterestClick(value) {
    var filteredAreaOfInterestArray = arrayAreaOfInterest.filter(e => e !== value)
    setarrayAreaOfInterest(filteredAreaOfInterestArray)
    let buildfilterAreaOfInterestArray = [
      { "id": "Management", "name": "Management" },
      { "id": "Master", "name": "Master" },
      { "id": "Engineering", "name": "Engineering" },
      { "id": "Computers and Data Science", "name": "Computers and Data Science" },
      { "id": "Design", "name": "Design" }
    ];
    let filterAreaOfInterestFollowing = buildfilterAreaOfInterestArray.map(group => (
      { ...group, following: filteredAreaOfInterestArray.includes(group.id) })
    );
    setcompleteAreaOfInterest(filterAreaOfInterestFollowing)
  }
  function handleApplyFilter() {
    //start for country 
    localStorage.setItem("countryFilter", arrayCountry);
    var arrayCountryCount = arrayCountry.length;
    if (arrayCountryCount !== 0) {
      const url1 = process.env.REACT_APP_SERVER_URL + 'filter/country'
      fetch(url1, {
        method: 'put',
        body: JSON.stringify({ country: arrayCountry }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          setallUniversityValues(data.applications)
          var myresultsUniversity = data.applications
          var universityNumber = Object.keys(myresultsUniversity).length;
          setuniversityNumber(universityNumber)
        })
      const url2 = process.env.REACT_APP_SERVER_URL + 'filtercourseCountry';
      fetch(url2, {
        method: 'put',
        body: JSON.stringify({ country: arrayCountry }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          setallCourseValues(data.applications)
          var myresultsCourse = data.applications
          var courseNumber = Object.keys(myresultsCourse).length;
          setcourseNumber(courseNumber)
        })

    }
    // end for country
    // start for areaOfInterest
    var arrayAreaOfInterestCount = arrayAreaOfInterest.length;
    if (arrayAreaOfInterestCount !== 0) {
      const url1 = process.env.REACT_APP_SERVER_URL + 'filterAreaOfInterest'
      fetch(url1, {
        method: 'put',
        body: JSON.stringify({ areaOfInterest: arrayAreaOfInterest }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          setallUniversityValues(data.applications)
          var myresultsUniversity = data.applications
          var universityNumber = Object.keys(myresultsUniversity).length;
          setuniversityNumber(universityNumber)
        })
      const url2 = process.env.REACT_APP_SERVER_URL + 'filtercourseAreaOfInterest';
      fetch(url2, {
        method: 'put',
        body: JSON.stringify({ areaOfInterest: arrayAreaOfInterest }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          setallCourseValues(data.applications)
          var myresultsCourse = data.applications
          var courseNumber = Object.keys(myresultsCourse).length;
          setcourseNumber(courseNumber)
        })

    }
    //end for areaOfInterest
    //start for university type
    if (universityType !== "") {
      const url1 = process.env.REACT_APP_SERVER_URL + 'filterUniversityType'
      fetch(url1, {
        method: 'put',
        body: JSON.stringify({ type: universityType }),
        headers: { "Content-Type": "application/json" }

      })
        .then(response => response.json())
        .then(data => {
          setallUniversityValues(data.applications)
          var myresultsUniversity = data.applications
          var universityNumber = Object.keys(myresultsUniversity).length;
          setuniversityNumber(universityNumber)
        })
      const url2 = process.env.REACT_APP_SERVER_URL + 'filtercourseUniversityType';
      fetch(url2, {
        method: 'put',
        body: JSON.stringify({ type: universityType }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          setallCourseValues(data.applications)
          var myresultsCourse = data.applications
          var courseNumber = Object.keys(myresultsCourse).length;
          setcourseNumber(courseNumber)
        })

    }
    //end for university type
    //start for course duration
    if (courseDurationRange !== "") {
      const url1 = process.env.REACT_APP_SERVER_URL + 'filtercourseDuration'
      fetch(url1, {
        method: 'put',
        body: JSON.stringify({ duration: courseDurationRange }),
        headers: { "Content-Type": "application/json" }

      })
        .then(response => response.json())
        .then(data => {
          setallUniversityValues(data.applications)
          var myresultsUniversity = data.applications
          var universityNumber = Object.keys(myresultsUniversity).length;
          setuniversityNumber(universityNumber)
        })
      const url2 = process.env.REACT_APP_SERVER_URL + 'filtercoursecourseDuration';
      fetch(url2, {
        method: 'put',
        body: JSON.stringify({ duration: courseDurationRange }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          setallCourseValues(data.applications)
          var myresultsCourse = data.applications
          var courseNumber = Object.keys(myresultsCourse).length;
          setcourseNumber(courseNumber)
        })

    }
    //end for course duration
  }
  function handleuniversityTypeChange(value) {
    setuniversityType(value)

  }
  function deleteuniversityTypeClick() {
    setuniversityType("")

  }
  function deletecourseDurationRangeClick() {
    setcourseDurationRange("")
  }
  return (
    <div className="main-content">
      {/*Full width header Start*/}
      <div className="full-width-header">
        <Header />
      </div>
      {/*Full width header End*/}
      {/* Breadcrumbs Start */}
      <div className="rs-breadcrumbs img1">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">522 Courses in 108 universities found</h1>
          <ul>
            <li title="coursementor">
              <a className="active" href="index.html">Home</a>
            </li>
            <li>Universities/Courses</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumbs End */}
      <div className="container-fluid">
        <div className="row mb-3 mt-5">



          {arrayCountry.map((element, index) =>
          (
            <div className="col-md-2" key={index}>
              <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true" style={{ fontSize: '20px' }} onClick={() => deleteCountryClick(element)}  >×</span>
                </button>  {element}
              </div>
            </div>
          ))}

          {arrayAreaOfInterest.map((element, index) =>
          (
            <div className="col-md-2" key={index}>
              <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true" style={{ fontSize: '20px' }} onClick={() => deleteAreaOfInterestClick(element)}  >×</span>
                </button>  {element}
              </div>
            </div>
          ))}


          {universityType !== "" ?
            <div className="col-md-2" >
              <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true" style={{ fontSize: '20px' }} onClick={() => deleteuniversityTypeClick()}  >×</span>
                </button>  {universityType}
              </div>
            </div> :
            null
          }
          {courseDurationRange !== "" ?
            <div className="col-md-2" >
              <div className="alert alert-info fade in alert-dismissible show" style={{ marginTop: '18px' }}>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true" style={{ fontSize: '20px' }} onClick={() => deletecourseDurationRangeClick()}  >×</span>
                </button>  Tuition Fees
              </div>
            </div> :
            null
          }

          <div className="col-md-2 mt-3">
            <div className="search-country">
              <form>
                <div className="form-group d-flex serch-from">
                  <span className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input type="search" className="form-control" placeholder="Search Country" id="search" />
                </div>
              </form></div>
          </div>
          <div className="col-md-2 mt-3">
            <div className="search-country">
              <div className="form-group d-flex serch-from">
                <span className="btn btn-primary loct"><i className=" flaticon-location" /></span>
                <input type="search" className="form-control" placeholder="Search City" id="search-city" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-3">
            <section id="filterSection">
              <div className="search-country">
                <div id="accordion">
                  <div className="card">
                    <a className="card-link collapsed card-header" data-bs-toggle="collapse" href="#collapseOne">
                      Country
                    </a>
                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <div className="form-group d-flex serch-from">
                            <span className="btn btn-primary">
                              <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="search" className="form-control" placeholder="Search Country" id="search" />
                          </div>
                        </form>
                        {/* start  for country */}
                        {completeCountry.map((element, index) => (
                          <div key={index}>
                            <input type="checkbox" name="univeristyExam"
                              value={element.name || ""}
                              checked={!!element.following === true}
                              onChange={handleuniveristyExamChange} /> {element.name}
                          </div>
                        ))}
                        {/* end for country */}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapseTwo">
                      Area of Interest
                    </a>
                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <div className="form-group d-flex serch-from">
                            <span className="btn btn-primary">
                              <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="search" className="form-control" placeholder="Search" id="search" />
                          </div>
                        </form>
                        {/* start  for country */}
                        {completeAreaOfInterest.map((element, index) => (
                          <div key={index}>
                            <input type="checkbox" name="areaOfInterest"
                              value={element.name || ""}
                              checked={!!element.following === true}
                              onChange={handleAreaOfInterestChange} /> {element.name}
                          </div>
                        ))}
                        {/* end for country */}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapseThree">
                      University Type
                    </a>
                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <select className="form-control" value={universityType}
                          onChange={(e) => handleuniversityTypeChange(e.target.value)}
                        >
                          <option value="">Select Type</option>
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                          <option value="Govt">Govt</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapse4">
                      Intake
                    </a>
                    <div id="collapse4" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="Jan-April" />Jan - April
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="May-August" />May - August
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="Sep-Dec" />Sep - Dec
                          </label>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapse5">
                      Scholarship
                    </a>
                    <div id="collapse5" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultValue />Scholarship Available
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapse6">
                      Tution Fee Budget
                    </a>
                    <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        {tuitionFeeRange}L
                        <div className="slider-parent">
                          Rs.5L
                          <input type="range" min="5" max="50" value={tuitionFeeRange}
                            onChange={({ target: { value: radius } }) => {
                              settuitionFeeRange(radius);
                            }} />
                          Rs.50L
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapse7">
                      Course Duration
                    </a>
                    <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">

                        {courseDurationRange}
                        <div className="slider-parent">
                          3 month
                          <input type="range" min="3" max="60" value={courseDurationRange}
                            onChange={({ target: { value: radius } }) => {
                              setcourseDurationRange(radius);
                            }} />
                          60 month
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapse8">
                      English Proficiency Exam
                    </a>
                    <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <select className="form-control">
                            <option>Select</option>
                            <option value="IELTS">IELTS</option>
                            <option value="PTE">PTE</option>
                            <option value="TOEFL">TOEFL</option>
                            <option value="Duolingo">Duolingo</option>
                            <option value="CPE">CPE</option>
                            <option value="CAE">CAE</option>
                            <option value="OET">OET</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a className="card-header collapsed card-link" data-bs-toggle="collapse" href="#collapse9">
                      Academic Proficiency Exam
                    </a>
                    <div id="collapse9" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body">
                        <form>
                          <select className="form-control">
                            <option>Select</option>
                            <option value="GRE">GRE</option>
                            <option value="GMAT">GMAT</option>
                            <option value="SAT">SAT</option>
                            <option value="Other">Other</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="readon started apply-filter" onClick={() => handleApplyFilter()}>Apply Filter</button>
              </div>
            </section>
          </div>
          <div className="col-md-9">
            <div className="unver-coures-block search-country">
              {/* Nav pills */}
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="pill" href="#home">Universities ({universityNumber})</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="pill" href="#menu1">Courses ({courseNumber})</a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div id="home" className=" tab-pane active"><br />
                  <form>
                    <div className="form-group d-flex serch-from">
                      <span className="btn btn-primary">     <FontAwesomeIcon icon={faSearch} /></span>
                      <input type="search" className="form-control" placeholder="Search Country" id="search" />
                    </div>
                  </form>
                  <div className="universityCustomTabs">
                    <div className="overviewblock">
                      <div className="overview-box blue-light">
                        <span className="icon">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <h3>{universityNumber} +<br /><span>Dream</span></h3>
                      </div>
                      <div className="overview-box green-light">
                        <span className="icon">
                          <FontAwesomeIcon icon={faBullseye} />

                        </span>
                        <h3>13<br /><span>Reach </span></h3>
                      </div>
                      <div className="overview-box ornage-light">
                        <span className="icon">
                          <FontAwesomeIcon icon={faShield} />
                        </span>
                        <h3>255<br /><span>Safe</span></h3>
                      </div>
                    </div>
                    <div className="dreamuniversity mt-5">
                      <h2><span className="icon">
                        <FontAwesomeIcon icon={faStar} />

                      </span> {universityNumber}Dream Universities</h2>

                      <div className="row">
                        {allUniversityValues.map((element, index) =>
                        (
                          <div className="col-md-6" key={index}>
                            <div className="uniBox">
                              <div className="head">
                                <div className="imgBox"><img src={element.myimage[0].logo} alt="logo" /></div>
                                <div className="details">
                                  <h4 href="#" className="pointer">{element.myinformation[0].name}</h4>
                                  <p>{element.myinformation[0].state}, {element.myinformation[0].country}</p>

                                </div>
                                <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                              </div>
                              <div className="body">
                                <div className="leftSection">
                                  <div className="data">
                                    <FontAwesomeIcon icon={faUniversity} />

                                    <div className="details">
                                      <h4>{element.myinformation[0].type}</h4>
                                      <p>University Type</p>
                                    </div>
                                  </div>
                                  <div className="data">
                                    <FontAwesomeIcon icon={faLaptop} />
                                    <div className="details">
                                      <h4>{element.myoverview[0].foundedYear}</h4>
                                      <p>Established Since</p>
                                    </div>
                                  </div>
                                  <div className="data">
                                    <FontAwesomeIcon icon={faStar} />
                                    <div className="details">
                                      <h4> {element.myoverview[0].ranking} </h4>
                                      <p>NA Ranking</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rightSection">
                                  <div className="data">
                                    <Link target="_blank" to={'/schools/' + element.myinformation[0].slug}
                                    >
                                      <FontAwesomeIcon icon={faCheckSquare} />
                                      Know More</Link></div>
                                </div>
                              </div>
                              <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                                <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-5">
                        <a className="readon started apply-filter" href="#">View More Dream Universities</a>
                      </div>
                    </div>
                    <div className="dreamuniversity mt-5">
                      <h2><span className="icon">
                        <FontAwesomeIcon icon={faBullseye} />
                      </span> 13 Reach Universities</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/waterloouniversity.jpg" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">University of Waterloo</h4>
                                <p>Waterloo, Canada</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">
                                  <FontAwesomeIcon icon={faUniversity} />


                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faLaptop} />


                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">
                                  <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>QS Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">
                                  <FontAwesomeIcon icon={faCheckSquare} />

                                  Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/tufts.png" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">Tufts University</h4>
                                <p>Medford, United States</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">     <FontAwesomeIcon icon={faUniversity} />
                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>NA Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">    <FontAwesomeIcon icon={faCheckSquare} />Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <a className="readon started apply-filter" href="#">View More Reach Universities</a>
                      </div>
                    </div>
                    <div className="dreamuniversity mt-5">
                      <h2><span className="icon">
                        <FontAwesomeIcon icon={faShield} />
                      </span> 255 Safe Universities</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/waterloouniversity.jpg" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">University of Waterloo</h4>
                                <p>Waterloo, Canada</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">     <FontAwesomeIcon icon={faUniversity} />
                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>QS Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">    <FontAwesomeIcon icon={faCheckSquare} />Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="uniBox">
                            <div className="head">
                              <div className="imgBox"><img src="assets/images/university/tufts.png" alt={178} id={178} /></div>
                              <div className="details">
                                <h4 href="#" className="pointer">Tufts University</h4>
                                <p>Medford, United States</p>
                                <p><strong>Campus - </strong> Waterloo</p>
                              </div>
                              <div className="bookmark  d-none d-sm-block"><img className="pointer" src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" alt="" /></div>
                            </div>
                            <div className="body">
                              <div className="leftSection">
                                <div className="data">     <FontAwesomeIcon icon={faUniversity} />
                                  <div className="details">
                                    <h4>Public</h4>
                                    <p>University type</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faLaptop} />
                                  <div className="details">
                                    <h4>1956</h4>
                                    <p>Established Since</p>
                                  </div>
                                </div>
                                <div className="data">    <FontAwesomeIcon icon={faStar} />
                                  <div className="details">
                                    <h4> 163 </h4>
                                    <p>NA Ranking</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rightSection">
                                <div className="data"><a href="#" target="_blank" className="pop-data">    <FontAwesomeIcon icon={faCheckSquare} />Know More</a></div>
                              </div>
                            </div>
                            <div className="foot"><button className="recommended"><span> RECOMMENDED COURSES (8) </span></button>
                              <div className="custom-shortlist d-flex d-sm-none">Tap to Shortlist<div className="condition_btn shortlist"><img src="https://images.leverageedu.com/assets/img/course-finder/Star.svg" className="no-icon" alt="" /><img src="https://images.leverageedu.com/assets/img/course-finder/Star-filled.svg" className="yes-icon" alt="" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <a className="readon started apply-filter" href="#">View More Safe Universities</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" className="tab-pane fade"><br />
                  <div className="unv-coures">

                    {allCourseValues.map((element, index) =>
                    (
                      <div className="courseBox mb-3" key={index}>
                        <div className="courseData">
                          <div className="head-title"><span className="title">{element.courseName} - {element.areaOfInterest}</span></div>
                          <div className="university-details"><img src="assets/images/university/virginiauniversity.jpg" className="uni-logo" alt={9} id={9} />
                            <div className="details">
                              <h5>{element.universities[0].information[0].name}</h5>
                              <p>{element.universities[0].information[0].state}, {element.universities[0].information[0].country}</p>
                            </div>
                          </div>
                          <div className="facilities">
                            <div className="data">
                              <span>
                                <FontAwesomeIcon icon={faCreditCard} />
                              </span>
                              <div className="dataDetails">
                                <h5>{element.currency + " " + element.tuitionFee}</h5>
                                <p> Tuition Fee </p>
                              </div>
                            </div>
                            <div className="data">
                              <span>
                                <FontAwesomeIcon icon={faHistory} />
                              </span>
                              <div className="dataDetails">
                                <h5>{element.duration} Months</h5>
                                <p> Duration </p>
                              </div>
                            </div>
                            <div className="data" >
                              <span>
                                <FontAwesomeIcon icon={faHistory} />
                              </span>
                              <div className="dataDetails">
                                <h5>{element.month} </h5>
                                <p> Intake </p>
                              </div>
                            </div>
                            <div className="data" >
                              <span>
                                <FontAwesomeIcon icon={faHistory} />
                              </span>
                              <div className="dataDetails">
                                <h5>{element.english} </h5>
                                <p> English Proficiency </p>
                              </div>
                            </div>
                          </div>
                          <div className="action"><button>Apply Now</button></div>
                        </div>
                      </div>
                    ))}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>




  );



}

export default FinalFilter;