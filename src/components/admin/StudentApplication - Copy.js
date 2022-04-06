import React, { useState, useEffect, useMemo } from "react";
import { TableHeader, Pagination, Search } from "./DataTable";
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../Home/Loader';
import JSZip from 'jszip';
import { saveAs } from "file-saver";
import JSZipUtils from './zputils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye, faCloudDownload, faCheckCircle, faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
export default function AdminStudentApplication() {
    //start for set extenstion
    const [otherDocumentsplitfile, setotherDocumentsplitfile] = useState();
    const [finalfileotherDocumentLink, setfinalfileotherDocumentLink] = useState();
    const [recommendationsplitfile, setrecommendationsplitfile] = useState();
    const [finalfilerecommendationLink, setfinalfilerecommendationLink] = useState();
    const [extraCurricularsplitfile, setextraCurricularsplitfile] = useState();
    const [finalfilertExtraCurricularLink, setfinalfilertExtraCurricularLink] = useState();
    const [englishProficiencysplitfile, setenglishProficiencysplitfile] = useState();
    const [finalfilertenglishProficiencyLink, setfinalfilertenglishProficiencyLink] = useState();
    const [experiencesplitfile, setexperiencesplitfile] = useState();
    const [finalfilertexperienceLink, setfinalfilertexperienceLink] = useState();

    const [passportsplitfile, setpassportsplitfile] = useState("");
    const [finalfilerePassportLink, setfinalfilerePassportLink] = useState("");

    const [passportBacksplitfile, setpassportBacksplitfile] = useState("");
    const [finalfilerePassportBackLink, setfinalfilerepassportBackLink] = useState("");
    const [cvsplitfile, setcvsplitfile] = useState("");
    const [finalfilerecvLink, setfinalfilerecvLink] = useState("");

  
  
    

    const [marksheet10splitfile, setmarksheet10splitfile] = useState("");
    const [finalfileremarksheet10Link, setfinalfileremarksheet10Link] = useState("");
    const [marksheet12splitfile, setmarksheet12splitfile] = useState("");
    const [finalfileremarksheet12Link, setfinalfileremarksheet12Link] = useState("");
    const [ugDegreesplitfile, setugDegreesplitfile] = useState("");
    const [finalfilereugDegreeLink, setfinalfilereugDegreeLink] = useState("");
    const [ugConsolidatesplitfile, setugConsolidatesplitfile] = useState("");
    const [finalfilereugConsolidateLink, setfinalfilereugConsolidateLink] = useState("");
    const [ugMarksheetsplitfile, setugMarksheetsplitfile] = useState("");
    const [finalfilereugMarksheetLink, setfinalfilereugMarksheetLink] = useState("");
    const [pgDegreesplitfile, setpgDegreesplitfile] = useState("");
    const [finalfilerepgDegreeLink, setfinalfilerepgDegreeLink] = useState("");
    const [pgDegreeConsolidatedMarksheetsplitfile, setpgDegreeConsolidatedMarksheetsplitfile] = useState("");
    const [finalfilerepgDegreeConsolidatedMarksheetLink, setfinalfilerepgDegreeConsolidatedMarksheetLink] = useState("");
    const [pgMarksheetsplitfile, setpgMarksheetsplitfile] = useState("");
    // const [finalfilerepgDegreeConsolidatedMarksheetLink, setfinalfilerepgDegreeConsolidatedMarksheetLink] = useState("");
    // const [pgMarksheetsplitfile, setpgMarksheetsplitfile] = useState("");
    // const [pgMarksheetsplitfile, setpgMarksheetsplitfile] = useState("");
    const [finalfilerepgMarksheetLink, setfinalfilerepgMarksheetLink] = useState("");
  

    const [showModalExtensionValue, setshowModalExtensionValue] = useState();

    //end for set extension
    const [mounted, setMounted] = useState();
    const [myviewApplicationId, setmyviewApplicationId] = useState();
    const [data, setdata] = useState([]);
    const [firstviewWidth, setfirstviewWidth] = useState("0px");
    const [loader, setmyloader] = useState("false");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successMessage, setsuccessMessage] = useState("");
    const [applicationNo, setapplicationNo] = useState("");
    const [mystudentID, setmystudentID] = useState("0px");
    const [universityApplication, setuniversityApplication] = useState([])
    const [FormStudentApplicationValues, setFormStudentApplicationValues] = useState([]);
    const [salutation, setsalutation] = useState("");
    const [firstName, setfirstName] = useState("");
    const [middleName, setmiddleName] = useState("");
    const [lastName, setlastName] = useState("");
    const [otherName, setotherName] = useState("");
    const [gender, setgender] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [countryOfBirth, setcountryOfBirth] = useState("");
    const [nationality, setnationality] = useState("");
    const [dualNationality, setdualNationality] = useState("");
    const [maritalStatus, setmaritalStatus] = useState("");
    const [differentlyAble, setdifferentlyAble] = useState("");
    const [passport, setpassport] = useState("");
    const [aadharCard, setaadharCard] = useState("");
    const [firstLanguage, setfirstLanguage] = useState("");
    const [visa, setvisa] = useState("");
    const [refusedVisa, setrefusedVisa] = useState("");
    const [country, setcountry] = useState();
    const [state, setstate] = useState();
    const [city, setcity] = useState();
    const [address, setaddress] = useState();
    const [zipcode, setzipcode] = useState();
    const [communication_address, setcommunication_address] = useState("no");
    const [secondviewWidth, setsecondviewWidth] = useState("0px");
    const [mybuildApplicationID, setmybuildApplicationID] = useState("");
    const [myname, setmyname] = useState("");
    const [myemail, setmyemail] = useState("");
    const [myphone, setmyphone] = useState("");
    const [myuniversityName, setmyuniversityName] = useState("");
    const [mycourseName, setmycourseName] = useState("");
    const [messageError, setmessageError] = useState("");
    const [mybuildStudentID, setmybuildStudentID] = useState("");
    const [viewDocumentValue, setviewDocumentValue] = useState("");


    const [showModal, setshowModal] = useState(false);

    const [myapplicationProgressStep, setmyapplicationProgressStep] = useState("");
    const [myapplicationProgress, setmyapplicationProgress] = useState("");
    const [FormFamilyValues, setFormFamilyValues] = useState([{
        relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
        mobile: "", occupation: "", qualification: "", _id: "null"
    }])
    const [formEducationValues, setformEducationValues] = useState([{
        highestEducation: "", status: "", specialization: "", degree: "", gradePercentage: "", marks: "", attendedForm: "",
        institution: "", affiliationUniversity: "", language: "", country: "", state: "", city: "", address: "", zipcode: "",
        _id: "null"
    }])
    const [scoremarks, setscoremarks] = useState();
    const [scoreenglishProficiency, setscoreenglishProficiency] = useState();
    const [scoregre, setscoregre] = useState();
    const [scoresat, setscoresat] = useState();
    const [FormExperienceValues, setFormExperienceValues] = useState([{
        status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
        _id: "null"
    }])
    const [formActivityValues, setformActivityValues] = useState([{
        activityStatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",

        _id: "null"
    }])
    const [FormRecommendationValues, setFormRecommendationValues] = useState([{
        type: "", organization: "", recommenderName: "", email: "", relation: "", designation: "", number: "", address: "", letter: "",

        _id: "null"
    }])
    const [FormValues, setFormValues] = useState([{
        message: "", type: ""
    }])
    const [message, setmessage] = useState();
    const [mycountryID, setmycountryID] = useState();
    //start for document show

    const [experienceDocumentExtenstion, setexperienceDocumentExtenstion] = useState();
    const [englishProficiencyDocumentExtenstion, setenglishProficiencyDocumentExtenstion] = useState();
    const [extraCurricularDocumentExtenstion, setextraCurricularDocumentExtenstion] = useState();
    const [recommendationDocumentExtenstion, setrecommendationDocumentExtenstion] = useState();
    const [otherDocumentExtenstion, setotherDocumentExtenstion] = useState();




    //end for document show
    const [studentOtherDocument, setstudentOtherDocument] = useState();
    const [studentRecommendationDocument, setstudentRecommendationDocument] = useState();
    const [studentExperienceDocument, setstudentExperienceDocument] = useState();
    const [studentEnglishProficiencyDocument, setstudentEnglishProficiencyDocument] = useState();
    const [studentExtraCurricularDocument, setstudentExtraCurricularDocument] = useState();
    const [studentPassportDocument, setstudentPassportDocument] = useState();
    const [studentPassportBackDocument, setstudentPassportBackDocument] = useState();
    const [studentCVDocument, setstudentCVDocument] = useState();

    const [studentmarksheet10Document, setstudentmarksheet10Document] = useState();
    const [studentmarksheet12Document, setstudentmarksheet12Document] = useState();
    const [studentugDegreeDocument, setstudentugDegreeDocument] = useState();
    const [studentugConsolidateDocument, setstudentugConsolidateDocument] = useState();
    const [studentugMarksheetDocument, setstudentugMarksheetDocument] = useState();
    const [studentpgDegreeDocument, setstudentpgDegreeDocument] = useState();
    const [studentpgDegreeConsolidatedDocument, setstudentpgDegreeConsolidatedDocument] = useState();
    const [studentpgMarksheetDocument, setstudentpgMarksheetDocument] = useState();



    const [showModalValue, setshowModalValue] = useState();

    // start for pagination
    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const ITEMS_PER_PAGE = 5;
    const tableHeaders = [

        { name: "No.", field: "_id", sortable: false },
        { name: "Order Id", field: "buildApplicationID", sortable: true },
        { name: "Student ID", field: "studentDetail[0].buildStudentID", sortable: true },
        { name: "Student Name", field: "studentDetail[0].name", sortable: true },
        { name: "Student Email", field: "studentDetail[0].email", sortable: false },
        { name: "Student Phone", field: "studentDetail[0].phone", sortable: false },
        // { name: "Application Id", field: "_id", sortable: false },
        { name: "University Name", field: "universityName", sortable: false },
        { name: "Course Name", field: "courseName", sortable: false },
        { name: "Action", field: "", sortable: false },

    ];
    // end for pagination
    useEffect(() => {
        var mounted = localStorage.getItem("adminToken")
        setMounted(mounted)
        setfirstviewWidth("0px");
        setsecondviewWidth("0px")
        function mystudentApplications() {
            setmyloader("true")
            const url = process.env.REACT_APP_SERVER_URL + 'admin/studentApplications';
            fetch(url, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    setmyloader("false")

                    setComments(data.applications);
                })

        }
        mystudentApplications()
    }, [])
    function open() {

    }
    function close() {
        setshowModal(false)
    }

    function viewSingleDocument(value, extension) {
        if (extension === "jpeg" || extension === "jpg" || extension === "png" || extension === "pdf") {
            setshowModal(true)
            setshowModalValue(value)
            setshowModalExtensionValue(extension)
        }
        if (extension === "doc" || extension === "docx") {
            window.location.href = value
        }
    }
    // start for pagination
    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.buildApplicationID.toLowerCase().includes(search.toLowerCase()) ||
                    comment.studentID.toLowerCase().includes(search.toLowerCase()) ||
                    comment.studentDetail[0].name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.studentDetail[0].email.toLowerCase().includes(search.toLowerCase()) ||
                    comment.studentDetail[0].phone.toLowerCase().includes(search.toLowerCase()) ||
                    comment._id.toLowerCase().includes(search.toLowerCase()) ||
                    comment.universityName.toLowerCase().includes(search.toLowerCase()) ||
                    comment.courseName.toLowerCase().includes(search.toLowerCase())


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
    function handleCloseView() {
        setfirstviewWidth("0px");
    }
    function handleSecondCloseView() {
        setsecondviewWidth("0px")
    }
    function handleAppliedView() {
        setsecondviewWidth("90%");
    }

    function handleView(id, studentID, buildApplicationID, name, email, phone, universityName, courseName, myapplicationProgressStep, myapplicationProgress, mycountryID, mybuildStudentID) {
        setmyloader("true")
        setfirstviewWidth("90%");
        setsecondviewWidth("0px")
        setmyviewApplicationId(id)
        setmystudentID(studentID)
        setmybuildApplicationID(buildApplicationID)
        setmyname(name)
        setmyemail(email)
        setmyphone(phone)
        setmyuniversityName(universityName)
        setmycourseName(courseName)
        setmyapplicationProgressStep(myapplicationProgressStep)
        setmyapplicationProgress(myapplicationProgress)
        setmycountryID(mycountryID)
        setmybuildStudentID(mybuildStudentID)
        var mystudentID = studentID
        var myviewApplicationId = id
        setsalutation("");
        setfirstName("");
        setmiddleName("");
        setlastName("");
        setotherName("");
        setgender("");
        setdateOfBirth("");
        setcountryOfBirth("");
        setnationality("");
        setdualNationality("");
        setmaritalStatus("");
        setdifferentlyAble("");
        setpassport("");
        setaadharCard("");
        setfirstLanguage("");
        setvisa("");
        setrefusedVisa("");
        setcountry("");
        setstate("");
        setcity("");
        setaddress("");
        setzipcode("");
        setcommunication_address("");
        setFormFamilyValues([{
            relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
            mobile: "", occupation: "", qualification: "", _id: "null"
        }])
        setformEducationValues([{
            highestEducation: "", status: "", specialization: "", degree: "", gradePercentage: "", marks: "", attendedForm: "",
            institution: "", affiliationUniversity: "", language: "", country: "", state: "", city: "", address: "", zipcode: "",
            _id: "null"
        }])
        setscoremarks("");
        setscoreenglishProficiency("");
        setscoregre("");
        setscoresat("");
        setFormExperienceValues([{
            status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
            _id: "null"
        }])
        setformActivityValues([{
            activityStatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",

            _id: "null"
        }])
        setFormRecommendationValues([{
            type: "", organization: "", recommenderName: "", email: "", relation: "", designation: "", number: "", address: "", letter: "",

            _id: "null"
        }])



        const url60 = process.env.REACT_APP_SERVER_URL + 'admin/countries/' + mycountryID;
        fetch(url60, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setuniversityApplication(data.adminCountry.countrySteps)
            })
        var url8 = process.env.REACT_APP_SERVER_URL + 'admin/studentApplications/' + mystudentID;
        axios.get(url8, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var myresults = res.data.applications

                    setapplicationNo(Object.keys(myresults).length)
                    setFormStudentApplicationValues(res.data.applications)

                    setmyloader("false")
                }
            })
            .catch(error => {
            });
        axios.get(process.env.REACT_APP_SERVER_URL + 'admin/messages/' + mystudentID, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var myresults = res.data.notifications;
                    if (Object.keys(myresults).length === 0) {
                    }


                    const newArr = myresults.map(obj => {
                        var myd = obj.messageTime
                        const d = new Date(myd)

                        var date = d.getDate()
                        var month = d.getMonth() + 1;
                        var year = d.getFullYear();
                        var month = d.toLocaleString('default', { month: 'long' })
                        var options = {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        };
                        var timerr = new Intl.DateTimeFormat('en-US', options).format(d)
                        var completeTime = month + " " + date + ",  " + year + ", " + timerr
                        return { ...obj, messageTime: completeTime };
                        return obj;
                    });
                    setFormValues(newArr)

                }
            })
            .catch(error => {
            });

        var url2 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/personalInformation';
        axios.get(url2, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityCourse = res.data.studentPersonalInformation;
                if (res.data.success === true) {
                    setsalutation(myuniversityCourse.salutation);
                    setfirstName(myuniversityCourse.firstName);
                    setmiddleName(myuniversityCourse.middleName);
                    setlastName(myuniversityCourse.lastName);
                    setotherName(myuniversityCourse.otherName);
                    setgender(myuniversityCourse.gender);
                    setdateOfBirth(myuniversityCourse.dateOfBirth);
                    setcountryOfBirth(myuniversityCourse.countryOfBirth);
                    setnationality(myuniversityCourse.nationality);
                    setdualNationality(myuniversityCourse.dualNationality);
                    setmaritalStatus(myuniversityCourse.maritalStatus);
                    setdifferentlyAble(myuniversityCourse.differentlyAble);
                    setpassport(myuniversityCourse.passport);
                    setaadharCard(myuniversityCourse.aadharCard);
                    setfirstLanguage(myuniversityCourse.firstLanguage);
                    setvisa(myuniversityCourse.visa);
                    setrefusedVisa(myuniversityCourse.refusedVisa);
                }
            })
            .catch(error => {
            });
        var url3 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/address';
        axios.get(url3, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var studentAddress = res.data.studentAddress;
                if (res.data.success === true) {
                    setcountry(studentAddress.country);
                    setstate(studentAddress.state);
                    setcity(studentAddress.city);
                    setaddress(studentAddress.address);
                    setzipcode(studentAddress.zipcode);
                    setcommunication_address(studentAddress.communication_address);
                }
            })
            .catch(error => {
            });
        var url3 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/families';
        axios.get(url3, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setFormFamilyValues(res.data.studentFamilies)
                }
            })
            .catch(error => {
            });
        var url4 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/educations';
        axios.get(url4, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setformEducationValues(res.data.studentEducations)
                }
            })
            .catch(error => {
            });
        var url5 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/score';
        axios.get(url5, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var resultStudentScore = res.data.studentScore;
                    setscoremarks(resultStudentScore.marks);
                    setscoreenglishProficiency(resultStudentScore.englishProficiency);
                    setscoregre(resultStudentScore.gre);
                    setscoresat(resultStudentScore.sat);
                }
            })
            .catch(error => {
            });
        var url6 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/experiences';
        axios.get(url6, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setFormExperienceValues(res.data.studentExperiences)
                }
            })
            .catch(error => {
            });
        var url6 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/activities';
        axios.get(url6, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setformActivityValues(res.data.studentActivities)
                }
            })
            .catch(error => {
            });
        var url7 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/profileRecommendations';
        axios.get(url7, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setFormRecommendationValues(res.data.studentProfileRecommendations)
                }
            })
            .catch(error => {
            });
        // start for other document
        var url8 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/otherDocument';
        axios.get(url8, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentOtherDocument = res.data.studentOtherDocument;
                    if (studentOtherDocument.file != null) {
                        var fetchOtherDocument = studentOtherDocument.file
                        var completePassport = fetchOtherDocument.split(".")
                        setotherDocumentExtenstion(completePassport[3]);
                        // start for download file
                        var splitfile = fetchOtherDocument.split("/");
                        var otherDocumentsplitfile = splitfile[5]
                        var finalfileotherDocumentLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + otherDocumentsplitfile
                        setotherDocumentsplitfile(otherDocumentsplitfile)
                        setfinalfileotherDocumentLink(finalfileotherDocumentLink)
                        // end for download file
                    }
                    else {
                        setotherDocumentExtenstion("");
                    }
                    setstudentOtherDocument(studentOtherDocument.file)
                }
            })
            .catch(error => {
            });
        //end for other document
        //start for recommendation document
        var url9 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/recommendationDocument';
        axios.get(url9, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentRecommendationDocument = res.data.studentRecommendationDocument;
                    setstudentRecommendationDocument(studentRecommendationDocument.document)
                    if (studentRecommendationDocument.document != null) {
                        var fetchRecommendationDocument = studentRecommendationDocument.document
                        var completePassport = fetchRecommendationDocument.split(".")
                        setrecommendationDocumentExtenstion(completePassport[3]);
                        // start for download file
                        var splitfile = fetchRecommendationDocument.split("/");
                        var recommendationsplitfile = splitfile[5]
                        var finalfilerecommendationLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + recommendationsplitfile
                        setrecommendationsplitfile(recommendationsplitfile)
                        setfinalfilerecommendationLink(finalfilerecommendationLink)
                        // end for download file
                    }
                    else {
                        setrecommendationDocumentExtenstion("");
                    }

                }
            })
            .catch(error => {
            });
        //end for other document
        //start for recommendation document
        var url10 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/extraCurricularDocument';
        axios.get(url10, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentExtraCurricularDocument = res.data.studentExtraCurricularDocument;
                    setstudentExtraCurricularDocument(studentExtraCurricularDocument.file)
                    if (studentExtraCurricularDocument.file != null) {
                        var fetchextraCurricularDocument = studentExtraCurricularDocument.file
                        var completePassport = fetchextraCurricularDocument.split(".")
                        setextraCurricularDocumentExtenstion(completePassport[3]);
                        // start for download file
                        var splitfile = fetchextraCurricularDocument.split("/");
                        var extraCurricularsplitfile = splitfile[5]
                        var finalfilerecommendationLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + extraCurricularsplitfile
                        setextraCurricularsplitfile(extraCurricularsplitfile)
                        setfinalfilertExtraCurricularLink(finalfilerecommendationLink)
                        // end for download file
                    }
                    else {
                        setextraCurricularDocumentExtenstion("");
                    }

                }
            })
            .catch(error => {
            });
        //end for other document
        //start for recommendation document
        var url11 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/englishProficiencyDocument';
        axios.get(url11, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    var studentEnglishProficiencyDocument = res.data.studentEnglishProficiencyDocument;
                    setstudentEnglishProficiencyDocument(studentEnglishProficiencyDocument.file)
                    if (studentEnglishProficiencyDocument.file != null) {
                        var fetchenglishProficiencyDocument = studentEnglishProficiencyDocument.file
                        var completePassport = fetchenglishProficiencyDocument.split(".")
                        setenglishProficiencyDocumentExtenstion(completePassport[3]);
                        // start for download file
                        var splitfile = fetchenglishProficiencyDocument.split("/");
                        var englishProficiencysplitfile = splitfile[5]
                        var finalfilerecommendationLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + englishProficiencysplitfile
                        setenglishProficiencysplitfile(englishProficiencysplitfile)
                        setfinalfilertenglishProficiencyLink(finalfilerecommendationLink)
                        // end for download file
                    }
                    else {
                        setenglishProficiencyDocumentExtenstion("");
                    }
                }
            })
            .catch(error => {
            });
        //end for other document
        //start for recommendation document
        var url12 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/experienceDocument';
        axios.get(url12, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    var studentexperienceDocument = res.data.studentExperienceDocument;
                    setstudentExperienceDocument(studentexperienceDocument.document)
                    if (studentexperienceDocument.document != null) {
                        var fetchexperienceDocument = studentexperienceDocument.document
                        var completePassport = fetchexperienceDocument.split(".")
                        setexperienceDocumentExtenstion(completePassport[3]);
                        // start for download file
                        var splitfile = fetchexperienceDocument.split("/");
                        var experiencesplitfile = splitfile[5]
                        var finalfilerecommendationLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + experiencesplitfile
                        setexperiencesplitfile(experiencesplitfile)
                        setfinalfilertexperienceLink(finalfilerecommendationLink)
                        // end for download file
                    }
                    else {
                        setexperienceDocumentExtenstion("");
                    }
                }
            })
            .catch(error => {
            });
        //end for other document
        //start for recommendation document
        var url13 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/identityDocument';
        axios.get(url13, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    var studentidentityDocument = res.data.studentIdentityDocument;

                    setstudentPassportDocument(studentidentityDocument.passport)
                    setstudentPassportBackDocument(studentidentityDocument.passportBack)
                    setstudentCVDocument(studentidentityDocument.cv)

                    if (studentidentityDocument.passport != "" || studentidentityDocument.passport != "*" ||
                        studentidentityDocument.passport != null || studentidentityDocument.passport != undefined
                    ) {
                        var fetchpassportDocument = studentidentityDocument.passport
                        // start for download file
                        var splitfile = fetchpassportDocument.split("/");
                        var passportsplitfile = splitfile[5]
                        var finalfilerePassportLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + passportsplitfile
                        setpassportsplitfile(passportsplitfile)
                        setfinalfilerePassportLink(finalfilerePassportLink)
                        // end for download file
                    }
                    if (studentidentityDocument.passportBack != "" || studentidentityDocument.passportBack != "*" ||
                        studentidentityDocument.passportBack != null || studentidentityDocument.passportBack != undefined
                    ) {
                        var fetchpassportBackDocument = studentidentityDocument.passportBack
                        // start for download file
                        var splitfile = fetchpassportBackDocument.split("/");
                        var passportBacksplitfile = splitfile[5]
                        var finalfilerepassportBackLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + passportBacksplitfile
                        setpassportBacksplitfile(passportBacksplitfile)
                        setfinalfilerepassportBackLink(finalfilerepassportBackLink)
                        // end for download file
                    }
                    if (studentidentityDocument.cv != "" || studentidentityDocument.cv != "*" ||
                        studentidentityDocument.cv != null || studentidentityDocument.cv != undefined
                    ) {
                        var fetchcvDocument = studentidentityDocument.cv
                        // start for download file
                        var splitfile = fetchcvDocument.split("/");
                        var cvsplitfile = splitfile[5]
                        var finalfilerecvLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + cvsplitfile
                        setcvsplitfile(cvsplitfile)
                        setfinalfilerecvLink(finalfilerecvLink)
                        // end for download file
                    }


                }
            })
            .catch(error => {
            });
        //end for other document
        //start for recommendation document
        var url14 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/educationDocument';
        axios.get(url14, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    var studenteducationDocument = res.data.studentEducationDocument;

                    setstudentmarksheet10Document(studenteducationDocument.marksheet10)
                    setstudentmarksheet12Document(studenteducationDocument.marksheet12)
                    setstudentugDegreeDocument(studenteducationDocument.ugDegree)
                    setstudentugConsolidateDocument(studenteducationDocument.ugConsolidate)
                    setstudentugMarksheetDocument(studenteducationDocument.ugMarksheet)
                    setstudentpgDegreeDocument(studenteducationDocument.pgDegree)
                    setstudentpgDegreeConsolidatedDocument(studenteducationDocument.pgDegreeConsolidatedMarksheet)
                    setstudentpgMarksheetDocument(studenteducationDocument.pgMarksheet)

                    // if (studenteducationDocument.marksheet10 != "" || studenteducationDocument.marksheet10 != "*" ||
                    //     studenteducationDocument.marksheet10 != null || studenteducationDocument.marksheet10 != undefined
                    // ) {
                    //     var fetchmarksheet10Document = studenteducationDocument.marksheet10
                    //     // start for download file
                    //     var splitfile = fetchmarksheet10Document.split("/");
                    //     var marksheet10splitfile = splitfile[5]
                    //     var finalfileremarksheet10Link = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + marksheet10splitfile
                    //     setmarksheet10splitfile(marksheet10splitfile)
                    //     setfinalfileremarksheet10Link(finalfileremarksheet10Link)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.marksheet12 != "" || studenteducationDocument.marksheet12 != "*" ||
                    //     studenteducationDocument.marksheet12 != null || studenteducationDocument.marksheet12 != undefined
                    // ) {
                    //     var fetchmarksheet12Document = studenteducationDocument.marksheet12
                    //     // start for download file
                    //     var splitfile = fetchmarksheet12Document.split("/");
                    //     var marksheet12splitfile = splitfile[5]
                    //     var finalfileremarksheet12Link = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + marksheet12splitfile
                    //     setmarksheet12splitfile(marksheet12splitfile)
                    //     setfinalfileremarksheet12Link(finalfileremarksheet12Link)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.ugDegree != "" || studenteducationDocument.ugDegree != "*" ||
                    //     studenteducationDocument.ugDegree != null || studenteducationDocument.ugDegree != undefined
                    // ) {
                    //     var fetchugDegreeDocument = studenteducationDocument.ugDegree
                    //     // start for download file
                    //     var splitfile = fetchugDegreeDocument.split("/");
                    //     var ugDegreesplitfile = splitfile[5]
                    //     var finalfilereugDegreeLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + ugDegreesplitfile
                    //     setugDegreesplitfile(ugDegreesplitfile)
                    //     setfinalfilereugDegreeLink(finalfilereugDegreeLink)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.ugConsolidate != "" || studenteducationDocument.ugConsolidate != "*" ||
                    //     studenteducationDocument.ugConsolidate != null || studenteducationDocument.ugConsolidate != undefined
                    // ) {
                    //     var fetchugConsolidateDocument = studenteducationDocument.ugConsolidate
                    //     // start for download file
                    //     var splitfile = fetchugConsolidateDocument.split("/");
                    //     var ugConsolidatesplitfile = splitfile[5]
                    //     var finalfilereugConsolidateLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + ugConsolidatesplitfile
                    //     setugConsolidatesplitfile(ugConsolidatesplitfile)
                    //     setfinalfilereugConsolidateLink(finalfilereugConsolidateLink)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.ugMarksheet != "" || studenteducationDocument.ugMarksheet != "*" ||
                    //     studenteducationDocument.ugMarksheet != null || studenteducationDocument.ugMarksheet != undefined
                    // ) {
                    //     var fetchugMarksheetDocument = studenteducationDocument.ugMarksheet
                    //     // start for download file
                    //     var splitfile = fetchugMarksheetDocument.split("/");
                    //     var ugMarksheetsplitfile = splitfile[5]
                    //     var finalfilereugMarksheetLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + ugMarksheetsplitfile
                    //     setugMarksheetsplitfile(ugMarksheetsplitfile)
                    //     setfinalfilereugMarksheetLink(finalfilereugMarksheetLink)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.pgDegree != "" || studenteducationDocument.pgDegree != "*" ||
                    //     studenteducationDocument.pgDegree != null || studenteducationDocument.pgDegree != undefined
                    // ) {
                    //     var fetchpgDegreeDocument = studenteducationDocument.pgDegree
                    //     // start for download file
                    //     var splitfile = fetchpgDegreeDocument.split("/");
                    //     var pgDegreesplitfile = splitfile[5]
                    //     var finalfilerepgDegreeLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + pgDegreesplitfile
                    //     setpgDegreesplitfile(pgDegreesplitfile)
                    //     setfinalfilerepgDegreeLink(finalfilerepgDegreeLink)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.pgDegreeConsolidatedMarksheet != "" || studenteducationDocument.pgDegreeConsolidatedMarksheet != "*" ||
                    //     studenteducationDocument.pgDegreeConsolidatedMarksheet != null || studenteducationDocument.pgDegreeConsolidatedMarksheet != undefined
                    // ) {
                    //     var fetchpgDegreeConsolidatedMarksheetDocument = studenteducationDocument.pgDegreeConsolidatedMarksheet
                    //     // start for download file
                    //     var splitfile = fetchpgDegreeConsolidatedMarksheetDocument.split("/");
                    //     var pgDegreeConsolidatedMarksheetsplitfile = splitfile[5]
                    //     var finalfilerepgDegreeConsolidatedMarksheetLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + pgDegreeConsolidatedMarksheetsplitfile
                    //     setpgDegreeConsolidatedMarksheetsplitfile(pgDegreeConsolidatedMarksheetsplitfile)
                    //     setfinalfilerepgDegreeConsolidatedMarksheetLink(finalfilerepgDegreeConsolidatedMarksheetLink)
                    //     // end for download file
                    // }
                    // if (studenteducationDocument.pgMarksheet != "" || studenteducationDocument.pgMarksheet != "*" ||
                    //     studenteducationDocument.pgMarksheet != null || studenteducationDocument.pgMarksheet != undefined
                    // ) {
                    //     var fetchpgMarksheetDocument = studenteducationDocument.pgMarksheet
                    //     // start for download file
                    //     var splitfile = fetchpgMarksheetDocument.split("/");
                    //     var pgMarksheetsplitfile = splitfile[5]
                    //     var finalfilerepgMarksheetLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + pgMarksheetsplitfile
                    //     setpgMarksheetsplitfile(pgMarksheetsplitfile)
                    //     setfinalfilerepgMarksheetLink(finalfilerepgMarksheetLink)
                    //     // end for download file
                    // }

                }
            })
            .catch(error => {
            });
        //end for other document

    }
    function downloadIdentityDocument() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/identityDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentidentityDocument = res.data.studentIdentityDocument;
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "IdentityDocuments.zip";
                        var studentPasport = studentidentityDocument.passport;
                        var splitPassport = studentPasport.split("/");
                        var finalPassportLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitPassport[5]

                        var studentPasportBack = studentidentityDocument.passportBack;
                        var splitPassportBack = studentPasportBack.split("/");
                        var finalPassportBackLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitPassportBack[5]

                        var studentcv = studentidentityDocument.cv;
                        var splitcv = studentcv.split("/");
                        var finalcvLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitcv[5]
                        var urls = [
                            {
                                link: finalPassportLink,
                                name: "passport-" + splitPassport[5]
                            },
                            {
                                link: finalPassportBackLink,
                                name: "passportBack-" + splitPassportBack[5]
                            },
                            {
                                link: finalcvLink,
                                name: "CV-" + splitcv[5]
                            },

                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();
                }
            })
            .catch(error => {
            });
    }
    function downloadEducation() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/educationDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentidentityDocument = res.data.studentEducationDocument;
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "EducationDocument.zip";
                        var studentmarksheet10 = studentidentityDocument.marksheet10;
                        var splitmarksheet10 = studentmarksheet10.split("/");
                        var finalmarksheet10Link = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitmarksheet10[5]

                        var studentmarksheet12 = studentidentityDocument.marksheet12;
                        var splitmarksheet12 = studentmarksheet12.split("/");
                        var finalmarksheet12Link = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitmarksheet12[5]

                        var studentugDegree = studentidentityDocument.ugDegree;
                        var splitugDegree = studentugDegree.split("/");
                        var finalugDegreeLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitugDegree[5]
                        var studentugConsolidate = studentidentityDocument.ugConsolidate;
                        var splitugConsolidate = studentugConsolidate.split("/");
                        var finalugConsolidateLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitugConsolidate[5]
                        var studentugMarksheet = studentidentityDocument.ugMarksheet;
                        var splitugMarksheet = studentugMarksheet.split("/");
                        var finalugMarksheetLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitugMarksheet[5]
                        var studentpgDegree = studentidentityDocument.pgDegree;
                        var splitpgDegree = studentpgDegree.split("/");
                        var finalpgDegreeLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitpgDegree[5]
                        var studentpgDegreeConsolidatedMarksheet = studentidentityDocument.pgDegreeConsolidatedMarksheet;
                        var splitpgDegreeConsolidatedMarksheet = studentpgDegreeConsolidatedMarksheet.split("/");
                        var finalpgDegreeConsolidatedMarksheetLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitpgDegreeConsolidatedMarksheet[5]
                        var studentpgMarksheet = studentidentityDocument.pgMarksheet;
                        var splitpgMarksheet = studentpgMarksheet.split("/");
                        var finalpgMarksheetLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitpgMarksheet[5]

                        var urls = [
                            {
                                link: finalmarksheet10Link,
                                name: "marksheet10-" + splitmarksheet10[5]
                            },
                            {
                                link: finalmarksheet12Link,
                                name: "marksheet12-" + splitmarksheet12[5]
                            },
                            {
                                link: finalugDegreeLink,
                                name: "ugDegree-" + splitugDegree[5]
                            },
                            {
                                link: finalugConsolidateLink,
                                name: "ugConsolidate-" + splitugConsolidate[5]
                            },
                            {
                                link: finalugMarksheetLink,
                                name: "ugMarksheet-" + splitugMarksheet[5]
                            },
                            {
                                link: finalpgDegreeLink,
                                name: "pgDegree-" + splitpgDegree[5]
                            },
                            {
                                link: finalpgDegreeConsolidatedMarksheetLink,
                                name: "pgDegreeConsolidatedMarksheet-" + splitpgDegreeConsolidatedMarksheet[5]
                            },
                            {
                                link: finalpgMarksheetLink,
                                name: "pgMarksheet-" + splitpgMarksheet[5]
                            },


                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();
                }
            })
            .catch(error => {
            });
    }
    function downloadWorkExperience() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/experienceDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentexperienceDocument = res.data.studentExperienceDocument;
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "WorkExperience.zip";
                        var studentdocument = studentexperienceDocument.document;
                        var splitdocument = studentdocument.split("/");
                        var finaldocumentLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitdocument[5]


                        var urls = [
                            {
                                link: finaldocumentLink,
                                name: "document-" + splitdocument[5]
                            },


                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();
                }
            })
            .catch(error => {
            });
    }
    function downloadEnglishProficiency() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/englishProficiencyDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentEnglishProficiencyDocument = res.data.studentEnglishProficiencyDocument;
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "EnglishProficiencyDocument.zip";
                        var studentfile = studentEnglishProficiencyDocument.file;
                        var splitfile = studentfile.split("/");
                        var finalfileLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitfile[5]


                        var urls = [
                            {
                                link: finalfileLink,
                                name: "file-" + splitfile[5]
                            },

                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();
                }
            })
            .catch(error => {
            });
    }
    function downloadExtraCurricular() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/extraCurricularDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentExtraCurricularDocument = res.data.studentExtraCurricularDocument;
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "ExtraCurricularDocument.zip";
                        var studentfile = studentExtraCurricularDocument.file;
                        var splitfile = studentfile.split("/");
                        var finalfileLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitfile[5]


                        var urls = [
                            {
                                link: finalfileLink,
                                name: "file-" + splitfile[5]
                            },

                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();
                }
            })
            .catch(error => {
            });
    }
    function downloadRecommendation() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/recommendationDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentRecommendationDocument = res.data.studentRecommendationDocument;
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "RecommendationDocument.zip";
                        var studentdocument = studentRecommendationDocument.document;
                        var splitdocument = studentdocument.split("/");
                        var finaldocumentLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitdocument[5]
                        var urls = [
                            {
                                link: finaldocumentLink,
                                name: "passport-" + splitdocument[5]
                            },
                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();
                }
            })
            .catch(error => {
            });
    }
    function downloadOther() {
        setmyloader("true")
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + mystudentID + '/otherDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentOtherDocument = res.data.studentOtherDocument;

                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "OtherDocument.zip";
                        var studentfile = studentOtherDocument.file;
                        var splitfile = studentfile.split("/");
                        var finalfileLink = "https://www.ownlydigital.com/uploadApi/index?myfilename=" + splitfile[5]
                        var urls = [
                            {
                                link: finalfileLink,
                                name: "file-" + splitfile[5]
                            },
                        ];
                        urls.forEach(function (url) {
                            setmyloader("false")
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();

                }
            })
            .catch(error => {
            });
    }

    function downloadAllDocument() {

        setmyloader("true")
        const saveFile = (url) => {
            var zip = new JSZip();
            var count = 0;
            var zipFilename = "allDocument.zip";
            var urls = [
                {
                    link: finalfileotherDocumentLink,
                    name: "otherDocument-" + otherDocumentsplitfile
                },
                {
                    link: finalfilerecommendationLink,
                    name: "recommendationDocument-" + recommendationsplitfile
                },
                {
                    link: finalfilertExtraCurricularLink,
                    name: "extraCurricular-" + extraCurricularsplitfile
                },
                {
                    link: finalfilertenglishProficiencyLink,
                    name: "englishProficiency-" + englishProficiencysplitfile
                },
                {
                    link: finalfilertexperienceLink,
                    name: "workExperience-" + experiencesplitfile
                },
                {
                    link: finalfilerePassportLink,
                    name: "passport-" + passportsplitfile
                },
                {
                    link: finalfilerePassportBackLink,
                    name: "passportBack-" + passportBacksplitfile
                },
                {
                    link: finalfilerecvLink,
                    name: "CV-" + cvsplitfile
                },
            ];

            urls.forEach(function (url) {
                setmyloader("false")
                JSZipUtils.getBinaryContent(url.link, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    zip.file(url.name, data, { binary: true });
                    count++;
                    if (count == urls.length) {
                        zip.generateAsync({ type: 'blob' }).then(function (content) {
                            saveAs(content, zipFilename);
                            return
                        });
                    }
                });
            });
        };
        saveFile();
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        setmessageError("")
        if (message === "") {
            setmessageError("Please Enter Message")
        }
        else {
            setmyloader("true")
            const obj = {
                message: message,
                studentID: mystudentID,
                type: 0,
            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'admin/messages/' + mystudentID, obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setsuccessMessage("Message Sent")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                        setmessage("")
                        axios.get(process.env.REACT_APP_SERVER_URL + 'admin/messages/' + mystudentID, { headers: { 'Authorization': mounted } })
                            .then(function (res) {
                                if (res.data.success === true) {
                                    var myresults = res.data.notifications;
                                    if (Object.keys(myresults).length === 0) {
                                    }
                                    const newArr = myresults.map(obj => {
                                        var myd = obj.messageTime
                                        const d = new Date(myd)

                                        var date = d.getDate()
                                        var month = d.getMonth() + 1;
                                        var year = d.getFullYear();
                                        var month = d.toLocaleString('default', { month: 'long' })
                                        var options = {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        };
                                        var timerr = new Intl.DateTimeFormat('en-US', options).format(d)
                                        var completeTime = month + " " + date + ",  " + year + ", " + timerr
                                        return { ...obj, messageTime: completeTime };
                                        return obj;
                                    });
                                    setFormValues(newArr)
                                }
                            })
                            .catch(error => {
                            });
                    }
                })
                .catch(error => {
                });
        }
    }
    function clickCheckboxHandler(value1, value2) {


        const obj = {
            applicationProgress: value1,
            applicationProgressStep: value2
        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'admin/studentApplications/' + myviewApplicationId, obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setmyloader("false")
                if (res.data.success === true) {
                    setsuccessMessage("Application Step Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)

                    axios.get(process.env.REACT_APP_SERVER_URL + 'admin/studentApplicationsSingle/' + myviewApplicationId, { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            if (res.data.success === true) {

                                setmyapplicationProgress(res.data.applications[0].applicationProgress)
                                setmyapplicationProgressStep(res.data.applications[0].applicationProgressStep)

                            }
                        })
                }
            })
            .catch(error => {
            });
    }

    return (
        <div className="container-fluid admin-dashboard admin-icon" >
            {loader === "true" ?
                <Loader />
                : null}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student Application</h1>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">


                                <div className="col-md-6" />

                            </div>
                            <div className="col-md-6">
                                <Search
                                    onSearch={value => {
                                        setSearch(value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="card-body table-border-style">
                            <div className="table-responsive">
                                <table className="table table-hover">

                                    <TableHeader

                                        headers={tableHeaders}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })
                                        }
                                    />
                                    <tbody>
                                        {commentsData.map((object, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{object.buildApplicationID}</td>
                                                    <td>{object.studentDetail[0].buildStudentID}</td>
                                                    <td>{object.studentDetail[0].name}</td>
                                                    <td>{object.studentDetail[0].email}</td>
                                                    <td>{object.studentDetail[0].phone}</td>
                                                    {/* <td>{object._id}</td> */}
                                                    <td>{object.universityName}</td>
                                                    <td>{object.courseName}</td>
                                                    <td>
                                                        <button title="View Student Application" className="btn btn-success"
                                                            onClick={() => handleView(object._id, object.studentID, object.buildApplicationID,
                                                                object.studentDetail[0].name, object.studentDetail[0].email, object.studentDetail[0].phone,
                                                                object.universityName, object.courseName, object.applicationProgressStep, object.applicationProgress,
                                                                object.countryID,
                                                                object.studentDetail[0].buildStudentID
                                                            )}

                                                        >
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
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
                    </div>
                </div>
            </div>
            <div id="mySidenav" className="sidenav" style={{ width: firstviewWidth }}>
                <section className="pcoded-main-containerx ">
                    <a onClick={() => handleCloseView()} className="closebtn" >×</a>
                    <div className="pcoded-content">
                        <div className="pcoded-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">

                                        <div className="card-body table-border-style">
                                            <div className="row">
                                                <div className="col-xl-8 col-lg-7">
                                                    <div className="mb-4">
                                                        <div className="admin">
                                                            <div id="accordion">
                                                                <div className="card-header app">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <h5>Order ID <span className="badge badge-info">{mybuildApplicationID}</span></h5>
                                                                        </div>
                                                                        <div className="col-md-4 text-center">
                                                                        </div>
                                                                        {submitSuccess === 1 ? <div className="Show_success_message">
                                                                            <strong>Success!</strong> {successMessage}
                                                                        </div> : null}
                                                                        <div className="col-md-4 text-right">
                                                                            <button title="Applied Application" className="btn btn-primary" onClick={() => handleAppliedView()}>   Applied Application <span className="badge badge-light">{applicationNo}</span></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion" style={{}}>
                                                                        <div className="card-body">

                                                                            <h5>Application Information</h5>
                                                                            <hr />

                                                                            <div className="row">

                                                                                <div className="col-md-3">
                                                                                    <h5>Order Id </h5>
                                                                                    <p>{mybuildApplicationID}</p>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <h5>Student ID </h5>
                                                                                    <p>{mybuildStudentID}</p>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <h5>	Student Name</h5>
                                                                                    <p>{myname} </p>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <h5>Student Email </h5>
                                                                                    <p>{myemail}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">

                                                                                <div className="col-md-3">
                                                                                    <h5>	Student Phone </h5>
                                                                                    <p>{myphone}</p>
                                                                                </div>
                                                                                {/* <div className="col-md-3">
                                                                                    <h5>	Application Id </h5>
                                                                                    <p>{myviewApplicationId}</p>
                                                                                </div> */}
                                                                                <div className="col-md-3">
                                                                                    <h5>University Name</h5>
                                                                                    <p>{myuniversityName}</p>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <h5>	Course Name </h5>
                                                                                    <p>{mycourseName}</p>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                    {/* start for menu */}
                                                                    <div className="activite">
                                                                        <div className="row">
                                                                            <div className="cardx mb-4">
                                                                                <div className="act-note">
                                                                                    <ul className="nav nav-tabs" role="tablist">
                                                                                        <li className="nav-item">
                                                                                            <a className="nav-link active" data-bs-toggle="tab" href="#message1">Messages</a>
                                                                                        </li>
                                                                                        <li className="nav-item">
                                                                                            <a className="nav-link " data-bs-toggle="tab" href="#home">Application Profile</a>
                                                                                        </li>
                                                                                        <li className="nav-item">
                                                                                            <a className="nav-link" data-bs-toggle="tab" href="#menu1">Documents</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                    {/* Tab panes */}
                                                                                    <div className="tab-content">
                                                                                        <div id="home" className=" tab-pane"><br />
                                                                                            <div className="card-body">
                                                                                                <div className="application-activity">
                                                                                                    <div className="row">
                                                                                                        <div className="col-md-12">
                                                                                                            <div className="card">

                                                                                                                <div className="card-body ">


                                                                                                                    <div className="row">
                                                                                                                        {salutation != "" && salutation != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Salutation </h5>
                                                                                                                                <p>{salutation}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {firstName != "" && firstName != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>First Name</h5>
                                                                                                                                <p>{firstName}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {middleName != "" && middleName != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Middle Name</h5>
                                                                                                                                <p>{middleName}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {lastName != "" && lastName != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Last Name</h5>
                                                                                                                                <p>{lastName}</p>
                                                                                                                            </div>
                                                                                                                            : null}

                                                                                                                    </div>
                                                                                                                    <div className="row mt-3">

                                                                                                                        {otherName != "" && otherName != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Other Name</h5>
                                                                                                                                <p>{otherName}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {gender != "" && gender != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Gender</h5>
                                                                                                                                <p>{gender}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {dateOfBirth != "" && dateOfBirth != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Date of Birth</h5>
                                                                                                                                <p>{dateOfBirth}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {countryOfBirth != "" && countryOfBirth != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Country of Birth</h5>
                                                                                                                                <p>{countryOfBirth}</p>
                                                                                                                            </div>
                                                                                                                            : null}

                                                                                                                    </div>
                                                                                                                    <div className="row mt-3">

                                                                                                                        {nationality != "" && nationality != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Nationality</h5>
                                                                                                                                <p>{nationality}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {dualNationality != "" && dualNationality != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5> Dual Nationality</h5>
                                                                                                                                <p>{dualNationality}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {maritalStatus != "" && maritalStatus != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Marital Status</h5>
                                                                                                                                <p>{maritalStatus}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {differentlyAble != "" && differentlyAble != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>differently abled</h5>
                                                                                                                                <p>{differentlyAble}</p>
                                                                                                                            </div>
                                                                                                                            : null}

                                                                                                                    </div>
                                                                                                                    {/* start for new row   */}
                                                                                                                    <div className="row mt-3">
                                                                                                                        {passport != "" && passport != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>valid passport</h5>
                                                                                                                                <p>{passport}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {aadharCard != "" && aadharCard != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5> valid Aadhar Card</h5>
                                                                                                                                <p>{aadharCard}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {firstLanguage != "" && firstLanguage != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>First Language</h5>
                                                                                                                                <p>{firstLanguage}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {visa != "" && visa != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5> valid study visa</h5>
                                                                                                                                <p>{visa}</p>
                                                                                                                            </div>
                                                                                                                            : null}

                                                                                                                    </div>
                                                                                                                    <div className="row mt-3">
                                                                                                                        {refusedVisa != "" && refusedVisa != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5> Refused Visa</h5>
                                                                                                                                <p>{refusedVisa}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                    </div>
                                                                                                                    {/* end for new row */}
                                                                                                                    <h5 className="mt-5">Address &amp; Contact</h5>
                                                                                                                    <hr />
                                                                                                                    <div className="row">

                                                                                                                        {country != "" && country != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Country</h5>
                                                                                                                                <p>{country}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {state != "" && state != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>State/Province</h5>
                                                                                                                                <p>{state}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {city != "" && city != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>City</h5>
                                                                                                                                <p>{city}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {address != "" && address != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Address</h5>
                                                                                                                                <p>{address}</p>
                                                                                                                            </div>
                                                                                                                            : null}

                                                                                                                    </div>
                                                                                                                    <div className="row">

                                                                                                                        {zipcode != "" && zipcode != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Zipcode</h5>
                                                                                                                                <p>{zipcode}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {communication_address != "" && communication_address != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>   Communication Address</h5>
                                                                                                                                <p>{communication_address}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                    </div>
                                                                                                                    <h5 className="mt-5">Family Information</h5>
                                                                                                                    <hr />
                                                                                                                    {FormFamilyValues.map((element, index) => (
                                                                                                                        <div key={index}>
                                                                                                                            <div className="row">

                                                                                                                                {element.relationship != "" && element.relationship != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Relationship</h5>
                                                                                                                                        <p>{element.relationship}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.firstName != "" && element.firstName != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Full Name</h5>
                                                                                                                                        <p>{element.salutation}{element.firstName} {element.middleName} {element.lastName}  </p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.email != "" && element.email != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Email</h5>
                                                                                                                                        <p>{element.email}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.mobile != "" && element.mobile != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Mobile</h5>
                                                                                                                                        <p>{element.mobile}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.occupation != "" && element.occupation != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Occupation</h5>
                                                                                                                                        <p>{element.occupation}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.qualification != "" && element.qualification != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Highest Qualification</h5>
                                                                                                                                        <p>{element.qualification}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                                    <h5 className="mt-5">Education</h5>
                                                                                                                    <hr />
                                                                                                                    {formEducationValues.map((element, index) => (
                                                                                                                        <div key={index}>

                                                                                                                            <div className="row">

                                                                                                                                {element.highestEducation != "" && element.highestEducation != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Highest Level of Education</h5>
                                                                                                                                        <p>{element.highestEducation}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.status != "" && element.status != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Education Status</h5>
                                                                                                                                        <p>{element.status}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.specialization != "" && element.specialization != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Specialization</h5>
                                                                                                                                        <p>{element.specialization}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.degree != "" && element.degree != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Degree</h5>
                                                                                                                                        <p>{element.degree}</p>
                                                                                                                                    </div>

                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.gradePercentage != "" && element.gradePercentage != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Grade Scheme(GPA/Percentage)</h5>
                                                                                                                                        <p>{element.gradePercentage}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.marks != "" && element.marks != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Grade Average/Marks Obtained</h5>
                                                                                                                                        <p>{element.marks}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.attendedForm != "" && element.attendedForm != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Attended From</h5>
                                                                                                                                        <p>{element.attendedForm}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.institution != "" && element.institution != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Name of Institution</h5>
                                                                                                                                        <p>{element.institution}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.affiliationUniversity != "" && element.affiliationUniversity != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Affiliating University/Board of Education</h5>
                                                                                                                                        <p>{element.affiliationUniversity}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.language != "" && element.language != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Language of Instruction</h5>
                                                                                                                                        <p>{element.language}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.country != "" && element.country != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Country</h5>
                                                                                                                                        <p>{element.country}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.state != "" && element.state != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>State/Province</h5>
                                                                                                                                        <p>{element.state}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.city != "" && element.city != undefined ?

                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>City/Town</h5>
                                                                                                                                        <p>{element.city}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.address != "" && element.address != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Address</h5>
                                                                                                                                        <p>{element.address}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.zipcode != "" && element.zipcode != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Zipcode</h5>
                                                                                                                                        <p>{element.zipcode}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                                    <h5 className="mt-5">Test Score</h5>
                                                                                                                    <hr />
                                                                                                                    <div className="row">
                                                                                                                        {scoremarks != "" && scoremarks != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Marks in English in Class 12</h5>
                                                                                                                                <p>{scoremarks}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {scoreenglishProficiency != "" && scoreenglishProficiency != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Have you taken any English Proficiency Test?</h5>
                                                                                                                                <p>{scoreenglishProficiency}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {scoregre != "" && scoregre != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Have you taken IELTS/PTE/GRE/GMAT ?</h5>
                                                                                                                                <p>{scoregre}</p>
                                                                                                                            </div>
                                                                                                                            : null}
                                                                                                                        {scoresat != "" && scoresat != undefined ?
                                                                                                                            <div className="col-md-3">
                                                                                                                                <h5>Have you taken SAT/ACT?</h5>
                                                                                                                                <p>{scoresat}</p>
                                                                                                                            </div>
                                                                                                                            : null}

                                                                                                                    </div>
                                                                                                                    <h5 className="mt-5">Work Experience</h5>
                                                                                                                    <hr />
                                                                                                                    {FormExperienceValues.map((element, index) => (
                                                                                                                        <div key={index}>
                                                                                                                            <div className="row">
                                                                                                                                {element.status != "" && element.status != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Work Status</h5>
                                                                                                                                        <p>{element.status}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.type != "" && element.type != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Work Type</h5>
                                                                                                                                        <p>{element.type}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.organization != "" && element.organization != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Name of Organization*</h5>
                                                                                                                                        <p>{element.organization}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.designation != "" && element.designation != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Designation</h5>
                                                                                                                                        <p>{element.designation}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.role != "" && element.role != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Job Role</h5>
                                                                                                                                        <p>{element.role}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.started != "" && element.started != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Work Type</h5>
                                                                                                                                        <p>{element.started}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.type != "" && element.type != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Started Date</h5>
                                                                                                                                        <p>{element.type}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.ended != "" && element.ended != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>End Date</h5>
                                                                                                                                        <p>{element.ended}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.country != "" && element.country != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Country</h5>
                                                                                                                                        <p>{element.country}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.city != "" && element.city != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>City/Town</h5>
                                                                                                                                        <p>{element.city}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                                    <h5 className="mt-5">Extra Curricular Activities</h5>
                                                                                                                    <hr />
                                                                                                                    {formActivityValues.map((element, index) => (
                                                                                                                        <div key={index}>
                                                                                                                            <div className="row">
                                                                                                                                {element.activityStatus != "" && element.activityStatus != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Acitvity Status</h5>
                                                                                                                                        <p>{element.activityStatus}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.activity != "" && element.activity != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Activity</h5>
                                                                                                                                        <p>{element.activity}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.position != "" && element.position != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Position/Designation</h5>
                                                                                                                                        <p>{element.position}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.description != "" && element.description != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Description</h5>
                                                                                                                                        <p>{element.description}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.started != "" && element.started != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Started Date</h5>
                                                                                                                                        <p>{element.started}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.ended != "" && element.ended != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>End Date</h5>
                                                                                                                                        <p>{element.ended}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.apply != "" && element.apply != undefined ?
                                                                                                                                    <div className="col-md-6">
                                                                                                                                        <h5>Would you be interested in participating in similar activities at university</h5>
                                                                                                                                        <p>{element.apply}</p>
                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                                    <h5 className="mt-5">Recommendation</h5>
                                                                                                                    <hr />
                                                                                                                    {FormRecommendationValues.map((element, index) => (
                                                                                                                        <div key={index}>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.type != "" && element.type != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Reference Type</h5>
                                                                                                                                        <p>{element.type}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.organization != "" && element.organization != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Name of Organisation/Institution</h5>
                                                                                                                                        <p>{element.organization}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.recommenderName != "" && element.recommenderName != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Recommender Name</h5>
                                                                                                                                        <p>{element.recommenderName}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.email != "" && element.email != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Official Email ID</h5>
                                                                                                                                        <p>{element.email}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                            <div className="row mt-3">
                                                                                                                                {element.relation != "" && element.relation != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Relation with Recommender</h5>
                                                                                                                                        <p>{element.relation}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.designation != "" && element.designation != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Recommender Designation</h5>
                                                                                                                                        <p>{element.designation}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.number != "" && element.number != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Contact Number</h5>
                                                                                                                                        <p>{element.number}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}
                                                                                                                                {element.address != "" && element.address != undefined ?
                                                                                                                                    <div className="col-md-3">
                                                                                                                                        <h5>Address of Organisation/Institution</h5>

                                                                                                                                        <p>{element.address}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                                <div className="row mt-3">

                                                                                                                                </div>
                                                                                                                                {element.letter != "" && element.letter != undefined ?
                                                                                                                                    <div className="col-md-6">
                                                                                                                                        <h5>Do you have letter of recommendation?</h5>
                                                                                                                                        <p>{element.letter}</p>

                                                                                                                                    </div>
                                                                                                                                    : null}

                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    ))}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div id="menu1" className=" tab-pane fade"><br />
                                                                                            <div className="applic-document">

                                                                                                <ul>
                                                                                                    <li><button type="button" className="btn btn-outline-primary btn-download" onClick={downloadAllDocument}><span>
                                                                                                        <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                    </span>Download All Document</button></li>
                                                                                                    <li> Identity Documents
                                                                                                        Passport Front <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentPassportDocument)} title="view document" className="btn btn-outline-primary" />

                                                                                                        Passport Back <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentPassportBackDocument)} title="view document" className="btn btn-outline-primary" />

                                                                                                        CV    <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentCVDocument)} title="view document" className="btn btn-outline-primary" />

                                                                                                        <span>
                                                                                                            <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadIdentityDocument}><span>
                                                                                                                <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                            </span>Download</button>
                                                                                                        </span>
                                                                                                    </li>
                                                                                                    <li style={{ paddingTop: "160px" }}> Education Documents<span>

                                                                                                        10th Marksheet <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentmarksheet10Document)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <br />12th Marksheet<FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentmarksheet12Document)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <br /> UG Degree Certificate <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentugDegreeDocument)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <br /> UG Consolidated Marksheet  <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentugConsolidateDocument)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <br /> UG Marksheet <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentugMarksheetDocument)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <br /> PG Degree Certificate<FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentpgDegreeDocument)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <br />  PG Consolidated Marksheet<FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentpgDegreeConsolidatedDocument)} title="view document" className="btn btn-outline-primary" />
                                                                                                        PG Marksheet <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentpgMarksheetDocument)} title="view document" className="btn btn-outline-primary" />

                                                                                                        <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadEducation}><span>
                                                                                                            <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                        </span>Download</button>

                                                                                                    </span></li>
                                                                                                    <li> Work Experience Documents
                                                                                                        <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentExperienceDocument, experienceDocumentExtenstion)} title="view document" className="btn btn-outline-primary" />


                                                                                                        <span>

                                                                                                            <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadWorkExperience}><span>
                                                                                                                <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                            </span>Download</button>
                                                                                                        </span></li>
                                                                                                    <li>   English Proficiency Test Document

                                                                                                        <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentEnglishProficiencyDocument, englishProficiencyDocumentExtenstion)} title="view document" className="btn btn-outline-primary" />

                                                                                                        <span>

                                                                                                            <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadEnglishProficiency}><span>
                                                                                                                <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                            </span>Download</button>
                                                                                                        </span></li>

                                                                                                    <li>   Extra Curricular Document
                                                                                                        <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentExtraCurricularDocument, extraCurricularDocumentExtenstion)} title="view document" className="btn btn-outline-primary" />


                                                                                                        <span>
                                                                                                            <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadExtraCurricular}><span>
                                                                                                                <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                            </span>Download</button>
                                                                                                        </span></li>
                                                                                                    <li> Recommendation Documents

                                                                                                        <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentRecommendationDocument, recommendationDocumentExtenstion)} title="view document" className="btn btn-outline-primary" />
                                                                                                        <span>
                                                                                                            <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadRecommendation}><span>
                                                                                                                <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                            </span>Download</button>
                                                                                                        </span></li>
                                                                                                    <li>  Others Documents
                                                                                                        <FontAwesomeIcon icon={faEye} onClick={() => viewSingleDocument(studentOtherDocument, otherDocumentExtenstion)} title="view document" className="btn btn-outline-primary" />

                                                                                                        <span>
                                                                                                            <button type="button" className="btn btn-outline-primary btn-download" onClick={downloadOther}><span>
                                                                                                                <FontAwesomeIcon icon={faCloudDownload} />
                                                                                                            </span>Download</button>
                                                                                                        </span></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div id="message1" className=" tab-pane active"><br />
                                                                                            <div className="applic-document">
                                                                                                <div className="row">
                                                                                                    <div className="col-xl-12 col-lg-7">
                                                                                                        <div className="card shadow mb-4">
                                                                                                            <div className="row">
                                                                                                                <div className="col-md-12">
                                                                                                                    <div className="chat-message msg_list">
                                                                                                                        <div className="row">
                                                                                                                            <div className="col-md-12">
                                                                                                                                {FormValues.map((element, index) => {
                                                                                                                                    return (
                                                                                                                                        <div className="anw-block" key={index}>
                                                                                                                                            {element.type === 0 ?
                                                                                                                                                <div className="anw-block">
                                                                                                                                                    <div className="row">
                                                                                                                                                        <div className="col-md-1">
                                                                                                                                                            <div className="us-img us-letter">
                                                                                                                                                                <h6>S</h6>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                        <div className="col-md-11">
                                                                                                                                                            <div className="anw-content-rightblock  light-greenish">
                                                                                                                                                                <div className="des-title">
                                                                                                                                                                    <h6><strong>Student:</strong> ({myname}) Sent a Message</h6><span className="date-block">{element.messageTime}</span>
                                                                                                                                                                </div>
                                                                                                                                                                <div className="reply-content ">
                                                                                                                                                                    <p>{element.message}</p>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                :

                                                                                                                                                <div className="row">
                                                                                                                                                    <div className="col-md-1">
                                                                                                                                                        <div className="us-img us-letter">
                                                                                                                                                            <h6>A</h6>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                    <div className="col-md-11">
                                                                                                                                                        <div className="anw-content-rightblock  drak-blue">
                                                                                                                                                            <div className="des-title">
                                                                                                                                                                <h6><strong>Visa Team:</strong>(admin) Sent a Message </h6><span className="date-block">{element.messageTime}</span>
                                                                                                                                                            </div>
                                                                                                                                                            <div className="reply-content ">
                                                                                                                                                                <p>{element.message}</p>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            }
                                                                                                                                        </div>
                                                                                                                                    )
                                                                                                                                })}
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <div className="col-md-12">
                                                                                                                    <div className="msg-form">
                                                                                                                        <form onSubmit={handleFormSubmit}>
                                                                                                                            <div className="row">
                                                                                                                                <div className="col-md-12">
                                                                                                                                    <div className="form-group">
                                                                                                                                        <label className="form-label">Message
                                                                                                                                            <span className="req-star">*</span></label>
                                                                                                                                        <textarea rows={5} cols={7} className="form-control" value={message}
                                                                                                                                            onChange={(e) => setmessage(e.target.value)} />
                                                                                                                                    </div>
                                                                                                                                    <span style={{ color: "red" }}> {messageError}</span>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            <button type="submit" className="btn-send-msg">
                                                                                                                                <FontAwesomeIcon icon={faPaperPlane} /> Send</button>
                                                                                                                        </form>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end for menu */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="card mb-4">
                                                        <div className="profile-main">
                                                            <div className="application-current-status">
                                                                <h5>Application Current Status</h5>
                                                                <ul>

                                                                    {universityApplication.map((object, i) => {
                                                                        return (
                                                                            <div key={i}>
                                                                                {i <= myapplicationProgressStep ?
                                                                                    <>
                                                                                        {object === myapplicationProgress ?
                                                                                            <li className="statusBox current-stat" style={{ 'backgroundColor': '#0982A5' }}>{object}<span>
                                                                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                                                            </span></li>
                                                                                            : <li className="statusBox" style={{ 'backgroundColor': "#fff" }}>{object}<span>
                                                                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                                                            </span></li>}
                                                                                    </>
                                                                                    : <li className="statusBox">{object}<span className="status-completed">

                                                                                    </span></li>}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <div className="current-status">
                                                                <h5>Set Application current-status</h5>
                                                                <ul>
                                                                    {universityApplication.map((object, i) => {
                                                                        return (
                                                                            <div key={i}>
                                                                                <li className="state-comp"><input type="checkbox" defaultChecked
                                                                                    onChange={() => clickCheckboxHandler(object, i)}

                                                                                />{object}
                                                                                </li>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body sidenav" id="mySidenav">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <h5>Student Document Details</h5>
                                                                    </div>
                                                                    <div className="col-md-4" />
                                                                    <div className="col-md-3">
                                                                        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">×</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-body ">
                                                                <h5>Identity Documents</h5>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <h5>Passport</h5>
                                                                        <p><img src="assets/images/passport.png" alt="pas" /></p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <h5>Passport Back</h5>
                                                                        <p><img src="assets/images/passport.png" alt="pas" /></p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <h5>CV</h5>
                                                                        <p><img src="assets/images/cv.png" alt="cv" /></p>
                                                                    </div>
                                                                </div>
                                                                <h5> Education Documents</h5>
                                                                <hr />
                                                                <div className="row mt-3">
                                                                    <div className="col-md-6">
                                                                        <h5>Degree</h5>
                                                                        <p>pict</p>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <h5>Secondary Education</h5>
                                                                        <p>pict</p>
                                                                    </div>
                                                                </div>
                                                                <h5 className="mt-5">Work Experience Documents</h5>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h5>Work Experience</h5>
                                                                        <p>Experience PICt</p>
                                                                    </div>
                                                                </div>
                                                                <h5 className="mt-5"> English Proficiency Test Document</h5>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h5>Work Experience</h5>
                                                                        <p>Experience PICt</p>
                                                                    </div>
                                                                </div>
                                                                <h5 className="mt-5"> Extra Curricular Document</h5>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h5>Work Experience</h5>
                                                                        <p>Experience Pict</p>
                                                                    </div>
                                                                </div>
                                                                <h5 className="mt-5"> Recommendation Documents</h5>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h5> Recommendation</h5>
                                                                        <p>Documents Pict</p>
                                                                    </div>
                                                                </div>
                                                                <h5 className="mt-5">Other Documents</h5>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h5> Documents</h5>
                                                                        <p>Documents Pict</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <div id="mySidenav" className="sidenav" style={{ width: secondviewWidth }}>

                <div className="countainer-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="card">
                                <div className="card-header">

                                    <div className="row">
                                        <div >         <a onClick={() => handleSecondCloseView()} className="closebtn" >×</a></div>

                                        <div className="col-md-5"> <h5>All Application</h5> </div>
                                        <div className="col-md-4" />
                                        <div className="col-md-3">
                                            <div className="search-barc">
                                                <input type="text" className="form-control " placeholder="Search hear" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-border-style">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Order Id</th>
                                                    <th>Student ID</th>
                                                    <th>Student Name</th>
                                                    <th>Student Email</th>
                                                    <th>Student Phone</th>
                                                    {/* <th>Application Id</th> */}
                                                    <th>University Name</th>
                                                    <th>Course Name</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {FormStudentApplicationValues.map((object, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{i + 1}</td>

                                                            <td>{object.buildApplicationID}</td>
                                                            <td>{object.studentDetail[0].buildStudentID}</td>
                                                            <td>{object.studentDetail[0].name}</td>
                                                            <td>{object.studentDetail[0].email}</td>
                                                            <td>{object.studentDetail[0].phone}</td>
                                                            {/* <td>{object._id}</td> */}
                                                            <td>{object.universityName}</td>
                                                            <td>{object.courseName}</td>
                                                            <td>
                                                                <button title="View single Application" className="btn btn-success"
                                                                    onClick={() => handleView(object._id, object.studentID, object.buildApplicationID,
                                                                        object.studentDetail[0].name, object.studentDetail[0].email, object.studentDetail[0].phone,
                                                                        object.universityName, object.courseName, object.applicationProgressStep, object.applicationProgress,
                                                                        object.countryID, object.studentDetail[0].buildStudentID
                                                                    )}

                                                                >
                                                                    <FontAwesomeIcon icon={faEye} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modal-container"
                show={showModal}
                onHide={() => close()}

                animation={true}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Document</Modal.Title>
                </Modal.Header>


                <div className="modal-body">
                    {/* <p>{showModalValue}</p> */}
                    {/* <img src={showModalValue} alt="document" /> */}
                    {showModalExtensionValue === "jpeg" || showModalExtensionValue === "jpg" || showModalExtensionValue === "png" ?
                        <img src={showModalValue} alt="passport" />
                        : showModalExtensionValue === "pdf" ?
                            <div>
                                <iframe src={showModalValue} width="100%" height="500px"></iframe>
                            </div>
                            : null
                    }


                </div>
            </Modal>

        </div>
    );
}