import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "./DataTable";
import axios from 'axios';
import Loader from '../Home/Loader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen, faEye
} from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
export default function Courses() {
    const [arrayEnglish, setarrayEnglish] = useState([]);
    const [arrayExam, setarrayExam] = useState([]);
    const [myallEnglish, setmyallEnglish] = useState([]);
    const [englishError, setenglishError] = useState([]);
    const [examError, setexamError] = useState([]);


    const [myallExam, setmyallExam] = useState([]);
    const [userinfo, setUserInfo] = useState({
        univeristyEnglishProficiency: [],
        response: [],
    });
    const [UserInfoExam, setUserInfoExam] = useState({
        univeristyExam: [],
        response: [],
    });
    const [courseName, setcourseName] = useState("");
    const [duration, setduration] = useState("");
    const [tuitionFee, settuitionFee] = useState("");
    const [descriptionPopupValue, setdescriptionPopupValue] = useState("");
    const [currency, setcurrency] = useState("");
    const [courseLevel, setcourseLevel] = useState("");
    const [cgpa, setcgpa] = useState("");
    const [eligibility, seteligibility] = useState("");
    const [english, setenglish] = useState("");
    const [website, setwebsite] = useState("");
    const [description, setdescription] = useState("");
    const [exam, setexam] = useState("");
    const [courseId, setcourseId] = useState("");
    const [width, setwidth] = useState("");
    const [viewWidth, setviewWidth] = useState("");
    const [addWidth, setaddWidth] = useState("");
    const [mounted, setmounted] = useState();
    const [data, setdata] = useState([]);
    const [Intakedata, setIntakedata] = useState([]);
    const [editId, seteditId] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successIntakeMessage, setsuccessIntakeMessage] = useState("0");
    const [year, setyear] = useState("");
    const [month, setmonth] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");
    const [intakeyear, setintakeyear] = useState("");
    const [intakemonth, setintakemonth] = useState("jan");
    const [loader, setmyloader] = useState("false");
    const [tuitionFeeNoError, settuitionFeeNoError] = useState("");
    const [showModal, setshowModal] = useState(false);
    const [showDescriptionModal, setshowDescriptionModal] = useState(false);
    const [areaOfInterest, setareaOfInterest] = useState(false);
    // start for pagination
    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [isReadMore, setIsReadMore] = useState(true);
    const ITEMS_PER_PAGE = 5;
    const tableHeaders = [
        { name: "No#", field: "_id", sortable: false },
        { name: "Course Name", field: "courseName", sortable: true },
        { name: "Duration", field: "duration", sortable: true },
        { name: "Tuition Fee", field: "tuitionFee", sortable: true },
        { name: "Currency", field: "currency", sortable: true },
        { name: "Action", field: "", sortable: false },
    ];
    // end for pagination
    useEffect(() => {
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setmounted(mounted)
        setuniversityId(universityId)
        if (universityId !== null) {
            const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
            fetch(url, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    setComments(data.universityCourses);
                    var student_universityCourse = data.universityCourses;
                    if (Object.keys(student_universityCourse).length !== 0) {
                    }
                    else {
                    }
                    let buildEnglishArray = [
                        { "id": "IELTS", "name": "IELTS" },
                        { "id": "TOEFL", "name": "TOEFL" },
                        { "id": "Duolingo", "name": "Duolingo" },
                        { "id": "CPE", "name": "CPE" },
                        { "id": "CAE", "name": "CAE" },
                        { "id": "OET", "name": "OET" }

                    ];
                    let allGroupsUserSpecific1 = buildEnglishArray.map(group => (
                        { ...group, following: arrayEnglish.includes(group.id) })
                    );
                    setmyallEnglish(allGroupsUserSpecific1)
                    let buildExamArray = [
                        { "id": "GRE", "name": "GRE" },
                        { "id": "GMAT", "name": "GMAT" },
                        { "id": "SAT", "name": "SAT" },
                        { "id": "Other", "name": "Other" }
                    ];
                    let allGroupsUserSpecific2 = buildExamArray.map(group => (
                        { ...group, following: arrayExam.includes(group.id) })
                    );
                    setmyallExam(allGroupsUserSpecific2)
                })
            const url2 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
            fetch(url2, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    var myresults = data.universityIntakes
                    if (Object.keys(myresults).length === 0) {

                    }
                    else {
                        setIntakedata(data.universityIntakes)
                    }
                })
        }
    }, [])
    function open() {
        setshowModal(true)
    }
    function close() {
        setshowModal(false)
    }
    function closeDescription() {
        setshowDescriptionModal(false)
    }
    const toggleReadMore = (value) => {
        setdescriptionPopupValue(value)
        if (isReadMore === true) {
            setshowDescriptionModal(true)
        }
    };
    const handleuniveristyEnglishProficiencyChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            var mycheckboxValue = e.target.value
            setarrayEnglish((prevVals) => [...prevVals, mycheckboxValue])
        }
        else {
            var mycheckboxValue = e.target.value
            var filteredEnglishArray = arrayEnglish.filter(e => e !== mycheckboxValue)
            let buildEnglishArray = [
                { "id": "IELTS", "name": "IELTS" },
                { "id": "TOEFL", "name": "TOEFL" },
                { "id": "Duolingo", "name": "Duolingo" },
                { "id": "CPE", "name": "CPE" },
                { "id": "CAE", "name": "CAE" },
                { "id": "OET", "name": "OET" }

            ];
            let allGroupsUserSpecific1 = buildEnglishArray.map(group => (
                { ...group, following: filteredEnglishArray.includes(group.id) })
            );
            setmyallEnglish(allGroupsUserSpecific1)
            setarrayEnglish(filteredEnglishArray)
        }
    };
    const handleuniveristyExamChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            var mycheckboxValue = e.target.value
            setarrayExam((prevVals) => [...prevVals, mycheckboxValue])
        }
        else {
            var mycheckboxValue = e.target.value
            var filteredExamArray = arrayExam.filter(e => e !== mycheckboxValue)
            let buildExamArray = [
                { "id": "GRE", "name": "GRE" },
                { "id": "GMAT", "name": "GMAT" },
                { "id": "SAT", "name": "SAT" },
                { "id": "Other", "name": "Other" }
            ];
            let allGroupsUserSpecific2 = buildExamArray.map(group => (
                { ...group, following: arrayExam.includes(group.id) })
            );
            setarrayExam(filteredExamArray)

            setmyallExam(allGroupsUserSpecific2)

        }
    };

    // start for pagination
    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.courseName.toLowerCase().includes(search.toLowerCase()) ||
                    comment.duration.toLowerCase().includes(search.toLowerCase()) ||
                    comment._id.toLowerCase().includes(search.toLowerCase())
            );
        }
        setTotalItems(computedComments.length);
        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }
        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);
    // end for pagination
    let handleIntakeSubmit = (event) => {
        event.preventDefault();
        setshowModal(false)
        setmyloader("true")
        const obj = {
            year: intakeyear,
            month: intakemonth,
        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'university/intakes/', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setmyloader("false")
                if (res.data.success === true) {
                    setsuccessIntakeMessage("Intake add")
                    setTimeout(() => setsuccessIntakeMessage(""), 3000);
                    setsuccessIntakeMessage(1)
                    setyear("");
                    setmonth("");
                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
                    fetch(url, {
                        method: 'GET',
                        headers: { 'Authorization': mounted }
                    })
                        .then(response => response.json())
                        .then(data => {
                            setIntakedata(data.universityIntakes)
                        })
                }
            })
            .catch(error => {
            });
    }
    function handleClick(value) {
        setexamError("")
        setenglishError("")
        seteditId(value);
        setwidth("90%");
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {
                    setcourseName(myuniversityCourse.courseName);
                    setduration(myuniversityCourse.duration);
                    settuitionFee(myuniversityCourse.tuitionFee);
                    setcurrency(myuniversityCourse.currency);
                    setcourseLevel(myuniversityCourse.courseLevel);
                    setcgpa(myuniversityCourse.cgpa);
                    seteligibility(myuniversityCourse.eligibility);
                    var universityenglish = myuniversityCourse.english
                    var myArray = universityenglish;
                    let buildEnglishArray = [
                        { "id": "IELTS", "name": "IELTS" },
                        { "id": "TOEFL", "name": "TOEFL" },
                        { "id": "Duolingo", "name": "Duolingo" },
                        { "id": "CPE", "name": "CPE" },
                        { "id": "CAE", "name": "CAE" },
                        { "id": "OET", "name": "OET" }
                    ];
                    let allGroupsUserSpecific1 = buildEnglishArray.map(group => (
                        { ...group, following: myArray.includes(group.id) })
                    );
                    setmyallEnglish(allGroupsUserSpecific1)
                    // start for exam
                    var universityexam = myuniversityCourse.exam
                    var myExamArray = universityexam;
                    let buildExamArray = [
                        { "id": "GRE", "name": "GRE" },
                        { "id": "GMAT", "name": "GMAT" },
                        { "id": "SAT", "name": "SAT" },
                        { "id": "Other", "name": "Other" }
                    ];
                    let allGroupsUserSpecific2 = buildExamArray.map(group => (
                        { ...group, following: myExamArray.includes(group.id) })
                    );
                    setmyallExam(allGroupsUserSpecific2)
                    // end for exam
                    setwebsite(myuniversityCourse.website);
                    setdescription(myuniversityCourse.description);
                    setyear(myuniversityCourse.year);
                    setmonth(myuniversityCourse.month);
                    setareaOfInterest(myuniversityCourse.areaOfInterest);
                    var universityexam = myuniversityCourse.exam
                    var myArray2 = universityexam.split(",");
                    setarrayExam(myArray2)
                }
            })
            .catch(error => {
            });
    }
    function handleAdd() {
        setaddWidth("90%");
        setcourseName("");
        setduration("")
        settuitionFee("");
        setcurrency("");
        setcourseLevel("");
        setcgpa("");
        seteligibility("");
        setenglish("");
        setwebsite("");
        setdescription("");
        setexam("");
        setyear("");
        setmonth("");
        setareaOfInterest("")
        setexamError("")
        setenglishError("")
    }
    function handleDelete(value) {
        setshowSweetAlert("1")
        setdeleteId(value)
    }
    function handleView(value) {
        seteditId(value);
        setviewWidth("90%");
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {
                    setcourseId(myuniversityCourse._id);
                    setcourseName(myuniversityCourse.courseName);
                    setduration(myuniversityCourse.duration);
                    settuitionFee(myuniversityCourse.tuitionFee);
                    setcurrency(myuniversityCourse.currency);
                    setcourseLevel(myuniversityCourse.courseLevel);
                    setcgpa(myuniversityCourse.cgpa);
                    seteligibility(myuniversityCourse.eligibility);
                    setenglish(myuniversityCourse.english);
                    setwebsite(myuniversityCourse.website);
                    setdescription(myuniversityCourse.description);
                    setexam(myuniversityCourse.exam);
                    setyear(myuniversityCourse.year);
                    setmonth(myuniversityCourse.month);
                    setareaOfInterest(myuniversityCourse.areaOfInterest);


                }
            })
            .catch(error => {
            });
    }
    function closebox(value) {
        setwidth("0px");
    }
    function closeviewbox(value) {
        setviewWidth("0px");
    }
    function closeaddbox(value) {
        setaddWidth("0px");
    }
    let handleEditSubmit = (event) => {
        event.preventDefault();
        settuitionFeeNoError();
        var myPattern = /^[0-9_.]*$/;
        if (myPattern.test(tuitionFee) === false) {
            settuitionFeeNoError("Please Enter Only Number")
        }
        else if (Object.keys(arrayEnglish).length === 0) {
            setenglishError("Please Select English")
        }
        else if (Object.keys(arrayExam).length === 0) {
            setexamError("Please Select Exam")
        }
        else {
            setmyloader("true")
            const obj = {
                courseName: courseName,
                duration: duration,
                tuitionFee: tuitionFee,
                currency: currency,
                courseLevel: courseLevel,
                cgpa: cgpa,
                eligibility: eligibility,
                english: arrayEnglish,
                website: website,
                description: description,
                exam: arrayExam,
                year: year,
                month: month,
                areaOfInterest: areaOfInterest
            };
            axios.put(process.env.REACT_APP_SERVER_URL + 'university/courses/' + editId, obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setwidth(0)
                        setsuccessMessage("course update")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
                        fetch(url, {
                            method: 'GET',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setComments(data.universityCourses)
                            })
                    }
                })
                .catch(error => {
                });
        }
    }
    let handleAddSubmit = (event) => {
        event.preventDefault();
        settuitionFeeNoError();
        var myPattern = /^[0-9_.]*$/;
        if (myPattern.test(tuitionFee) === false) {
            settuitionFeeNoError("Please Enter Only Number")
        }
        else if (Object.keys(arrayEnglish).length === 0) {
            setenglishError("Please Select English")
        }
        else if (Object.keys(arrayExam).length === 0) {
            setexamError("Please Select Exam")
        }
        else {
            setmyloader("true")
            var enlishProficiencyArray = arrayEnglish;
            var examArray = arrayExam;
            const obj = {
                courseName: courseName,
                duration: duration,
                tuitionFee: tuitionFee,
                currency: currency,
                courseLevel: courseLevel,
                cgpa: cgpa,
                eligibility: eligibility,
                english: enlishProficiencyArray,
                website: website,
                description: description,
                exam: examArray,
                year: intakeyear,
                month: intakemonth,
                areaOfInterest: areaOfInterest
            };

            axios.post(process.env.REACT_APP_SERVER_URL + 'university/courses/', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setsuccessMessage("course add")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                        setaddWidth(0)
                        setcourseName("");
                        setduration("")
                        setexam("")
                        settuitionFee("");

                        setcurrency("");
                        setcourseLevel("");
                        setcgpa("");
                        seteligibility("");
                        setenglish("");
                        setwebsite("");
                        setdescription("");

                        setyear("");
                        setmonth("");
                        setareaOfInterest("");
                        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
                        fetch(url, {
                            method: 'GET',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setComments(data.universityCourses)
                            })

                    }
                })
                .catch(error => {
                });
        }
    }
    function setintake(value) {
        const myArray = value.split("&&");
        setyear(myArray[0])
        setmonth(myArray[1])
    }
    function setcourseaddintake(value) {
        const myArray = value.split("&&");
        setintakeyear(myArray[0])
        setintakemonth(myArray[1])
    }
    function setChangecourseName(e) {
        const arr = e.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setcourseName(str2)
    }
    return (
        <div className="container">
            {loader === "true" ?
                <Loader />
                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="mb-4 mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Courses</h5>
                    </div>
                    <div className="col-md-6 text-right">
                        <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"
                            data-toggle="tooltip" data-placement="right"
                            title="Add New Course"><span>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>Add New Course</button>
                    </div>
                </div>
                {showSweetAlert === "1" ? <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={(value) => {

                        setshowSweetAlert("0");
                        setmyloader("true")
                        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/courses/' + deleteId, { headers: { 'Authorization': mounted } })
                            .then(function (res) {
                                var myuniversityCourse = res.data.universityCourse;
                                if (res.data.success === true) {
                                    setmyloader("false")
                                    setsuccessMessage("course delete")
                                    setTimeout(() => setsubmitSuccess(""), 3000);
                                    setsubmitSuccess(1)
                                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
                                    fetch(url, {
                                        method: 'GET',
                                        headers: { 'Authorization': mounted }
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            setComments(data.universityCourses)
                                        })
                                }
                            })
                            .catch(error => {
                            });
                    }}
                    onCancel={() =>
                        setshowSweetAlert("0")
                    }
                    focusCancelBtn
                >
                </SweetAlert>
                    : null
                }
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Courses Table</h4>
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                    <div className="card shadow mb-4">
                        <div className="mb-4">
                            <div className="table-responsive">


                                <table className="table table-bordered">
                                    <TableHeader

                                        headers={tableHeaders}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })
                                        }
                                    />
                                    <tbody>
                                        {commentsData.map((comment, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{comment.courseName}</td>
                                                <td>{comment.duration}</td>
                                                <td>{comment.tuitionFee}</td>
                                                <td>{comment.currency}</td>
                                                <td>
                                                    <div className="tab-btn-grp">
                                                        <button data-toggle="tooltip" data-placement="right" title="Delete" className="btn btn-danger btn-sm" onClick={() => handleDelete(comment._id)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                        <button data-toggle="tooltip" data-placement="right" title="Edit" className="btn btn-success btn-sm" onClick={() => handleClick(comment._id)}>
                                                            <FontAwesomeIcon icon={faPen} />

                                                        </button>
                                                        <button data-toggle="tooltip" data-placement="right" title="View" className="btn btn-primary btn-sm vbtn" onClick={() => handleView(comment._id)}>
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="card-body course-sidenav" id="mySidenav"
                            style={{ width: width }}
                        >
                            <div className="student-view container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                    </div>
                                    <div className="col-md-6">
                                        <a title="Close" data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closebox} >&times;</a>
                                    </div>
                                </div>
                                <div className="table-responsive mt-3">

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <form onSubmit={handleEditSubmit}>
                                                <div className="card-body " >
                                                    <div className="from-block" >
                                                        <h3>Edit Course</h3>

                                                        <div className="row card shadow" >
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Course Name<span className="req-star">*</span></label>
                                                                            <input type="text" className="form-control"
                                                                                placeholder="Course Name" name="courseName"
                                                                                required
                                                                                value={courseName}
                                                                                onChange={(e) => setChangecourseName(e.target.value)}

                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Duration(in Month Only)<span className="req-star">*</span>
                                                                            </label>
                                                                            <input type="number" className="form-control"
                                                                                required
                                                                                placeholder="Duration" name="duration"
                                                                                value={duration}
                                                                                onChange={(e) => setduration(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Tuition fee<span className="req-star">*</span></label>
                                                                            <input type="number" className="form-control" placeholder="tuition fee"
                                                                                name="TuitionFee" required
                                                                                value={tuitionFee}
                                                                                onChange={(e) => settuitionFee(e.target.value)} />
                                                                            <div style={{ color: "red" }}> {tuitionFeeNoError}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label"> Currency<span className="req-star">*</span></label>
                                                                            <select type="text" className="form-control"
                                                                                placeholder="Currency" name="currency"
                                                                                required
                                                                                value={currency}
                                                                                onChange={(e) => setcurrency(e.target.value)}
                                                                            >
                                                                                <option value="">Select Currency</option>
                                                                                <option value="USD">USD US Dollars</option>
                                                                                <option value="GBP">GBP British Pounds</option>
                                                                                <option value="EUR">EUR Euros</option>
                                                                                <option value="CAD">Canadian dollar</option>
                                                                                <option value="AUD">AUD Australian Dollars</option>
                                                                                <option value="NZD">NZD New Zealand Dollars</option>
                                                                                <option value="HKD">HKD Hong Kong Dollars</option>
                                                                                <option value="SGD">SGD Singapore Dollars</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">Course Level<span className="req-star">*</span></label>
                                                                                    <select
                                                                                        className="form-control"
                                                                                        placeholder="Course Level" name="courseLevel"
                                                                                        value={courseLevel} required
                                                                                        onChange={(e) => setcourseLevel(e.target.value)}>
                                                                                        <option value=''>Select Course Level</option>
                                                                                        <option value='Bachelors'>Bachelors</option>
                                                                                        <option value='Masters'>Masters</option>
                                                                                        <option value='MBA'> MBA</option>
                                                                                    </select>

                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="form-group">
                                                                                    <label className="form-label">CGPA<span className="req-star">*</span></label>
                                                                                    <input type="number" className="form-control" placeholder="CGPA"
                                                                                        name="cgpa" required
                                                                                        value={cgpa}
                                                                                        onChange={(e) => setcgpa(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="form-group">
                                                                                    <label className="form-label"> Eligibility (In Percentage) <span className="req-star">*</span></label>
                                                                                    <input type="text" className="form-control" placeholder=" Eligibilit(like min 55%)"
                                                                                        name=" eligibility" required
                                                                                        value={eligibility}
                                                                                        onChange={(e) => seteligibility(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col">
                                                                                <div className="form-group"><label >English Proficiency<span className="req-star">*</span>
                                                                                </label>
                                                                                    {myallEnglish.map((element, index) => (
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

                                                                                <span style={{ color: "red" }}> {englishError}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <div className="form-group">
                                                                            <label>Course Website<span className="req-star">*</span></label><input
                                                                                type="text" className="form-control" id="cour-web"
                                                                                name="website" placeholder="Course Website "
                                                                                value={website} required
                                                                                onChange={(e) => setwebsite(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <div className="form-group">
                                                                            <label>Area Of Interest<span className="req-star">*</span></label>
                                                                            <select
                                                                                className="form-control"
                                                                                placeholder="Course Level" name="areaOfInterest"
                                                                                value={areaOfInterest} required
                                                                                onChange={(e) => setareaOfInterest(e.target.value)}>
                                                                                <option value="">Select Area Of Interest</option>
                                                                                <option value="Management">Management</option>
                                                                                <option value="Engineering">Engineering</option>
                                                                                <option value="Computers and Data Science">Computers and Data Science</option>
                                                                                <option value="Design">Design</option>
                                                                                <option value="Finance and Banking">Finance and Banking</option>
                                                                                <option value="Law">Law</option>
                                                                                <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
                                                                                <option value="Sciences">Sciences</option>
                                                                                <option value="Medicine and Pharma">Medicine and Pharma</option>
                                                                                <option value="Performing and Creative Arts">Performing and Creative Arts</option>
                                                                                <option value="Media and Journalism">Media and Journalism</option>
                                                                                <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                                                                                <option value="Marketing and Advertising">Marketing and Advertising</option>
                                                                                <option value="Sports and Nutrition">Sports and Nutrition</option>
                                                                                <option value="Architecture">Architecture</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <div className="form-group"><label
                                                                        >Academic proficiency exam<span className="req-star">*</span></label>
                                                                            {myallExam.map((element, index) => (
                                                                                <div key={index}>
                                                                                    {element.following === true ?
                                                                                        <>
                                                                                            {element.name}<input type="checkbox" name="univeristyExam"
                                                                                                value={element.name} checked
                                                                                                onChange={handleuniveristyExamChange} />
                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            {element.name}<input type="checkbox" name="univeristyExam"
                                                                                                value={element.name}
                                                                                                onChange={handleuniveristyExamChange} />
                                                                                        </>
                                                                                    }
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <span style={{ color: "red" }}> {examError}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Course  Description<span className="req-star">*</span></label>
                                                                            <textarea className="form-control" row="2" col="3" name="description"
                                                                                value={description} required
                                                                                onChange={(e) => setdescription(e.target.value)}
                                                                                placeholder="Course  Description"
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <button type="button" onClick={() => open()} className="btn btn-outline-success">Add Intake</button>

                                                                        <br />
                                                                        <div className="form-group">
                                                                            Intakes<span className="req-star">*</span>
                                                                            <select
                                                                                type="text" className="form-control" value="hii"
                                                                                required
                                                                                onChange={(e) => setintake(e.target.value)}>
                                                                                <option value={year + "&&" + month}>{year + " " + month}</option>
                                                                                {Intakedata.map((object, i) => {

                                                                                    return (
                                                                                        <option key={i} value={object.year + "&&" + object.month}>{object.year + " " + object.month}</option>
                                                                                    )
                                                                                })}

                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6"></div>
                                                                    <div className="col-md-6 text-right">
                                                                        <button type="submit" className="btn btn-success" title="Save">Save
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card-body course-sidenav" id="mySideAdd"
                            style={{ width: addWidth }}
                        >
                            <div className="student-view container-fluid">
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        <a title="Close" data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closeaddbox} >&times;</a>
                                    </div>
                                </div>
                                <div className="table-responsive mt-3">

                                    <div className="row">
                                        <div className="col-sm-12">
                                            {successIntakeMessage === 1 ? <div className="Show_success_message">
                                                <strong>Success!</strong> Intake Added
                                            </div> : null}
                                            <form onSubmit={handleAddSubmit}>
                                                <div className="card-body" >

                                                    <div className="from-block" >
                                                        <h3>Add Course</h3>
                                                        <div className="row card shadow " >
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Course Name<span className="req-star">*</span></label>
                                                                            <input type="text" className="form-control"
                                                                                placeholder="Course Name" name="courseName"
                                                                                required
                                                                                value={courseName}
                                                                                onChange={(e) => setChangecourseName(e.target.value)}

                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Duration(in Month Only)<span className="req-star">*</span>
                                                                            </label>
                                                                            <input type="number" className="form-control"
                                                                                placeholder="Duration" name="duration"
                                                                                value={duration} required
                                                                                onChange={(e) => setduration(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Tuition Fee<span className="req-star">*</span></label>
                                                                            <input type="number" className="form-control" placeholder="Tuition Fee"
                                                                                name="tuitionFee"
                                                                                value={tuitionFee} required
                                                                                onChange={(e) => settuitionFee(e.target.value)}


                                                                            />
                                                                            <div style={{ color: "red" }}> {tuitionFeeNoError}</div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Currency<span className="req-star">*</span></label>
                                                                            <select type="text" className="form-control"
                                                                                placeholder="Currency" name="currency"
                                                                                required
                                                                                value={currency}
                                                                                onChange={(e) => setcurrency(e.target.value)}
                                                                            >
                                                                                <option value="">Select Currency</option>

                                                                                <option value="USD">USD US Dollars</option>
                                                                                <option value="GBP">GBP British Pounds</option>
                                                                                <option value="EUR">EUR Euros</option>
                                                                                <option value="CAD">Canadian dollar</option>
                                                                                <option value="AUD">AUD Australian Dollars</option>
                                                                                <option value="NZD">NZD New Zealand Dollars</option>
                                                                                <option value="HKD">HKD Hong Kong Dollars</option>
                                                                                <option value="SGD">SGD Singapore Dollars</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="row">

                                                                            <div className="col-md-3">
                                                                                <div className="form-group">
                                                                                    <label className="form-label"> Course Level <span className="req-star">*</span></label>

                                                                                    <select

                                                                                        className="form-control"
                                                                                        placeholder="Course Level" name="courseLevel"
                                                                                        value={courseLevel} required
                                                                                        onChange={(e) => setcourseLevel(e.target.value)}>
                                                                                        <option value=''>Select Course Level</option>
                                                                                        <option value='Bachelors'>Bachelors</option>
                                                                                        <option value='Masters'>Masters</option>
                                                                                        <option value='MBA'> MBA</option>

                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <div className="form-group">
                                                                                    <label className="form-label"> CGPA <span className="req-star">*</span></label>
                                                                                    <input type="number" className="form-control" placeholder="CGPA"
                                                                                        name="cgpa" required
                                                                                        value={cgpa}
                                                                                        onChange={(e) => setcgpa(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-3">
                                                                                <div className="form-group">
                                                                                    <label className="form-label"> Eligibility (In Percentage)<span className="req-star">*</span> </label>
                                                                                    <input type="text" className="form-control" placeholder="Eligibility(like min 55%)"
                                                                                        name=" eligibility" required
                                                                                        value={eligibility}
                                                                                        onChange={(e) => seteligibility(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <div className="form-group"><label >English Proficiency<span className="req-star">*</span>
                                                                                </label>
                                                                                    <div className="checkgrp">
                                                                                        {myallEnglish.map((element, index) => (
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
                                                                                    <span style={{ color: "red" }}> {englishError}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 ol-sm-4 col-md-4 col-lg-4">
                                                                        <div className="form-group">
                                                                            <label>Course website<span className="req-star">*</span></label><input
                                                                                type="text" className="form-control" id="cour-web"
                                                                                name="website" required placeholder="Course website "
                                                                                value={website}
                                                                                onChange={(e) => setwebsite(e.target.value)}


                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <div className="form-group">
                                                                            <label>Area Of Interest<span className="req-star">*</span></label>
                                                                            <select
                                                                                className="form-control"
                                                                                placeholder="Course Level" name="areaOfInterest"
                                                                                value={areaOfInterest} required
                                                                                onChange={(e) => setareaOfInterest(e.target.value)}>
                                                                                <option value="">Select Area Of Interest</option>
                                                                                <option value="Management">Management</option>
                                                                                <option value="Engineering">Engineering</option>
                                                                                <option value="Computers and Data Science">Computers and Data Science</option>
                                                                                <option value="Design">Design</option>
                                                                                <option value="Finance and Banking">Finance and Banking</option>
                                                                                <option value="Law">Law</option>
                                                                                <option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
                                                                                <option value="Sciences">Sciences</option>
                                                                                <option value="Medicine and Pharma">Medicine and Pharma</option>
                                                                                <option value="Performing and Creative Arts">Performing and Creative Arts</option>
                                                                                <option value="Media and Journalism">Media and Journalism</option>
                                                                                <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                                                                                <option value="Marketing and Advertising">Marketing and Advertising</option>
                                                                                <option value="Sports and Nutrition">Sports and Nutrition</option>
                                                                                <option value="Architecture">Architecture</option>
                                                                            </select>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                        <div className="form-group"><label
                                                                        >Academic proficiency exam<span className="req-star">*</span></label>
                                                                            <div className="checkgrp">
                                                                                {myallExam.map((element, index) => (
                                                                                    <div key={index}>
                                                                                        {element.following === true ?
                                                                                            <>
                                                                                                <input type="checkbox" name="univeristyExam"
                                                                                                    value={element.name} checked
                                                                                                    onChange={handleuniveristyExamChange} />{element.name}
                                                                                            </>
                                                                                            :
                                                                                            <>
                                                                                                <input type="checkbox" name="univeristyExam"
                                                                                                    value={element.name}
                                                                                                    onChange={handleuniveristyExamChange} />{element.name}
                                                                                            </>
                                                                                        }
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <span style={{ color: "red" }}> {examError}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Course  Description<span className="req-star">*</span></label>
                                                                            <textarea required className="form-control" row="2" col="3" name="description"
                                                                                value={description}
                                                                                onChange={(e) => setdescription(e.target.value)}
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">

                                                                        <button type="button" onClick={() => open()} className="btn btn-outline-success">Add Intake</button>

                                                                        <br />
                                                                        <div className="form-group mt-3">
                                                                            Intakes <span className="req-star">*</span>
                                                                            <select required
                                                                                type="text" className="form-control"

                                                                                onChange={(e) => setcourseaddintake(e.target.value)}>
                                                                                <option value="">Select Intake </option>
                                                                                {Intakedata.map((object, i) => {

                                                                                    return (
                                                                                        <option key={i} value={object.year + "&&" + object.month}>{object.year + " " + object.month}</option>
                                                                                    )
                                                                                })}

                                                                            </select>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6"></div>
                                                                    <div className="col-md-6 text-right">
                                                                        <button type="submit" className="btn btn-success" title="Save">Save
                                                                        </button>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card-body course-sidenav" id="mySideview"
                            style={{ width: viewWidth }}
                        >

                            <div className="student-view container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Course Detail</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <a title="Close" data-toggle="tooltip" data-placement="right" className="closebtn closeviewbox" onClick={closeviewbox} >&times;</a>
                                    </div>
                                </div>
                                <div className="table-responsive mt-3 card shadow">

                                    <div className="row ">
                                        <div className="col-sm-12">
                                            <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" >
                                                <thead>
                                                    <tr>

                                                        <th rowSpan="1" colSpan="1">Course name</th>
                                                        <th rowSpan="1" colSpan="1">Duration</th>
                                                        <th rowSpan="1" colSpan="1">Tuition fee</th>



                                                        <th rowSpan="1" colSpan="1">Course level</th>
                                                        <th rowSpan="1" colSpan="1">Cgpa</th>
                                                        <th rowSpan="1" colSpan="1">Eligibility</th>
                                                        <th rowSpan="1" colSpan="1">English Proficiency</th>
                                                        <th rowSpan="1" colSpan="1">Course website</th>
                                                        <th rowSpan="1" colSpan="1">Area Of Interest </th>
                                                        <th rowSpan="1" colSpan="1">Course Description</th>
                                                        <th rowSpan="1" colSpan="1">Academic proficiency exam</th>
                                                        <th rowSpan="1" colSpan="1">Intake</th>


                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd">


                                                        <td>{courseName}</td>
                                                        <td>{duration} month</td>
                                                        <td>{tuitionFee + " " + currency}</td>



                                                        <td>{courseLevel}</td>
                                                        <td>{cgpa}</td>
                                                        <td>{eligibility} %</td>
                                                        <td>{english}</td>

                                                        <td>{website}</td>
                                                        <td>{areaOfInterest}</td>

                                                        <td>
                                                            <p
                                                                onClick={() => toggleReadMore(description)}
                                                            >

                                                                {description.slice(0, 70)}

                                                                <span className="text-primary cursor-pointer">
                                                                    ...Read More
                                                                </span>

                                                            </p>
                                                        </td>

                                                        <td>{exam}</td>

                                                        <td>{month + " " + year}</td>
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
            <div>


                <div>
                    <Modal className="modal-container"
                        show={showModal}
                        onHide={() => close()}

                        animation={true}
                        bsSize="small">

                        <Modal.Header closeButton>
                            <Modal.Title>Add Intake</Modal.Title>
                        </Modal.Header>


                        <form onSubmit={handleIntakeSubmit}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label">Year<span className="req-star">*</span></label>
                                            <select required
                                                className="form-control"
                                                placeholder="Year" name="year"

                                                value={intakeyear}
                                                onChange={(e) => setintakeyear(e.target.value)}>
                                                <option value=''>Select Year</option>
                                                <option value='2022'>2022</option>
                                                <option value='2023'>2023</option>
                                                <option value='2024'>2024</option>
                                                <option value='2025'>2025</option>
                                                <option value='2026'>2026</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label">Month<span className="req-star">*</span>
                                            </label>

                                            <select
                                                required
                                                className="form-control"
                                                placeholder="Month" name="Month"
                                                value={intakemonth}
                                                onChange={(e) => setintakemonth(e.target.value)}>
                                                <option value=''>Select Month</option>
                                                <option value='Jan'>Janaury</option>
                                                <option value='Feb'>February</option>
                                                <option value='March'>March</option>
                                                <option value='April'>April</option>
                                                <option value='May'>May</option>
                                                <option value='June'>June</option>
                                                <option value='July'>July</option>
                                                <option value='Aug'>August</option>
                                                <option value='Sep'>September</option>
                                                <option value='Oct'>October</option>
                                                <option value='Nov'>November</option>
                                                <option value='Dec'>December</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" title="Submit">Submit</button>
                            </div>
                        </form>



                    </Modal>
                    <Modal className="modal-container"
                        show={showDescriptionModal}
                        onHide={() => closeDescription()}

                        animation={true}
                        bsSize="small">

                        <Modal.Header closeButton>
                            <Modal.Title>Description</Modal.Title>
                        </Modal.Header>

                        <p>{descriptionPopupValue}</p>



                    </Modal>
                </div>
            </div>
        </div>
    );
}

