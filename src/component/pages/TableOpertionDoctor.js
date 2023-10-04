import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import "../../App.css"
import { useParams} from 'react-router-dom';

const TableOpertionDoctor = () =>{
    const [users,setUsers] = useState([]);
    const { datea } = useParams();
    useEffect(()=>{

    
        loadUsera()
    },[]);

    const loadUsera = async()=>{
        const result = await axios.get("http://localhost:3002/FormReserv")
       const datadate = result.data.filter(({date,confirm})=> date === datea && confirm === "1")
       if(datea===undefined){
        setUsers(result.data)
       }
       else{
        setUsers(datadate)
       }

      
        
    }





    const deleteUser = async id =>{

      const result= await axios.delete(`http://localhost:3002/FormReserv/${id}`)
      console.log(result.data)
      loadUsera()
    }
    return(   
    <div className='container'>
        <table className="tablee">
  <thead>
    <tr className='tr bg-dark text-white '>
      <th className='thh' scope="col">#</th>
      <th className='thh'  scope="col">Doctor</th>
      <th className='thh'  scope="col">Specialization</th>
      <th className='thh'  scope="col">Patient</th>
      <th className='thh'  scope="col">MotherName</th>
      <th className='thh'  scope="col">Opration</th>
      <th className='thh'  scope="col">Narcosis</th>
      <th  className='thh' scope="col">Medical_diagnosis</th>
      <th className='thh'  scope="col">Room_id</th>
      <th className='thh'  scope="col">InternalAccept_id</th>
      <th className='thh'  scope="col">Confirm</th>
      <th className='thh'  scope="col">Date</th>
      <th className='thh'  scope="col">HourNum</th>
      <th className='thh'  scope="col">Timestart</th>

      <th className='thh'  scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

    {users.map((user,index)=>(
        <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>{user.doctor}</td>
            <td>{user.specialization}</td>
            <td>{user.patient}</td>
            <td>{user.motherName}</td>
            <td>{user.opration}</td>
            <td>{user.narcosis}</td>
            <td>{user.medical_diagnosis}</td>
            <td>{user.room_id}</td>
            <td>{user.internalAccept_id}</td>
            <td>{user.confirm}</td>
            <td>{user.date}</td>
            <td>{user.hourNum}</td>
            <td>{user.timestart}</td>



            <td>
                {/* <Link className="btn btn-primary m-2 w" to={`/user/${user.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link> */}
                <Link className="btn btn-primary m-1 " to={`/OpertionEdit/edit/${user.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                <Link className="btn btn-danger " to={""} onClick={() => deleteUser(user.id)}>Delete</Link>

            </td>

        </tr>

    ))}
    
  </tbody>
</table>
<Link to={`/CalenderDoctor`}><div className='btn btn-primary'>Return to Calender</div></Link>
    </div>
    )
}


export default TableOpertionDoctor;