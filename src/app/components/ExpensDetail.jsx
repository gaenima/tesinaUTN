import React from 'react';
import {connect} from 'react-redux';
// import { ExpensesList } from './ExpensesList';
// import { expensCreationSaga, taskCreationSaga } from '../store/sagas.mock';
import { Link } from 'react-router-dom';
// import { ExpensesList } from './ExpensesList';
import * as mutations from '../store/mutations';


const ExpensDetail = ({
    id,
    expens,
    amount,
    budgets,
    
    setExpensName,
    setExpensAmount,
    deleteExpens
    
})=>(
    <div className="card p-3 col-m5" >
        <div>
            <h3>Modificar gasto</h3>
          <div>
          <br/>
            <input  onChange={setExpensName} value={expens.name} 
            className="form-control form-control-lg"/>
            
          </div>   
          <div className="mt-3" >
             <input type="number" onChange={setExpensAmount} value= {expens.amount} 
             className="form-control form-control-lg" />
            </div> 
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
    let expens = state.expenses.find(expens=> expens.id === id);
    let budgets = state.budgets;

    return {
        id,
        expens,
        //budgets,
        //  name: expens.name,
        //  amount:expens.amount
    }
};

const mapDispatchToProps =(dispatch, ownProps)=>{
    const id= ownProps.match.params.id;
    return{
        setExpensName(e){
            dispatch(mutations.setExpensName(id, e.target.value));
        },
        setExpensAmount(e){
            dispatch(mutations.setExpensAmount(id, e.target.value));
        },
        deleteExpens(id){
            dispatch(mutations.deleteExpens(id));
            console.log("borrar gasto",id);
        }
    }
};

export const ConnectExpensDetail = connect(mapStateToProps, mapDispatchToProps)(ExpensDetail);