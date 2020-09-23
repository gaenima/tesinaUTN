import React from 'react';
import { connect} from 'react-redux';
import * as mutations from '../store/mutations';
import { Link } from 'react-router-dom';


export const BudgetDetail = ({  budgets, name, amountInitial, amountFinal,
                                 expenses, expens, total }) => (
  <div className="card p-4 m-4 "  >
        <h2 >
            {name} 
            
        </h2>
        <h2> 
            {amountInitial}
        </h2>
        <h2>   {amountFinal} </h2>
   
      <div  >   
      <div className="card p-2 mt-2" >
              <h2>Monto inicial</h2>
             
          { budgets.map(budget=>(
            <Link to={`/budgetD/${budget.id}`} key={budget.id}>
         <div className="text-right" id="disponible">
          $  { budget.amountInitial } 
          </div>
          </Link> 
          ))}
      </div >
      <div className=" p-2 mt-2">
               
                <div className="card p-2 mt-2"> 
                  
                        <h2 >Gastos totales </h2>
                                                
                        <div className="text-right" id="gastos">
                        $  { total = expenses.reduce(function(accumulator, expens){
                            return accumulator += parseFloat(expens.amount)
                        },0)}  </div>
                        
                        <br/>
                </div>
                <div className="card p-2 mt-2">
                    <h2> Monto Disponible </h2>
                    
                    {budgets.map(budget=>(<div  key={budget.id} className="text-right"> 
                    $ { budget.amountInitial - total}</div>
            
                    ))}
                    
                </div>
       
        
       </div>    
  </div>   

</div>         
);
// function formatnumber(number){
//     return new Intl.NumberFormat(location= "ES-MX", options={
//         style: 'currency',
//         currency: 'MXN',
//     }).format(number)
// }

const mapStateToProps = (state, ownProps)=> {
    let budgetID = ownProps.id;
    return {
        name: ownProps.name,
        id:budgetID, 
        expenses: state.expenses
        .filter(expens=>expens.bud === budgetID),

        // name: ownProps.name,
        amountInitial:ownProps.amountInitial,
    
        budgets:state.budgets
    }
}
export const ConnectedBudgetDetail = connect (mapStateToProps)(BudgetDetail);