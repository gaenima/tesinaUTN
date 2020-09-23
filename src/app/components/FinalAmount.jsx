import React from 'react';
import {ConnectedExpenses } from './ExpensesList';
import { ConnectBudgetD } from './BudgetD';
import { ConnectedBudgetDetail } from './BudgetDetail';
import { connect } from 'react-redux';


export const FinalAmount = ({budgets, name, expenses, ConnectBudgetD, budgetID, budget, amountInitial
   
})=>(
    <div>
        <h2>Final amountttt</h2>
    
     {budgets.map(budget=>(
         <div>
     {budget.amountInitial}
     
         </div>
    ))}
     
     
    </div>
)

const mapStateToProps = (state, ownProps) => {
   
   
   return{
    name: ownProps.name,
    amountInitial:ownProps.amountInitial,
    //amountInitial: ownProps.amountInitial,
   
     budgets:state.budgets
     
   }

    // let accumulator=0;
    // let total = 0;

    // return{
    //     total:state.expenses.reduce(function(accumulator, expens){
    //         return accumulator + expens.amount
    //         console.log("fuck final amount", total, accumulator);
    //     },0) 
       
    // }
   
}
export const ConnectFinalAmount = connect(mapStateToProps)(FinalAmount);