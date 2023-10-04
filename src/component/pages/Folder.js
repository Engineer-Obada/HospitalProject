import React, { useEffect,useState } from 'react';
import axios from 'axios'
import {Navigate,Link, useNavigate} from "react-router-dom"

const Folder = () => {
    let navigate = useNavigate()
    const [folder,setFolder] = useState([{
        fullName:"",
        motherName:"",
        birthday:"",
        deathDay:"",
        address:"",
        phoneNum:"",
        file:""
    }])

    useEffect(()=>{
        loadFolder()
    },[]);

    const loadFolder = async()=>{
        const result = await axios.get("http://localhost:3002/Folders")
        setFolder(result.data)

        
    }


    const{fullName,motherName,birthday,deathDay,address,phoneNum,file} = folder;
    const onInputChange = e =>{
        setFolder({...folder,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value});
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3002/Folders",folder)
        navigate('/')
    }

    const deleteUser = async id =>{

        const result= await axios.delete(`http://localhost:3002/Folders`)
        console.log(result.data)
        loadFolder()
      }
    return (
        <>
        <div >
            <h2>Folders</h2>
      <form className="needs-validation" onSubmit={e=>onSubmit(e)}>
        <div className="form-row row">
          <div className="form-group col-md-3">
            <label htmlFor="inputEmail4">FullName</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="FullName" 
             onChange={e => onInputChange(e)}
             name={"fullName"}
             value={fullName}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputPassword4">MotherName</label>
            <input type="text" className="form-control" id="inputPassword4" placeholder="MotherName" 
            onChange={e => onInputChange(e)}
            name={"motherName"}
            value={motherName}
            />
          </div>
        </div>

        <div className='row'>
        <div className="form-group col-md-3">
          <label htmlFor="inputAddress">BirthDay</label>
          <input type="date" className="form-control" id="inputAddress" placeholder="Birthday" 
           onChange={e => onInputChange(e)}
           name={"birthday"}
           value={birthday}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputAddress2">DeathDay</label>
          <input type="date" className="form-control" id="inputAddress2" placeholder="DeathDay" 
            onChange={e => onInputChange(e)}
            name={"deathDay"}
            value={deathDay}
            />
        </div>
        </div>

        <div className='row'>
        <div className="form-group col-md-3">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Address"
          onChange={e => onInputChange(e)}
          name={"address"}
          value={address}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputAddress2">PhoneNumber</label>
          <input type="number" className="form-control" id="inputAddress2" placeholder="PhoneNumber" 
            onChange={e => onInputChange(e)}
            name={"phoneNum"}
            value={phoneNum}
          />
        </div>
        </div>
        <div className='row'>
        <div className="form-group col-md-3">
          <label htmlFor="inputAddress">File</label>
          <input type="file" className="form-control" id="inputAddress" placeholder="Chose File"
          onChange={e => onInputChange(e)}
          name={"file"}
          value={file}
          />
        </div>
        
        </div>
        <button type="submit" className="btn btn-primary my-3">Sign in</button>
      </form>
      <div className='container'>
        <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">FullName</th>
      <th scope="col">MotherName</th>
      <th scope="col">BirthDay</th>
      <th scope="col">DeathDay</th>
      <th scope="col">Address</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">File</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

    {folder.map((fol,index)=>(
        <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>{fol.fullName}</td>
            <td>{fol.motherName}</td>
            <td>{fol.birthday}</td>
            <td>{fol.deathDay}</td>
            <td>{fol.address}</td>
            <td>{fol.phoneNum}</td>
            <td>{fol.file}</td>


        </tr>

    ))}
    
  </tbody>
</table>
    </div>
        </div>
        </>

    );
};

export default Folder;