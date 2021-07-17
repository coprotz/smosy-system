import Button from '../../components/button/Button'
import Timer from '../../components/timer/Timer'
import PageTitle from '../../components/pageTitle/PageTitle'
import SearchForm from '../../components/searchForm/SearchForm'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './students.css'
import Student from '../../components/student/Student';
import StudentListMenu from '../../components/studentListMenu/StudentListMenu';

const Students = () => {
  return (
    <div className="students">
        <div className="titlebar">
          <PageTitle title='Students and Parents' />
          <Timer />
        </div>
        <div className="search">
      
          <SearchForm 
          placeholder='Search student, parrent, class'/>
          <Button color='#009879' 
          text='Add Student'/>
        </div>

        <div className="teacherWrapper">
        <Switch>
          <Route path="/students">
            <Student  className="teacherInnerWrapper" />
          </Route>        
          
        </Switch>
        
        <StudentListMenu />

      </div>
    </div>
  )
}

export default Students
