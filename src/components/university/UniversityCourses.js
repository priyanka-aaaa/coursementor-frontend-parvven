import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Courses from './Courses';
import SweetAlert from 'react-bootstrap-sweetalert';
export default function UniversityCourses() {
    return (
        <Courses />
    );
}

