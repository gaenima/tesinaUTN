import React from 'react';
import { connect} from 'react-redux';
import {requestExpensCreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const ExpensesList = ({ expenses, id, createNewExpens, amount })=>(  
<div className="card p-4 m-4 ">
            <h2>
                Gastos en A$R
            </h2>
            <h2>
                {amount}
            </h2>
         
      <div>
        {expenses.map(expens=>(
            <Link to={`/expens/${expens.id}`} key={expens.id}>
            <div className="card p-2 mt-2">
                {expens.name }
                <br/>
              
                 <div className="text-right">$ { expens.amount} </div> 
            </div> 
            </Link>
        ))}
      </div>
      <button onClick={()=>createNewExpens(id)}
      className="btn btn-primary btn-block mt-2"
      >Nuevo gasto </button>
                 <br/>
        

    </div>        
) 
const mapStateToProps = (state, ownProps)=>{
    let budgetID = ownProps.id;
    
    return {
        name: ownProps.name,
        id:budgetID, 
        expenses: state.expenses
        .filter(expens=>expens.bud === budgetID),

       
        amountInitial:ownProps.amountInitial,
    
        budgets:state.budgets
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewExpens(id){
            console.log("Creando nuevo gasto...", id);
            dispatch(requestExpensCreation(id));
        }
    }
}
export const ConnectedExpenses = connect(mapStateToProps, mapDispatchToProps)(ExpensesList);