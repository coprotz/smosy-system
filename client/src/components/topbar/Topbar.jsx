import React from 'react'
import "./Topbar.css"
import logo from '../../img/img1.png'
import profile from '../../img/images.jfif'
import { NotificationsNone, Settings } from '@material-ui/icons'

const Topbar = () => {
  return (
   
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={logo} /> 
                    <h2 className="logoTitle">MOSY</h2>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <h3 className="schoolTitle">Demo Pre & Primary School</h3>
                        <img src={profile} className="profileImg"/>
                        <div className="iconWrapper">
                            <NotificationsNone />
                            <span>2</span>
                        </div>
                        <Settings />
                        
                    </div>
                </div>
            </div>
        </div>
      
   
  )
}

export default Topbar
