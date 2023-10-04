import './App.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contactus from './component/pages/Contactus';
import Pagenotfound from './component/pages/Pagenotfound';
import AddUsers from './component/users/AddUsers';
import EditUser from './component/users/EditUser';
import User from './component/users/User';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"

import RouterApp from './component/layout/RouterApp';
import Form from './component/pages/External';
import Login from './component/pages/Login';
import '../src/App.css'
function App() {
  return (
          <>
          {/* <Navbar />  */}
        <RouterApp />

          </>
  // <Router>
  //   <div className='App'>
  //     {/* <Navbar /> */}
  //     <Routes>
  //       <Route exact path='/' element={ <Home />}></Route>
  //       <Route exact path='/about' element={ <About />}></Route>
  //       <Route exact path='/contactus' element={ <Contactus />}></Route>
  //       <Route exact path='/add/users' element={ <AddUsers />}></Route>
  //       <Route exact path='/user/:id' element={ <User />}></Route>
  //       <Route exact path='/user/edit/:id' element={ <EditUser />}></Route>
  //       <Route exact path='*' element={ <Pagenotfound />}></Route>
  //     </Routes>

  //   </div>
  // </Router>
  
  );
}

export default App;
