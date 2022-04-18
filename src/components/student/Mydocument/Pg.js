import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash
} from '@fortawesome/free-solid-svg-icons';

export default function Pg() {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mypgDegree, setmypgDegree] = useState();
    const [mypgDegreeConsolidatedMarksheet, setmypgDegreeConsolidatedMarksheet] = useState();
    const [mypgMarksheet, setmypgMarksheet] = useState();
    const [textflag, settextflag] = useState("none");
    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
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
    useEffect(() => {
        var studentId = localStorage.getItem('studentId');
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        if (studentId !== null) {
        function pgAllDetails() {
            fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                method: 'get',
                headers: { 'Authorization': mounted },
            })
                .then(response => response.json())
                .then(data => {
                    setmypgDegree(data.studentEducationDocument.pgDegree)
                    setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                    setmypgMarksheet(data.studentEducationDocument.pgMarksheet)
                    if (data.studentEducationDocument.pgDegree != null) {
                        var fetchPassport = data.studentEducationDocument.pgDegree
                        var completePassport = fetchPassport.split(".")
                        setpassportExtenstion(completePassport[3]);
                    }
                    else {
                        setpassportExtenstion("");
                    }
                    if (data.studentEducationDocument.pgDegreeConsolidatedMarksheet != null) {
                        var fetchPassportBack = data.studentEducationDocument.pgDegreeConsolidatedMarksheet
                        var completePassportBack = fetchPassportBack.split(".")
                        setpassportBackExtenstion(completePassportBack[3]);
                    }
                    else {
                        setpassportBackExtenstion("");
                    }
                    if (data.studentEducationDocument.pgMarksheet != null) {
                        var fetchcvBack = data.studentEducationDocument.pgMarksheet
                        var completecv = fetchcvBack.split(".")
                        setcvExtenstion(completecv[3]);
                    }
                    else {
                        setcvExtenstion("")
                    }
                })
        }
        pgAllDetails()
    }
    }, [])
    function viewMyPassportDocument() {
        setmyPassportDocx("1")
    }
    function viewMyPassportBackDocument() {
        setmyPassportBackDocx("1")
    }
    function viewMycvDocument() {
        setmycvDocx("1")
    }
    function pgAll() {
        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                setmypgDegree(data.studentEducationDocument.pgDegree)
                setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                setmypgMarksheet(data.studentEducationDocument.pgMarksheet)
                if (data.studentEducationDocument.pgDegree != null) {
                    var fetchPassport = data.studentEducationDocument.pgDegree
                    var completePassport = fetchPassport.split(".")
                    setpassportExtenstion(completePassport[3]);
                }
                else {
                    setpassportExtenstion("");
                }
                if (data.studentEducationDocument.pgDegreeConsolidatedMarksheet != null) {
                    var fetchPassportBack = data.studentEducationDocument.pgDegreeConsolidatedMarksheet
                    var completePassportBack = fetchPassportBack.split(".")
                    setpassportBackExtenstion(completePassportBack[3]);
                }
                else {
                    setpassportBackExtenstion("");
                }
                if (data.studentEducationDocument.pgMarksheet != null) {
                    var fetchcvBack = data.studentEducationDocument.pgMarksheet
                    var completecv = fetchcvBack.split(".")
                    setcvExtenstion(completecv[3]);
                }
                else {
                    setcvExtenstion("")
                }
            })
    }
    function onDeletepgDegreeHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletepgDegreeConsolidatedMarksheetHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletepgMarksheetConsolidateHandle(value) {
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

        <div className="card-body">
            {loader === "true" ?
                <Loader />
                : null}
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
                    fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
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
                            pgAll()
                        })
                }}
                onCancel={() =>
                    setshowSweetAlert("0")
                }
                focusCancelBtn
            >
            </SweetAlert>
                : null
            }
            <div className="form form_doc">
                <div className="row pl-4 pr-4 mt-3">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                        <p style={{ display: completedHeading }}>I haven't completed or pursuing any PG course</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                        <label className="switch" title="Show PG course Degree">
                            <input type="checkbox" />
                            <span className="slider round"
                                onClick={() => ToggleButton()}

                            ></span>
                        </label>
                    </div>
                </div>
                <div style={{ display: textflag }}>
                    <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">PG Degree Certificate <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            {mypgDegree === "" || mypgDegree === "*" || mypgDegree === null || mypgDegree === undefined ?
                                <Dropzone onDrop={(acceptedFiles) => {
                                    setmyloader("true")
                                    var fileName = acceptedFiles[0].path;
                                    var fileExtension = fileName.split('.').pop();
                                    if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                        || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                    ) {
                                        const obj5 = new FormData();
                                        obj5.append("pgDegree", acceptedFiles[0]);
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                setmyloader("false")
                                                pgAll()
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
                                :
                                <div>
                                    {passportExtenstion === "docx" || passportExtenstion === "doc" ?
                                        <button onClick={() => viewMyPassportDocument()} title="view document" type="button" className="btn btn-outline-primary" >View
                                        </button>
                                        :
                                        <button onClick={() => viewMyPassportDocument()} title="view document" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalpgDegree1">
                                            View
                                        </button>
                                    }

                                    <button title="Delete" type="button"
                                        onClick={() => onDeletepgDegreeHandle("pgDegree")}
                                        className="btn btn-outline-danger">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <div className="modal" id="myModalpgDegree1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">PG Degree Certificate </h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {passportExtenstion === "jpeg" || passportExtenstion === "jpg" || passportExtenstion === "png" ?
                                                    <img src={mypgDegree} alt="passport" />
                                                    : passportExtenstion === "pdf" ?
                                                        <div>
                                                            <iframe src={mypgDegree} width="100%" height="500px"></iframe>
                                                        </div>
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                        </div>
                    </div>
                    <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">PG Consolidated Marksheet <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div>
                                {mypgDegreeConsolidatedMarksheet === "" || mypgDegreeConsolidatedMarksheet === "*" || mypgDegree === null || mypgDegreeConsolidatedMarksheet === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        setmyloader("true")
                                        var fileName = acceptedFiles[0].path;
                                        var fileExtension = fileName.split('.').pop();
                                        if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                            || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                        ) {
                                            const obj5 = new FormData();
                                            obj5.append("pgDegreeConsolidatedMarksheet", acceptedFiles[0]);
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmyloader("false")
                                                    pgAll()
                                                })
                                        }
                                        else {
                                            setmyloader("false")
                                            setTimeout(() => setsubmitError(""), 3000);
                                            setsubmitError(1)
                                        }
                                        setHeroFiles(acceptedFiles.map(file => Object.assign(file, {
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
                                    :
                                    <div>
                                        {passportBackExtenstion === "docx" || passportBackExtenstion === "doc" ?

                                            <button onClick={() => viewMyPassportBackDocument()} title="view document" type="button" className="btn btn-outline-primary" >
                                                view

                                            </button>
                                            :
                                            <button onClick={() => viewMyPassportBackDocument()} title="view document" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalpgDegreeConsolidatedMarksheet1">
                                                View
                                            </button>
                                        }

                                        <button title="Marksheet Delet" type="button"
                                            onClick={() => onDeletepgDegreeConsolidatedMarksheetHandle("pgDegreeConsolidatedMarksheet")}
                                            className="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <div className="modal" id="myModalpgDegreeConsolidatedMarksheet1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">PG Consolidated Marksheet</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    {passportBackExtenstion === "jpeg" || passportBackExtenstion === "jpg" || passportBackExtenstion === "png" ?
                                                        <img src={mypgDegreeConsolidatedMarksheet} alt="passportBack" />
                                                        : passportBackExtenstion === "pdf" ?
                                                            <div>
                                                                <iframe src={mypgDegreeConsolidatedMarksheet} width="100%" height="500px"></iframe>
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                        </div>
                    </div>
                    <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">PG Marksheet  <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div>
                                {mypgMarksheet === "" || mypgMarksheet === "*" || mypgDegree === null || mypgMarksheet === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        setmyloader("true")
                                        var fileName = acceptedFiles[0].path;
                                        var fileExtension = fileName.split('.').pop();
                                        if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                            || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                        ) {
                                            const obj5 = new FormData();
                                            obj5.append("pgMarksheet", acceptedFiles[0]);
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmyloader("false")
                                                    pgAll()
                                                })
                                        }
                                        else {
                                            setmyloader("false")
                                            setTimeout(() => setsubmitError(""), 3000);
                                            setsubmitError(1)
                                        }
                                        setHeroFiles(acceptedFiles.map(file => Object.assign(file, {
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
                                    :
                                    <div>
                                        {cvExtenstion === "docx" || cvExtenstion === "doc" ?

                                            <button onClick={() => viewMycvDocument()} title="view document" type="button" className="btn btn-outline-primary" >
                                                view

                                            </button>
                                            :
                                            <button onClick={() => viewMycvDocument()} title="view document" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalpgMarksheetConsolidate1">
                                                View
                                            </button>
                                        }

                                        <button title="Delete " type="button"
                                            onClick={() => onDeletepgMarksheetConsolidateHandle("pgMarksheet")}
                                            className="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <div className="modal" id="myModalpgMarksheetConsolidate1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">PG Marksheet</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    {cvExtenstion === "jpeg" || cvExtenstion === "jpg" || cvExtenstion === "png" ?
                                                        <img src={mypgMarksheet} alt="cv" />
                                                        : cvExtenstion === "pdf" ?
                                                            <div>
                                                                <iframe src={mypgMarksheet} width="100%" height="500px"></iframe>
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                        </div>
                    </div>
                </div>
            </div>
            {(passportExtenstion === "docx" || passportExtenstion === "doc") && myPassportDocx === "1" ?
                <iframe src={mypgDegree} className="DocsFrame"></iframe>

                : null
            }
            {(passportBackExtenstion === "docx" || passportBackExtenstion === "doc") && myPassportBackDocx === "1" ?
                <iframe src={mypgDegreeConsolidatedMarksheet} className="DocsFrame"></iframe>
                : null
            }
            {(cvExtenstion === "docx" || cvExtenstion === "doc") && mycvDocx === "1" ?
                <iframe src={mypgMarksheet} className="DocsFrame"></iframe>
                : null
            }
        </div>
    );
}