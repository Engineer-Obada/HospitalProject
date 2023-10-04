import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const OpertionEdit = () =>{
    useEffect(()=>{
        loadUsera()
    },[]);

    let navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
      doctor:"",
      specialization:"",
      patient:"",
      motherName:"",
      opration:"",
      narcosis:"",
      medical_diagnosis:"",
      room_id:"",
      internalAccept_id:"",
      confirm:"",
      date:"",
      hourNum:"",
      timestart:"",

      
    });

    const{doctor,specialization,patient,motherName,opration,narcosis,medical_diagnosis,room_id,internalAccept_id,confirm,date,hourNum,timestart} = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log([e.target.name]);
        console.log(e.target.value);
    }
   

    const loadUsera = async()=>{
        const result = await axios.get(`http://localhost:3002/FormReserv/${id}`)
        setUser(result.data)
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/FormReserv/${id}`,user)
        navigate.push('/')
    }


    return(

        <div className="container">
          <div className='Ed'>Edit External Admission</div>
            <form className="needs-validation" onSubmit={e=>onSubmit(e)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">doctor</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="doctor"  required 
            onChange={e => onInputChange(e)}
            name={"doctor"}
            value={doctor}/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
     
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">specialization</label>
            <div className="input-group">
            
              <input type="text" className="form-control" id="validationCustomUsername" placeholder="specialization"
               aria-describedby="inputGroupPrepend" required
               onChange={e => onInputChange(e)}
              name={"specialization"}
               value={specialization} />
          
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">patient</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="patient" required
             onChange={e => onInputChange(e)}
             name={"patient"}
             value={patient} />
         
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">motherName</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="motherName" required 
             onChange={e => onInputChange(e)}
             value={motherName}
             name={"motherName"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">opration</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="opration" required 
             onChange={e => onInputChange(e)}
             value={opration}
             name={"opration"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">narcosis</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="narcosis" required 
             onChange={e => onInputChange(e)}
             value={narcosis}
             name={"narcosis"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">medical_diagnosis</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="medical_diagnosis" required 
             onChange={e => onInputChange(e)}
             value={medical_diagnosis}
             name={"medical_diagnosis"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">room_id</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="room_id" required 
             onChange={e => onInputChange(e)}
             value={room_id}
             name={"room_id"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">internalAccept_id</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="internalAccept_id" required 
             onChange={e => onInputChange(e)}
             value={internalAccept_id}
             name={"internalAccept_id"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">confirm</label>
           <select name={"confirm"} value={confirm}  onChange={e => onInputChange(e)} >
            <option value={confirm} selected disabled>{confirm}</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>

           </select>
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">date</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="date" required
             onChange={e => onInputChange(e)} 
             name={"date"}
             value={date}/>
         
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">hourNum</label>
            <input type="number" className="form-control" id="validationCustom05" placeholder="hourNum" required
             onChange={e => onInputChange(e)} 
             name={"hourNum"}
             value={hourNum}/>
         
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">timestart</label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="timestart" required
             onChange={e => onInputChange(e)} 
             name={"timestart"}
             value={timestart}/>
         
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Update Admission</button>
      </form>
        </div>

    );
}



export default OpertionEdit