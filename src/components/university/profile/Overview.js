import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown, faAngleUp
} from '@fortawesome/free-solid-svg-icons';
export default function Overview() {

    const [arrayEnglish, setarrayEnglish] = useState([]);
    const [myallGroupsUserSpecific, setmyallGroupsUserSpecific] = useState([]);
    const [mounted, setMounted] = useState();
    const [foundedYear, setfoundedYear] = useState("");
    const [ranking, setranking] = useState("");
    const [rate, setrate] = useState("");
    const [course, setcourse] = useState("");
    const [courseNo, setcourseNo] = useState("");
    const [month, setmonth] = useState("");
    const [myyear, setmyyear] = useState("");
    const [english, setenglish] = useState("");
    const [cgpa, setcgpa] = useState("");
    const [acceptanceRate, setacceptanceRate] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [foundedYearMessage, setfoundedYearMessage] = useState("");
    const [yearMessage, setyearMessage] = useState("");
    const [loader, setmyloader] = useState("false");
    const [FoundedYearNoError, setFoundedYearNoError] = useState("");
    const [RankingNoError, setRankingNoError] = useState("");
    const [PopularCourseNoError, setPopularCourseNoError] = useState("");
    const [YearNoError, setYearNoError] = useState("");
    const [AcceptanceNoError, setAcceptanceNoError] = useState("");
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    const onChangefoundedYear = (e) => {
        setfoundedYear(e);
        setfoundedYearMessage("")
    }
    const onChangeYear = (e) => {
        setmyyear(e);
        setyearMessage("")
    }


    useEffect(() => {


        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
        if (universityId !== null) {
            axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/overview')
                .then(function (res) {

                    if (res.data.success === true) {

                        var student_universityOverview = res.data.universityOverview;
                        var universityenglish = student_universityOverview.english
                        var myArray = universityenglish.split(",");
                        setarrayEnglish(myArray)
                        setfoundedYear(student_universityOverview.foundedYear);
                        setranking(student_universityOverview.ranking);
                        setrate(student_universityOverview.rate);
                        setcourse(student_universityOverview.course);
                        setcourseNo(student_universityOverview.courseNo);
                        setmonth(student_universityOverview.month);
                        setmyyear(student_universityOverview.year);
                        setenglish(student_universityOverview.english);
                        setcgpa(student_universityOverview.cgpa);
                        setacceptanceRate(student_universityOverview.acceptanceRate);
                        let allGroups1 = [
                            { "id": "IELTS", "name": "IELTS" },
                            { "id": "TOEFL", "name": "TOEFL" },
                            { "id": "Duolingo", "name": "Duolingo" },
                            { "id": "CPE", "name": "CPE" },
                            { "id": "CAE", "name": "CAE" },
                            { "id": "OET", "name": "OET" }

                        ];
                        let allGroupsUserSpecific1 = allGroups1.map(group => (
                            { ...group, following: myArray.includes(group.id) })
                        );
                        setmyallGroupsUserSpecific(allGroupsUserSpecific1)
                    }
                    else {
                        let allGroups1 = [
                            { "id": "IELTS", "name": "IELTS" },
                            { "id": "TOEFL", "name": "TOEFL" },
                            { "id": "Duolingo", "name": "Duolingo" },
                            { "id": "CPE", "name": "CPE" },
                            { "id": "CAE", "name": "CAE" },
                            { "id": "OET", "name": "OET" }

                        ];
                        let allGroupsUserSpecific1 = allGroups1.map(group => (
                            { ...group, following: arrayEnglish.includes(group.id) })
                        );
                        setmyallGroupsUserSpecific(allGroupsUserSpecific1)
                    }

                })
                .catch(error => {
                    let allGroups1 = [
                        { "id": "IELTS", "name": "IELTS" },
                        { "id": "TOEFL", "name": "TOEFL" },
                        { "id": "Duolingo", "name": "Duolingo" },
                        { "id": "CPE", "name": "CPE" },
                        { "id": "CAE", "name": "CAE" },
                        { "id": "OET", "name": "OET" }

                    ];
                    let allGroupsUserSpecific1 = allGroups1.map(group => (
                        { ...group, following: arrayEnglish.includes(group.id) })
                    );
                    setmyallGroupsUserSpecific(allGroupsUserSpecific1)
                });
        }
    }, [])


    function handleClick() {
        if (down === "1") {
            setdown("0");
            setup("1")
        }
        else {
            setdown("1");
            setup("0")
        }
    }

    const handleuniveristyEnglishProficiencyChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            var mycheckboxValue = e.target.value
            setarrayEnglish((prevVals) => [...prevVals, mycheckboxValue])
        }
        else {
            var mycheckboxValue = e.target.value
            var filteredArray = arrayEnglish.filter(e => e !== mycheckboxValue)
            let allGroups1 = [
                { "id": "IELTS", "name": "IELTS" },
                { "id": "TOEFL", "name": "TOEFL" },
                { "id": "Duolingo", "name": "Duolingo" },
                { "id": "CPE", "name": "CPE" },
                { "id": "CAE", "name": "CAE" },
                { "id": "OET", "name": "OET" }

            ];
            let allGroupsUserSpecific1 = allGroups1.map(group => (
                { ...group, following: filteredArray.includes(group.id) })
            );
            setmyallGroupsUserSpecific(allGroupsUserSpecific1)
            setarrayEnglish(filteredArray)
        }
    };
    function handleFormSubmit(event) {
        event.preventDefault();
        var myPattern = /^[0-9_.]*$/;
        var foundedYearNo = foundedYear.toString().length;
        // var yearNo = myyear.toString().length;
        setFoundedYearNoError("")
        setRankingNoError("")
        setPopularCourseNoError("")
        setYearNoError("")
        setAcceptanceNoError("")
        // if (myPattern.test(foundedYear) === false) {
        //     setFoundedYearNoError("Please Enter Only Number")
        // }

        if (myPattern.test(ranking) === false) {
            setRankingNoError("Please Enter Only Number")

        }
        else if (myPattern.test(courseNo) === false) {
            setPopularCourseNoError("Please Enter Only Number")

        }
        // else if (myPattern.test(myyear) === false) {
        //     setYearNoError("Please Enter Only Number")

        // }
        else if (myPattern.test(acceptanceRate) === false) {
            setAcceptanceNoError("Please Enter Only Number")

        }

        else {



            setmyloader("true")
            var enlishProficiencyArray = arrayEnglish;
            var englishProficiencyString = enlishProficiencyArray.toString()

            const obj = {
                foundedYear: foundedYear,
                ranking: ranking,
                rate: rate,
                course: course,
                courseNo: courseNo,
                month: month,
                year: myyear,
                english: englishProficiencyString,
                cgpa: cgpa,
                acceptanceRate: acceptanceRate
            };
            axios.put(process.env.REACT_APP_SERVER_URL + 'university/overview', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setsuccessMessage("Overview Updated")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                    }
                })
                .catch(error => {

                });
        }
    }

    return (
        <div>

            {loader === "true" ?
                <Loader />
                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo" onClick={() => handleClick()} ><strong>2</strong>
                    Overview
                    {down === "0" ?
                        null
                        :
                        <FontAwesomeIcon icon={faAngleDown} style={{
                            position: "absolute",
                            fontWeight: 900,
                            fontFamily: 'Font Awesome 5 Free',
                            marginRight: "0.1rem",
                            right: "16px",

                        }} />
                    }
                    {up === "0" ?
                        null
                        :
                        <FontAwesomeIcon icon={faAngleUp} style={{
                            position: "absolute",
                            fontWeight: 900,
                            fontFamily: 'Font Awesome 5 Free',
                            marginRight: "0.1rem",
                            right: "16px",
                        }} />
                    }
                </a>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <form onSubmit={handleFormSubmit}>


                        <div className="card-body">
                            <div className="d-flex flex-wrap" id="Address">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Founded year<span className="req-star">*</span></label>
                                        <input type="number" className="form-control"
                                            required
                                            value={foundedYear}
                                            onChange={(e) => onChangefoundedYear(e.target.value)}
                                        />
                                        <span style={{ color: "red" }}> {foundedYearMessage}</span>
                                        <div style={{ color: "red" }}> {FoundedYearNoError}</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="State/Province">Ranking<span className="req-star">*</span></label>
                                        <input type="number" className="form-control"
                                            required
                                            value={ranking}
                                            onChange={(e) => setranking(e.target.value)}
                                        />
                                        <div style={{ color: "red" }}> {RankingNoError}</div>

                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group"><label htmlFor="City/Town">International Student Rate<span className="req-star">*</span></label>
                                        <select
                                            value={rate}
                                            onChange={(e) => setrate(e.target.value)}
                                            className="form-control" name="city" required>
                                            <option value="">Select Student Rate</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="form-group">
                                        <label>Popular Courses<span className="req-star">*</span></label>
                                        <input type="text" name="city" className="form-control"
                                            placeholder="Master in Architecture"
                                            required
                                            value={course}
                                            onChange={(e) => setcourse(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                                    <div className="form-group">
                                        <label htmlFor="Zipcode">No. of courses<span className="req-star">*</span></label>
                                        <input type="number" name="courseNo" className="form-control"
                                            required
                                            value={courseNo}
                                            onChange={(e) => setcourseNo(e.target.value)}
                                            placeholder="7"
                                        />
                                        <div style={{ color: "red" }}> {PopularCourseNoError}</div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                                < label htmlFor="State/Province">English Proficiency<span className="req-star">*</span></label>
                                                <div className="checkgrp">
                                                {myallGroupsUserSpecific.map((element, index) => (
                                                    <div key={index}>
                                                        {element.following === true ?
                                                            <>
                                                                <input type="checkbox" name="univeristyEnglishProficiency"
                                                                    value={element.name} checked
                                                                    onChange={handleuniveristyEnglishProficiencyChange} />{element.name}
                                                            </>
                                                            :
                                                            <>
                                                                <input type="checkbox" name="univeristyEnglishProficiency"
                                                                    value={element.name}
                                                                    onChange={handleuniveristyEnglishProficiencyChange} />{element.name}
                                                            </>
                                                        }
                                                    </div>
                                                ))}
                                                </div>
                                            </div> 
                                </div>


                                <div className="col-12">
                                    <div className="row">
                                        {/* <div className="col-md-4">
                                            <div className="form-group">
                                                < label htmlFor="State/Province">English Proficiency<span className="req-star">*</span></label>
                                                {myallGroupsUserSpecific.map((element, index) => (
                                                    <div key={index}>
                                                        {element.following === true ?
                                                            <>
                                                                {element.name}<input type="checkbox" name="univeristyEnglishProficiency"
                                                                    value={element.name} checked
                                                                    onChange={handleuniveristyEnglishProficiencyChange} />
                                                            </>
                                                            :
                                                            <>
                                                                {element.name}<input type="checkbox" name="univeristyEnglishProficiency"
                                                                    value={element.name}
                                                                    onChange={handleuniveristyEnglishProficiencyChange} />
                                                            </>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        </div> */}
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="State/Province">CGPA</label>
                                                <input type="number" className="form-control" placeholder="CGPA"
                                                    value={cgpa}
                                                    onChange={(e) => setcgpa(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="State/Province">Acceptance rate(%)<span className="req-star">*</span></label>
                                                <input type="number" className="form-control" placholder=" acceptance rate"
                                                    required value={acceptanceRate}
                                                    onChange={(e) => setacceptanceRate(e.target.value)}
                                                />
                                                <div style={{ color: "red" }}> {AcceptanceNoError}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">
                                        <button type="submit" className="btn btn-secondary" title="Save"
                                            data-toggle="tooltip" data-placement="right"
                                        >Save</button>
                                        <button type="button" data-bs-toggle="collapse" href="#collapse3" className="btn btn-success" title="Save & Next">Save & Next</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div >
        </div >
    );
};


