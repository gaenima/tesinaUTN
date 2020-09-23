import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
   <div >
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <span className="navbar-brand" ></span>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" 
  aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation"> */}
    {/* <span className="navbar-toggler-icon"></span> */}
  {/* </button> */}
 

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">

     
    </ul>
  
  </div>
 
</nav>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">ORGANIZADOR</a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
  {/* </button> */} 

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
    
    <li className="nav-item ">
      <Link to="/dashboard"  className="nav-link">
         <span>Actividades </span>   
         </Link>
      </li>
      <li className="nav-item">
      <Link to="/budgetList"  className="nav-link">
            Presupuesto  
         </Link>
      </li >
      <li className="nav-item">
      <Link to="/reports" className="nav-link" >
            Reportes 
         </Link>
      </li>
    </ul>
   
  </div>
</nav>

    </div>
    
 );
 export const ConnectedNavigation = connect(state => state)(Navigation);
