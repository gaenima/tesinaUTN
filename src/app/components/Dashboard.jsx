 import React from "react";
 import { connect } from "react-redux";
 import { ConnectedTaskList } from "./TaskList";
 import { ConnectedFilter } from './Filter'
 import { Link } from 'react-router-dom';

 export const Dashboard = ({ groups}) => (
  <div className="row-lg">

          <div className="col-small">
              <ConnectedFilter />
          </div> 
     
     
     {groups.map(group=>(
        <ConnectedTaskList key={group.id} id={group.id} name={group.name} 
        className="col p-4 m-2"/>
     ))}
 
         
         <br/>
           
{/* 
         <p  className="col mt-2">
           <button className="btn btn-secondary my-2 my-sm-0"  ><Link to="/">Cerrar Sesión</Link></button>
             
         </p> */}
         
       
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> </a>
  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav">
      
               <li className="nav-item" >
                <a className="nav-link" href="#">  UTN  -  PS  -  Stocco Gabriela  -  110176 </a>
              </li> 
    </ul>
  
  </div>
</nav>

     </div>
     )
 function mapStateToProps(state) {
   return {
  groups: state.groups,
   }
 }
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
