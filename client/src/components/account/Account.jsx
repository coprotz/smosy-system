
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';


const accounts = [
    { id:1, avatar: "http://localhost:3000/images/img1.jfif", lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:2, avatar: 'http://localhost:3000/images/img2.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:3, avatar: 'http://localhost:3000/images/img3.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:4, avatar: 'http://localhost:3000/images/img4.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:5, avatar: 'http://localhost:3000/images/img6.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:6, avatar: 'http://localhost:3000/images/img6.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:7, avatar: 'http://localhost:3000/images/img7.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:8, avatar: 'http://localhost:3000/images/img8.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II' , mobile: '0715885566'},
    { id:9, avatar: 'http://localhost:3000/images/img9.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:10, avatar: 'http://localhost:3000/images/img10.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:11, avatar: 'http://localhost:3000/images/img11.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:12, avatar: 'http://localhost:3000/images/img12.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:13, avatar: 'http://localhost:3000/images/img13.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:14, avatar: 'http://localhost:3000/images/img14.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    {id:15, avatar: 'http://localhost:3000/images/img15.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:16, avatar: 'http://localhost:3000/images/img16.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:17, avatar: 'http://localhost:3000/images/img17.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:18, avatar: 'http://localhost:3000/images/img18.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:19, avatar: 'http://localhost:3000/images/img19.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:20, avatar: 'http://localhost:3000/images/img20.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:21, avatar: 'http://localhost:3000/images/img1.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
  
  
  
  
  ];

const Account = () => {
  return (
    <div className='academic'>
       
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
                {accounts.map((account) => (
                <tr>
                    <td><div className="galley-item-image">
                            <img src={`${account.avatar}`}/>
                        </div>
                    </td>             
               
                    <td>{account.lastName}</td>
                    <td>{account.firstName}</td>
                    <td>{account. position}</td>
                    <td>{account.mobile}</td>
                    <td className="academicIcon">
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

export default Account