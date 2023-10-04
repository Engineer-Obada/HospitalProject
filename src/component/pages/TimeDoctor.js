import {useState} from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { DatePicker, Select, Space, Tooltip, Typography } from 'antd';
import axios from 'axios';
import React from 'react';
import "../../App.css"
export default function TimeDoctor() {




  // const handleChange = event => {
  //   if (event.target.checked) {
  //     Sun = "1"
  //     console.log(Sun);

  //   } else {
  //     Sun = "0"
  //     console.log(Sun);
  //   }

  // };

  const[week,setWeek] = useState({
    Sun:"0",
    Mon:"0",
    Tue:"0",
    Wed:"0",
    Thu:"0",
    
});

const{Sun,Mon,Tue,Wed,Thu} = week;

  const handleChange = e =>{
    if (e.target.checked) {
    setWeek({...week,[e.target.name]:"1"});
    } else {
    setWeek({...week,[e.target.name]:"0"});
    }
}

  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3002/DayDoctor",week)
  }
  return (
    <div>
      <form onSubmit={e=>onSubmit(e)}>

      <label htmlFor="Sun">
        <input
          type="checkbox"
          name={"Sun"}
          value={Sun}
          onChange={handleChange}
          id="Sun"
         
        />
        Sun
      </label>

      
      <label htmlFor="Mon">
        <input
          type="checkbox"
          name={"Mon"}
          value={Mon}
          onChange={handleChange}
          id="Mon"
         
        />
        Mon
      </label>

      
      <label htmlFor="Tue">
        <input
          type="checkbox"
          name={"Tue"}
          value={Tue}
          onChange={handleChange}
          id="Tue"
         
        />
        Tue
      </label>

      
      <label htmlFor="Wed">
        <input
          type="checkbox"
          name={"Wed"}
          value={Wed}
          onChange={handleChange}
          id="Wed"
        />
        Wed
      </label>

      
      <label htmlFor="Thu">
        <input
          type="checkbox"
          name={"Thu"}
          value={Thu}
          onChange={handleChange}
          id="Thu"
         
        />
        Thu
      </label>
      <br></br>
      <button className="btn btn-primary my-3" type="submit">Add Time</button>
      </form>
  
    </div>
  );
  }
