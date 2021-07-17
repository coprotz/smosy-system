import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';


const icts = [
    { id:1, avatar: "http://localhost:3000/images/img1.jfif", lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:2, avatar: 'http://localhost:3000/images/img2.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
    { id:3, avatar: 'http://localhost:3000/images/img3.jfif', lastName: 'Snow', firstName: 'Jon', position: 'Technician II', mobile: '0715885566' },
  
  
  
  
  
  ];

const Ict = () => {
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
                {icts.map((ict) => (
                <tr>
                    <td><div className="galley-item-image">
                            <img src={`${ict.avatar}`}/>
                        </div>
                    </td>             
               
                    <td>{ict.lastName}</td>
                    <td>{ict.firstName}</td>
                    <td>{ict. position}</td>
                    <td>{ict.mobile}</td>
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

export default Ict