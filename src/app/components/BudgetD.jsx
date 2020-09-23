import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

const BudgetD = ({
  id,
    budget,

    setBudget
    
})=>(
    <div className="card p-3 col-m5" >
        <h3> Modificar monoto inicial</h3>
        <br/>
      <div>
        <input type="number" onChange={setBudget} value={budget.amountInitial} placeholder="$"
        className="form-control form-control-lg"/>
           </div> 
           <br/>
           <div>
        <Link to="/budgetList">
            <button className="btn btn-primary mt-2" >Listo</button>
        </Link>
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
const mapStateToProps =(state, ownProps)=> {
    let id = ownProps.match.params.id;
    let budget = state.budgets.find(budget=> budget.id === id);

    return {
        id,
        budget,
    }
};
const mapDispatchToProps =(dispatch, ownProps)=>{
    const id= ownProps.match.params.id;
    return{
      
        setBudget(e){
            dispatch(mutations.setBudget(id, e.target.value));
        }
    }
};
export const ConnectBudgetD = connect(mapStateToProps, mapDispatchToProps)(BudgetD);

