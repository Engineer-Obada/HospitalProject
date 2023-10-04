import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const EditUser = () =>{
    useEffect(()=>{
        loadUsera()
    },[]);

    let navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
        fullName:"",
        motherName:"",
        address:"",
        phoneNum:"",
        email:"",
        password:""

    });

    const{fullName,motherName,address,phoneNum,email,password} = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value});
    }
   

    const loadUsera = async()=>{
        const result = await axios.get(`http://192.168.242.6:8000/api/accountEmploy/showId/${id}`)
        setUser(result.data)
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://192.168.242.6:8000/api/accountEmploy/update/${id}`,user)
        navigate.push('/')
    }


    return(
      
        <div className="container">
          <div className='Ed'>Edit User</div>
            <form className="needs-validation" onSubmit={e=>onSubmit(e)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">FullName</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="FullName"  required 
            onChange={e => onInputChange(e)}
            name={"fullName"}
            value={fullName}/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
     
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">motherName</label>
            <div className="input-group">
              <div className="input-group-prepend">
              </div>
              <input type="text" className="form-control" id="validationCustomUsername" placeholder="motherName"
               aria-describedby="inputGroupPrepend" required
               onChange={e => onInputChange(e)}
              name={"motherName"}
               value={motherName} />
              <div className="invalid-feedback">
                Please choose a motherName.
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">address</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="Address" required
             onChange={e => onInputChange(e)}
             name={"address"}
             value={address} />
            <div className="invalid-feedback">
              Please provide a valid address.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">PhoneNumber</label>
            <input type="number" className="form-control" id="validationCustom04" placeholder="PhoneNumber" required 
             onChange={e => onInputChange(e)}
             value={phoneNum}
             name={"phoneNum"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">Email</label>
            <input type="email" className="form-control" id="validationCustom05" placeholder="Email" required
             onChange={e => onInputChange(e)} 
             name={"email"}
             value={email}/>
            <div className="invalid-feedback">
              Please provide a valid Email.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">Password</label>
            <input type="email" className="form-control" id="validationCustom05" placeholder="Password" required
             onChange={e => onInputChange(e)} 
             name={"password"}
             value={password}/>
            <div className="invalid-feedback">
              Please provide a valid Email.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Update user</button>
      </form>
        </div>

    );
}



export default EditUser