import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";

const TaskDetail = ({
  id,
  comments,
  task,
  isComplete,
  groups,

   setTaskCompletition,
    setTaskName,
    setTaskGroup,
    deleteTask
}) => (
  <div className="card p-3 col-m5" >
       <h3>Modificar actividad</h3>
        <div> 
        <br/>
                <input onChange={setTaskName} value={task.name}
                className="form-control form-control-lg"/>
        </div>
      <div>
      <br/>
         <button className="btn btn-outline-success mt-2" onClick={()=>setTaskCompletition(id, !isComplete)}>{isComplete ? `Reabrir` : `Completo`}</button>
      </div>
 
        <br/>
     <div className="btn-group-s" role="group" aria-label="Button group with nested dropdown" >
        <select onChange={setTaskGroup} value={task.group}
        type="button" className="btn btn-success"
        >
        {groups.map(group => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
         
        ))}
        </select>
     </div>
      <br/>
      <div>
        <Link to="/dashboard">
        <button className="btn btn-primary mt-2" >Realizado</button>
         </Link>
     
        <button className="btn btn btn-warning mt-2" 
        onClick={()=>{deleteTask(id)}}>Borrar</button>
      </div>
      <br/>
      <br/>
      <br/>
      <footer> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"> </a>
  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item" >
        <a className="nav-link" href="#">  UTN  -  PS  -  Stocco Gabriela  -  110176 </a>
      </li> 
    </ul>
  
  </div>
</nav>
             </footer>  

    </div>
);
       
const mapStateToProps = (state, ownProps) =>
{ 
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;
  

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
   setTaskCompletition(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
   },
    
     setTaskGroup(e) {
       dispatch(mutations.setTaskGroup(id, e.target.value));
     },
     setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
     },

     deleteTask(id){
       dispatch(mutations.deleteTask(id));
       console.log("eliminada", id);
     }
  }
}; 

export const ConnectTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail); 
