import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function AgentEvaluate() {

    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();


    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [university, setuniversity] = useState("");
    const [education, seteducation] = useState("");
    const [percentage, setpercentage] = useState("");
    const [passingYear, setpassingYear] = useState("");
    const [english, setenglish] = useState("");
    const [overall, setoverall] = useState("");
    const [reading, setreading] = useState("");
    const [listening, setlistening] = useState("");
    const [speaking, setspeaking] = useState("");
    const [writing, setwriting] = useState("");


    useEffect(() => {
        var agentId = localStorage.getItem('agentId');
        var mounted = localStorage.getItem('agentToken');
        setMounted(mounted)
  

    }, [])
    function evaluate(event) {
        event.preventDefault();
        const obj = {
            country: country, state: state, university: university, education: education, percentage: percentage,
            passingYear: passingYear, english: english,
            overall: overall, reading: reading, listening: listening, speaking: speaking, writing: writing

        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'agent/evaluate', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {

                    setsuccessMessage("Evaluate Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                }
                else {

                }

            })
            .catch(error => {

            });
    }

    return (
        <div className="container">
        {submitSuccess === 1 ? <div className="Show_success_message">
            <strong>Success!</strong> {successMessage}
        </div> : null}
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Evaluate Profile</h1>


        </div>


        {/* <!-- Content Row --> */}

        <div className="row">

            {/* <!-- Area Chart --> */}
            <div className="col-xl-12 col-lg-7">
                <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className="card shadow mb-4">
                        <div id="accordion">
                            <div className="card">
                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                    Profile

                                </a>
                                <form onSubmit={evaluate}>
                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>Country</label>
                                                    <select
                                                        value={country}
                                                        onChange={(e) => setcountry(e.target.value)}
                                                        className="form-select ">
                                                        <option selected=""></option>
                                                        <option >India</option>
                                                        <option>Afghanistan</option>
                                                        <option>Albania</option>
                                                        <option>Algeria</option>
                                                        <option>American Samoa</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>State</label>
                                                    <select
                                                        value={state}
                                                        onChange={(e) => setstate(e.target.value)}
                                                        className="form-select ">
                                                        <option selected=""></option>
                                                        <option >Haryana</option>
                                                        <option >Punjab</option>
                                                        <option>Arunachal Pradesh</option>
                                                        <option>Assam</option>
                                                        <option>Bihar</option>
                                                        <option>Chhattisgarh</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>Universities</label>
                                                    <select
                                                        value={university}
                                                        onChange={(e) => setuniversity(e.target.value)}
                                                        className="form-select ">
                                                        <option selected=""></option>
                                                        <option>University of Cambridge Estd. ...</option>
                                                        <option>University of Oxford Estd. ..</option>
                                                        <option>Harvard University Estd. ..</option>
                                                        <option>Stanford University Estd. ..</option>
                                                        <option>California Institute of Technology Estd. ..</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-3">

                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>Education</label>
                                                    <select
                                                        value={education}
                                                        onChange={(e) => seteducation(e.target.value)}
                                                        className="form-select ">
                                                        <option selected=""></option>
                                                        <option>Engineering.</option>
                                                        <option>Computer Science. ...</option>
                                                        <option>Information Technology. </option>
                                                        <option>Business Administration. ...</option>
                                                        <option>Social Sciences. .</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>Percentage</label>
                                                    <input
                                                        value={percentage}
                                                        onChange={(e) => setpercentage(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="persent" />
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>Passing Year</label>
                                                    <input
                                                        value={passingYear}
                                                        onChange={(e) => setpassingYear(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="passing" />
                                                </div>

                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>English Requirement</label>
                                                    <input
                                                        value={english}
                                                        onChange={(e) => setenglish(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="engreq" />
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label"><span>*</span>Overall</label>
                                                    <input
                                                        value={overall}
                                                        onChange={(e) => setoverall(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="overall" />
                                                </div>
                                                <div className="col-md-4">
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-3">
                                                    <label className="form-label"><span>*</span>Reading</label>
                                                    <input
                                                        value={reading}
                                                        onChange={(e) => setreading(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="reading" />
                                                </div>

                                                <div className="col-md-3">
                                                    <label className="form-label"><span>*</span>Listening</label>
                                                    <input
                                                        value={listening}
                                                        onChange={(e) => setlistening(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="listening" />
                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label"><span>*</span>Speaking</label>
                                                    <input
                                                        value={speaking}
                                                        onChange={(e) => setspeaking(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="speaking" />
                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label"><span>*</span>Writing</label>
                                                    <input
                                                        value={writing}
                                                        onChange={(e) => setwriting(e.target.value)}
                                                        type="text" className="form-control" placeholder="" name="writing" />
                                                </div>
                                            </div>


                                            <div className="row mt-3">
                                                <div className="col-md-12 text-right">
                                                    <button type="button" className="btn btn-light">Clear</button>
                                                    <button type="submit" className="btn btn-success ">Apply</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <!-- Card Body --> */}

            </div>
        </div>


    </div>
        );
}