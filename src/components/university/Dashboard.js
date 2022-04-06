import React, { useState, useEffect } from "react";
import Application from './profile/Application';
import CoursesFee from './profile/CoursesFee';
import PrimaryInfo from './profile/PrimaryInfo';
import Overview from './profile/Overview';
import Ranking from './profile/Ranking';
import ImageVideo from './profile/ImageVideo';
import Scholarship from './profile/Scholarship';
import Faq from './profile/Faq';
import Document from './profile/Document';
export default function Dashboard() {
   return (
        <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">University/School </h1>
        </div>
        <div className="row">
            <div className="col-xl-12 ">
                <div id="accordion">
                    <PrimaryInfo />
                    <Overview />
                    <CoursesFee />
                    <Application />
                    <Document />
                    <Scholarship />
                    <Ranking />
                    <ImageVideo />
                    <Faq />
                </div>
            </div>
        </div>
    </div>
  );
}
