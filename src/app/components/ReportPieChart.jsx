import React from "react";
import { connect } from "react-redux";
import {  Pie } from 'react-chartjs-2';
import {ConnectedBudgetDetail}  from './BudgetDetail'

export function ReportPieChart ({expenses, budgets}){
    
    const data = {
        labels: ['Monto disponible', 'Gatos totales'],
        datasets: [
         
          {
            label: 'monto ',
            display: true,
            data: montos,
           
            backgroundColor: ['rgba(10,200,70,0.6)',       
                           
                           'rgba(150,19,100, 0.6)'],
   
          }
       
        ]
     }
     const options = {
       title: {
         display: true,
         text: 'Reporte 3: Presupuesto',
         fontSize: 20,
         fontColor: 'rgba(200,80,50,1)',
         fontFamily: "Ubuntu"
       },
   
       legend: {display:true}
     }
     function updateScale(chart) {
       chart.options.scales.yAxes[arreglo] = {
           type: 'logarithmic'
       };
       chart.update();
   
  
   }
     return (
       <Pie data={data} options={options} />
     )
}

const getMonto = (budgets, expenses) => {
  const montos = [];
  let initial = budgets.amountInitial;
  let totalG = ConnectedBudgetDetail.total;
  
//   { total = expenses.reduce(function(accumulator, expens){
//     return accumulator += parseFloat(expens.amount) 
// },0)};


   let disponiM = 0;

  
    disponiM = initial - totalG,
   

    montos. push (disponiM, totalG);
  console.log("MONTOSSSSS",montos, initial, totalG, disponiM);
    return  montos;
  
  
}

const mapStateToProps = (state, ownProps) => {

  let budgetID = ownProps.id;
 return {
  name: ownProps.name,
  id:budgetID, 
  expenses: state.expenses
  .filter(expens=>expens.bud === budgetID),

  amountInitial:ownProps.amountInitial,
    
  budgets:state.budgets,
  montos:getMonto(state.expenses)
 }
  
   
    
  }
 
export const ConnectRepoPie = connect(mapStateToProps)(ReportPieChart);
