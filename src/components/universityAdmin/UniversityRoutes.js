//start

import Intake from './Intake';
import Dashboard from './Dashboard';
import Courses from './UniversityCourses';

import commission from './commission';
import Summary from './Summary';
const UniversityRoutes = [

  {
    path: "/dashboard",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: Dashboard,
    layout: "/universityAdmin",
  },
 
  {
    path: "/courses",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Courses,
    layout: "/universityAdmin",
  },
 
  {
    path: "/commission",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: commission,
    layout: "/universityAdmin",
  },
  {
    path: "/summary",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Summary,
    layout: "/universityAdmin",
  },

  {
    path: "/intake",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Intake,
    layout: "/universityAdmin",
  }, 
];

export default UniversityRoutes;
