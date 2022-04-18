import React from 'react';
import Footer from './Footer'
import Header from './Header'
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
      "degree": "Bachelors",
      "image": images["graduated.png"]
    },
    {
      "degree": "Masters",
      "image": images["graduated.png"]
    },
    {
      "degree": "MBA",
      "image": images["graduated.png"]
    },
  ]
  function setDegreeInLocalStorage(index) {

    localStorage.setItem("degreeFilter", list[index].degree);
  }

  return (
    <div className="main-content">
      <div className="full-width-header">
        <Header />
      </div>
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
            {list.map((item, index) =>
              <Link to={'/majorPursue'} className="col-lg-4 col-sm-8 md-mb-50" onClick={() => setDegreeInLocalStorage(index)} >
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <a href="course_finder_master.html">

                        <img src={item.image} alt="" />


                      </a>
                    </div>
                    <div className="process-text">
                      <h3 className="title">{item.degree}</h3>
                    </div>
                  </div>
                </div>
              </Link>)}
          </div>

          <div className="shape-image">
            <img className="top dance" src="assets/images/about/dotted-3.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default country;