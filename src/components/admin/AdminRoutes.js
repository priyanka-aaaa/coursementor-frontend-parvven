import Dashboard from './Dashboard';
import Student from './Student';
import Agent from './Agent';
import University from './University';
import AdminUniversity from './AdminUniversity';
import StudentApplication from './StudentApplication';
import ApplicationStep from './ApplicationStep';
const AdminRoutes = [
  {
    upgrade: true,
    path: "/dashboard",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/studentApplication",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: StudentApplication,
    layout: "/admin",
  }, 
  {
    path: "/student",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Student,
    layout: "/admin",
  },
  {
    path: "/agent",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Agent,
    layout: "/admin",
  },
  {
    path: "/university",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: University,
    layout: "/admin",
  },
  {
    path: "/adminUniversity",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: AdminUniversity,
    layout: "/admin",
  },
  {
    path: "/applicationStep",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: ApplicationStep,
    layout: "/admin",
  }, 


];
export default AdminRoutes;