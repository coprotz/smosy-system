import './staffListmenu.css'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Link } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SecurityIcon from '@material-ui/icons/Security';
import AssistantIcon from '@material-ui/icons/Assistant';
import LaptopIcon from '@material-ui/icons/Laptop';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import PropTypes from 'prop-types';


const StaffListMenu = ({ color, txtColor }) => {
  return (
    <div className="staffMenu">
    <ul className="staffpages">
      <Link exact to="/staff" className="staffMenuList staffmenu-active"
      >
        <AccountCircleIcon className="sidebarIcon"/>
        All Staff (175)
      </Link >
      <Link exact to="/staff/teachers" className="staffMenuList"
     >
        <AccountCircleIcon className="sidebarIcon"/>
        Teachers (75)
      </Link >
      <Link exact to="/staff/academic" className="staffMenuList"
      >
        <LibraryBooksIcon className="sidebarIcon" />
        Academics (5)
        </Link >
      <Link exact to="/staff/account" className="staffMenuList"
     >
        <AccountBalanceWalletIcon className="sidebarIcon"/>
        Accounts (4)
        </Link>
      <Link exact to="/staff/library" className="staffMenuList"
      >
        <LocalLibraryIcon className="sidebarIcon"/>
        Library (2)
      </Link>
      <Link exact to="/staff/ict" className="staffMenuList"
      >
        <LaptopIcon className="sidebarIcon"/>
        ICT (2)
        </Link>
      <Link exact to="/staff/matron" className="staffMenuList"
      activeClassName="staffmenu-active">
        <BubbleChartIcon className="sidebarIcon" />
        Matron/Patron (3)
        </Link >
      <Link exact to="/staff/security" className="staffMenuList"
      >
        <SecurityIcon className="sidebarIcon"/>
        Security (3)
        </Link>
      <li className="staffMenuList"
      >
        <DriveEtaIcon className="sidebarIcon"/>
        Drivers (7)
        </li>
      <li className="staffMenuList"
     >
        <AssistantIcon className="sidebarIcon" />
        Office Assistants (6)
        </li>
      <li className="staffMenuList"
      >
        <AcUnitIcon className="sidebarIcon"/>
        Others (5)
        </li>
    </ul>
  </div>
  )
}

export default StaffListMenu

StaffListMenu.propTypes = {
  color: PropTypes.string,
  txtColor: PropTypes.string,
}

