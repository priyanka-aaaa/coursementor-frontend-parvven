import React from 'react';
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
export default function Home() {
    return (
      
            <div className="main-content">
                <div className="full-width-header">
                    <Header />
                    <div className="error-page">
                        <div className="row">

                            <div className="col-md-12 error-content">
                                <div className="error-pict">
                                    <img src={images["404-error.png"]} alt="error" />

                                </div>
                            <Link to={'/'} className="btn-homepage">
                            Go To Home page
                                   </Link>
                               
                            </div>
                        </div>
                        <Footer />
                    </div>

                </div>
            </div>

            );
}

