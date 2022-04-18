import { React, UseState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

function country(props) {
  const list = [
    {
      "country": "Australia",
      "image": images["process-1.png"],
      "name": "Australia",
    },
    {
      "country": "Canada",
      "image": images["process-2.png"],
      "name": "Canada",
    },
    {
      "country": "United Kingdom",
      "image": images["process-3.png"],
      "name": "United Kingdom",

    },
    {
      "country": "United States",
      "image": images["process-3.png"],
      "name": "United States",

    }
  ]
  function setCountryInLocalStorage(index) {

    localStorage.setItem("countryFilter", list[index].country);

  }
  let handlecountry = () => {
    var countryValue="Australia,Canada,United Kingdom,United States"
    localStorage.setItem("countryFilter",countryValue);
  }
  return (
    <div className="main-content">
      <div className="full-width-header">
        <Header />
      </div>
      <div className="rs-breadcrumbs img1">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">Select Country</h1>
          <ul>
            <li title="Braintech - IT Solutions and Technology Startup HTML Template">
              <a className="active" href="index.html">Home</a>
            </li>
            <li>Select Country</li>
          </ul>
        </div>
      </div>
      <div className="rs-process style2 pt-120 pb-120 md-pt-80 md-pb-73">
        <div className="container">
          <div className="sec-title2 text-center mb-45">
            <span className="sub-text style-bg">course finder</span>
            <h2 className="title title2">
              SELECT COUNTRY
            </h2>
          </div>
          <div className="row">
            {
              list.map((item, index) =>
                <Link to={'/degree'} className="col-lg-3 col-sm-6 md-mb-50" onClick={() => {
                  setCountryInLocalStorage(index)
                }}>
                  <div className="addon-process">
                    <div className="process-wrap">
                      <div className="process-img">
                        <img
                        
                          src={item.image}
                          alt="" />
                      </div>
                      <div className="process-text">
                        <h3 className="title">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
          </div>
          <div className="text-center mt-5">
            <Link to={'/degree'} className="readon started" href="#"   onClick={() => handlecountry()}>
              Open to all
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default country;