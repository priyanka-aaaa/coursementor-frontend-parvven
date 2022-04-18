import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import Loader from '../Home/Loader';
export default function Message() {
    const [mounted, setMounted] = useState();
    const [message, setmessage] = useState();
    const [studentId, setstudentId] = useState();
    const [studentName, setstudentName] = useState();

    const [loader, setmyloader] = useState("false");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successMessage, setsuccessMessage] = useState("");

    const [FormValues, setFormValues] = useState([{
        message: "", type: ""
    }])
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        var studentId = localStorage.getItem("studentId")
        var studentName = localStorage.getItem("studentName")
        setMounted(mounted)
        setstudentId(studentId)
        setstudentName(studentName)
        if (studentId !== null) {
        function completeMessage() {
            setmyloader("true")
            axios.get(process.env.REACT_APP_SERVER_URL + 'student/messages', { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    if (res.data.success === true) {
                        setmyloader("false")
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
            const obj = {
                name: "salutation",

            };
            axios.put(process.env.REACT_APP_SERVER_URL + 'student/messages', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {

                })
                .catch(error => {
                });

        }
        completeMessage();
    }
    }, [])

    function handleFormSubmit(event) {
        event.preventDefault();
        setmyloader("true")
        const obj = {
            message: message,
            studentID: studentId,
            type: 0,

        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'student/messages', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setmyloader("false")
                if (res.data.success === true) {
                    setsuccessMessage("Message Sent")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    setmessage("")

                    axios.get(process.env.REACT_APP_SERVER_URL + 'student/messages', { headers: { 'Authorization': mounted } })
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
    return (
        <div className="container-fluid">
            {loader === "true" ?
                <Loader />
                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Message</h1>
            </div>
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
                                                                                <h6><strong>Student:</strong> ({studentName}) Sent a Message</h6><span className="date-block">
                                                                                    {element.messageTime}
                                                                                </span>
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
                                                                            <h6><strong>Visa Team:</strong>(admin) Sent a Message </h6><span className="date-block"> {element.messageTime}</span>
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
                                                    <textarea rows={5} cols={7} className="form-control" value={message || ""}
                                                        onChange={(e) => setmessage(e.target.value)} />

                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn-send-msg"><i className="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: '6px' }} /> Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}