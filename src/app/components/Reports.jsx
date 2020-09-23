import React from "react";
import { connect } from "react-redux";
import { ConnectRepoBar } from "./ReportBarChart";
import { ConnectRepoDona } from './ReportDonaChart';
//import { ConnectRepoPie} from './ReportPieChart'


let arregloR = [];
export const Reports = () => (
    //
<div>
<br/>
    <ConnectRepoBar />
    <br/> 
    <br/>
    <br/>
   
    <ConnectRepoDona />
    <br/> 
    <br/>
    <br/>

    {/* <ConnectRepoPie />     */}
        <br/>
        <br/>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> </a>


  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item" >
        <a className="nav-link" href="#">   UTN  -  PS  -  Stocco Gabriela  -  110176 </a>
      </li> 
    </ul>
  
  </div>
</nav>
  
   
</div>
)

  export default  Reports

