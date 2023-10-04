import React, { useState } from "react";
import axios from "axios";

function Addinputfielscopy({res,setRespone,state}){
    const[inputFields,setInputFields] = useState([ 
        {}
     ])
    const [types,setTypes] = useState({
        id:"",
        type:"text",
        label:"",

      
    })
    const{type,label} = types;
   

    // const addInputField = ()=>{
    //     setInputFields([...inputFields,{type:'',label:''}])

    // }

    const removeInputFields = (index)=>{
        const rows = [...inputFields]
        rows.splice(index,1)
        setInputFields(rows)
    }

    const handelChange = (index,e)=>{
        setTypes({...types,[e.target.name]:e.target.value});
    }
   
    const ok = async(e)=>{
        e.preventDefault();
    await axios.post("http://localhost:3002/fieldInternal",types)
    console.log(types);
    
    }



    return(
        
        <div className="container">
            


            <div className="row ">
                <div className="col-sm-8">

             {
                inputFields.map((data,index)=>{
                        const{fullName,emaiAddress, salary} = data;
                        return(

                            <div className="form-row row">
                            <div className="form-group col-md-4">
                            <label htmlFor="inputZip">Label</label>
                            <input type="text" className="form-control" id="inputZip"
                            value={label}
                            name="label"
                            placeholder="label"
                            onChange={(e)=>handelChange(index,e)}
                            />
                            </div>
            
                            <div className="form-group col-md-4">
                            <label htmlFor="inputState">Type</label>
                            <select id="inputState" className="form-control "  
                            //  value={type}
                            defaultInputValue="text"
                             name="type"
                             placeholder="type"
                             onChange={(e)=>handelChange(index,e)}
                            >
                                <option value={"text"} selected>Text</option>
                                <option value={"number"}>Number</option>
                                <option value={"date"}>Date</option>
            
            
                            </select>
                            </div>

            
                            <div className="col my-4">
                                  
                                     <button className="col btn btn-outline-primary mx-1" 
                                     onClick={(e)=>ok(e)} >ok</button>

                                 </div> 
                  
                        </div>
                            /*------------------------------------- */
                            // <div className="row my-3" key={index}>
                            //     <div className="col">
                            //         <div className="form-group">
                            //             <input  
                            //             value={type}
                            //             name="type"
                            //             className="form-control"
                            //             placeholder="type"
                            //             onChange={(e)=>handelChange(index,e)}></input>
                            //         </div>
                                    
                                    
                                    
                            //     </div>
                            //     <div className="col">
                            //         <div className="form-group">
                            //             <input  
                            //             value={label}
                            //             name="label"
                            //             className="form-control"
                            //             placeholder="label"
                            //             onChange={(e)=>handelChange(index,e)}></input>
                            //         </div>
                                    
                                    
                                    
                            //     </div>
                            //     <div className="col">
                            //         {(inputFields!==1) ? <button className="btn btn-outline-danger"
                            //         onClick={removeInputFields}>x</button>: ''}
                            //         <button className="col btn btn-outline-primary mx-1"
                            //         onClick={(e)=>ok(e)} >ok</button>

                            //     </div>
                              
                            // </div>
                        )
                    })
            }
               
                </div>
            </div>

        </div>
    )
}

export default Addinputfielscopy