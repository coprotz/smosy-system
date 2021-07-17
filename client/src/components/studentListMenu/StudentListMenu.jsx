import './studentlistmenu.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuBookIcon from '@material-ui/icons/MenuBook';


const StudentListMenu = ({ color, txtColor }) => {
  return (
    <div className="staffMenu">
    <ul className="staffpages">
    <Link to="/staff/teachers" className="staffMenuList active">
        <MenuBookIcon className="sidebarIcon" style={{ backgroundColor: color, color: txtColor }}/>
        All Students (1032)
    </Link>
      <Link to="/staff/teachers" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon" style={{ backgroundColor: color, color: txtColor }}/>
        Kindergarten 1 (32)
    </Link>
      <Link to="/staff/academic" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon" />
        Kindergaten 2 (20)
        </Link>
      <Link to="/staff/account" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon"/>
        Class 1 (45)
        </Link>
      <Link to="/staff/library" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon"/>
        Class 2 (39)
      </Link>
      <Link to="/staff/ict" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon"/>
        Class 3 (40)
        </Link>
      <Link to="/staff/matron" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon" />
        Class 4 (42)
        </Link>
      <Link to="/staff/security" className="staffMenuList">
        <MenuBookIcon className="sidebarIcon"/>
       Class 5 (47)
        </Link>
      <li className="staffMenuList">
        <MenuBookIcon className="sidebarIcon"/>
        Class 6 (45)
        </li>
      <li className="staffMenuList">
        <MenuBookIcon className="sidebarIcon" />
        Class 7 (42)
        </li>
     
    </ul>
  </div>
  )
}

export default StudentListMenu

StudentListMenu.propTypes = {
  color: PropTypes.string,
  txtColor: PropTypes.string,
}
