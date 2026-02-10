import React from "react";
import CounterApp from "./Components/CounterApp";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import College from "./pages/College";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Department from "./pages/Department";
import Details from "./pages/details";
import Info from "./pages/Info";
import Login from "./Components/Login";

function App(){
  return(
      <div>
            {/* <h1>i am App</h1> */}
            {/* <CounterApp/> */}

            <Navbar/>
            <Login/>
             <Routes>
              <Route path="/home" element = {<Home/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/contact" element = {<Contact/>}/>
              <Route path="/college" element = {<College/>}>
              <Route path="department" element = {<Department/>}/>
              <Route path="info" element = {<Info/>}/>
              <Route path="details" element = {<Details/>}/>


              </Route>
            </Routes>
      </div>
  )

}

export default App
