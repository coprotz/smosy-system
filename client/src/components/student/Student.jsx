import './student.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StudentInfo from '../studentDetail/StudentDetail';
import { Link } from 'react-router-dom';



const students = [
    { id:1, avatar: "http://localhost:3000/images/img1.jfif", lastName: 'Snow', firstName: 'Jon', age: '12', level: '5', parent: 'Ally Ally' },
    { id:2, avatar: 'http://localhost:3000/images/img2.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5', parent: 'Ally Ally' },
    { id:3, avatar: 'http://localhost:3000/images/img3.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5', parent: 'Ally Ally' },
    { id:4, avatar: 'http://localhost:3000/images/img4.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5', parent: 'Ally Ally' },
    { id:5, avatar: 'http://localhost:3000/images/img6.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:6, avatar: 'http://localhost:3000/images/img6.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:7, avatar: 'http://localhost:3000/images/img7.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:8, avatar: 'http://localhost:3000/images/img8.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5' ,parent: 'Ally Ally'},
    { id:9, avatar: 'http://localhost:3000/images/img9.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:10, avatar: 'http://localhost:3000/images/img10.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:11, avatar: 'http://localhost:3000/images/img11.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:12, avatar: 'http://localhost:3000/images/img12.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:13, avatar: 'http://localhost:3000/images/img13.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:14, avatar: 'http://localhost:3000/images/img14.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    {id:15, avatar: 'http://localhost:3000/images/img15.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:16, avatar: 'http://localhost:3000/images/img16.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:17, avatar: 'http://localhost:3000/images/img17.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:18, avatar: 'http://localhost:3000/images/img18.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:19, avatar: 'http://localhost:3000/images/img19.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:20, avatar: 'http://localhost:3000/images/img20.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
    { id:21, avatar: 'http://localhost:3000/images/img1.jfif', lastName: 'Snow', firstName: 'Jon', age: '12', level: '5',parent: 'Ally Ally' },
  
  
  
  
  ];

const Student = () => {
  return (
    <div className='teacher'>
       
            <table className="content-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Class</th>
                <th>Parent/Gardian</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {students.map((student) => (
                <tr>
                    <td><div className="galley-item-image">
                            <img src={`${student.avatar}`}/>
                        </div>
                    </td>             
               
                    <td>{student.lastName}</td>
                    <td>{student.firstName}</td>
                    <td>{student.age}</td>
                    <td>{student.level}</td>
                    <td>{student.parent}</td>
                    <td className="teacherIcon">
                        <Link to="/studentDetail"><VisibilityIcon className="btnBrown" /></Link>
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

export default Student
