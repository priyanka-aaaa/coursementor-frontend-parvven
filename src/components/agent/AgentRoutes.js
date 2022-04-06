import Dashboard from './Dashboard';

import Student from './Student';
import Evaluate from './Evaluate';
import Certificate from './Certificate';
import Application from './Application';
import Commission from './Commission';
import AddStudent from './AddStudent';

const UniversityRoutes = [
  {
    upgrade: true,
    path: "/dashboard",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Dashboard,
    layout: "/agent",
  },

  {
    path: "/student",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Student,
    layout: "/agent",
  },
 
  {
    path: "/Evaluate",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Evaluate,
    layout: "/agent",
  },
  {
    path: "/Certificate",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Certificate,
    layout: "/agent",
  },
  {
    path: "/Application",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Application,
    layout: "/agent",
  }, 
  {
    path: "/commission",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Commission,
    layout: "/agent",
  }, 
  {
    path: "/addStudent",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: AddStudent,
    layout: "/agent",
  }, 
];

export default UniversityRoutes;
