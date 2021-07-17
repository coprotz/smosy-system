import PropTypes from 'prop-types'
import StaffListMenu from '../../components/staffListMenu/StaffListMenu';
import Teacher from '../../components/teacher/Teacher';
import Staff from '../../components/staff/Staff';
import Academic from '../../components/academic/Academic';
import Account from '../../components/account/Account';
import Library from '../../components/library/Library';
import Ict from '../../components/ict/Ict';
import './staffList.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Security from '../../components/security/Security';
import SearchForm from '../../components/searchForm/SearchForm';
import Button from '../../components/button/Button';
import Timer from '../../components/timer/Timer';
import PageTitle from '../../components/pageTitle/PageTitle';





const StaffList = () => {
  return (
    <div className="teacherList">
        <div className="titlebar">
          <PageTitle title='Staff' />
          <Timer />
      </div>
     
      <div className="search">
        <SearchForm className="search"
        placeholder='Search Staff'/>
        <Button color='#009879'
        text='Add Staff'/>
      </div>
      <div className="teacherWrapper">
        <Switch>
          <Route path="/staff">
            <StaffList className="teacherInnerWrapper" />
          </Route>
          <Route path="/staff/teachers">
            <Teacher  className="teacherInnerWrapper" />
          </Route>
          <Route path="/staff/academic">
            <Academic  className="teacherInnerWrapper" />
          </Route>
          <Route path="/staff/account">
            <Account  className="teacherInnerWrapper" />
          </Route>
          <Route path="/staff/library">
            <Library  className="teacherInnerWrapper" />
          </Route>
          <Route path="/staff/ict">
            <Ict  className="teacherInnerWrapper" />
          </Route>
          <Route path="/staff/security">
            <Security  className="teacherInnerWrapper" />
          </Route>
          
        </Switch>
        
        <StaffListMenu />

      </div>
       
            
              
      
      
      
    </div>
  )
}



export default StaffList

StaffList.defaultProps = {
  title: 'Staff'
}

StaffList.propTypes = {
  title: PropTypes.string.isRequired,
}
  
