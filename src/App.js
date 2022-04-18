import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './css/style.css';
import './css/dashboard.css';
import './css/frontend.css';
import './css/my.css';

import "./css/responsive.css";
//start for home

import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import country from './components/Home/country';
import Degree from './components/Home/Degree';
import EducationLevel from './components/Home/EducationLevel';
import MajorPursue from './components/Home/MajorPursue';
import Test from './components/Home/Test';
import AcademicTest from './components/Home/AcademicTest';
import Experience from './components/Home/Experience';
import Activity from './components/Home/Activity';
import NgoExperience from './components/Home/NgoExperience';
import FinalFilter from './components/Home/FinalFilter';
import Recruitment from './components/Home/Recruitment';
import School from './components/Home/School';

import UniversityPage from './components/Home/UniversityPage';
import AgentLogin from './components/AgentLogin';
import AgentRegister from './components/AgentRegister';
import Studentregister from './components/Studentregister';
import Studentlogin from './components/Studentlogin';
import Universitylogin from './components/Universitylogin';
import Universityregister from './components/Universityregister';
import AdminLogin from './components/AdminLogin';
//end for home
import AgentLayout from './components/AgentLayout';
import AdminLayout from './components/AdminLayout';
import StudentLayout from './components/StudentLayout';
import UniversityLayout from './components/UniversityLayout';
import UniversityAdminLayout from './components/UniversityAdminLayout';

import Student from './components/Home/Student';
import Error from './components/Home/Error';
import StudyAustralia from './components/Home/StudyAustralia';
import StudyCanada from './components/Home/StudyCanada';
import StudyUnitedKingdom from './components/Home/StudyUnitedKingdom';
import StudyUnitedState from './components/Home/StudyUnitedState';

import TermCondition from './components/Home/TermCondition';
import PrivacyPolicy from './components/Home/PrivacyPolicy';
import RefundPolicy from './components/Home/RefundPolicy';
import HonorCode from './components/Home/HonorCode';
import UniversityCourse from './components/Home/UniversityCourse';



function App() {
  return (
    <BrowserRouter>
      <Switch>
     
        <Route path="/universityAdmin" render={(props) => <UniversityAdminLayout {...props} />} />

        <Route path="/university" render={(props) => <UniversityLayout {...props} />} />
        <Route path="/student" render={(props) => <StudentLayout {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/agent" render={(props) => <AgentLayout {...props} />} />

        <Route path='/students' component={Student} />
        <Route path='/Recruitment' component={Recruitment} />
        <Route path='/country' component={country} />
        <Route path='/degree' component={Degree} />
        <Route path='/EducationLevel' component={EducationLevel} />
        <Route path='/majorPursue' component={MajorPursue} />
        <Route path='/Test' component={Test} />
        <Route path='/AcademicTest' component={AcademicTest} />
        <Route path='/Experience' component={Experience} />
        <Route path='/Activity' component={Activity} />
        <Route path='/NgoExperience' component={NgoExperience} />
        <Route path='/FinalFilter' component={FinalFilter} />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/School' component={School} />

        <Route exact path='/schools/:slug' component={UniversityPage} />
        <Route exact path='/schools/:slug/courses' component={UniversityCourse} />

        <Route path='/Universitylogin' component={Universitylogin} />
        <Route path='/Universityregister' component={Universityregister} />
        <Route path='/AdminLogin' component={AdminLogin} />
        <Route path='/AgentRegister' component={AgentRegister} />
        <Route path='/AgentLogin' component={AgentLogin} />
        <Route path='/Studentlogin' component={Studentlogin} />
        <Route path='/Studentregister' component={Studentregister} />
        <Route path='/study-in-australia' component={StudyAustralia} />
        <Route path='/study-in-canada' component={StudyCanada} />
        <Route path='/study-in-united-kingdom' component={StudyUnitedKingdom} />
        <Route path='/study-in-united-state' component={StudyUnitedState} />
        <Route path='/terms-condition' component={TermCondition} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Route path='/refund-policy' component={RefundPolicy} />
        <Route path='/honor-code' component={HonorCode} />



        <Route component={Error} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;


