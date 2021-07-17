import './studentdetail.css'
import madam from '../../img/madam.jfif'
import badam from '../../img/images.jfif'
import dogo from '../../img/images (1).jfif'
import PageTitle from '../pageTitle/PageTitle'
import Timer from '../timer/Timer'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const StudentDetail = () => {
  return (
    <div className="studentDetail">
        
        <div className="titlebar">
          <PageTitle title='Students and Parents' />
          <Timer />
        </div>
        <div className="studentDetialWrapper">
            <div className="studentback">
                <ArrowBackIcon />
                <Link to="/students" >
                    
                    <h4>Back to Students List</h4></Link>
            </div>
            <div className="studentInnerWrapper">
                    <div className="studentLeft">
                        <img src={dogo} />
                    
                        <div className="btns">                            
                            <div>
                                <button className=" Btn kidBtn">Account</button>
                                <button className="Btn">Academic</button>
                            </div>
                            
                        </div>
                
            
                        <div className="studentMiddle">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>Kid Junior</td>
                                    </tr>
                                    <tr>
                                        <td>Student No:</td>
                                        <td>0059</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth:</td>
                                        <td>26 July 2010</td>
                                    </tr>
                                    <tr>
                                        <td>Gender:</td>
                                        <td>Female</td>
                                    </tr>
                                    <tr>
                                        <td>Level:</td>
                                        <td>Class 7</td>
                                    </tr>
                                    <tr>
                                        <td>Enrollment Date:</td>
                                        <td>26 July 2020</td>
                                    </tr>
                            
                        
                                </tbody>
                            </table>
                            <button>Edit Profile</button>
                        </div>
                    </div>
                    <div className="studentRight">
                        <div className="parent">
                            <h3>Parent/Gardian 1</h3>
                            <img src={badam} />
                            <table>
                                <tr>
                                    <td>Name:</td>
                                    <td>Ally Mbaya</td>
                                </tr>
                                <tr>
                                    <td>Qualification:</td>
                                    <td>Computer Software</td>
                                </tr>
                                <tr>
                                    <td>Mobile:</td>
                                    <td>0741552266</td>
                                </tr>
                                <tr>
                                    <td>Work at:</td>
                                    <td>WazoGraphics</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><button className="parentMessage">Send a Message</button></td> 
                                </tr>
                            </table>
                        </div>
                        <div className="parent">
                        <h3>Parent/Gardian 2</h3>
                            <img src={madam} />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>Mwana Mzuri</td>
                                    </tr>
                                    <tr>
                                        <td>Qualification:</td>
                                        <td>Computer Software</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile:</td>
                                        <td>0741552266</td>
                                    </tr>
                                    <tr>
                                        <td>Work at:</td>
                                        <td>WazoGraphics</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" ><button className="parentMessage">Send a Message</button></td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default StudentDetail
