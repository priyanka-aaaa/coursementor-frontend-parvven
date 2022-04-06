//start
import Password from './Password';
import Intake from './Intake';
import Dashboard from './Dashboard';
import Courses from './UniversityCourses';

import commission from './commission';
import Summary from './Summary';
const UniversityRoutes = [
  {
    upgrade: true,
    path: "/passport",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Password,
    layout: "/university",
  },

  {
    path: "/dashboard",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: Dashboard,
    layout: "/university",
  },
 
  {
    path: "/courses",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Courses,
    layout: "/university",
  },
 
  {
    path: "/commission",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: commission,
    layout: "/university",
  },
  {
    path: "/summary",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Summary,
    layout: "/university",
  },
  {
    path: "/password",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Password,
    layout: "/university",
  }, 
  {
    path: "/intake",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Intake,
    layout: "/university",
  }, 
];

export default UniversityRoutes;
