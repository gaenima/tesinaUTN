import React from 'react';
import { connect} from 'react-redux';
import {ConnectedExpenses } from './ExpensesList';
import {  ConnectedBudgetDetail} from './BudgetDetail';
import {ConnectFinalAmount} from './FinalAmount';

export const BudgetList = ({budgets }) => (
   <div className="">

<div>
        {budgets.map(budget=>(
             <ConnectedBudgetDetail key={budget.id} id={budget.id} name={budget.name} 
             className=""/>
        ))}
       </div>
    <div>    
       {budgets.map(budget=>(
         <ConnectedExpenses key={budget.id} id={budget.id} name={budget.name} 
         className="" />
     
       ))}
    </div>
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

function mapStateToProps(state) {
    return {
        budgets: state.budgets,
        
    }
}

export const ConnectedBudget = connect (mapStateToProps)(BudgetList);