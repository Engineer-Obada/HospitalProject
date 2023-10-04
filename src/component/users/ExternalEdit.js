import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const ExternalEdit = () =>{
    useEffect(()=>{
        loadUsera()
    },[]);

    let navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
        FullName:"",
        MotherName:"",
        JobFather:"",
        City:"",
        Phone:""
    });

    const{FullName,MotherName,JobFather,City,Phone} = user;

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value});
    }
   

    const loadUsera = async()=>{
        const result = await axios.get(`http://localhost:3002/FormsExternal/${id}`)
        setUser(result.data)
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3002/FormsExternal/${id}`,user)
        navigate.push('/')
    }


    return(

        <div className="container">
          <div className='Ed'>Edit External Admission</div>
            <form className="needs-validation" onSubmit={e=>onSubmit(e)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">FullName</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="FullName"  required 
            onChange={e => onInputChange(e)}
            name={"FullName"}
            value={FullName}/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
     
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustomUsername">MotherName</label>
            <div className="input-group">
            
              <input type="text" className="form-control" id="validationCustomUsername" placeholder="MotherName"
               aria-describedby="inputGroupPrepend" required
               onChange={e => onInputChange(e)}
              name={"MotherName"}
               value={MotherName} />
          
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">JobFather</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="JobFather" required
             onChange={e => onInputChange(e)}
             name={"JobFather"}
             value={JobFather} />
         
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">City</label>
            <input type="text" className="form-control" id="validationCustom04" placeholder="City" required 
             onChange={e => onInputChange(e)}
             value={City}
             name={"City"}
             
             />
             
            <div className="invalid-feedback">
              Please provide a valid phone number.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom05">Phone</label>
            <input type="number" className="form-control" id="validationCustom05" placeholder="Phone" required
             onChange={e => onInputChange(e)} 
             name={"Phone"}
             value={Phone}/>
         
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Update Admission</button>
      </form>
        </div>

    );
}



export default ExternalEdit