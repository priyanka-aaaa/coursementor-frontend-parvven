import React from 'react';

function AddStudent(props) {
    return (
        <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Student Application </h1>
        </div>
        {/* Content Row */}
        <div className="row">
            {/* Area Chart */}
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card shadow mb-4">
                        <div id="accordion">
                            <div className="card">
                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                    Student Application Details
                                </a>
                                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        <div className="table-format">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Student ID</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Student Name</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">Rishik</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Application ID</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">15947</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Email</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Program Title</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Fees</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">11000</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Intake</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">January</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">English Test</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">I don't have this</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">English 12Th Marks</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">71</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Education</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                        <span className="badge bg-secondary">71%</span>
                                                        <span className="badge bg-secondary">M 50</span>
                                                        <span className="badge bg-secondary">E 71</span>
                                                        XII
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Board/University</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">Central Board of Secondary Education</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Applied On</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Application Level</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Institute</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">Academy of Learning</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Duration</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">1 year</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="th-format">Pendency</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="td-format">71</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card Body */}
                </div>
            </div>
            <div className="col-xl-4">
                <div className="card shadow mb-4">
                    <div className="profile-main">
                        <div className="profile-box-main">
                            <span className="ant-avatar ant-avatar-circle"><span className="ant-avatar-string">R</span>
                            </span>
                        </div>
                        <div className="profile-box-inner">
                            <h5>RISHIK</h5>
                            <p>Accounting &amp; Payroll Administrator</p>
                            <p>1 year</p>
                            <p>Academy of Learning</p>
                        </div>
                        <div className="application-current-status">
                            <h5>Application Current Status</h5>
                            <ul>
                                <li className="statusBox ">New Student<span><i className="fas fa-check-circle" /></span></li>
                                <li className="statusBox ">Waiting To Apply<span><i className="fas fa-check-circle" /></span></li>
                                <li className="statusBox ">Offer Applied<span><i className="fas fa-check-circle" /></span></li>
                                <li className="statusBox bgTheme">Offer Received</li>
                                <li className="statusBox ">Tuition Fee Paid &amp; TT Received</li>
                                <li className="statusBox ">LOA/Fee Receipt Issued</li>
                                <li className="statusBox ">Visa File Submitted</li>
                                <li className="statusBox ">Visa Approved</li>
                                <li className="statusBox ">Visa Rejected</li>
                                <li className="statusBox ">Visa Refund Applied</li>
                                <li className="statusBox ">Case Close</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card shadow mb-4">
                <div className="act-note">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#home">Activity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#menu1">Notes</a>
                        </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div id="home" className=" tab-pane active"><br />
                            <div className="card-body">
                                <div className="application-activity">
                                    <ul>
                                        <li>
                                            <div className="date"><span> 22.12.2021<br />01:36 pm</span></div>
                                            <div className="content"><label>Student Added</label>
                                                <div className="actBy"> by Satnam singh</div>
                                                <div style={{ marginLeft: '25px' }} />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="date"><span> 13.01.2022<br />04:50 pm</span></div>
                                            <div className="content"><label>Application Opened</label>
                                                <div className="actBy"> by Satnam singh</div>
                                                <div style={{ marginLeft: '25px' }}>Offer Received assigned to Khushi</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="menu1" className=" tab-pane fade"><br />
                            <div className="note">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span><i className="fas fa-check-square" /></span>
                                        <div className="con-info">
                                            <h6>Note</h6>
                                            <p><strong>@Khushi</strong> Dear Sir, Kindly Provide Student's english profiency test . Thanks!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dat-time text-right">13.01.2022,5:31 PM</div>
                                    </div>
                                </div>
                                <div className="chat-msg">
                                    <h6><span><i className="fas fa-user-circle" /> Khushi left a note.</span></h6>
                                    <div className="msg-content">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <span><i className="fas fa-check-square" /></span>
                                                <div className="con-info">
                                                    <h6>@Satnam singh</h6>
                                                    <p>Please ignore. It is by mistake. Sorry for that.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="dat-time text-right">16.01.2022,1:44 PM</div>
                                            </div>
                                        </div>
                                        <div className="row text-right">
                                            <div className="col-md-12">
                                                <button type="button" className="btn btn-success" onclick="opencoment()"><span><i className="fas fa-plus" /></span>Add Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*--comment-*/}
                                {/* <div className="card-body comment" id="mycomment">
    
    <div className="student-view" >
        <div className="row">
            <div className="col-md-6">
            <h6 className="mt-2 font-weight-bold text-primary">Comment</h6>
            </div>
            <div className="col-md-6">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>                        
            </div>
        </div>
        <div className="row mt-3">
            <form>                                  


                 <div className="col-md-12 mt-3">
                    <label className="form-label">Comment </label>                                      
                   <textarea className="form-control" row="3" col="5"></textarea>
                 </div>
                 <div className="col-md-12">
                 <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#adduserModal">Submit</button>
              </div>

            </form>
        </div>  
   </div>
</div> */}
                                {/*-end-comment-*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="applic-document">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Documents</h4>
                    </div>
                    <div className="col-md-6 text-right"><button type="button" className="btn btn-success" onclick="openNav()"><span><i className="fas fa-plus" /></span>Upload New Document</button></div>
                </div>
                <ul>
                    <li>PASSPORT <span><i className="fas fa-eye" /></span></li>
                    <li>10TH<span><i className="fas fa-eye" /></span></li>
                    <li>12TH<span><i className="fas fa-eye" /></span></li>
                    <li>MEDIUM OF INSTRUCTION<span><i className="fas fa-eye" /></span></li>
                    <li>LETTER OF RECOMMENDATION<span><i className="fas fa-eye" /></span></li>
                    <li>OFFER LETTER<span><i className="fas fa-eye" /></span></li>
                </ul>
            </div>
            <div className="card-body sidenav" id="mySidenav">
                <div className="student-view">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="mt-2 font-weight-bold text-primary">Upload Documents</h6>
                        </div>
                        <div className="col-md-6">
                            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <form>
                            <div className="col-md-12">
                                <label className="form-label">Document Type </label>
                                <select name="doc-type" className="form-control">
                                    <option>Passport</option>
                                    <option>IELTS</option>
                                    <option>10th</option>
                                    <option>12th</option>
                                    <option>Bachelor DMC</option>
                                    <option>Backlog</option>
                                    <option>Degree</option>
                                </select>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Choose Documents</label>
                                <input type="file" name="st-name" className="form-control" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Document Description </label>
                                <textarea className="form-control" row={3} col={5} defaultValue={""} />
                            </div>
                            <div className="col-md-12">
                                <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#adduserModal">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddStudent;