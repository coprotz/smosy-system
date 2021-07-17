import './staff.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';


const staffs = [
    { id:1, avatar: "http://localhost:3000/images/img1.jfif", lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:2, avatar: 'http://localhost:3000/images/img2.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:3, avatar: 'http://localhost:3000/images/img3.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Accountant', mobile: '0715885566' },
    { id:4, avatar: 'http://localhost:3000/images/img4.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:5, avatar: 'http://localhost:3000/images/img6.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:6, avatar: 'http://localhost:3000/images/img6.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Driver', mobile: '0715885566' },
    { id:7, avatar: 'http://localhost:3000/images/img7.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:8, avatar: 'http://localhost:3000/images/img8.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher' , mobile: '0715885566'},
    { id:9, avatar: 'http://localhost:3000/images/img9.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:10, avatar: 'http://localhost:3000/images/img10.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:11, avatar: 'http://localhost:3000/images/img11.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Office Attendant', mobile: '0715885566' },
    { id:12, avatar: 'http://localhost:3000/images/img12.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:13, avatar: 'http://localhost:3000/images/img13.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:14, avatar: 'http://localhost:3000/images/img14.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    {id:15, avatar: 'http://localhost:3000/images/img15.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:16, avatar: 'http://localhost:3000/images/img16.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Security', mobile: '0715885566' },
    { id:17, avatar: 'http://localhost:3000/images/img17.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:18, avatar: 'http://localhost:3000/images/img18.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:19, avatar: 'http://localhost:3000/images/img19.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:20, avatar: 'http://localhost:3000/images/img20.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
    { id:21, avatar: 'http://localhost:3000/images/img1.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Teacher', mobile: '0715885566' },
  
  
  
  
  ];

const Staff = () => {
  return (
    <div className='teacher'>
       
            <table className="content-table">
            <thead>
              <tr>
                <th >Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {staffs.map((staff) => (
                <tr>
                    <td><div className="galley-item-image">
                            <img src={`${staff.avatar}`}/>
                        </div>
                    </td>             
               
                    <td>{staff.lastName}</td>
                    <td>{staff.firstName}</td>
                    <td>{staff.position}</td>
                    <td>{staff.mobile}</td>
                    <td className="teacherIcon">
                        <VisibilityIcon className="btnBrown"/>
                        <MessageIcon className="btnGreen"/>
                        <EditIcon className="btnBlue"/>
                        <DeleteOutlineIcon className="btnRed"/>
                        
                    
                    </td>
                </tr>)
                )} 
                
  
            </tbody>
          </table>
       
        
      
    </div>
  )
}

export default Staff