import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';

const Home = () =>{
    const [users,setUsers] = useState([]);
  
    useEffect(()=>{

    
        loadUsera()
    },[]);

    const loadUsera = async()=>{
        const result = await axios.get("http://192.168.242.6:8000/api/accountEmploy")
        setUsers(result.data.data)

        console.log(result.data.data)
        
    }





    const deleteUser = async id =>{

      const result= await axios.delete(`http://192.168.242.6:8000/api/accountEmploy/delete/${id}`)
      console.log(result.data)
      loadUsera()
    }
    return(   
    <div className='container'>
        <Link className='btn  btn-primary w-20' to={"/add/users"}>Add Users</Link>
        <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">FullName</th>
      <th scope="col">MotherName</th>
      <th scope="col">Address</th>
      <th scope="col">phoneNumber</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

    {users.map((user,index)=>(
        <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>{user.fullName}</td>
            <td>{user.motherName}</td>
            <td>{user.address}</td>
            <td>{user.phoneNum}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>

            <td>
                <Link className="btn btn-primary m-2" to={`/user/${user.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link>
                <Link className="btn btn-primary m-2" to={`/user/edit/${user.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                <Link className="btn btn-danger m-2" to={""} onClick={() => deleteUser(user.id)}>Delete</Link>

            </td>

        </tr>

    ))}
    
  </tbody>
</table>
    </div>
    )
}


export default Home;