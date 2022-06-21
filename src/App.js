import './App.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contactus from './component/pages/Contactus';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"



function App() {
  return (

  <Router>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home />}></Route>
        <Route exact path='/about' element={ <About />}></Route>
        <Route exact path='/contactus' element={ <Contactus />}></Route>

      </Routes>

    </div>
  </Router>
  
  );
}

export default App;
