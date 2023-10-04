import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const InternalEdit = () =>{
    useEffect(()=>{
        loadUsera()
    },[]);

    let navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
      department:"",
      doctor:"",
      operation:"",
      internalDate:"",
      externalDate:"",
      patient:"",
      folder_id:"",
      room_id:"",

      
    });

    const{department,doctor,operation,internalDate,externalDate,patient,folder_id,room_id} = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value});
    }
   

    const loadUsera = async()=>{
        const result = await axios.get(`http://localhost:3002/FormsInternal/${id}`)
        setUser(result.data)
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/FormsInternal/${id}`,user)
        navigate.push('/')
    }


    return(

        <div className="container">
          <div className='Ed'>Edit Internal Admission</div>
            <form className="needs-validation" onSubmit={e=>onSubmit(e)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">department</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="department"  required 
            onChange={e => onInputChange(e)}
            name={"department"}
            value={department}/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
     
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">doctor</label>
            <div className="input-group">
            
              <input type="text" className="form-control" id="validationCustomUsername" placeholder="doctor"
               aria-describedby="inputGroupPrepend" required
               onChange={e => onInputChange(e)}
              name={"doctor"}
               value={doctor} />
          
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">internalDate</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="internalDate" required
             onChange={e => onInputChange(e)}
             name={"internalDate"}
             value={internalDate} />
         
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">externalDate</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="externalDate" required 
             onChange={e => onInputChange(e)}
             value={externalDate}
             name={"externalDate"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">patient</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="patient" required
             onChange={e => onInputChange(e)} 
             name={"patient"}
             value={patient}/>
         
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">folder_id</label>
            <input type="number" className="form-control" id="validationCustom05" placeholder="folder_id" required
             onChange={e => onInputChange(e)} 
             name={"folder_id"}
             value={folder_id}/>
         
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">room_id</label>
            <input type="number" className="form-control" id="validationCustom05" placeholder="room_id" required
             onChange={e => onInputChange(e)} 
             name={"room_id"}
             value={room_id}/>
         
          </div>
         
        </div>
        <button className="btn btn-primary" type="submit">Update Admission</button>
      </form>
        </div>

    );
}



export default InternalEdit