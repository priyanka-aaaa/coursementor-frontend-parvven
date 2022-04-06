import React from "react";
import AdminApplication from './Application';
import AdminDocument from './Document';
import AdminScholarship from './Scholarship';

function AdminProfile(props) {
    return (
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">University/School </h1>

            </div>
            <div className="row">
                <div className="col-xl-12 ">
                    <div id="accordion">
                        <AdminApplication />
                        <AdminDocument />
                        <AdminScholarship />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;