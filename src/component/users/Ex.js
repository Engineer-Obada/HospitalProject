import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';


const Ex = ()=>{
        const [user, setUser] = useState({
          doctor: "",
          operation: "",
          internalDate: "",
          externalDate: "",
          patient: "",
          folder_id: "",
          room_id: "",
        });
        const { id } = useParams();
        useEffect(() => {
          loadUser();
        }, []);
        const loadUser = async () => {
          const res = await axios.get(`http://localhost:3002/FormsInternal/${id}`);
          setUser(res.data);
        };
    return(
        <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">Internal Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">Doctor: {user.doctor}</li>
          <li className="list-group-item">Operation: {user.operation}</li>
          <li className="list-group-item">InternalDate: {user.internalDate}</li>
          <li className="list-group-item">ExternalDate: {user.externalDate}</li>
          <li className="list-group-item">Patient: {user.patient}</li>
          <li className="list-group-item">Folder_id: {user.folder_id}</li>
          <li className="list-group-item">Room_id: {user.room_id}</li>

        </ul>
      </div>
    )
}

export default Ex;