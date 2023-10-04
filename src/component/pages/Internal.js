import React, { useEffect, useState } from "react";
import Addinputfield from "../users/Addinputfiels";
import Addinputfielscopy from "../users/Addinputfielscopy";
import { Link} from 'react-router-dom';

import axios from 'axios'


function Internal(){
    const[response,setRespone] = useState([])
    const[responseData,setData] = useState([])
    const[isTma,setIStmara] = useState([])//جلب بيانات من الفورم
    const[isDataTma,addDataistmara] = useState([
        {
          id:""
        }
    ])



    const [state,setState] = useState({})

    useEffect(()=>{
        loadFields()
    },[response])
    const loadFields = async()=>{
        const result = await axios.get("http://localhost:3002/fieldInternal")
        const result1 = await axios.get("http://localhost:3002/FormsInternal")

        setRespone(result.data)
        addDataistmara(result1.data)

      
           
    
       
    }
    

    const handleChange = async (e, field,id) => {
        setState({
          ...state,
          [field] :  e.target.value
        });
     

      };
      
      const handleSubmit =  async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3002/FormsInternal",state)
        console.log(state);
       

      };
      const deleteField = async (e,id) =>{
        await axios.delete(`http://localhost:3002/fieldInternal/${id}`)
        loadFields()
             
        
      }
      const deleteEx = async id =>{
        await axios.delete(`http://localhost:3002/FormsInternal/${id}`)
        loadFields()
      }
    return(
        <div>
            <Addinputfielscopy res={response}
                            setRespone={setRespone}
                            state={state}
           />

                <form className="container mt-4" onSubmit={handleSubmit} >
                
                    {response.map((resp)=>(
                
                
                     <div className="row mt-2" key={resp.id}>
                            <div className="col-1 mx-2" >
                                <label className="form-label text-capitalize">
                                    {resp.label }
                                </label>
                            </div>

                            <div className="col-4">
                                <input
                                    type={resp.type}
                                    className="form-control "
                                    required
                                    value={state[resp.label]}
                                    onChange={(e) => {
                                        handleChange(e, resp.label,resp.id);
                                    }}
                                />
                            </div>

                            <div className="col ">
                                <button className="btn btn-danger m-2" onClick={(e)=>deleteField(e,resp.id)}>Delete</button>
                            </div>

                      </div>
                   
                    
                    ))}

                    <button type="submit" className="btn btn-primary mx-2">Submit</button>
                </form>
{/* ------------------------------------------------------------------------------------------       */}
                <div className='container'>
        <h1>Internal Admission </h1>
        <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
    {/* {Object.entries(isDataTma[0]).map(([key,value])=>(
         <th scope="col">{key}</th>
        ))} */}
      <th scope="col">#</th>
      <th scope="col">Department</th>
      <th scope="col">Doctor</th>
      <th scope="col">Operation</th>
      <th scope="col">internalDate</th>
      <th scope="col">ExternalDate</th>
      <th scope="col">Patient</th>
      <th scope="col">FolderId</th>
      <th scope="col">RoomId</th>
      <th scope="col">Action</th>
      {/* {response.map((data)=>(
      <th>{data.label}</th>

      ))} */}

      

    </tr>
  </thead>
  <tbody>
    {isDataTma.map((respp,index)=>(
          <tr>
          <th scope='row'>{index + 1}</th>
          <td>{respp.department}</td>
          <td>{respp.doctor}</td>
          <td>{respp.operation}</td>
          <td>{respp.internalDate}</td>
          <td>{respp.externalDate}</td>
          <td>{respp.patient}</td>
          <td>{respp.folder_id}</td>
          <td>{respp.room_id}</td>

          <td>
    

            <Link className="btn btn-primary m-2" to={`/Internal/${respp.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
            <Link className="btn btn-primary m-2" to={`/InternallEdit/edit/${respp.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>

          <Link className="btn btn-danger m-2" to={""} onClick={() => deleteEx(respp.id)}>Delete</Link>
             

          </td>

      </tr>
    ))}
   
    
  </tbody>
</table>
    </div>
             </div>

             
             
         )
}


export default Internal
