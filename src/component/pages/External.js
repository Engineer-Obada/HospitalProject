import React, { useEffect, useState } from "react";
import Addinputfield from "../users/Addinputfiels";
import axios from 'axios'

import { Link} from 'react-router-dom';

function External(){
    const[response,setRespone] = useState([])
    const[responseData,setData] = useState([])
    const[isTma,setIStmara] = useState([])//جلب بيانات من الفورم
    const[isDataTma,addDataistmara] = useState([
        {
          id:""
        }
    ])



    const [state,setState] = useState({})
    const [query, setQuery] = useState("");
    const [dataa, setDataa] = useState([]);
  
    useEffect(()=>{
      if (query.length === 0 || query.length >= 1) loadFields();
    },[isDataTma,query])
    const loadFields = async()=>{
        const result = await axios.get("http://localhost:3002/fieldExternal")
        // const result1 = await axios.get("http://localhost:3002/FormsExternal")
        const res = await axios.get(`http://localhost:3002/FormsExternal?q=${query}`);
        addDataistmara(res.data)

        setRespone(result.data)
        // addDataistmara(result1.data)

      
           
    
       
    }
    /*----------------------------------------------------- */

  // useEffect(() => {
  //   const fetchData = async () => {


  //     const res = await axios.get(`http://localhost:3002?q=${query}`);
  //     addDataistmara(res.data)

  //   };
  //   if (query.length === 0 || query.length > 2) fetchData();
  // }, [query]);


/*----------------------------------------------------- */

    const handleChange = async (e, field,id) => {
        setState({
          ...state,
          [field] :  e.target.value
        });
     

      };
      
      const handleSubmit =  async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3002/FormsExternal",state)
        console.log(state);
       

      };
      const deleteField = async (e,id) =>{
        await axios.delete(`http://localhost:3002/fieldExternal/${id}`)
        loadFields()
             
        
      }
      const deleteEx = async id =>{
        await axios.delete(`http://localhost:3002/FormsExternal/${id}`)
        loadFields()
      }
    return(
        <div>
            <Addinputfield res={response}
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
        <h1>External Admission </h1>

        <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())
    
        }
      />
        <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
    {/* {Object.entries(isDataTma[0]).map(([key,value])=>(
         <th scope="col">{key}</th>
        ))} */}
      <th scope="col">#</th>
      <th scope="col">FullName</th>
      <th scope="col">MotherName</th>
      <th scope="col">City</th>
      <th scope="col">PhonemNum</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
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
          {/* {Object.entries(isDataTma[index]).map(([key,value])=>(
         <td scope="col">{value}</td>
        ))} */}
          <td>{respp.fullName}</td>
          <td>{respp.motherName}</td>
          <td>{respp.city}</td>
          <td>{respp.phoneNum}</td>
          <td>{respp.age}</td>
          <td>{respp.address}</td>

          <td>
          <Link className="btn btn-primary m-2" to={`/External/${respp.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
            <Link className="btn btn-primary m-2" to={`/ExternalEdit/edit/${respp.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
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


export default External
