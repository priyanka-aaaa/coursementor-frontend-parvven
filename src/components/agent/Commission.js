import React from 'react';
function AddStudent(props) {
  return (
    <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Commissions</h1>
              </div>
              {/* Content Row */}
              {/* Content Row */}
              <div className="row">
                {/* Content Column */}
                <div className="col-lg-12 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="m-0 font-weight-bold text-primary">Commissions </h6>
                        </div>
                        <div className="col-md-4" />
                        <div className="col-md-2">
                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#adduserModal"><span><i className="fas fa-plus" /></span>Commissions Structure</button>
                        </div>
                      </div>
                    </div>
                    {/* The Modal */}
                    <div className="modal" id="adduserModal">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          {/* Modal Header */}
                          <div className="modal-header">
                            <h4 className="modal-title">Commissions Structure</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                          </div>
                          {/* Modal body */}
                          <div className="modal-body">
                            <from>
                              <div className="mb-3">
                                <div className="row">
                                  <div className="col-md-4">
                                    <label className="form-label"><span>*</span>Contact Person Name</label>
                                    <input type="text" className="form-control" placeholder name="cpname" />
                                  </div>
                                  <div className="col-md-4">
                                    <label className="form-label"><span>*</span>Country Code</label>
                                    <input type="text" className="form-control" placeholder name="count-code" />
                                  </div>
                                  <div className="col-md-4">
                                    <label className="form-label"><span>*</span>Mobile No</label>
                                    <input type="text" className="form-control" placeholder name="Mnumber" />
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <div className="row">
                                  <div className="col-md-4">
                                    <label className="form-label"><span>*</span>Email</label>
                                    <input type="text" className="form-control" placeholder name="email" />
                                  </div>
                                  <div className="col-md-4">
                                    <label className="form-label"><span>*</span>Password</label>
                                    <input type="password" className="form-control" placeholder name="Password" />
                                  </div>
                                  <div className="col-md-4">
                                    <label className="form-label"><span>*</span>Country</label>
                                    <select className="form-control" name="country" required>
                                      <option value>Select Country</option>
                                      <option value={101}>India</option>
                                      <option value={1}>Afghanistan</option>
                                      <option value={2}>Albania</option>
                                      <option value={3}>Algeria</option>
                                      <option value={4}>American Samoa</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex flex-wrap" id="Address">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                  <div className="form-group">
                                    <label htmlFor="State/Province">State/Province <span className="text-danger"> *</span>
                                    </label>
                                    <select className="form-control" name="state" required>
                                      <option value>Select State</option>
                                      <option value>Please select country to view states
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                  <div className="form-group"><label htmlFor="City/Town">City/Town <span className="text-danger"> *</span></label>
                                    <select className="form-control" name="city" required>
                                      <option value>Select State</option>
                                      <option value>Please select a state to view cities
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-8">
                                  <div className="form-group">
                                    <label htmlFor="addressLine2">Address <span className="text-danger">
                                      *</span></label>
                                    <input type="text" className="form-control" placeholder="Address" name="address_text" required defaultValue />
                                  </div>
                                </div>
                                <div className="clearfix" />
                              </div>
                            </from>
                          </div>
                          {/* Modal footer */}
                          <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                          <div className="row">
                            <div className="col-sm-12">
                              <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                <thead>
                                  <tr>
                                    <th rowSpan={1} colSpan={1}>Sr.No</th>
                                    <th rowSpan={1} colSpan={1}>Date</th>
                                    <th rowSpan={1} colSpan={1}>Payment Mode</th>
                                    <th rowSpan={1} colSpan={1}>Credit</th>
                                    <th rowSpan={1} colSpan={1}>Debit</th>
                                    <th rowSpan={1} colSpan={1}>Blance</th>
                                    <th rowSpan={1} colSpan={1}>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="odd">
                                    <td className="sorting_1">1</td>
                                    <td>20/1/2022</td>
                                    <td>Cash/Bank</td>
                                    <td>done</td>
                                    <td>No</td>
                                    <td>$700</td>
                                    <td><span><i className="fas fa-eye" /></span></td>
                                  </tr>
                                  <tr className="even">
                                    <td className="sorting_1">2</td>
                                    <td>20/1/2022</td>
                                    <td>Cash/Bank</td>
                                    <td>done</td>
                                    <td>No</td>
                                    <td>$700</td>
                                    <td><span><i className="fas fa-eye" /></span></td>
                                  </tr>
                                  <tr className="odd">
                                    <td className="sorting_1">3</td>
                                    <td>20/1/2022</td>
                                    <td>Cash/Bank</td>
                                    <td>done</td>
                                    <td>No</td>
                                    <td>$700</td>
                                    <td><span><i className="fas fa-eye" /></span></td>
                                  </tr>
                                  <tr className="even">
                                    <td className="sorting_1">4</td>
                                    <td>20/1/2022</td>
                                    <td>Cash/Bank</td>
                                    <td>done</td>
                                    <td>No</td>
                                    <td>$700</td>
                                    <td><span><i className="fas fa-eye" /></span></td>
                                  </tr>
                                  <tr className="odd">
                                    <td className="sorting_1">5</td>
                                    <td>20/1/2022</td>
                                    <td>Cash/Bank</td>
                                    <td>done</td>
                                    <td>No</td>
                                    <td>$700</td>
                                    <td><span><i className="fas fa-eye" /></span></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}

export default AddStudent;