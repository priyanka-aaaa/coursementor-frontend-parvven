import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown, faAngleUp,faTrash
} from '@fortawesome/free-solid-svg-icons';

export default function WorkExperienceDocument() {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [companyName, setcompanyName] = useState("");
    const [mydocument, setmydocument] = useState();
    const [textflag, settextflag] = useState("none");
    const [deleteId, setdeleteId] = useState();
    const [submitcompanyName, setsubmitcompanyName] = useState("none");
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [viewDetail, setviewDetail] = useState("none");
    const [document, setdocument] = useState("inline");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [completedHeading, setcompletedHeading] = useState("inline");
    const [loader, setmyloader] = useState("false");
    const [submitError, setsubmitError] = useState("0");

    const [passportExtenstion, setpassportExtenstion] = useState(".jpg");
    const [passportBackExtenstion, setpassportBackExtenstion] = useState(".jpg");
    const [cvExtenstion, setcvExtenstion] = useState(".jpg");

    const [myPassportDocx, setmyPassportDocx] = useState("0");
    const [myPassportBackDocx, setmyPassportBackDocx] = useState("0");
    const [mycvDocx, setmycvDocx] = useState("0");
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    useEffect(() => {
        setmyPassportDocx("0")
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
        function workRexperienceAllDetails() {
            fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                method: 'get',
                headers: { 'Authorization': mounted },
            })
                .then(response => response.json())
                .then(data => {
                    setcompanyName(data.studentExperienceDocument.companyName)
                    setmydocument(data.studentExperienceDocument.document)
                    setsubmitcompanyName(data.studentExperienceDocument.companyName)
                    if (data.studentExperienceDocument.document != null) {
                        var fetchPassport = data.studentExperienceDocument.document
                        var completePassport = fetchPassport.split(".")
                        setpassportExtenstion(completePassport[3]);
                    }
                    else {
                        setpassportExtenstion("");
                    }
                })
        }
        workRexperienceAllDetails();
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
    function viewMyPassportDocument() {
        setmyPassportDocx("1")
    }
    function workRexperienceAll() {
        fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                setcompanyName(data.studentExperienceDocument.companyName)
                setmydocument(data.studentExperienceDocument.document)
                setsubmitcompanyName(data.studentExperienceDocument.companyName)
                if (data.studentExperienceDocument.document != null) {
                    var fetchPassport = data.studentExperienceDocument.document
                    var completePassport = fetchPassport.split(".")
                    setpassportExtenstion(completePassport[3]);
                }
                else {
                    setpassportExtenstion("");
                }
            })
    }
    function onDeletefileHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function ToggleButton() {
        if (textflag == "none") {
            settextflag("inline")
            setcompletedHeading("none")
        }
        else {
            settextflag("none")
            setcompletedHeading("inline")
        }
    }
    return (
        <div className="card">
            {loader === "true" ?
                <Loader />
                : null}
            <a className="card-header" data-bs-toggle="collapse" href="#collapse3"  onClick={() => handleClick()}>
                <strong>3</strong> Work Experience Documents
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
            <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                {submitSuccess === 1 ? <div className="Show_success_message">
                    <strong></strong> {successMessage}
                </div> : null}
                {submitError === 1 ? <div className="Show_error_message">
                    <strong></strong> File extension not supported
                </div> : null}
                {showSweetAlert === "1" ? <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={(value) => {
                        setmyloader("true")
                        setshowSweetAlert("0");
                        const obj5 = new FormData();
                        obj5.append(deleteId, "*");
                        obj5.append("companyName", " ");
                        fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                            method: 'put',
                            body: obj5,
                            headers: { 'Authorization': mounted },
                        })
                            .then(response => response.json())
                            .then(data => {
                                setmyloader("false")
                                setsuccessMessage("Deleted Successfully")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
                                workRexperienceAll()
                            })
                    }}
                    onCancel={() =>
                        setshowSweetAlert("0")
                    }
                    focusCancelBtn   >
                </SweetAlert>
                    : null
                }
                <div className="card-body">
                    <div className="form form_doc">
                        <div className="row pl-4 pr-4 mt-3">
                            <div className="col-md-8">
                                <p style={{ display: completedHeading }}>I don't have any work experience</p>
                            </div>
                            <div className="col-md-4 text-right">
                                <label className="switch3" title="Show Work Experience">
                                    <input type="checkbox" />
                                    <span className="slider round"
                                        onClick={() => ToggleButton()}  ></span>
                                </label>
                            </div>
                        </div>
                        <div style={{ display: textflag }}>
                            <div className="row mt-3">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form form_doc document">
                                        <div className="add-more">                                           
                                            <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className="from-group">
                                                        <label>Company Name</label>
                                                        <input className="ant-input w-100 form-control"
                                                            value={companyName}
                                                            onChange={(e) => setcompanyName(e.target.value)}
                                                            placeholder="Enter Company Name" type="text"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 text-left">
                                                    <p>Upload Document</p>
                                                    {mydocument === "" || mydocument === "*" || mydocument === null || mydocument === undefined ?
                                                        <div>
                                                            <Dropzone onDrop={(acceptedFiles) => {
                                                                setmyloader("true")
                                                                var fileName = acceptedFiles[0].path;
                                                                var fileExtension = fileName.split('.').pop();
                                                                if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                                                    || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                                                ) {
                                                                    const obj5 = new FormData();
                                                                    obj5.append("document", acceptedFiles[0]);
                                                                    obj5.append("companyName", companyName);
                                                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                                                                        method: 'put',
                                                                        body: obj5,
                                                                        headers: { 'Authorization': mounted },
                                                                    })
                                                                        .then(response => response.json())
                                                                        .then(data => {
                                                                            setmyloader("false")
                                                                            workRexperienceAll()
                                                                        })
                                                                }
                                                                else {
                                                                    setmyloader("false")
                                                                    setTimeout(() => setsubmitError(""), 3000);
                                                                    setsubmitError(1)
                                                                }
                                                                setThumbnailFiles(acceptedFiles.map(file => Object.assign(file, {
                                                                    preview: URL.createObjectURL(file)
                                                                })));
                                                            }} name="heroImage" multiple={false}>
                                                                {({ getRootProps, getInputProps }) => (
                                                                    <div {...getRootProps({ className: 'dropzone' })}>
                                                                        <input {...getInputProps()} />
                                                                        <div style={{ fontSize: ".8rem" }}>
                                                                            Upload/Drag & Drop here
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Dropzone>
                                                        </div>
                                                        :
                                                        <div>

                                                            {passportExtenstion === "docx" || passportExtenstion === "doc" ?
                                                                <button onClick={() => viewMyPassportDocument()} title="view document" type="button" className="btn btn-outline-primary" >View
                                                                </button>
                                                                :
                                                                <button onClick={() => viewMyPassportDocument()} title="view document" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalWorkExperience">
                                                                    View
                                                                </button>
                                                            }

                                                            <button title="Delete" type="button"
                                                                onClick={() => onDeletefileHandle("document")}
                                                                className="btn btn-outline-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal" id="myModalWorkExperience">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Work Experience </h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    {passportExtenstion === "jpeg" || passportExtenstion === "jpg" || passportExtenstion === "png" ?
                                                        <img src={mydocument} alt="passport" />
                                                        : passportExtenstion === "pdf" ?
                                                            <div>
                                                                <iframe src={mydocument} width="100%" height="500px"></iframe>
                                                            </div>
                                                            : null
                                                    }

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
            {(passportExtenstion === "docx" || passportExtenstion === "doc") && myPassportDocx === "1" ?
                <iframe src={mydocument} className="DocsFrame"></iframe>

                : null
            }
        </div>
    );
}
