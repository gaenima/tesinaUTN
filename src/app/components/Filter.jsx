import React, { createElement } from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";
import Results from '../components/results';
import {ConnectedTaskList, tasks} from './TaskList';



 export const Filter = ({tasks}) => (
    
     <div>
       <input type="text" id="filtro" onChange={(a) =>  tasks.filter(task => task.name.includes(a)).map(filterName => (
        createElement( <li>
            {filterName}
        </li>)  
       
       
    )) }/>
     
    
       </div>   
       
       
     
    
       
      //  {/* <Results /> */}

 );
 
//  let f = document.getElementById("filtro");
//  function  filtrar(f) {
//     tasks.filter(task => task.includes(f)).map(filterName => (
//         <li>
//             {filterName}
//         </li>
//     ))
// };
 
 const mapStateToProps = (state, ownProps) => {
    //let id = ownProps.match.id;
  //  let name = ownProps.match.name;
    
  return {
      name,
  tasks: state.tasks
   
  }
  
 
};


 export const ConnectedFilter = connect(mapStateToProps)(Filter);