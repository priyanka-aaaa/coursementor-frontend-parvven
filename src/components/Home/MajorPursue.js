import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
function MajorPursue(props) {
  useEffect(() => {

    window.scrollTo(0, 0)
  }, []);


  const list = [
    {
      "major": "Managment",
    },
    {
      "major": "Engineering",
    },
    {
      "major": "Computers and Data Science",
    },
    {
      "major": "Design",
    },
    {
      "major": "Finance and Banking",
    },
    {
      "major": "Law",
    },
    {
      "major": "Humanities and Social Sciences",
    },
    {
      "major": "Sciences",
    },
    {
      "major": "Medicine and Pharma",
    },
    {
      "major": "Performing and Creative Arts",
    }, {
      "major": "Media and Journalism",
    }, {
      "major": "Hospitality and Tourism",
    }, {
      "major": "Marketing and Advertising",
    }, {
      "major": "Sports and Nutrition",

    }, {
      "major": "Architecture",
    },
  ]
  function setMajorInLocalStorage(index) {

    localStorage.setItem("majorFilter", list[index].major);
  }
  function setMajorScoreLocalStorage(event) {

    localStorage.setItem("majorScoreFilter", event.target.value);
  }

  return (

    <div className="main-content">
      <div className="full-width-header">
        <Header />
      </div>
      <div className="rs-breadcrumbs img1">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">BACHELORS DEGREE Course</h1>
          <ul>
            <li title="coursementor">
              <a className="active" href="index.html">Home</a>
            </li>
            <li>Course</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumbs End */}
      <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80 text-center grd-level">
        <h2>Which major do you want to pursue?</h2>
        <div className="search-from">

          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <div className="outer">
                <input type="serach" className="form-control" onChange={setMajorScoreLocalStorage} />

                {/* <button className="btn btn-outline-primary"> */}
                <Link className="btn btn-outline-primary" to={'/NgoExperience'} href="#">
                  Search
                </Link>
                {/* </button> */}
              </div>
            </div>
            <div className="col-md-4" />
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-12">
                <ul>

                  {
                    list.map((item, index) =>
                      <a onClick={() => setMajorInLocalStorage(index)}><li className="btn btn-outline-secondary"><span><i className="fa fa-book" /></span>{list[index].major}</li></a>
                    )}
                </ul>
              </div>
            </div>
          </div>
          <Link to="/test" >Continue</Link>

        </div>
      </div>
      <Footer />
    </div>
  );



}

export default MajorPursue;