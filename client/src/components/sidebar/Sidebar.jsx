import React, { useState } from 'react'
import './Sidebar.css'
import { LineStyle } from '@material-ui/icons'
import MessageIcon from '@material-ui/icons/Message';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CommuteIcon from '@material-ui/icons/Commute';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState(false)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"></h3>
          <ul className="sidebarList">
            <h4 className="sidebarListTitle">QuickMenu</h4>
            <NavLink exact to="/" className="sidebarListItem"
            activeClassName="sideBar-active">
              <LineStyle className="sidebarIcon"/>
              Home
            </NavLink>
            <NavLink exact to="/students" className="sidebarListItem"
            activeClassName="sideBar-active">
              <SupervisorAccountIcon className="sidebarIcon"/>
              Students & Parents
            </NavLink>
            <h4 className="sidebarListTitle">Staff</h4>
            <NavLink exact to="/staffList" className="sidebarListItem"
            activeClassName="sideBar-active">
              <PeopleOutlineIcon className="sidebarIcon"/>
              Staff
            </NavLink>                        
            <li className="sidebarListItem">
              <CommuteIcon className="sidebarIcon"/>
              Transport
            </li>
            
            <h4 className="sidebarListTitle">Reports</h4>
           
            <li className="sidebarListItem">
              <ImageSearchIcon className="sidebarIcon"/>
              Attendance
            </li>
            <li className="sidebarListItem">
              <LibraryBooksIcon className="sidebarIcon"/>
              Academics
            </li>
            <li className="sidebarListItem">
              <AccountTreeIcon className="sidebarIcon"/>
              Accounts
            </li>
            
            <h4 className="sidebarListTitle">Notifications</h4>
            <li className="sidebarListItem">
              <MessageIcon className="sidebarIcon"/>
              Messages
            </li>
            <li className="sidebarListItem">
              <AnnouncementIcon className="sidebarIcon"/>
              News & Events
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
