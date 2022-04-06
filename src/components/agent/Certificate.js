import React, { useState, useEffect } from "react";

// import certificate from './img/certificate.jpg';
export default function AgentEvaluate() {
  return (
    <div className="container">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Certificate</h1>


    </div>


    {/* <!-- Content Row --> */}

    <div className="row">

        {/* <!-- Area Chart --> */}
        <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div className="card shadow mb-4">
                    <div className="certificate">
                        <img src="certificate" className="img-fluid" />


                    </div>
                </div>
                {/* <!-- Card Body --> */}

            </div>
        </div>


    </div>


</div>
    );
}