import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Students from "./pages/students/Students";
import StudentDetail from "./components/studentDetail/StudentDetail";
import StaffList from "./pages/staffList/StaffList";

const App = () => {
  return (
   <Router>

   <Topbar />
   <div className="container">
     <Sidebar />
     <div className="homeWrapper">
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/staff">
            <StaffList />
          </Route>
          <Route exact path="/staff/teachers">
            <StaffList />
          </Route>
          <Route exact path="/staff/academic">
            <StaffList />
          </Route>
          <Route exact path="/staff/account">
            <StaffList />
          </Route>
          <Route exact path="/staff/library">
            <StaffList />
          </Route>
          <Route exact path="/staff/ict">
            <StaffList />
          </Route>
          <Route exactpath="/staff/security">
            <StaffList />
          </Route>
          <Route exact path="/students">
            <Students />
          </Route>
          <Route exact path="/studentDetail">
            <StudentDetail />
          </Route>         
        </Switch>   

     </div> 
     
   </div> 

   </Router>
   
  );
}

export default App;


