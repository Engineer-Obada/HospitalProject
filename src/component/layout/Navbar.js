import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import "../../App.css"
const Navbar = () =>{

    return(   
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React Crud  </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/contactus">Contact</NavLink >
              </li>
            </ul>
       
          </div>
          <Link className=' btn btn-outline w-20 ' to={"/add/users"}>Add Users</Link>
          
        </div>
      </nav>
    </div>

    )
}


export default Navbar;