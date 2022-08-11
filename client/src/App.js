import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import Edit from './components/Edit';
// import Details from './components/Details';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';




function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/register" element={<AddUser/>} />
       <Route path="/updateuser/:id" element={<Edit/>} />
      </Routes>
    </Router>

  );
}

export default App;