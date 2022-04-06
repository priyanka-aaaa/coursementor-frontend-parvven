import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function IdentityDocument() {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mypassport, setmypassport] = useState();
    const [mypassportBack, setmypassportBack] = useState();
    const [mycv, setmycv] = useState();
    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [submitError, setsubmitError] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [loader, setmyloader] = useState("false");
    const [passportExtenstion, setpassportExtenstion] = useState(".jpg");
    const [passportBackExtenstion, setpassportBackExtenstion] = useState(".jpg");
    const [cvExtenstion, setcvExtenstion] = useState(".jpg");

    const [myPassportDocx, setmyPassportDocx] = useState("0");
    const [myPassportBDocx, setmyPassportBDocx] = useState("0");

    const [myPassportBackDocx, setmyPassportBackDocx] = useState("0");

    const [mycvDocx, setmycvDocx] = useState("0");


    useEffect(() => {
        setmyPassportDocx("0")
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        function identityDocumentAllDetails() {
            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                method: 'get',
                headers: { 'Authorization': mounted },
            })
                .then(response => response.json())
                .then(data => {
                    setmypassport(data.studentIdentityDocument.passport)
                    setmypassportBack(data.studentIdentityDocument.passportBack)
                    setmycv(data.studentIdentityDocument.cv)
                    if (data.studentIdentityDocument.passport != null) {
                        var fetchPassport = data.studentIdentityDocument.passport
                        var completePassport = fetchPassport.split(".")
                        setpassportExtenstion(completePassport[3]);
                    }
                    else {
                        setpassportExtenstion("");
                    }
                    if (data.studentIdentityDocument.passportBack != null) {
                        var fetchPassportBack = data.studentIdentityDocument.passportBack
                        var completePassportBack = fetchPassportBack.split(".")
                        setpassportBackExtenstion(completePassportBack[3]);
                    }
                    else {
                        setpassportBackExtenstion("");
                    }
                    if (data.studentIdentityDocument.cv != null) {
                        var fetchcvBack = data.studentIdentityDocument.cv
                        var completecv = fetchcvBack.split(".")
                        setcvExtenstion(completecv[3]);
                    }
                    else {
                        setcvExtenstion("")
                    }
                })
        }
        identityDocumentAllDetails()
    }, [])
    function viewMyPassportDocument() {
        setmyPassportDocx("1")
    }
    function viewMyPassportBackDocument() {
        setmyPassportBDocx("1")
    }
    function viewMycvDocument() {
        setmycvDocx("1")
    }
    function identityDocumentAll() {
        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                setmypassport(data.studentIdentityDocument.passport)
                setmypassportBack(data.studentIdentityDocument.passportBack)
                setmycv(data.studentIdentityDocument.cv)
                if (data.studentIdentityDocument.passport != null) {
                    var fetchPassport = data.studentIdentityDocument.passport
                    var completePassport = fetchPassport.split(".")
                    setpassportExtenstion(completePassport[3]);
                }
                else {
                    setpassportExtenstion("");
                }
                if (data.studentIdentityDocument.passportBack != null) {
                    var fetchPassportBack = data.studentIdentityDocument.passportBack
                    var completePassportBack = fetchPassportBack.split(".")
                    setpassportBackExtenstion(completePassportBack[3]);
                }
                else {
                    setpassportBackExtenstion("");
                }
                if (data.studentIdentityDocument.cv != null) {
                    var fetchcvBack = data.studentIdentityDocument.cv
                    var completecv = fetchcvBack.split(".")
                    setcvExtenstion(completecv[3]);
                }
                else {
                    setcvExtenstion("")
                }
            })
    }
    function onDeletePassportHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletecvHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletePassportBackHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    return (
        <>
            {loader === "true" ?
                <Loader />
                : null}


            <div className="card-body">
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
                        setshowSweetAlert("0");
                        setmyloader("true")
                        const obj5 = new FormData();
                        obj5.append(deleteId, "*");
                        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
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

                                identityDocumentAll()
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
                    <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">Passport Front <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            {mypassport === "" || mypassport === "*" || mypassport === null || mypassport === undefined ?
                                <Dropzone onDrop={(acceptedFiles) => {
                                    setmyloader("true")
                                    var fileName = acceptedFiles[0].path;
                                    var fileExtension = fileName.split('.').pop();
                                    if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                        || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                    ) {
                                        setmyPassportDocx("0")
                                        const obj5 = new FormData();
                                        obj5.append("passport", acceptedFiles[0]);
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                setmyloader("false")
                                                identityDocumentAll()
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

                                    {passportExtenstion === "docx" ?
                                        <button onClick={() => viewMyPassportDocument()} title="view document" type="button" className="btn btn-outline-primary" >View
                                        </button>
                                        :
                                        <button onClick={() => viewMyPassportDocument()} title="view document" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassport1">
                                            View
                                        </button>
                                    }
                                    <button title="Delete" type="button"
                                        onClick={() => onDeletePassportHandle("passport")}
                                        className="btn btn-outline-danger">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <div className="modal" id="myModalPassport1" >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Passport </h4>

                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                {passportExtenstion === "jpeg" || passportExtenstion === "jpg" || passportExtenstion === "png" ?
                                                    <img src={mypassport} alt="passportback" />
                                                    : passportExtenstion === "pdf" ?
                                                        <div>
                                                            <iframe src={mypassport} width="100%" height="500px"></iframe>
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
                  
                </div>
            </div>

            {passportExtenstion === "docx" && myPassportDocx === "1" ?
                <iframe src={mypassport} className="showDocsFrame"></iframe>

                : null
            }
            {passportBackExtenstion === "docx" && myPassportBDocx === "1" ?
                <iframe src={mypassportBack} ></iframe>
                : null
            }
        </>
    );
}